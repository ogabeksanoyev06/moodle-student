<template>
  <section class="our-partners">
    <div class="container">
      <p class="text-center mb-40">Bizning hamkorlarimiz</p>
      <div class="list d-flex justify-space-between flex-wrap mx-auto">
        <div
          class="d-flex justify-content-center align-center overflow-hidden"
          style="height: 3rem"
          v-for="item in 7"
          :key="item"
        >
          <img
            src="https://hemis.uz/_nuxt/img/tuit.11a5f74.png"
            style="
              height: 100%;
              max-width: 100%;
              display: block;
              vertical-align: middle;
              filter: grayscale(100%);
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OurPartners",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.our-partners {
  margin: 80px 0;
  .list {
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 10px 0px rgba(199, 199, 199, 0.25);
  }
  p {
    color: #0253da;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.56px;
  }
}
</style>
