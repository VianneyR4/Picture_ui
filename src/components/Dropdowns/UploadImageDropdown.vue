<template>
  <div>
    <a
      class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm font-bold"
      href="#pablo"
      ref="btnDropdownRef2"
      v-on:click="toggleDropdown($event)"
    >
      <button class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
        <i class="fas fa-arrow-alt-circle-up"></i> Upload image
      </button>
    </a>
    <div
      ref="popoverDropdownRef2"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
      style="position: absolute"
    >

      <div class="mb-3 pt-0">
        <input type="file" placeholder="Regular Input" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm  outline-none focus:outline-none focus:shadow-outline w-full"/>
      </div>
      <button style="margin-left: 15px" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Upload
      </button>
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
    goTo: function(val){
      this.$router.push({ name: val })
    },
    logout: function (){
      localStorage.removeItem("user_fname");
      localStorage.removeItem("user_lname");
      localStorage.removeItem("user_email");
      localStorage.removeItem("token");
      this.$router.push({ name: "Login" })
    }
  },
};
</script>
