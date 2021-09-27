<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <!-- ------------ alert --------------- -->
            <div v-if="alertOpen == 1 || alertOpen == 2" class="text-white px-6 py-4 border-0 rounded relative mb-4 " :class="alertOpen==1?'bg-emerald-500':'bg-red-500'">
              <span class="text-xl inline-block mr-5 align-middle" style="margin-right: 15px;">
                <i class="fas fa-bell"></i>
              </span>
              <span class="inline-block align-middle mr-8">
                <b class="capitalize">{{alertOpen==1?'Success: ':'Error: '}}</b> {{ alertMessage }}
              </span>
              <button style="margin-right: 20px;" class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">
                <span>×</span>
              </button>
            </div>
            <!-- ------------ end alert --------------- -->

            <div style="margin: 25px;" class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email <span style="color: red">*</span>
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model="email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password <span style="color: red">*</span>
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              
              <br/>

              <div class="text-center mt-6">
                <button
                  v-if="!loader"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="loginFunc()"
                >
                  Sign In
                </button>

                <img v-if="loader" src="../../assets/img/loader.gif" width="50" alt="loader" style="margin-left: calc(50% - 25px)" />
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="#" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";

import { login } from "../../api/user";

export default {
  data() {
    return {
      github,
      google,
      alertOpen: null,
      email: null,
      password: null,
      alertMessage: null,
      loader: false,
    };
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = null;
    },
    goTo: function(val){
      this.$router.push({ name: val })
    },
    loginFunc: function(){
      this.loader = true;
      login(this.email, this.password).then((result) => {
        console.log("user_data", result);
        if(result.status == 200){ 
          this.alertOpen = 1;  
          localStorage.setItem("user_fname", result.user.first_name);
          localStorage.setItem("user_lname", result.user.last_name);
          localStorage.setItem("user_email", result.user.email);
          localStorage.setItem("token", result.token);
          this.alertMessage = result.message
          this.goTo("Landing");
        } else { 
          this.alertOpen = 2; 
          this.alertMessage = result.message
        }
        this.loader = false;
      })
      .catch((err) =>{
        console.log('ERROR: ', err);
        this.loader = false;
      })
    }
  }
};
</script>

<style scoped>
.images-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.grid-images{
  /* border: 1px solid grey; */
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
}
.my-mage{
  /* border: 1px solid grey; */
  height: 450px;
  padding: 0;
}
.my-mage img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.my-image-detail{
  /* border: 1px solid grey; */
  padding-left: 25px;
}
</style>