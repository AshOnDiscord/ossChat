<template>
  <div
    class="grid h-screen grid-cols-[min-content,auto,min-content] divide-x-2 divide-slate-300"
  >
    <aside class="h-full px-4 py-2">
      <div class="my-4 flex gap-4">
        <h1>Channels:</h1>
        <button>+</button>
      </div>
      <ul>
        <li v-for="channel in channels" :key="channel">
          <button
            :class="{ 'border border-slate-300': currentChannel == channel }"
            class="rounded-md px-4 py-2"
            @click="swap(channel)"
          >
            {{ channel }}
          </button>
        </li>
      </ul>
    </aside>
    <main class="h-full px-4 py-2">
      <ul class="space-y-4">
        <li v-for="message in messages">
          <h1>{{ JSON.parse(message.data().user).username }}</h1>
          <p>{{ message.data().message }}</p>
        </li>
      </ul>
      <form
        class="absolute bottom-0 left-0 flex w-full justify-between bg-gray-100 px-4 py-2"
        @submit.prevent="sendMessage()"
      >
        <p>
          Replying to
          {{ replying() ? replying().message : "nobody" }}
        </p>
        <p>Current Channel: {{ this.currentChannel }}</p>
        <input type="text" v-model="newMessage" />
        <button type="submit">Send</button>
      </form>
    </main>
    <aside></aside>
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

export default {
  props: {
    user: Object,
    db: Object,
  },
  data() {
    return {
      userData: {},
      channels: [],
      messages: [],
      currentChannel: "No Channel Selected",
      newMessage: "",
      replyingTo: null,
      unsubscribe: () => {},
    };
  },
  methods: {
    watchMessages() {
      const q = query(
        collection(this.db, "messages", "channels", this.currentChannel),
        orderBy("time", "desc"),
        limit(25)
      );
      const watchCollection = onSnapshot(q, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.unshift(doc);
        });
        console.log(`Current messages: ${this.messages.length}`);
        console.log(this.messages.map((doc) => doc.data().message).join(" | "));
        // setTimeout(() => {
        //   this.$refs.scrollIntoView.scrollIntoView({ behavior: "smooth" });
        // }, 100);
      });
    },
    replying() {
      if (this.replyingTo) {
        return null;
      }
      const reply = this.messages.filter(
        (message) => message.id === this.replyingTo
      );

      if (reply.length == 1) {
        return reply[0].data();
      }
      return null;
    },
    sendMessage() {
      const newMessage = this.newMessage.trim();
      const replyingTo = this.replyingTo;

      this.newMessage = "";
      this.replyingTo = null;

      if (!newMessage) return;
      if (this.currentChannel == "No Channel Selected")
        return alert("No channel selected");

      let docData = {};

      if (replyingTo) {
        const replyDoc = this.messages.filter(
          (message) => message.id === replyingTo
        );

        docData = {
          message: newMessage,
          time: serverTimestamp(),
          user: JSON.stringify({
            uid: this.user.uid,
            username: this.userData.username,
            avatar: this.userData.avatar,
          }),
          replyTo: JSON.stringify({
            id: replyDoc.id,
            time: replyDoc.data().time,
          }),
          isPinned: false,
          isDeleted: false,
        };
      } else {
        docData = {
          message: newMessage,
          time: serverTimestamp(),
          user: JSON.stringify({
            uid: this.user.uid,
            username: this.userData.username,
            avatar: this.userData.avatar,
          }),
          replyTo: null,
          isPinned: false,
          isDeleted: false,
        };
      }

      addDoc(
        collection(this.db, "messages", "channels", this.currentChannel),
        docData
      );

      console.log(`Message sent: ${newMessage}`);
    },
    swap(channel) {
      this.currentChannel = channel;
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

      const newAvatar = prompt("Choose a Pfp (Url)").trim();

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

    const channelListRef = doc(this.db, "messages", "channelList");

    this.watchMessages();

    const channelLister = onSnapshot(channelListRef, (doc) => {
      const channels = doc.data().Channels;
      console.log(channels);
      this.channels = JSON.parse(channels);

      if (!this.channels.includes(this.currentChannel)) {
        this.currentChannel = "No Channel Selected";
      }
    });
  },
  watch: {
    currentChannel() {
      const q = query(
        collection(this.db, "messages", "channels", this.currentChannel),
        orderBy("time", "desc"),
        limit(25)
      );
      const watchCollection = onSnapshot(q, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.unshift(doc);
        });
        console.log(`Current messages: ${this.messages.length}`);
        console.log(this.messages.map((doc) => doc.data().message).join(" | "));
        // setTimeout(() => {
        //   this.$refs.scrollIntoView.scrollIntoView({ behavior: "smooth" });
        // }, 100);
      });
    },
  },
};
</script>
