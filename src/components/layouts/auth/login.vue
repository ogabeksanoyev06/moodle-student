<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__content">
        <div class="auth__wrap">
          <SEO :title="salom" />
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
            <form
              @submit.prevent="handleSubmit(loginToSystem)"
              v-if="!faceForm"
            >
              <div class="form-group">
                <base-input
                  type="text"
                  vid="ID"
                  rules="required"
                  placeholder="Talaba ID"
                  v-model="request.login"
                >
                  <template #append>
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
            <form @submit.prevent="handleSubmit(getUserImage)" v-if="faceForm">
              <div class="form-group">
                <base-input
                  type="text"
                  vid="ID"
                  rules="required"
                  placeholder="Talaba ID"
                  v-model="request.login"
                >
                  <template #append>
                    <img src="/icons/account.svg" alt="" />
                  </template>
                </base-input>
              </div>
              <div
                class="form-group"
                style="display: flex; justify-content: end"
              ></div>
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
                Face id orqali kirish
              </AppButton>
            </form>
            <div
                class="overlay"
                :class="{ visible: showModal }"
                @click="closeModal"
            ></div>
            <AppModal
              @close="closeModal"
              :class="{ visible: showModal }"
              :width="500"
            >
              <template #modalHeader> Face Id </template>
              <template #modalBody>
                <FaceId
                  @face-match-result="handleFaceMatchResult"
                  :is-open-camera="showModal"
                  :image="image"
                />
              </template>
            </AppModal>
            <button class="face__btn" @click="faceForm = !faceForm">
              <span v-if="!faceForm" class="d-flex align-center">
                FACE orqali tizimga kirish

                <img src="/icons/camera.svg" alt="" style="max-width: 20px" />
              </span>
              <span v-else>Parol orqali tizimga kirish</span>
            </button>
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
import FaceId from "@/components/shared-components/FaceId.vue";
import AppModal from "@/components/shared-components/AppModal.vue";
import { baseURL } from "@/plugins/axios";
import SEO from "@/SEO.vue";
export default {
  name: "AppLogin",
  components: {
    SEO,
    AppModal,
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    AppButton,
    BaseInput,
    ValidationObserver,
    FaceId,
  },
  data() {
    return {
      request: {
        login: "",
        password: "",
      },
      faceForm: false,
      passwordField: true,
      authError: "",
      errorStatus: false,
      loading: false,
      showModal: false,
      image: "",
      facesMatched: null,
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    ...mapActions([]),

    handleFaceMatchResult(result) {
      this.facesMatched = result;
      if (result === false) {
        console.log(result);
        this.closeModal();
        this.errorNotification("Yuzlar mos kelmaydi!");
      }
      if (result === true) {
        this.closeModal();
        this.successNotification("Yuzlar mos keladi!");
        localStorage.setItem("isLogin", true);
        this.$router.push({ name: "home" });
      }
    },
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    confirmationSee() {
      this.passwordField = !this.passwordField;
      document.getElementById("password").type = this.passwordField
        ? "password"
        : "text";
    },
    async loginToSystem() {
      this.loading = true;
      this.$http
        .post("https://api.fastlms.uz/api/auth/login", this.request)
        .then((data) => {
          console.log(data);
          if (data.success) {
            if (Number(data.data.educationForm.code) === 16) {
              localStorage.setItem("isLogin", true);
              localStorage.setItem("studentId", data.data.student_id_number);
              this.$router.push({ name: "home" });
              this.successNotification("Tizimga muvaffaqiyatli kirildi");
            } else {
              this.errorNotification("Siz tizimdan foydalana olmaysiz!");
            }
          }
        })
        .catch((error) => {
          console.log("error", error);
          this.request.login = "";
          this.request.password = "";
          this.loading = false;
          this.errorNotification(error.response.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async getUserImage() {
      console.log(this.request.login);
      this.$http
        .get(baseURL + "get/student/" + this.request.login + "/")
        .then((data) => {
          console.log(data);
          localStorage.setItem("studentId", this.request.login);
          this.image = data.image.replace("http://", "https://");
          this.showModalClick();
        })
        .catch((er) => {
          this.errorNotification(er.response.data.message);
          this.request.login = "";
          this.request.password = "";
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    closeModal() {
      this.showModal = false;
      document.body.style.overflowY = "scroll";
    },
    showModalClick() {
      this.showModal = true;
      document.body.style.overflowY = "hidden";
    },
  },
  computed: {
    ...mapGetters([]),
  },
  mounted() {
    if (this.facesMatched === false) {
      this.showModal === false;
    }
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
  },
};
</script>
<style lang="scss" >
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
  .modal__wrap{
    .modal__body{
      padding: 0 !important;
    }
  }

}
.face__btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;

  img {
    margin-left: 5px;
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
