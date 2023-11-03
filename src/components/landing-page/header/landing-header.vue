<template>
  <div class="Lheader" :class="scrolled ? 'fixed' : ''">
    <div class="container">
      <div class="Lheader__inner">
        <router-link to="/" class="d-flex align-center">
          <div>
            <div class="logo">
              <img
                src="https://hemis.uz/_nuxt/img/logo.d0863f9.png"
                alt="logo"
                class="w-full"
              />
            </div>
          </div>
          <p class="logo__title">LMS</p>
        </router-link>
        <ul class="Lheader__menu" v-if="!isDesktopSmall">
          <li
            class="Lheader__menu-item"
            @click="systemDropdown = !systemDropdown"
            v-on-click-outside:excludedClass="hideSystemDropdown"
          >
            <span>Tizim haqida</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99974 10.9762L14.1246 6.85141L15.3031 8.02992L9.99974 13.3333L4.69644 8.02992L5.87496 6.85141L9.99974 10.9762Z"
                fill="white"
              />
            </svg>
            <div class="dropdown-menu" :class="systemDropdown ? 'active' : ''">
              <ul class="dropdown-menu-wrap">
                <li class="dropdown-menu-item">
                  <router-link :to="{ name: 'home' }"> Jamoa </router-link>
                </li>
                <li class="dropdown-menu-item">
                  <router-link :to="{ name: 'home' }">
                    Oliy ta’lim muassasalari
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="Lheader__menu-item">
            <span>Tizim imkoniyatlari</span>
          </li>
          <li class="Lheader__menu-item">
            <span>Integratsiya</span>
          </li>
          <li class="Lheader__menu-item">
            <span>FAQS</span>
          </li>
        </ul>
        <div
          class="Lheader__login"
          @click="$router.push({ path: '/login' })"
        >
          Tizimga kirish
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingHeader",
  components: {},
  data() {
    return {
      systemDropdown: false,
      scrolled: false,
    };
  },
  methods: {
    hideSystemDropdown() {
      this.systemDropdown = false;
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped lang="scss">
.Lheader {
  position: relative;
  z-index: 3;
  background-color: #0152da;
  box-shadow: 0px 2px 10px 0px rgba(2, 64, 168, 0.5);
  &.fixed {
    position: sticky;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 1000;
    .Lheader__inner {
      padding: 20px 0;
    }
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    transition: padding 0.3s ease-in-out;
  }
  &__menu {
    display: flex;
    &-item {
      display: flex;
      align-items: center;
      margin-right: 40px;
      position: relative;
      transition: 0.3s;
      cursor: pointer;
      span {
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #fff;
      }
    }
  }
  &__login {
    display: inline-flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
  }
}

.logo {
  width: 45px;
  height: 45px;
  margin-right: 5px;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.logo__title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.48px;
  line-height: normal;
  color: #fff;
}

.dropdown-menu {
  position: absolute;
  padding-top: 0.75rem;
  z-index: 10;
  top: 100%;
  left: 0;
  width: auto;
  transform: translateY(-10px);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    transform: translateY(0px);
    visibility: visible;
    opacity: 1;
  }
  &-wrap {
    padding: 4px;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  &-item {
    & > * {
      margin: 0;
      padding: 5px 12px;
      color: rgba(0, 0, 0, 0.88) !important;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 4px;
      white-space: nowrap;
    }
    & > :hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
