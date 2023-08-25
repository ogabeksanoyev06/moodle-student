<template>
  <div class="content">
    <div class="info-box box-mini">
      <div class="info-box__inner">
        <div class="info-box__left">
          <div class="info-box-icon">A</div>
          <div class="info-box-content">
            <span class="info-box-number"> HBA-30 </span>
          </div>
        </div>
        <div class="info-box__right">
          <div class="info-box-content">
            <label class="isible-xs">Semestr</label>
            <ul class="pagination">
              <li class="plabel"><span class="">Semestr</span></li>
              <li class="active">
                <span> 1 </span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
              <li>
                <span>4</span>
              </li>
              <li>
                <span>5</span>
              </li>
              <li>
                <span>6</span>
              </li>
              <li>
                <span> 7 </span>
              </li>
              <li class="">
                <span>8</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box box-success" v-for="(item, i) in 8" :key="i">
        <div class="box-header" @click="toggleAccordion(i)">
          <h3 class="box-title">
            1-semestr ( 12 oktabr, 2020 <span class="separator">/</span>
            27 fevral, 2021 )
          </h3>
          <div class="box-tools" :class="{ opened: activeIndex === i }">
            <img src="/icons/angle-left.svg" alt="" />
          </div>
        </div>
        <transition
          name="accordion"
          @enter="start"
          @after-enter="end"
          @before-leave="start"
          @after-leave="end"
        >
          <div
            class="box-body"
            :class="{ opened: activeIndex === i }"
            v-show="activeIndex === i"
          >
            <div class="table-block">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Fanlar</th>
                    <th>Fan turi</th>
                    <th>Yuklama</th>
                    <th>Kredit</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, idx) in 10" :key="idx">
                    <td>{{ idx + 1 }}</td>
                    <td>
                      <span class="modal-btn" @click="showModalClick">
                        OʻZBEKISTONNING ENG YANGI TARIXI
                      </span>
                    </td>
                    <td>Majburiy</td>
                    <td>120 soat</td>
                    <td>4.0</td>
                    <td><span class="modal-btn">Batafsil</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <AppModal @close="closeModal" :class="{ visible: showModal }" :width="300">
      <template #modalHeader> INNOVATSION MENEJMENT </template>
      <template #modalBody>
        <div class="table-block">
          <table>
            <thead>
              <tr>
                <th style="width: 70%">Mashg'ulot</th>
                <th style="width: 30%">Yuklama</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in 4" :key="idx">
                <td style="width: 70%">Majburiy</td>
                <td style="width: 30%">120 soat</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th style="width: 70%">Mashg'ulot</th>
                <th style="width: 30%">Yuklama</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in 4" :key="idx">
                <td style="width: 70%">Majburiy</td>
                <td style="width: 30%">120 soat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </AppModal>
    <div
      class="overlay"
      :class="{ visible: showModal }"
      @click="closeModal"
    ></div>
  </div>
</template>
<script>
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "EducationCurriculum",
  components: { AppModal },
  data() {
    return {
      activeIndex: 0,
      showModal: false,
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
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
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  .box-header {
    color: #444;
    padding: 10px 15px;
    position: relative;
    border-bottom: 1px solid #f4f4f4;
    width: 100%;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .box-title {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      color: #919caa;
      line-height: 24px;
      margin-bottom: 0;
    }
    .box-tools {
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        transition: transform 0.3s ease;
      }
      &.opened {
        img {
          transform: rotate(-90deg);
        }
      }
    }
  }
  .box-body {
    &.opened {
    }
  }
}
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
}
</style>
