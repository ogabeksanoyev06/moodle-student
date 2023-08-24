const state = {
  user: {},
  accessToken: null,
  isLoggedOn: false,
};

const getters = {
  user: (state) => state.user,
  accessToken: (state) => state.accessToken,
  isLoggedOn: (state) => state.isLoggedOn,
};
const mutations = {
  setUser: (state, data) => (state.user = data),
  setAccessToken: (state, data) => (state.accessToken = data),
  setIsLoggedOn: (state, data) => (state.isLoggedOn = data),
};
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
