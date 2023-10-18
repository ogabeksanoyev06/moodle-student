import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import VueMask from "v-mask";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/mixins/mixin";
import "./plugins/directives/click-outside";
import http from "./plugins/axios";

Vue.config.productionTip = false;
import VueMeta from 'vue-meta';
Vue.use(VueMeta);
Vue.component("AppText", AppText);
Vue.use(VueMask);
Vue.use(Toast, {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
