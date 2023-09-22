<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
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
          <p class="logo__title">Moodle</p>
        </router-link>
        <ul class="header__menu">
          <li
            class="header__menu-item"
            @click="systemDropdown = !systemDropdown"
            v-on-click-outside:excludedClass="hideSystemDropdown"
          >
            <span>Tizim haqida</span>
            <svg
              width="25"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=""
            >
              <path
                d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                fill="#000"
              ></path>
            </svg>
            <div class="dropdown-menu" :class="systemDropdown ? 'active' : ''">
              <ul class="dropdown-menu-wrap">
                <li class="dropdown-menu-item">
                  <router-link :to="{ name: 'home' }">
                    <span>Jamoa</span>
                  </router-link>
                </li>
                <li class="dropdown-menu-item">
                  <router-link :to="{ name: 'home' }">
                    <span>Oliy ta’lim muassasalari</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="header__menu-item">
            <span>Tizim imkoniyatlari</span>
          </li>
          <li class="header__menu-item">
            <span>Integratsiya</span>
          </li>
          <li class="header__menu-item">
            <span>FAQS</span>
          </li>
        </ul>
        <AppButton
          theme="main"
          :font-size="isMobileSmall ? 14 : isMobile ? 16 : 18"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class="header__login"
          :radius="10"
          @click="$router.push({ path: '/login' })"
        >
          Tizimga kirish
        </AppButton>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "LandingHeader",
  components: { AppButton },
  data() {
    return {
      systemDropdown: false,
    };
  },
  methods: {
    hideSystemDropdown() {
      this.systemDropdown = false;
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  &__menu {
    display: flex;
    &-item {
      display: flex;
      align-items: center;
      margin-right: 40px;
      font-weight: 600;
      line-height: 26px;
      position: relative;
      transition: 0.3s;
      cursor: pointer;
    }
  }
}

.logo {
  width: 2.5rem;
  height: 2.5rem;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.logo__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 0.75rem;
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
      color: rgba(0, 0, 0, 0.88);
      font-weight: 400;
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
