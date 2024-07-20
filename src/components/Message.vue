<template>
  <div
    class="grid w-full grid-cols-[3rem,auto] gap-x-4 px-6 py-1"
    :class="{
      'bg-slate-100': editing,
      'mt-4': pfpShow,
      'border-l-2 !border-indigo-400 !bg-indigo-50 pl-[calc(1.5rem-2px)] hover:!border-indigo-500/90 hover:!bg-indigo-100/75':
        reply === message.id,
      'hover:bg-slate-50': !editing && reply !== message.id,
      'border-l-2 border-yellow-300 bg-yellow-50 pl-[calc(1.5rem-2px)] hover:border-yellow-400 hover:bg-yellow-100/75':
        message.data().reply
          ? JSON.parse(message.data().reply).uid == user.uid
          : false,
    }"
  >
    <!-- Reply -->
    <div class="flex items-center justify-center" v-if="message.data().reply">
      <ReplyIcon class="ml-2 h-4 w-4 -scale-x-100 text-slate-600" />
    </div>
    <div class="w-full overflow-x-hidden" v-if="message.data().reply">
      <div v-if="!findReply()">Message Not Found</div>
      <a
        v-if="findReply()"
        class="flex cursor-pointer items-center gap-1"
        @click="$emit('scroll')"
      >
        <img
          class="h-4 w-4 rounded-full"
          :src="findReply().avatar"
          :onerror="(e) => fallback(e)"
          alt=""
        />
        <h1>{{ findReply().username }}</h1>
        <p class="truncate">
          {{ findReply().message }}
        </p>
      </a>
    </div>

    <!-- Message -->
    <img
      class="h-12 w-12 rounded-full"
      :src="JSON.parse(message.data().user).avatar || defaultAvatar"
      :onerror="(e) => fallback(e)"
      alt=""
      v-if="pfpShow"
    />
    <div
      class="messageContainer relative col-start-2 col-end-3 inline-block w-auto"
    >
      <div class="flex items-baseline gap-2" v-if="pfpShow">
        <!-- Message Info -->
        <h1>
          <!-- Author -->
          {{ JSON.parse(message.data().user).username }}
        </h1>
        <p class="text-xs text-slate-600">
          <!-- Time -->
          {{ formattedTime() }}
        </p>
      </div>

      <div v-if="!editing" class="grid grid-cols-[auto,max-content]">
        <p
          class="inline-block w-auto break-words pr-6"
          style="word-break: break-word"
        >
          {{ message.data().message }}
          {{ JSON.parse(message.data().edits).length ? "(edited)" : "" }}
        </p>
        <MessageDropdown
          class="MessageDropdown absolute right-0 top-0 hidden"
          @reply="$emit('reply')"
          @edit="startEdit"
          @delete="$emit('delete')"
          @open="(state) => (open = state)"
          :class="{ '!inline-block': open }"
          :message="message"
          :user="user"
        />
      </div>

      <form v-else @submit.prevent="finishEdit">
        <textarea
          class="mt-1 w-full resize-none rounded-md border-slate-200 px-4 py-2 focus:border-slate-300 focus:ring-0"
          v-model="newEdit"
          placeholder="New edit"
          @input="resizeText"
          ref="textarea"
          @keydown="checker"
        />
        <p class="mt-1 text-xs">
          escape to
          <button
            class="text-indigo-500 hover:underline"
            type="button"
            @click="editing = false"
          >
            cancel
          </button>
          • enter to
          <button class="text-indigo-500 hover:underline" type="submit">
            save
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import MessageDropdown from "./MessageDropdown.vue";
import { ReplyIcon } from "@heroicons/vue/solid";
export default {
  props: {
    messages: Array,
    message: Object,
    index: Number,
    user: Object,
    defaultAvatar: String,
    reply: String,
  },
  components: {
    MessageDropdown,
    ReplyIcon,
  },
  data() {
    return {
      editing: false,
      newEdit: "",
      pfpShow: false,
      open: false,
    };
  },
  methods: {
    formattedTime() {
      if (this.message.data().time) {
        // const time = this.message.data().time.toDate();
        let time;
        if (this.message.metadata.hasPendingWrites) {
          time = new Date(this.message.data().time);
        } else {
          time = this.message.data().time.toDate();
        }

        const day = time.getDate();

        // If message is before yesterday return the date
        if (time < new Date().setDate(new Date().getDate() - 2)) {
          const month = `${time.getMonth() + 1}`.padStart(2, "0");
          // Get the year (YY) no need for the century
          const year = time.getFullYear().toString().slice(2);
          return `${month}/${day}/${year}`;
        }

        //  FORMAT = 12:00 AM or 2:05 PM
        const timeStr = time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        // If message is from yesterday return yesterday at time
        if (time < new Date().setDate(new Date().getDate() - 1)) {
          return `Yesterday at ${timeStr}`;
        }
        return `Today at ${timeStr}`;
      }

      return this.message.data().time;
    },
    findReply() {
      const index = this.messages.findIndex(
        (message) =>
          message.id == JSON.parse(this.message.data().reply).id &&
          message.data().time.seconds ==
            JSON.parse(this.message.data().reply).time.seconds &&
          message.data().time.nanoseconds ==
            JSON.parse(this.message.data().reply).time.nanoseconds
      );

      if (index == -1) {
        return false;
      }

      const message = this.messages[index];
      return {
        id: message.id,
        message: message.data().message,
        username: JSON.parse(message.data().user).username,
        avatar: JSON.parse(message.data().user).avatar,
      };
    },
    startEdit() {
      this.editing = true;
      this.newEdit = this.message.data().message;
      this.$nextTick(() => {
        this.resizeText();
        this.$nextTick(() => {
          this.$refs.textarea.focus();
        });
      });
    },
    finishEdit() {
      this.editing = false;
      // console.log(this.newEdit);
      const edit = this.newEdit.trim();

      if (edit) {
        this.$emit("edit", edit);
      } else {
        this.$emit("delete");
      }
    },
    resizeText() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "0px";
      textarea.style.overflow = "scroll";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflow = "hidden";
    },
    checker(e) {
      if (e.key == "Enter") {
        e.preventDefault();
        this.finishEdit();
      } else if (e.key == "Escape") {
        e.preventDefault();
        this.editing = false;
      }
    },
    shouldPfpShow() {
      if (this.index == 0) {
        return "1";
      }

      if (this.message.data().reply) return "2";

      const prevMessage = this.messages[this.index - 1];
      if (!prevMessage) return true;

      const prevMessageUser = JSON.parse(prevMessage.data().user);
      const messageUser = JSON.parse(this.message.data().user);

      // If the previous message has a different author
      if (prevMessageUser.username != messageUser.username) {
        return true;
      }

      // if (this.message.data().time && prevMessage.data().time) {
      // const prevMessageDate = prevMessage.data().time.toDate();
      let prevMessageDate;
      if (prevMessage.metadata.hasPendingWrites) {
        prevMessageDate = new Date(prevMessage.data().time);
      } else {
        prevMessageDate = prevMessage.data().time.toDate();
      }
      const prevMessageSeconds = prevMessageDate.getTime() / 1000;
      // const messageDate = this.message.data().time.toDate();
      let messageDate;
      if (this.message.metadata.hasPendingWrites) {
        messageDate = new Date(this.message.data().time);
      } else {
        messageDate = this.message.data().time.toDate();
      }
      const messageSeconds = messageDate.getTime() / 1000;

      // If the time difference is greater than 2 minute return true
      if (messageSeconds - prevMessageSeconds > 120) {
        // console.log(messageSeconds - prevMessageSeconds, this.index);
        return true;
      }
      // }
      return false;
    },
    fallback(e) {
      console.log(e.currentTarget.src);
      e.currentTarget.src = this.defaultAvatar;
      e.currentTarget.onerror = null;
    },
  },
  mounted() {
    this.pfpShow = this.shouldPfpShow();
  },
};
</script>

<style scoped>
.messageContainer:hover .MessageDropdown {
  display: inline-block;
}
</style>
