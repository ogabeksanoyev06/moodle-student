<template>
  <div class="profile">
    <app-loading v-if="loading" />
    <div class="box box__info">
      <div class="box__header">
        <h3 class="title">Mening profilim</h3>
      </div>
      <div class="box__body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(profileUpdate)">
            <div class="box__inner">
              <div class="box__inner-left">
                <base-input
                  type="text"
                  vid="Ismi º"
                  rules="required"
                  label="Ismi º"
                  placeholder="Ismi º"
                  v-model="user.first_name"
                  disabled
                />
                <base-input
                  type="text"
                  vid="Familiya º"
                  rules="required"
                  label="Familiya º"
                  placeholder="Familiya º"
                  v-model="user.second_name"
                  disabled
                />
                <base-input
                  type="text"
                  vid="Login"
                  rules="required"
                  label="Login"
                  placeholder="Login"
                  v-model="user.student_id_number"
                  disabled
                />
                <base-input
                  type="text"
                  vid="Pasport raqami"
                  rules="required"
                  label="Pasport raqami"
                  placeholder="Pasport raqami"
                  v-model="user.passport_number"
                  disabled
                />
                <base-input
                  type="text"
                  vid="Email"
                  rules="required|email"
                  label="Email"
                  placeholder="Email"
                  v-model="user.email"
                />
                <base-input
                  type="text"
                  vid="Talaba telefoni"
                  rules="required"
                  label="Talaba telefoni"
                  placeholder="Talaba telefoni"
                  v-mask="'+998 ## ###-##-##'"
                  v-model="user.phone"
                />
                <br />
                <div class="checkbo checkbo-ready">
                  <div class="form-group mb-10" style="display: inline-block">
                    <input type="checkbox" id="checkbox" v-model="isChecked" />
                    <label for="checkbox" class="checkbox-label">
                      <span
                        class="checkbox-custom"
                        :class="{ checked: isChecked }"
                      >
                        <i v-if="isChecked" class="fa fa-check"></i>
                      </span>
                      Parolni o'zgartirish
                    </label>
                  </div>
                  <ValidationObserver>
                    <base-input
                      type="text"
                      vid="Parol"
                      :rules="isChecked ? 'required' : ''"
                      label="Yangi parol"
                      placeholder="Yangi parol"
                      v-model="password"
                      :disabled="!isChecked"
                    />
                    <base-input
                      type="text"
                      vid="Parol tasdig‘i"
                      :rules="isChecked ? 'required|confirmed:Parol' : ''"
                      label="Parol tasdig‘i"
                      placeholder="Parol tasdig‘i"
                      v-model="confirmPassword"
                      :disabled="!isChecked"
                    />
                  </ValidationObserver>
                </div>
              </div>
              <div class="box__inner-right">
                <div class="account__photo">
                  <img :src="user.image" alt="" />
                </div>
              </div>
            </div>
            <div class="box__footer">
              <app-button
                theme="main"
                type="submit"
                :height="40"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="10"
                :disabled="btnLoading"
              >
                O‘zgartirish
              </app-button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import AppButton from "@/components/shared-components/AppButton.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import {baseURL, baseURLHemis} from "@/plugins/axios";
import AppLoading from "@/components/shared-components/AppLoading.vue";
export default {
  name: "StudentProfile",
  components: { ValidationObserver, AppButton, BaseInput, AppLoading },
  data() {
    return {
      user: {
        first_name: "Og'abek",
        second_name: "Sanoyev",
        student_id_number: "23567897653989",
        passport_number: "AB7405110",
        email: "ogabeksanoyev06@gmail.com",
        phone: "+998 88 890-88-15",
        image: "",
      },
      password: "",
      confirmPassword: "",
      isChecked: false,
      loading: true,
      btnLoading: false,
    };
  },
  methods: {
    getUser() {
      this.loading = true;
      this.$http
        .get(baseURL+'get/student/' + localStorage.getItem('studentId')+'/')
        .then((data) => {
          console.log('aaa',data)
            this.user = data;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    profileUpdate() {
      let profile = {
        phone: this.user.phone,
        email: this.user.email,
        change_contacts: true,
      };
      if (this.isChecked) {
        profile.password = this.password;
        profile.confirmation = this.confirmPassword;
        profile.change_password = true;
      }
      this.btnLoading = true;
      this.$http
        .post(baseURLHemis + "account/update", profile)
        .then((res) => {
          if (res.success) {
            this.successNotification(res.data.message);
          }
        })
        .catch(() => {
          this.btnLoading = false;
        })
        .finally(() => {
          this.btnLoading = false;
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
.box {
  max-width: 700px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 36px;
  &__inner {
    display: flex;
    &-left {
      flex: 1;
      padding-right: 30px;
    }
    &-right {
      overflow: hidden;
      .account__photo {
        max-width: 200px;
        width: 100%;
        height: auto;
        cursor: pointer;
        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
      }
    }
  }
  &__header {
    position: relative;
    margin-bottom: 15px;
    .title {
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      color: #031b3c;
      line-height: 1;
    }
  }
  &__footer {
    width: 100%;
    text-align: end;
    margin-top: 15px;
  }
}

@media (max-width: 576px) {
  .box {
    max-width: 700px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 24px;
    padding: 36px;
    &__inner {
      flex-direction: column;
      &-left {
        order: 2;
        padding-right: 0;
      }
      &-right {
        order: 1;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &__header {
      margin-bottom: 20px;
      text-align: center;
    }
  }
}
</style>
