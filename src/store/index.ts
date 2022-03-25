import Vue from "vue";
import Vuex from "vuex";
import UserStore from "@/store/modules/UserStore";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    UserStore,
  },
});
