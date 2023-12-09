<template>
  <div class="modal">
    <div class="modal__content" :style="style" :class="className">
      <div class="modal__wrap">
        <div class="modal__header">
          <span> <slot name="modalHeader"></slot> </span>
          <button class="modal__close" @click="close">
            <img src="/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal__body">
          <slot name="modalBody"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/styles/components/app-modal.scss";

export default {
  name: "AppModal",
  data() {
    return {
      hidden: true,
    };
  },
  props: {
    width: {
      type: [Number, String],
    },
  },
  computed: {
    className() {
      const name = "modal__content--";
      const className = [];

      if (this.width) {
        className.push(name + "wd");
      }
      return className;
    },
    style() {
      const styles = {};
      if (this.width) {
        styles["--wd"] = this.width + "px";
      }
      return styles;
    },
  },
  methods: {
    close() {
      this.hidden = true;
      this.$emit("close");
    },
  },
  async mounted() {
    setTimeout(() => {
      this.hidden = false;
    }, 10);
  },
};
</script>

<style scoped></style>
