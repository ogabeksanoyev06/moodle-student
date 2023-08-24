<template>
  <div class="profile">
    <div class="box box__info">
      <div class="box__header">
        <h3 class="title">Mening profilim</h3>
      </div>
      <div class="box__body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(changeUser)">
            <div class="box__inner">
              <div class="box__inner-left">
                <div class="form-group">
                  <label class="control-label"> Ismi </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.firstName"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"> Familiya </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.lastName"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"> Login </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.login"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"> Pasport raqami </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.passport"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"> Email </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.email"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"> Talaba telefoni </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="profile.telefon"
                  />
                </div>
                <br />
                <div class="checkbo checkbo-ready">
                  <div class="form-group form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="1"
                      v-model="isChecked"
                      @onchange="toggleCheckbox"
                    />
                    <div
                      class="checkmaker"
                      :style="
                        isChecked
                          ? 'background-color: #4BAE4F;'
                          : 'background-color: rgba(75, 174, 79, 0.4)'
                      "
                    >
                      <img src="/icons/check.svg" alt="" />
                    </div>
                    <label class="form-check-label" for="1">
                      Parolni o‘zgartirish
                    </label>
                  </div>
                  <ValidationObserver>
                    <div class="form-group">
                      <ValidationProvider
                        name="Parol"
                        :rules="isChecked ? 'required' : ''"
                        v-slot="{ errors }"
                        vid="profile.password"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Yangi parol"
                          v-model="profile.password"
                          :disabled="!isChecked"
                        />
                        <span class="error" v-if="errors.length > 0">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider
                        name="Parol tasdig‘i"
                        :rules="
                          isChecked ? 'required|confirmed:profile.password' : ''
                        "
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Parol tasdig‘i"
                          v-model="profile.passwordConfirmation"
                          :disabled="!isChecked"
                        />
                        <span class="error" v-if="errors.length > 0">
                          {{ errors[0] }}
                        </span>
                      </ValidationProvider>
                    </div>
                  </ValidationObserver>
                </div>
              </div>
              <div class="box__inner-right">
                <div class="account__photo">
                  <img src="/images/account.png" alt="" />
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
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, confirmed } from "vee-validate/dist/rules";
import AppButton from "@/components/shared-components/AppButton.vue";
extend("required", {
  ...required,
  message: "{_field_} bo'sh bo'lishi mumkin emas",
});
extend("confirmed", {
  ...confirmed,
  message: "Parollar mos tushmayabdi",
});
export default {
  name: "StudentProfile",
  components: { ValidationProvider, ValidationObserver, AppButton },
  data() {
    return {
      profile: {
        lastName: "Og'abek",
        firstName: "Sanoyev",
        login: "23567897653989",
        passport: "AB7405110",
        email: "ogabeksanoyev06@gmail.com",
        telefon: "+998 88 890-88-15",
        password: "",
        passwordConfirmation: "",
      },
      isChecked: false,
    };
  },
  methods: {
    changeUser() {
      console.log("tayyyoooooooorrrrr");
    },
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
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
      max-width: 120px;
      max-height: 120px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      border-radius: 50%;
      .account__photo {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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

.form-group {
  position: relative;
  margin-bottom: 15px;
  label {
    display: block;
    max-width: 100%;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
    color: #919caa;
  }
  .error {
    font-size: 12px;
    margin-top: 3px;
    color: #c03f53;
    font-weight: 500;
  }
  &.form-check {
    display: flex;
    align-items: center;
    .form-check-input {
      display: none;
    }
    .form-check-label {
      font-size: 14px;
      font-weight: 500;
      color: #919caa;
      cursor: pointer;
    }
    .checkmaker {
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 7px;
    }
    label {
      display: inline-block;
      font-weight: 500;
      font-size: 14px;
      color: #919caa;
      margin-bottom: 0;
    }
  }
  .form-control {
    display: block;
    width: 100%;
    height: 40px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    color: #031b3c;
    background-color: #f8faff;
    background-clip: padding-box;
    border: 1px solid #bcd2ff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 10px;
    transition: border-color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
    &:focus {
      border-color: #40d88a;
      box-shadow: 0 0 0 3px rgba(64, 216, 138, 0.25);
      background-color: #ffffff;
    }
    &:disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
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
