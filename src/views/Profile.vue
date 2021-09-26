<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
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
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <!-- ------- user profile ------- -->
                    <div style="background: #fff">
                      <i class="fas fa-user-circle text-xl" style="font-size: 250px;"></i>
                    </div>
                    <!-- ------- end user profile ------- -->
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Log out
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        #22
                      </span>
                      <span class="text-sm text-blueGray-400">User ID</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        23
                      </span>
                      <span class="text-sm text-blueGray-400">Uploads</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                      
                      </span>
                      <span class="text-sm text-white"> ---------------</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  Jenna Stones
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <i
                    class="fas fa-envelope-open mr-2 text-lg text-blueGray-400"
                  ></i>
                  vrwicha@ujatcare.com
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      About me: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto temporibus, 
                      dolorem deserunt perferendis, blanditiis officiis voluptatibus soluta porro consectetur culpa 
                      voluptate eaque ducimus a totam! Aut, accusantium. 
                      Repellat incidunt iusto maiores in reprehenderit enim ab fugiat officia? Nesciunt at quae, 
                      tempora sapiente reprehenderit mollitia dignissimos ullam reiciendis. Suscipit, eum?
                    </p>
                  </div>
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