<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__right">
            <div
              class="header__language"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <span>O'zbekcha</span>
              <div class="header__dropdown-language">
                <ul
                  class="header__dropdown-language-wrap"
                  :class="languageDropdown ? 'active' : ''"
                >
                  <li class="header__dropdown-language-item">
                    <span> O'zbekcha </span>
                  </li>
                  <li class="header__dropdown-language-item">
                    <span> Russian </span>
                  </li>
                  <li class="header__dropdown-language-item">
                    <span> English </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="header__account"
              @click="accountDropdown = !accountDropdown"
              v-on-click-outside:excludedClass="hideAccountDropdown"
            >
              <!-- <div class="header__account-photo" v-if="user && user.photo">
                <img :src="baseURL + user.photo" alt="" />
              </div> -->
              <div class="header__account-photo">
                <img src="/images/user.png" alt="" />
                <div>
                  <span class="user-name">Anvar Egamberdiyev</span>
                  <span class="user-role">Talaba</span>
                </div>
              </div>

              <div class="header__dropdown-user">
                <ul
                  class="header__dropdown-user-wrap"
                  :class="accountDropdown ? 'active' : ''"
                >
                  <li class="header__dropdown-user-header">
                    Foydalanuvchi rollari
                  </li>
                  <li class="divider"></li>
                  <li class="header__dropdown-user-item">
                    <router-link to="/" class="header__dropdown-user-link">
                      <span>Kichik Admin</span>
                    </router-link>
                  </li>
                  <li class="header__dropdown-user-item">
                    <router-link to="/" class="header__dropdown-user-link">
                      <span>O‘qituvchi</span>
                    </router-link>
                  </li>
                  <li class="header__dropdown-user-item">
                    <router-link to="/" class="header__dropdown-user-link">
                      <span>Talaba</span>
                    </router-link>
                  </li>

                  <li class="header__dropdown-user-item">
                    <router-link
                      :to="{ name: 'dashboard-profile' }"
                      class="header__dropdown-user-link"
                    >
                      <span>Profil</span>
                    </router-link>
                  </li>
                  <li class="divider"></li>
                  <li class="header__dropdown-user-item logout">
                    <div class="header__dropdown-user-link">
                      <img src="/icons/logout.svg" alt="" class="mr-10" />
                      <span>Chiqish</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import "./header.scss";
import i18n from "@/locals/i18n";
export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      isActive: true,
      languageDropdown: false,
      accountDropdown: false,
      setLang: "O‘zbekcha",
    };
  },
  methods: {
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
      if (lang === "ru") {
        this.setLang = "Russian";
      } else if (lang === "en") {
        this.setLang = "English";
      } else {
        this.setLang = "O'zbek";
      }
    },
    clickMenu() {
      this.isActive = !this.isActive;
      this.$emit("closeNavigationDrawer");
    },
    hideUserDropdown() {
      this.userDropdown = false;
    },
    hideLangDropdown() {
      this.langDropdown = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
