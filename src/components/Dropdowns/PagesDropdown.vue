<template>
  <div>
    <a
      class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm font-bold"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <span>{{ user.fname }}</span> <span style="margin: 0 5px 0 5px;" class="uppercase">{{ user.lname }}</span>

      <span><i class="lg:text-blueGray-200 text-blueGray-400 fas fa-user-circle" style="margin: -2px -6px 0 5px; font-size: 30px" /></span>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link
        to="/profile"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Profile
      </router-link>
      <router-link
        to="/auth/login"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Log out
      </router-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      user: {},
    };
  },
  mounted(){
    this.user = {
      'fname': localStorage.getItem("user_fname"),
      'lname': localStorage.getItem("user_lname"),
      'email': localStorage.getItem("user_email"),
      'token': localStorage.getItem("token"),
    };
    console.log(this.user);
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
