import Vue from "vue";
import Vuex from "vuex";
import UserStore from "@/store/modules/UserStore";
import CommonState from "@/store/modules/CommonState";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    UserStore,
    CommonState
  },
});
