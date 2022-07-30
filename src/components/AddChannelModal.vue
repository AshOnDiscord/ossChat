<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="close" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
            >
              <div class="p-6">
                <DialogTitle
                  as="h3"
                  class="text-xl font-medium leading-6 text-gray-900"
                >
                  Create Channel
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Create a new text channel for people to chat in. Channel
                    name must be unique however it can contain any characters.
                    Roles are optional and are seperated by " | ".
                  </p>
                </div>
                <form class="mt-3" @submit.prevent="add">
                  <label class="text-gray-700" for="name">Channel Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="channelName"
                    placeholder="New Channel"
                    class="mt-2 mb-3 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <label class="text-gray-700" for="roles">Access Roles</label>
                  <input
                    type="text"
                    name="roles"
                    id="roles"
                    v-model="channelRoles"
                    placeholder="New Channel"
                    class="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </form>
              </div>

              <div
                class="flex items-baseline justify-end bg-slate-100 p-6 py-4"
              >
                <button
                  type="button"
                  class="mx-4 inline-flex justify-center rounded-md border border-transparent text-sm font-medium text-gray-600 underline decoration-transparent transition-all hover:text-inherit hover:decoration-inherit focus:text-inherit focus:decoration-inherit focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-2"
                  @click="close"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  @click="add"
                >
                  Create Channel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

export default {
  props: {
    isOpen: Boolean,
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data() {
    return {
      channelName: "",
      channelRoles: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
      this.channelName = "";
      this.channelRoles = "";
    },
    add() {
      const name = this.channelName.trim();

      if (!name) return;

      const roles = this.channelRoles.split("|").map((role) => role.trim());

      this.$emit("create", {
        name: name,
        roles: JSON.stringify(roles),
      });

      this.channelName = "";
      this.channelRoles = "";
    },
  },
};
</script>
