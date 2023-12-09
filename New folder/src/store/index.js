import Vue from "vue";
import Vuex from "vuex";
import generalOptions from "./Modules/generalOptions";
import student from "./Modules/student";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalOptions,
    student,
  },
});
