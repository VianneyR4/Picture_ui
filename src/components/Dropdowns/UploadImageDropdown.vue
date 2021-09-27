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
        <input v-model="title" type="text" placeholder="Title here" class="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white text-sm  outline-none  w-full" style="border: none; outline: none !important;"/>
      </div>
      <div class="mb-3 pt-0">
        <input v-model="description" type="textarea" placeholder="Description here" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm  outline-none focus:outline-none focus:shadow-outline w-full"/>
      </div>
      <div class="mb-3 pt-0">
        <input @change="setImageFile($event)" id="input_image" type="file" placeholder="Regular Input" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm  outline-none focus:outline-none focus:shadow-outline w-full"/>
      </div>
      <button v-if="!loader" @click="uploadImageFunc()" style="margin-left: 15px" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Upload
      </button>

      <img v-if="loader" src="../../assets/img/loader.gif" width="35" alt="loader" style="margin: 0 0 5px 35px" />
    </div>



      <!-- ---------------------modale session------------------ -->      
      <div v-if="showModal!=null" class="opacity-25 fixed z-50" style="top: 0; height: 100vh; width: 100vw; background: #00000999">
        <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-3xl" style="width: 100vw">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" style="width: 30%; margin: 10% auto">
              <!--header-->
              <div class="flex items-start justify-between px-6 py-3 border-b border-solid border-blueGray-200 rounded-t">
                <h3 class="text-2xl font-semibold" style="margin: 5px 0 0">
                  Invalid Session
                </h3>
                <button @click="showModal=null" class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                  <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto" style="padding: 15px 30px">
                <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {{ showModal }}
                </p>
              </div>
              <!--footer-->
              <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b" style="padding: 6px 10px">
                <!-- <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                  Close
                </button> -->
                <button @click="goTo('Login')" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- -------------------end modale session---------------- -->
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

import { uploadImage } from "../../api/files";


export default {
  data() {
    return {
      dropdownPopoverShow: false,
      user: {},
      User_token: localStorage.getItem("token"),
      title: null,
      description: null,
      file: null,
      loader: false,
      showModal: null,
    };
  },
  mounted(){
    this.user = {
      'fname': localStorage.getItem("user_fname"),
      'lname': localStorage.getItem("user_lname"),
      'email': localStorage.getItem("user_email"),
      'token': localStorage.getItem("token"),
    };
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
    },
    setImageFile(event) {           
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.file = file;
        console.log(this.file);
      }
    },
    uploadImageFunc: function(){
      this.loader = true;
 
      uploadImage(this.User_token, this.title, this.description, this.file).then((result) => {
        // console.log("Landing__images_data", result);
        if (result.status == 200){
          this.showModal = result.message;
          // this.$parent.$emit('ChangeView', e.target.dataset.section);
        } else {
          this.showModal = result.message;
        }
        this.loader = false;
      })
      .catch((err) => {
        console.log('ERROR__here__: ', err);
        this.loader = false;
      })
    }
  },
};
</script>
