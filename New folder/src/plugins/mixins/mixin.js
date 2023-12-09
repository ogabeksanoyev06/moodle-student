import Vue from "vue";
import { mapGetters } from "vuex";

Vue.mixin({
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLoggedOn"]),
    userIsLoggedOn() {
      return this.isLoggedOn;
    },
  },
  methods: {
    successNotification(message) {
      this.$toast.success(message, {
        closeOnClick: true,
        duration: 1000,
      });
    },
    errorNotification(message) {
      this.$toast.error(message, {
        closeOnClick: true,
        duration: 1000,
      });
    },
  },
});
