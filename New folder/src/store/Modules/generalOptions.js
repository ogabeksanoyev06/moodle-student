const state = {
  windowWidth: null,
  refreshTokenIntervalId: null,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
};
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
