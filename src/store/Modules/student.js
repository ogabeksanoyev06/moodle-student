import {baseURL} from "@/plugins/axios";

const state = {
  user: {},
  loading: false,
  accessToken: null,
  isLoggedOn: false,
};

const getters = {
  user: (state) => state.user,
  loading: (state) => state.loading,
  accessToken: (state) => state.accessToken,
  isLoggedOn: (state) => state.isLoggedOn,
};
const mutations = {
  setUser: (state, data) => (state.user = data),
  setLoading: (state, data) => (state.loading = data),
  setAccessToken: (state, data) => (state.accessToken = data),
  setIsLoggedOn: (state, data) => (state.isLoggedOn = data),
};
const actions = {
  getUser({ commit }) {
    try {
      commit("setLoading", true);
      this._vm.$http
        .get(baseURL + "get/student/"+localStorage.getItem('studentId')+'/')
        .then((res) => {
          console.log(res)
          localStorage.setItem('group',res.group.id)
            commit("setUser", res);
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting user by token" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
