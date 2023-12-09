<template>
  <div class="hero-banner">
    <div class="hero-banner__inner">
      <div class="container">
        <div class="hero-banner__content">
          <app-text
            :size="isDesktopSmall ? '24' : isMobileMedium ? '36' : '54'"
            :line-height="isDesktopSmall ? '32' : isMobileMedium ? '44' : '62'"
            weight="600"
            max-width="714"
            class="color-white text-center mx-auto"
          >
            Toshkent Moliya Institutining masofaviy ta’lim axborot tizimi
          </app-text>
          <div>
            <app-text
              :size="isMobileMedium ? '16' : '20'"
              :line-height="isMobileMedium ? '24' : '28'"
              weight="400"
              class="color-white text-center"
            >
              Ushbu axborot tizimi “Ma’muriy boshqaruv”, “O‘quv jarayoni”,
              “Ilmiy faoliyat” va “Moliyaviy boshqaruv” modullarini o‘z ichiga
              olgan.
            </app-text>
          </div>
          <button class="mx-auto">
            <AppText size="20" line-height="28" class="color-white"
              >Video</AppText
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M15 28C8.09644 28 2.5 22.4035 2.5 15.5C2.5 8.59644 8.09644 3 15 3C21.9035 3 27.5 8.59644 27.5 15.5C27.5 22.4035 21.9035 28 15 28ZM15 25.5C20.5229 25.5 25 21.0229 25 15.5C25 9.97715 20.5229 5.5 15 5.5C9.47715 5.5 5 9.97715 5 15.5C5 21.0229 9.47715 25.5 15 25.5ZM13.2774 11.0182L19.376 15.084C19.6058 15.2371 19.6679 15.5476 19.5146 15.7774C19.478 15.8322 19.4309 15.8794 19.376 15.916L13.2774 19.9818C13.0476 20.135 12.7371 20.0729 12.584 19.8431C12.5292 19.761 12.5 19.6645 12.5 19.5658V11.4343C12.5 11.1581 12.7239 10.9343 13 10.9343C13.0987 10.9343 13.1952 10.9635 13.2774 11.0182Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="mask">
        <img src="/images/bg_element_mask.png" alt="" />
      </div>
    </div>
    <div class="hero-banner__photo">
      <div class="container">
        <div class="animati d-flex justify-content-center">
          <img src="https://hemis.uz/_nuxt/img/main.246e6fc.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero-banner {
  &__inner {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 160px);
    background-color: #0152da;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .mask {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
      width: 100%;
      img {
        max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    div {
      max-width: 830px;
      border-radius: 20px;
      border: 1.5px solid #6d9ff2;
      background: rgba(126, 168, 255, 0.3);
      backdrop-filter: blur(2px);
      padding: 10px 15px;
    }
    button {
      display: inline-flex;
      padding: 10px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 20px;
      border: 1px solid #6d9ff2;
      background: rgba(126, 168, 255, 0.3);
      backdrop-filter: blur(2px);
      cursor: pointer;
    }
  }
  &__photo {
    background-color: #0152da;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    img {
      max-width: 1028px;
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 20px;
      box-shadow: 0px 5px 20px 0px rgba(203, 203, 203, 0.5);
    }
  }

  &__cta {
    .a-btn {
      min-height: 56px;
    }
  }
}

@media (max-width: 850px) {
  .hero-banner__inner {
  }

  .hero-banner__content {
  }

  .hero-banner__photo {
  }

  @media (max-width: 500px) {
  }
}
</style>
