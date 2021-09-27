<template>
  <div>
    <navbar />
    <main>
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" style="background: #fff;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  {{ mine? 'Mine Only':'All Images'}} / {{ filterToDisplay }}
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  This is the line of the exact filter... Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nesciunt excepturi sequi id voluptas beatae minus, 
                  voluptatem fugiat itaque deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
              style="background: #fff !important;"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  
                  <h6 class="text-xl font-semibold">Display All Images or Mine Only</h6><br/>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    <button @click="getImagesFunc(token, filter)" :class="!mine? 'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150':'text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'" type="button">
                      All Images
                    </button>
                    <button @click="getImageByUserFunc(token, filter)" :class="mine? 'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150':'text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'" type="button">
                      Mine Only
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-xl font-semibold">Descending Filter</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    sort by date of upload Descending
                  </p>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    <button  @click="filterFunc('desc')" :class="filter=='desc'? 'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150':'text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'" type="button">
                      Sort 'desc'
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto"> 
                  <h6 class="text-xl font-semibold">Ascending Filter</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    sort by date of upload Ascending
                  </p>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    <button  @click="filterFunc('asc')" :class="filter=='asc'? 'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150':'text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'" type="button">
                      Sort 'asc'
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="relative py-20">
        <!-- ----------- my polygone ---------- -->
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <!-- ----------- end my polygone ---------- -->

        <div class="container mx-auto px-4">
          <div v-if="!loader" class="images-container">
            <div v-for="(image, n) in all_Images" :key="n" class="grid-images items-center flex flex-wrap">
              <div class="my-mage w-full ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  :src="'http://localhost:3000/'+image.image"
                />
              </div>
              <div class="my-image-detail w-full ml-auto mr-auto px-4">
                <div class="">
                  
                  <div class="list_contact_imag_user">
                    <!-- ------- user profile ------- -->
                    <i class="fas fa-user-circle text-xl" style="font-size: 50px;"></i>
                    <!-- ------- end user profile ------- -->
                    <br/><br/>
                  </div>

                  <h3 class="text-4 font-semibold">#{{ image.id }} {{ image.title }}</h3>
                  <p class="mt-4 text-sm leading-relaxed text-blueGray-500">
                    {{ image.description }}
                  </p>
                  <ul class="list_contact_imag_user list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                          >
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-blueGray-500 text-sm ">
                            {{ image.User.first_name }}  <span style="text-transform: uppercase;">{{ image.User.last_name }}</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                          >
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-blueGray-500 text-sm ">{{ image.User.email }}</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <img v-if="loader" src="../assets/img/loader.gif" width="120" alt="loader" style="margin-left: calc(50% - 60px)" />

        </div>
      </section>



      <!-- ----------- my polygone ---------- -->
      <section class="pb-20 relative block bg-blueGray-800">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

      </section>
      <!-- ----------- end my polygone ---------- -->
    </main>
    <footer-component style="background: #1e293b" />




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
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/FooterSmall.vue";

import { getAllImage, getImageByUser } from "../api/files";

export default {
  data() {
    return {
      all_Images: null,
      loader: false,
      filter: "desc",
      filterToDisplay: "Descending",
      mine: false,
      token: localStorage.getItem("token"),
      showModal: null,
    };
  },
  mounted(){

    if (!this.mine){
      this.getImagesFunc(localStorage.getItem("token"), this.filter)
    } else {
      this.getImageByUserFunc(localStorage.getItem("token"), this.filter)
    }
  },
  components: {
    Navbar,
    FooterComponent,
  },
  methods: {
    goTo: function(val){
      this.$router.push({ name: val })
    },
    getImagesFunc: function(token, filter){
      this.mine=false;
      this.loader = true;
      getAllImage(token, filter).then((result) => {
        // console.log("images_data", result);
        if (result.status == 200){
          this.all_Images = result.data;
          filter == 'asc' ? this.filterToDisplay='Ascending':this.filterToDisplay='Descending';
        } else {
          // alert(result.message);
          this.showModal=result.message;
          // this.goTo("Login");
        }

        this.loader = false;

      })
      .catch((err) =>{
        console.log('ERROR: ', err);
        this.loader = false;
      })
    },
    filterFunc: function(filter_val){
      this.filter = filter_val;
      if (!this.mine){
        this.getImagesFunc(localStorage.getItem("token"), this.filter)
      } else {
        this.getImageByUserFunc(localStorage.getItem("token"), this.filter)
      }
    },
    getImageByUserFunc: function(token, filter){
      this.mine=true;
      this.loader = true;
      getImageByUser(token, filter).then((result) => {
        // console.log("images_data", result);
        if (result.status == 200){
          this.all_Images = result.data;
          filter == 'asc' ? this.filterToDisplay='Ascending':this.filterToDisplay='Descending';
        } else {
          alert(result.message);
          this.goTo("Login");
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
  /* border: 1px solid #00000028; */
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
  margin: 0 20px 80px 0;
}
.my-mage{
  /* border: 1px solid grey; */
  height: 450px;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: -3px 4px 10px #0000001c;
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

.list_contact_imag_user{
  display: block;
}
@media only screen and (max-width: 900px){
  .images-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .grid-images{
    /* border: 1px solid grey; */
    display: grid;
    grid-template-columns: 3fr 3fr;
    width: 100%;
    margin: 0 20px 80px 0;
  }
  .my-mage{
    /* border: 1px solid grey; */
    height: 250px;
  }
  .list_contact_imag_user{
    display: none;
  }
}
</style>