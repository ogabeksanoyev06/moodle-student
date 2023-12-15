<template>
  <nav
      class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow mx-1"
  >
    <div class="navbar-wrapper">
      <div class="navbar-container content">
        <div class="navbar-collapse" id="navbar-mobile">
          <div
              class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
          >
            <ul class="nav navbar-nav">
              <li class="nav-item mobile-menu d-xl-none mr-auto">
                <a
                    class="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                    href="#"
                >
                  <i class="ficon feather icon-menu" />
                </a>
              </li>
            </ul>
          </div>
          <ul class="nav navbar-nav float-right">
            <li class="dropdown dropdown-user nav-item">
              <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  data-toggle="dropdown"
                  href="#"
              >
                <div class="user-nav d-sm-flex d-none">
                  <span class="user-name text-bold-600">
                    {{this.user.first_name}}
                    {{this.user.second_name}}
                  </span>
                  <span>
                    {{this.user.group.name}}
                  </span>
                </div>
                <span>
                  <img
                      :src="this.user.image"
                      alt="avatar"
                      class="round"
                      height="40"
                      width="40"
                  />
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a
                    class="dropdown-item"
                    @click.prevent="$router.push({ name: 'dashboard-profile' })"
                >
                  <i class="feather icon-user" />
                  Mening profilim
                </a>
                <a class="dropdown-item" @click.prevent="logout">
                  <i class="feather icon-power" />
                  Chiqish
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>


import TokenService from "@/service/TokenService";
import {mapActions, mapGetters} from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  data() {
    return {

    };
  },
  methods: {
    ...mapActions(["getUser"]),
    logout() {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      localStorage.removeItem("staffId");
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
   this.getUser()
  },
  created() {},
};
</script>

<style scoped></style>
