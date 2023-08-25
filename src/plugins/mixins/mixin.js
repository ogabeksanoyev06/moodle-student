import Vue from "vue";
import { mapGetters } from "vuex";

Vue.mixin({
  data() {
    return {};
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    successNotification(message) {
      this.$toast.success(message);
    },
    errorNotification(message) {
      this.$toast.error(message);
    },
  },
});
