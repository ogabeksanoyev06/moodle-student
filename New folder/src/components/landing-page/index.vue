<template>
  <div id="home__container">
    <LandingHeader />
    <HeroBanner />
    <div class="container mb-20 mt-20">
      <div
        style="border-radius: 20px; background: #0152da"
        :style="isDesktopSmall ? 'margin-top: 60px' : 'margin-top: 180px'"
        :class="isMobileMedium ? 'pa-20' : isDesktopSmall ? 'pa-20' : 'pa-40'"
      >
        <div
          class="d-flex justify-space-between"
          :class="isDesktopSmall ? 'flex-wrap justify-content-center' : ''"
        >
          <div class="counts" :class="isDesktopSmall ? 'mb-30' : ''">
            <img src="/images/Group 14.png" alt="" />
          </div>
          <div class="d-flex flex-column">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 32 : 42"
              :line-height="isMobileSmall ? 24 : isMobile ? 40 : 56"
              :class="isMobileSmall ? 'mb-20' : isMobile ? 'mb-30' : 'mb-50'"
              max-width="545"
              weight="600"
              class="color-white text-center mb-10"
            >
              Talabalar va O’qituvchilar munosabati
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : isMobile ? 16 : 20"
              :line-height="isMobileSmall ? 22 : isMobile ? 24 : 32"
              :class="isMobileSmall ? 'mb-10' : isMobile ? 'mb-20' : 'mb-30'"
              max-width="545"
              weight="500"
              class="color-blue-3"
            >
              Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va
              ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish.
              Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va
              qarorlar qabul qilish samaradorligini oshirish.
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : isMobile ? 16 : 20"
              :line-height="isMobileSmall ? 22 : isMobile ? 24 : 32"
              max-width="545"
              weight="500"
              class="color-blue-3"
            >
              Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va
              ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish.
              Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va
              qarorlar qabul qilish samaradorligini oshirish.
            </AppText>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-20">
      <div
        style="border-radius: 20px; background: #dfe5fb; margin-top: 60px"
        :class="isMobileMedium ? 'pa-20' : isDesktopSmall ? 'pa-40' : 'pa-80'"
      >
        <AppText
          :size="isDesktopSmall ? '32' : '36'"
          :line-height="isDesktopSmall ? '40' : '44'"
          weight="600"
          max-width="400"
          class="text-center w-100 mx-auto mb-20"
        >
          Tizimdan qanday foydalanasiz?
        </AppText>
        <div class="list">
          <div class="content">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              weight="600"
              class="mb-10"
            >
              HEMIS bilan ta’lim muassasasi
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : isMobile ? 16 : 18"
              :line-height="isMobileSmall ? 22 : isMobile ? 24 : 26"
              weight="400"
            >
              Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va
              ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish.
              Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va
              qarorlar qabul qilish samaradorligini oshirish.
            </AppText>
          </div>
          <div class="photo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M143.783 73.6917C141.875 70.6 138.558 68.75 134.925 68.75H117.008L129.108 32.4667C130.167 29.2917 129.625 25.7833 127.675 23.075C125.725 20.375 122.567 18.75 119.225 18.75H78.35C73.4333 18.75 69.25 22.1 68.1833 26.9083L53.3667 93.5833C52.675 96.6833 53.425 99.8833 55.4167 102.358C57.4 104.833 60.3667 106.258 63.5417 106.258H83.8833L71.325 162.767C70.3167 167.292 71.4 171.958 74.3 175.567C77.2 179.183 81.5167 181.258 86.1417 181.258C91.9333 181.258 97.1417 178.042 99.725 172.858L144.242 83.825C145.867 80.575 145.692 76.7833 143.783 73.6917Z"
                fill="url(#paint0_linear_1842_15353)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1842_15353"
                  x1="99.2316"
                  y1="18.75"
                  x2="99.2316"
                  y2="181.258"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0152DA" />
                  <stop offset="1" stop-color="#4D8FFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="list order">
          <div class="photo">
            <img
              src="/images/Ellipse 8.png"
              class="w-100"
              style="max-width: 100%; height: auto"
            />
          </div>
          <div class="content">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              weight="600"
              class="mb-10"
            >
              HEMIS bilan ta’lim muassasasi
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : isMobile ? 16 : 18"
              :line-height="isMobileSmall ? 22 : isMobile ? 24 : 26"
              weight="400"
            >
              Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va
              ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish.
              Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va
              qarorlar qabul qilish samaradorligini oshirish.
            </AppText>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <AppText
              :size="isMobileSmall ? 16 : isMobile ? 18 : 20"
              weight="600"
              class="mb-10"
            >
              HEMIS bilan ta’lim muassasasi
            </AppText>
            <AppText
              :size="isMobileSmall ? 14 : isMobile ? 16 : 18"
              :line-height="isMobileSmall ? 22 : isMobile ? 24 : 26"
              weight="400"
            >
              Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va
              ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish.
              Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va
              qarorlar qabul qilish samaradorligini oshirish.
            </AppText>
          </div>
          <div class="photo">
            <img
              src="/images/Ellipse 8.png"
              class="w-100"
              style="max-width: 100%; height: auto"
            />
          </div>
        </div>
      </div>
    </div>
    <LandingFooter />
  </div>
</template>
<script>
import TokenService from "@/service/TokenService";
import { mapGetters, mapMutations } from "vuex";
import LandingHeader from "./header/landing-header.vue";
import HeroBanner from "./HeroBanner.vue";
import LandingFooter from "./footer/LandingFooter.vue";

export default {
  name: "LandingPage",
  components: { LandingHeader, HeroBanner, LandingFooter },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
  },
  mounted() {
    // this.setToken();
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
  computed: {
    ...mapGetters(["windowWidth"]),
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>
<style scoped lang="scss">
.list {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
  .content {
    max-width: 450px;
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
  }
  .photo {
    display: flex;
    justify-content: center;
    max-width: 420px;
    width: 100%;
  }
}
.counts {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: -150px;
  img {
    max-width: 450px;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }
}
@media (max-width: 1024px) {
  .list {
    flex-direction: column;
    &.order {
      .content {
        order: 1;
      }
      .photo {
        order: 2;
      }
    }
  }
  .counts {
    margin-top: 20px;
    order: 1;
  }
}
</style>
