<template>
  <div id="home__container">
    <app-button @click="$router.push({ name: 'login' })">
      Tizmiga kirish
    </app-button>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";

export default {
  name: "LandingPage",
  components: {
    AppButton,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
