<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/"
        >
          Picture API
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>



      <div
        v-if="activePage !== 'Login' && activePage !== 'Register'"
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <router-link
              to="/landing"
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm font-bold"
            >
              Home
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              to="/profile"
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm font-bold"
            >
              Profile
            </router-link>
          </li>
        </ul>

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center" style="margin-right: -15px">
            <PagesDropdown />
          </li>

          <li class="flex items-center">
            <UploadImageDropdown />
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>
<script>
import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
import UploadImageDropdown from "@/components/Dropdowns/UploadImageDropdown.vue";
export default {
  data() {
    return {
      navbarOpen: false,
      user: {},
    };
  },
  mounted(){
    this.user = localStorage.getItem("user");
  },
  created(){
    //this.checkUserSession();
    this.activePage = this.$route.name;
    // this.clickedUserId = this.$route.params.id;
    // this.clickedDocumentFolder = this.$route.params.folder;
    // alert(this.activePage);
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    PagesDropdown,
    UploadImageDropdown
  },
};
</script>
