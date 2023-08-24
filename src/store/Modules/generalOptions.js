const state = {
  windowWidth: null,
  loading: false,
  refreshTokenIntervalId: null,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  loading: (state) => state.loading,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
  setLoading: (state, data) => (state.loading = data),
};
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
