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
        <div
          class="input__block-wrap"
          :class="errors[0] ? 'error' : ''"
          @click="dropdownVisible = !dropdownVisible"
          v-on-click-outside:excludedClass="hideSelectDropdown"
        >
          <div class="input__block-append hide-password">
            <i class="fa fa-angle-down"></i>
          </div>
          <input
            ref="input"
            readonly="readonly"
            :disabled="disabled"
            :value="value"
            @input="inputValue"
            v-bind="$attrs"
            :type="type"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="input__block-input"
          />
          <div class="dropdown-items" :class="dropdownVisible ? 'active' : ''">
            <div
              v-for="item in selectOptions"
              :key="item.id"
              @click="selectItem(item)"
              class="dropdown-item"
              :class="item.name === value ? 'active' : ''"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error">{{ errors[0] }}</span>
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
  name: "BaseSelect",
  components: { ValidationProvider },
  props: {
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
    placeholder: {
      type: String,
    },
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
    optionsProp: {
      type: Array,
      default: () => [
        {
          name: "Something",
          id: 0,
        },
      ],
    },
  },
  data() {
    return {
      selectOptions: [],
      dropdownVisible: false,
    };
  },
  computed: {},
  methods: {
    inputValue(event) {
      this.$emit("input", event.target.value);
    },
    changeValue(event) {
      this.$emit("change", event.target.value);
    },
    focus() {
      this.$refs.input.focus();
    },
    hideSelectDropdown() {
      this.dropdownVisible = false;
    },
    selectItem(item) {
      this.selectedValue = item;
      this.dropdownVisible = false;
      this.$emit("input", item.name);
      this.$emit("change", item.name);
      this.$emit("itemSelected", item);
      this.dropdownVisible = false;
    },
  },
  mounted() {
    this.selectOptions = this.optionsProp;
    if (this.autofocus) {
      this.focus();
    }
  },
  watch: {
    optionsProp() {
      this.selectOptions = [];
      this.selectOptions = this.optionsProp;
    },
  },
};
</script>
<style scoped lang="scss">
.input__block-wrap {
  position: relative;
}
.input__block-input {
  -webkit-appearance: none;
  background-image: none;
  position: relative;
}
.dropdown-items {
  position: absolute;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  margin: 10px 0 0;
  opacity: 0;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
  transition: visibility 0s linear 0.2s, opacity 0.2s, transform 0.2s;
  visibility: hidden;
  z-index: 9999;
  &.active {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transition-delay: 0s;
    visibility: visible;
  }
}
.dropdown-item {
  align-items: center;
  border-radius: 6px;
  color: #000;
  display: flex;
  font-size: 12px;
  letter-spacing: -0.46px;
  line-height: 2.5;
  padding: 5px 9px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: #f5f5f7;
    color: #000;
  }
  &.active {
    background-color: #f5f5f7;
  }
}
</style>
