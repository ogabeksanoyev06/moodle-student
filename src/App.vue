<template>
  <div id="app">
    <pre-loading v-if="isLoading" />
    <router-view v-else />
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import PreLoading from "./components/shared-components/PreLoading.vue";
import TokenService from "./service/TokenService";
export default {
  components: { PreLoading },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    loadData() {
      return new Promise((resolve) => {
        console.log("hello");
        setTimeout(() => {
          resolve();
        });
      });
    },
    checkRefreshTime() {
      if (TokenService.getToken()) {
        this.$store.state.refreshTokenIntervalId = setInterval(() => {
          console.log("refreshToken");
          console.log(+new Date() / 1000 + TokenService.getExpiretime() - 60);
          if (+new Date() / 1000 > TokenService.getExpiretime() - 60) {
            this.RefreshToken();
          }
        }, 1000);
      }
    },
  },
  mounted() {
    this.loadData().then(() => {
      this.isLoading = false;
    });
  },
  created() {
    // this.checkRefreshTime();
  },
};
</script>
