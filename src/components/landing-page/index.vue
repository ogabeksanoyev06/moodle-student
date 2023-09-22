<template>
  <div id="home__container">
    <LandingHeader />

    <footer />
  </div>
</template>
<script>
import LandingHeader from "./header/landing-header.vue";

export default {
  name: "LandingPage",
  components: { LandingHeader },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
