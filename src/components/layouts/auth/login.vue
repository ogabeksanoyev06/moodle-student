<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__content">
        <div class="auth__wrap">
          <router-link :to="{ name: 'landing-page' }">
            <div class="auth__logo">
              <img src="/svg/smallLogo.svg" alt="" class="mb-5" />
            </div>
          </router-link>
          <AppText weight="600" size="14" class="color-text-grey mb-20">
            Toshkent Moliya Instituti
          </AppText>
          <AppText weight="600" size="12" class="color-text-grey mb-20">
            Moodle OTM axborot tizimi
          </AppText>
          <ValidationObserver v-slot="{ handleSubmit }" class="w-100">
            <form @submit.prevent="handleSubmit(loginToSystem)">
              <div class="form-group">
                <base-input
                  type="text"
                  vid="ID"
                  rules="required"
                  placeholder="Talaba ID"
                  v-model="request.login"
                >
                  <template slot="append">
                    <img src="/icons/account.svg" alt="" />
                  </template>
                </base-input>
              </div>
              <div class="form-group">
                <base-input
                  id="password"
                  :type="passwordField ? 'text' : 'password'"
                  vid="Parol"
                  rules="required"
                  placeholder="Parol"
                  v-model="request.password"
                >
                  <template #append>
                    <img
                      src="/icons/eye.svg"
                      alt=""
                      @click="confirmationSee"
                      v-if="passwordField"
                    />
                    <img
                      src="/icons/close-eye.svg"
                      alt="close"
                      @click="confirmationSee"
                      v-if="!passwordField"
                    />
                  </template>
                </base-input>
              </div>
              <AppButton
                theme="main"
                type="submit"
                :font-size="14"
                :sides="20"
                :weight="500"
                :height="40"
                :disabled="loading"
                class="login mb-20 w-100"
              >
                Tizimga kirish
              </AppButton>
            </form>
          </ValidationObserver>
        </div>
      </div>
      <div class="auth__photo" v-if="!isDesktopSmall">
        <kinesis-element class="layer" :strength="15">
          <img src="/svg/largeLogo.svg" alt="" />
          <div class="blur"></div>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>
<script>
import AppButton from "../../shared-components/AppButton.vue";
import BaseInput from "../../shared-components/BaseInput.vue";
import { ValidationObserver } from "vee-validate";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { mapActions, mapGetters, mapMutations } from "vuex";
import TokenService from "@/service/TokenService";
import { baseURLHemis } from "@/plugins/axios";
export default {
  name: "AppLogin",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    AppButton,
    BaseInput,
    ValidationObserver,
  },
  data() {
    return {
      request: {
        login: "",
        password: "",
      },
      passwordField: true,
      authError: "",
      errorStatus: false,
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    ...mapActions(["getUser"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    confirmationSee() {
      this.passwordField = !this.passwordField;
      document.getElementById("password").type = this.passwordField
        ? "password"
        : "text";
    },
    loginToSystem() {
      this.loading = true;
      this.$http
        .post(baseURLHemis + "auth/login", this.request)
        .then((data) => {
          if (data.success) {
            TokenService.saveToken(data.data.token);
            this.getUser();
            if (this.user?.educationForm?.code === 14) {
              this.$router.push({ name: "home" });
              this.successNotification("Tizimga muvaffaqiyatli kirildi");
            } else {
              this.errorNotification("Siz tizimdan foydalana olmaysiz!");
              TokenService.removeToken();
            }
          } else {
            this.authError = data.error;
            this.errorNotification(data.error);
          }
        })
        .catch((error) => {
          this.errorNotification(error.response.data.error);
          this.request.login = "";
          this.request.password = "";
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
};
</script>
<style lang="scss" scoped>
.input__block-input {
  border-radius: 15px !important;
}
.auth {
  display: flex;
  align-items: center;
  min-height: 100vh;

  &__content {
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    min-height: 100vh;
  }
  &__wrap {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 6px 6px 15px 0px rgba(188, 188, 188, 0.25);
    padding: 12px 40px;
  }
  &__photo {
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    .layer {
      position: relative;
    }
    .blur {
      position: absolute;
      bottom: 0%;
      left: 0;
      width: 100%;
      height: 40%;
      background: rgba(255, 255, 255, 0.2);
      filter: blur(2px);
      backdrop-filter: blur(10.5px);
    }
  }
}
@media (max-width: 1040px) {
  .auth__content {
    max-width: 100%;
    width: 100%;
    padding: 0 15px;
  }

  .auth__photo {
    max-width: 100%;
    width: 100%;
  }
}
</style>
