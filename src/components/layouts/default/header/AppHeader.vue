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
              <div
                class="dropdown-menu"
                :class="languageDropdown ? 'active' : ''"
              >
                <ul class="dropdown-menu-wrap">
                  <li class="dropdown-menu-item"><span> O'zbekcha </span></li>
                  <li class="dropdown-menu-item"><span> Russian </span></li>
                  <li class="dropdown-menu-item"><span> English </span></li>
                </ul>
              </div>
            </div>
            <div
              class="header__account"
              @click="accountDropdown = !accountDropdown"
              v-on-click-outside:excludedClass="hideAccountDropdown"
            >
              <div class="header__account-photo">
                <img :src="user.image" alt="" />
                <div class="d-flex flex-column">
                  <span class="user-name">
                    {{ user.short_name }}
                  </span>
                  <span class="user-role">Talaba</span>
                </div>
              </div>
              <div
                class="dropdown-menu"
                :class="accountDropdown ? 'active' : ''"
              >
                <ul class="dropdown-menu-wrap">
                  <li class="dropdown-menu-item">
                    <router-link :to="{ name: 'dashboard-profile' }">
                      <span>Profil</span>
                    </router-link>
                  </li>
                  <li class="dropdown-menu-item">
                    <router-link :to="{ name: 'student-personal-data' }">
                      <span>Shaxsiy ma'lumotlarim</span>
                    </router-link>
                  </li>
                  <li class="dropdown-menu-item" @click="logout">
                    <img src="/icons/logout.svg" class="mr-10" />
                    <span>Chiqish</span>
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
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions(["getUser"]),
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
    hideUserDropdown() {
      this.userDropdown = false;
    },
    hideLangDropdown() {
      this.langDropdown = false;
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "landing-page" });
      this.successNotification("Tizimdan chiqildi");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped></style>
