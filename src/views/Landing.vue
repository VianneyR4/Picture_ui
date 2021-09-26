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
                  All Images / Descending
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nesciunt excepturi sequi id quam ducimus enim porro voluptas beatae minus, 
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
                    <button class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      All Images
                    </button>
                    <button class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                    <button class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                    <button class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
          <div class="images-container">
            <div v-for="n in 10" :key="n" class="grid-images items-center flex flex-wrap">
              <div class="my-mage w-full ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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

                  <h3 class="text-4 font-semibold">A growing company</h3>
                  <p class="mt-4 text-sm leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you get
                    started faster. You can change the text and images and you're
                    good to go.
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
                            Vianney Rwicha
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
                          <h4 class="text-blueGray-500 text-sm ">vrwicha@ujatcare.com</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/FooterSmall.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
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
  margin: 0 20px 80px 0;
}
.my-mage{
  /* border: 1px solid grey; */
  height: 450px;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: -4px 5px 15px #0000002d;
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