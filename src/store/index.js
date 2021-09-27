import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image_path : "http://localhost:3000/",
    api_key:
      "RoddXUVwoAtK0IbM6ugGNENizaAEam5bWUgBdfvurZ0e3eiMRe9DMRPdh55nrmNW7Y5oLdOchGFRdhuUuOS39ySsSONr3Xbr9viYpSGhxvgAcXUgJlVuPlFhdQEYNhVTpC8jgjkghjhka787eJHJKHujyuhsa6",
    api_app_chanel: "Admin",
  },
  mutations: {},
  actions: {},
  modules: {},
});

// $store.state.image_path ...