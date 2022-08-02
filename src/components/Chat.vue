<template>
  <div
    class="grid h-screen grid-cols-[min-content,auto,max-content] divide-x divide-slate-200 text-gray-800"
  >
    <aside
      class="flex h-screen w-48 flex-col items-end justify-between bg-slate-50 px-4 py-4"
    >
      <div class="w-full space-y-2">
        <div class="flex items-center gap-4">
          <h1 class="pl-2">Channels</h1>
          <button
            class="ml-auto rounded-full p-1 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
            @click="addingChannel = true"
          >
            <PlusIcon class="h-4 w-4" />
          </button>
        </div>
        <ul class="space-y-2">
          <li v-for="channel in channels" :key="channel">
            <button
              :class="{
                '!bg-indigo-100 !text-indigo-800':
                  channel.name === currentChannel,
              }"
              class="w-full rounded-md px-2 py-1 text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              @click="swap(channel.name)"
            >
              # {{ channel.name }}
            </button>
          </li>
        </ul>
      </div>
      <SettingsDropdown @logout="$emit('logout')" />
    </aside>
    <div class="relative w-full overflow-hidden">
      <main class="h-[calc(100vh-4rem)] w-full overflow-y-scroll py-6">
        <ul class="">
          <li
            v-for="(message, index) in messages"
            :title="'Message ID: ' + message.id"
            :id="message.id"
            :key="message.id"
            :class="{
              'text-slate-400': message.data().isDeleted,
              hidden: message.data().isDeleted,
            }"
          >
            <Message
              :messages="messages"
              :message="message"
              :index="index"
              :user="userData"
              :defaultAvatar="defaultAvatar"
              :reply="reply"
              @reply="replying(message.id)"
              @scroll="scrollTo(JSON.parse(message.data().reply).id)"
              @edit="(newText) => edit(message.id, newText)"
              @delete="deleteMessage(message.id)"
            />
          </li>
          <div ref="scrollAnchor" class="h-1" id="scrollAnchor"></div>
        </ul>
        <form
          class="absolute bottom-0 left-0 flex w-full flex-col border-t bg-slate-50/50 px-6 py-4"
          @submit.prevent="sendMessage()"
        >
          <div class="relative">
            <textarea
              class="w-full resize-none rounded-md border-slate-200 px-4 py-2 outline-none ring-0 transition-all focus:border-slate-300 focus:ring-0 focus-visible:border-slate-300 focus-visible:outline-none"
              v-model="newMessage"
              placeholder="New edit"
              @input="resizeText"
              ref="inputField"
              @keydown="checker"
            />

            <!-- <button
          class="rounded-r-md bg-indigo-500 px-4 text-white"
          type="submit"
        >
          Send
        </button> -->
          </div>
          <div
            v-if="reply"
            class="reply absolute bottom-full left-0 flex w-full justify-between border-y border-slate-200 bg-slate-100 px-4 py-2"
          >
            <p>
              <span>Replying to</span>
              {{
                getMessage(reply)
                  ? getMessage(reply).username
                  : "Message Not Found"
              }}
            </p>
            <button @click="replying(null)">
              <XCircleIcon class="h-4 w-4" />
            </button>
          </div>
        </form>
      </main>
    </div>
    <aside class="h-screen space-y-2 bg-slate-50 px-6 py-4">
      <h1>Members</h1>
      <ul class="flex flex-col items-start gap-2">
        <li class="flex gap-2" v-for="user in statusList">
          <span class="relative inline-block">
            <img
              class="h-8 w-8 rounded-full"
              :src="user.avatar || defaultAvatar"
              :onerror="(e) => fallback(e)"
              alt=""
            />
            <span
              class="absolute left-0 top-0 h-8 w-8 rounded-full bg-white/50"
              v-if="user.status === 'offline'"
            ></span>
            <span
              class="absolute bottom-0 right-0 z-10 block h-2 w-2 rounded-full ring-2 ring-white"
              :class="{
                'bg-green-400': user.status === 'online',
                'bg-gray-400': user.status === 'offline',
                'bg-red-400': user.status == 'busy',
              }"
            ></span>
          </span>
          <p
            :class="{
              'text-gray-400': user.status === 'offline',
              'text-gray-600': user.status === 'busy',
              'text-gray-800': user.status === 'online',
            }"
          >
            {{ user.username }}
          </p>
        </li>
      </ul>
    </aside>
    <AddChannelModal
      @create="createChannel"
      @close="addingChannel = false"
      :isOpen="addingChannel"
    />
  </div>
</template>

<script>
import {
  doc,
  updateDoc,
  getDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import Message from "./Message.vue";
import SettingsDropdown from "./SettingsDropdown.vue";
import AddChannelModal from "./AddChannelModal.vue";
import { XCircleIcon, PlusIcon } from "@heroicons/vue/solid";

export default {
  props: {
    user: Object,
    db: Object,
  },
  components: {
    Message,
    AddChannelModal,
    XCircleIcon,
    PlusIcon,
    SettingsDropdown,
  },
  data() {
    return {
      userData: {},
      ws: null,
      channels: [],
      statusList: [],
      messages: [],
      // currentChannel: "No Channel Selected",
      currentChannel: null,
      newMessage: "",
      reply: null,
      disconnectListener: null,
      defaultAvatar: "https://cdn.discordapp.com/embed/avatars/0.png",
      isInView: false,
      load: true,
      addingChannel: false,
      // wsUrl: "wss://websocket.ineedaurlffs.tk"
      wsUrl: "ws://localhost:5000",
    };
  },
  methods: {
    async sendMessage() {
      const newMessage = this.newMessage.trim();
      const replyingTo = this.reply;

      if (!newMessage) return;

      if (this.currentChannel == "No Channel Selected") {
        return alert("No channel selected");
      }

      this.newMessage = "";
      this.reply = null;
      this.$nextTick(() => {
        this.resizeText();
        this.$refs.inputField.focus();
      });

      let docData = {
        message: newMessage,
        time: serverTimestamp(),
        user: JSON.stringify({
          uid: this.user.uid,
          username: this.userData.username,
          avatar: this.userData.avatar,
        }),
        reply: null,
        isPinned: false,
        isDeleted: false,
        edits: "[]",
      };

      let replyDoc;

      if (replyingTo) {
        const replyDocIndex = this.messages.findIndex(
          (message) => message.id === replyingTo
        );

        replyDoc = this.messages[replyDocIndex];

        console.log(replyDoc);
      }

      if (replyDoc) {
        console.log("eplyDoc.data().user");
        const replyAuthor = JSON.parse(replyDoc.data().user).uid;

        docData.reply = JSON.stringify({
          id: replyDoc.id,
          time: replyDoc.data().time,
          uid: replyAuthor,
        });
      }

      await addDoc(
        collection(this.db, "messages", "channels", this.currentChannel),
        docData
      );

      console.log(`Message sent: ${newMessage}`);
    },
    swap(channel) {
      this.currentChannel = channel;
      this.setupListener();
      this.$nextTick(() => {
        this.resizeText();
      });
    },
    setupListener() {
      // Firestore listener for messages
      if (!this.currentChannel) {
        this.message = [];
        return;
      }

      if (this.disconnectListener) {
        this.disconnectListener();
      }

      let q = query(
        collection(this.db, "messages", "channels", this.currentChannel),
        orderBy("time", "desc"),
        limit(50)
      );

      this.disconnectListener = onSnapshot(q, (querySnapshot) => {
        const isInView = this.isInView;
        // console.log(isInView);
        this.$nextTick(() => {
          this.messages = [];
          querySnapshot.forEach((doc) => {
            this.messages.unshift(doc);
          });
          // console.log("Messages updated");
          if (isInView || this.load) {
            this.$nextTick(() => {
              this.$refs.scrollAnchor.scrollIntoView({ behavior: "smooth" });
              this.load = false;
            });
          }
        });
      });
    },
    scrollTo(id) {
      const el = document.getElementById(id);

      const elCenter = el.offsetHeight / 2;
      el.style.scrollMargin = `calc(50vh - ${elCenter}px)`;

      el.scrollIntoView({ behavior: "smooth" });

      document.getElementById(id).classList.remove("scrolling");
      setTimeout(() => {
        document.getElementById(id).classList.add("scrolling");
      }, 100);
    },
    async edit(id, text) {
      const docRef = doc(
        this.db,
        "messages",
        "channels",
        this.currentChannel,
        id
      );

      const index = this.messages.findIndex((message) => message.id === id);
      const oldMessage = this.messages[index].data().message;
      const edits = JSON.parse(this.messages[index].data().edits);
      const newEdits = JSON.stringify(edits.concat(oldMessage));

      await updateDoc(docRef, {
        message: text,
        edits: newEdits,
      });
      console.log(`Message edited: ${text}`);
    },
    async deleteMessage(id) {
      const docRef = doc(
        this.db,
        "messages",
        "channels",
        this.currentChannel,
        id
      );

      await updateDoc(docRef, {
        isDeleted: true,
      });
      console.log(`Message deleted: ${id}`);
    },
    replying(id) {
      this.reply = id;
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$refs.inputField.focus();
        });
      });
    },
    checker(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    },
    resizeText() {
      const isInView = this.isInView;

      const form = document.querySelector("main > form");
      const main = document.querySelector("main");

      const textarea = this.$refs.inputField;
      textarea.style.height = "0px";
      textarea.style.overflow = "scroll";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflow = "hidden";

      // set height of main to 100vh - form height

      main.style.height = `calc(100vh - ${form.offsetHeight}px)`;

      if (isInView) {
        this.$refs.scrollAnchor.scrollIntoView({ behavior: "smooth" });
      }
    },
    isScrollAnchorInView() {
      const form = document.querySelector("main > form");
      const main = document.querySelector("main");
      const options = {
        root: main,
        rootMargin: "0px",
        threshold: 0.5,
      };

      let observer = new IntersectionObserver((elements) => {
        elements.forEach((element) => {
          if (element.isIntersecting) {
            this.isInView = true;
          } else {
            this.isInView = false;
          }
          console.log("IS IN VIEW", this.isInView);
        });
      }, options);

      observer.observe(this.$refs.scrollAnchor);
    },
    addChannel() {
      this.$refs.addChannelModal.open();
    },
    async createChannel(parms) {
      const name = parms.name;
      const roles = parms.roles;

      const docRef = doc(this.db, "messages", "channelList");

      const channels = this.channels;

      channels.push({
        name: name,
        roles: roles,
      });

      await updateDoc(docRef, {
        Channels: JSON.stringify(channels),
      });

      console.log(`Channel created: ${name}`);
    },
    getMessage(id) {
      const index = this.messages.findIndex((message) => message.id === id);
      if (index === -1) {
        return null;
      }

      const message = this.messages[index];

      return {
        id: message.id,
        message: message.data().message,
        username: JSON.parse(message.data().user).username,
        avatar: JSON.parse(message.data().user).avatar,
      };
    },
    fallback(e) {
      console.log(e.currentTarget.src);
      e.currentTarget.src = this.defaultAvatar;
      e.currentTarget.onerror = null;
    },
  },
  async mounted() {
    const userRef = doc(this.db, "users", this.user.uid);
    const userDoc = await getDoc(userRef);

    console.log(userDoc.data());
    this.userData = userDoc.data();

    if (!userDoc.data().username) {
      // Give new users an username and avatar
      let newUsername = prompt("Choose a Username").trim();
      while (!newUsername) {
        newUsername = prompt("Choose a Username").trim();
      }

      let newAvatar = prompt("Choose a Pfp (Url)").trim();

      if (!newAvatar) {
        newAvatar = null;
      }

      await updateDoc(userRef, {
        username: newUsername,
        avatar: newAvatar,
      });

      this.userData = {
        uid: this.user.uid,
        username: newUsername,
        avatar: newAvatar,
        perms: userDoc.data().perms,
      };
    }

    // Websocket to nodejs server for status list and channels
    this.ws = new WebSocket(this.wsUrl);

    this.ws.addEventListener("open", () => {
      console.log("connected");

      this.ws.send(JSON.stringify({ type: "Creds", uid: this.userData.uid }));

      this.ws.addEventListener("message", (res) => {
        console.log(res.data);
        const data = res.data;
        try {
          const dataJson = JSON.parse(data);

          if (dataJson.type == "channels") {
            console.log("Channels:", dataJson.data);
            this.channels = dataJson.data;
          } else if (dataJson.type == "statusList") {
            const online = dataJson.data.filter(
              (user) => user.status === "online"
            );
            const offline = dataJson.data.filter(
              (user) => user.status === "offline"
            );
            const busy = dataJson.data.filter((user) => user.status === "busy");

            this.statusList = online.concat(busy, offline);
          } else if (dataJson.type == "error") {
            alert(`ERROR OCCURED: ${dataJson.data}`);
          }
        } catch (e) {
          console.log(e);
        }
      });
    });

    // this.setupListener();
    this.resizeText();
    this.isScrollAnchorInView();
  },
};
</script>

<style scoped>
textarea:focus + div.reply {
  @apply border-slate-300;
}

.scrolling {
  animation: glow 0.5s ease-in-out 1 forwards;
}

@keyframes glow {
  0% {
    background-color: transparent;
  }
  50% {
    @apply bg-indigo-100;
  }
  100% {
    background-color: transparent;
  }
}
</style>
