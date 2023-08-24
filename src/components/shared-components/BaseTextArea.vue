<template>
  <ValidationProvider
    tag="div"
    ref="validationInput"
    class="input__holder"
    :rules="rules"
    :name="label ? label : placeholder"
    :vid="vid"
    v-slot="{ errors }"
    :hideDetails="hideDetails"
  >
    <div class="input__block" :class="disabled ? 'disabled' : ''">
      <label class="input__block-label">
        <span v-if="label" class="input__block-title">{{ label }}</span>
        <div class="input__block-wrap" :class="errors[0] ? 'error' : ''">
          <textarea
            ref="input"
            :disabled="disabled"
            :value="value"
            @input="inputValue"
            @keypress="keyPressValue"
            v-bind="$attrs"
            :type="type"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="input__block-input"
            :class="errors[0] ? 'error' : ''"
          />
        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error"> {{ errors[0] }}</span>
        </div>
      </label>
    </div>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import "../../assets/styles/components/base-input.scss";
extend("required", {
  ...required,
  message: "{_field_}ni kiritish majburiy",
});
export default {
  name: "BaseInput",
  components: { ValidationProvider },
  props: {
    masked: {
      default: false,
    },
    value: {
      default: "",
    },
    label: {
      type: String,
    },
    type: {},
    hideDetails: {
      type: Boolean,
    },
    placeholder: {},
    rules: {},
    vid: {},
    maxlength: {
      default: null,
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    autofocus: Boolean,
  },
  methods: {
    inputValue(event) {
      this.$emit("input", event.target.value);
    },
    keyPressValue(event) {
      this.$emit("keypress", event);
    },
    focus() {
      this.$refs.input.focus();
    },
    showPassword() {
      // if (this.type === "password") {
      //   this.type = "text";
      //   this.btnText = "Hide Password";
      // } else {
      //   this.type = "password";
      //   this.btnText = "Show Password";
      // }
    },
  },
  mounted() {
    if (this.autofocus) {
      this.focus();
    }
  },
};
</script>
<style lang="scss" scoped>
.input__block-input {
  height: auto;
  overflow: auto;
  resize: vertical;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
