<template>
  <Menu as="div" class="inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md p-1 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        ref="menuToggle"
      >
        <DotsVerticalIcon class="h-3 w-3" />
      </MenuButton>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
      @before-enter="triggerScroll"
      @enter="duringScroll"
      @after-leave="exitScroll"
    >
      <MenuItems
        ref="menuItems"
        class="absolute right-0 z-10 my-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem
            v-slot="{ active }"
            v-if="JSON.parse(message.data().user).uid === user.uid"
          >
            <button
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="$emit('edit')"
            >
              Edit
              <PencilIcon class="ml-auto h-4 w-4" />
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="$emit('pin')"
            >
              Pin
              <FontAwesomeIcon
                class="ml-auto h-4 w-4"
                icon="fa-solid fa-thumbtack"
              />
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="$emit('reply')"
            >
              Reply
              <ReplyIcon class="ml-auto h-4 w-4" />
            </button>
          </MenuItem>
          <MenuItem
            v-slot="{ active }"
            v-if="
              JSON.parse(message.data().user).uid === user.uid ||
              user.uid === 'mxrNj49uZKfDw5tQkAI7USxEHPk1'
            "
            w
          >
            <button
              :class="[
                active ? 'bg-red-500 text-white' : 'text-red-500',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="deleteMessage"
            >
              Delete
              <TrashIcon class="ml-auto h-4 w-4" />
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  TrashIcon,
  ReplyIcon,
  DotsVerticalIcon,
  PencilIcon,
} from "@heroicons/vue/solid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
library.add(faThumbTack);

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TrashIcon,
    ReplyIcon,
    DotsVerticalIcon,
    PencilIcon,
    FontAwesomeIcon,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    triggerScroll() {
      // add a listener to scroll for the ul

      document
        .querySelector("main")
        .addEventListener("scroll", this.scrollHandler);

      this.$emit("open", true);
    },
    duringScroll() {
      this.scrollHandler();
    },
    exitScroll() {
      // remove the listener
      document
        .querySelector("main")
        .removeEventListener("scroll", this.scrollHandler);

      this.$emit("open", false);
    },
    scrollHandler() {
      this.$nextTick(() => {
        // detect if the menu would be colliding with the form
        const menuOrigin = this.$refs.menuToggle.$el;
        const menu = this.$refs.menuItems.$el;
        const form = document.querySelector("main form");

        if (!menu) return;

        // get menu height
        const menuHeight = menu.getBoundingClientRect().height;

        // check if the menu was below the origin if it would be intersecting the form
        const menuBelowOrigin =
          menuOrigin.getBoundingClientRect().bottom + menuHeight >
          form.getBoundingClientRect().top;

        // if the menu would be below the origin, move it up
        if (menuBelowOrigin) {
          menu.style.bottom = "1rem";
        } else {
          menu.style.bottom = "auto";
        }
      });
    },
    deleteMessage() {
      this.exitScroll();
      this.$emit("delete");
    },
  },
};
</script>
