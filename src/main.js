import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueMask from "v-mask";
import Moment from "vue-moment";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/mixins/mixin";
import "./plugins/directives/click-outside";
import http from "./plugins/axios";
import KinescopePlayer from "@kinescope/vue-kinescope-player";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer)
Vue.config.productionTip = false;

Vue.component("AppText", AppText);
Vue.use(VueMask);
Vue.use(KinescopePlayer);
Vue.use(ElementUI);
Vue.use(Moment);
Vue.use(VueToast);
Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
Vue.mixin({
  data() {
    return {};
  },
  methods: {
    notificationMessage(message, type) {
      this.$toast.open({
        message: message,
        type: type,
        position: "top-right",
      });
    },
  },
});
