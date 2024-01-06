<!--<template>-->
<!--  <div-->
<!--    class="modal fade"-->
<!--    id="modal-component"-->
<!--    tabindex="-1"-->
<!--    role="dialog"-->
<!--    aria-labelledby="modal-component"-->
<!--    style="display: none"-->
<!--    aria-modal="true"-->
<!--  >-->
<!--    <div-->
<!--      class="modal-dialog modal-dialog-centered"-->
<!--      :class="modalSize"-->
<!--      role="document"-->
<!--    >-->
<!--      <div class="modal-content p-0" :style="styleProp">-->
<!--        <div class="modal-header">-->
<!--          <button-->
<!--            type="button"-->
<!--            class="close"-->
<!--            data-dismiss="modal"-->
<!--            aria-label="Close"-->
<!--          >-->
<!--            <span aria-hidden="true">×</span>-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="modal-body p-0">-->
<!--          <slot />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Modal",-->
<!--  props: {-->
<!--    modal: Boolean,-->
<!--    modalSize: {-->
<!--      type: String,-->
<!--      default: "modal-lg",-->
<!--    },-->
<!--    styleProp: {-->
<!--      type: String,-->
<!--      default: "",-->
<!--    },-->
<!--  },-->
<!--  watch: {-->
<!--    modal() {-->
<!--      if (this.modal) {-->
<!--        $("#modal-component").modal("show");-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--  mounted() {-->
<!--    $("#modal-component").on("hidden.bs.modal", (e) => {-->
<!--      this.$emit("modal-closed");-->
<!--    });-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped></style>-->



<template>
  <div
      :class="['modal', 'fade', { 'show': modal }]"
      :id="modalId"
      tabindex="-1"
      role="dialog"
      :aria-labelledby="modalId"
      style="display: none"
      aria-modal="true"
  >
    <div
        class="modal-dialog modal-dialog-centered"
        :class="modalSize"
        role="document"
    >
      <div class="modal-content p-0" :style="styleProp">
        <div class="modal-header">
          <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalApp",
  props: {
    modal: Boolean,
    modalSize: {
      type: String,
      default: "modal-lg",
    },
    styleProp: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      modalId: `modal-component-${Math.random().toString(36).substring(7)}`,
    };
  },
  watch: {
    modal() {
      if (this.modal) {
        $(`#${this.modalId}`).modal("show");
      }
    },
  },
  mounted() {
    $(`#${this.modalId}`).on("hidden.bs.modal", () => {
      this.$emit("modal-closed");
    });
  },
  methods: {
    closeModal() {
      $(`#${this.modalId}`).modal("hide");
    },
  },
};
</script>

<style scoped></style>
