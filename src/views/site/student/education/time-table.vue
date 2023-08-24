<template>
  <div class="content">
    <div class="info-box">
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
      <div class="mb-20">
        <AppText
          :size="isDesktopSmall ? 14 : 16"
          :line-height="isDesktopSmall ? 20 : 24"
          weight="700"
          class="text-center mb-10"
        >
          Haftani tanlang
        </AppText>
        <div class="grid-block student-week-day">
          <button class="custom__btn mla">
            <img src="/icons/angle-left.svg" alt="" />
          </button>
          <div class="custom-select">
            <div
              class="custom-input custom-input--suffix"
              @click="showSelect = !showSelect"
              v-on-click-outside:excludedClass="hideSelectDropdown"
            >
              <input
                type="text"
                readonly="readonly"
                autocomplete="off"
                class="custom-input__inner"
                v-model="value"
              />
              <span class="custom-input__suffix">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.14645 4.14645C2.34171 3.95118 2.65829 3.95118 2.85355 4.14645L6 7.29289L9.14645 4.14645C9.34171 3.95118 9.65829 3.95118 9.85355 4.14645C10.0488 4.34171 10.0488 4.65829 9.85355 4.85355L6.35355 8.35355C6.15829 8.54882 5.84171 8.54882 5.64645 8.35355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645Z"
                    fill="#989898"
                  ></path>
                </svg>
              </span>
            </div>
            <transition
              name="accordion"
              @enter="start"
              @after-enter="end"
              @before-leave="start"
              @after-leave="end"
            >
              <div class="custom-select__dropdown" v-show="showSelect">
                <div class="custom-scrollbar">
                  <div
                    class="custom-select__dropdown-wrap custom-scrollbar__wrap"
                  >
                    <ul class="custom-select__dropdown-list">
                      <li
                        class="custom-select__dropdown-item"
                        v-for="item in options"
                        :key="item.label"
                        :class="item.value === value ? 'active' : ''"
                        @click="studentsWeek(item)"
                      >
                        <span>{{ item.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <button class="custom__btn mra">
            <img
              src="/icons/angle-left.svg"
              style="transform: rotate(180deg)"
            />
          </button>
        </div>
      </div>
      <div class="grid-block">
        <div class="box box-success" v-for="item in 4" :key="item">
          <div class="box-header">
            <h3 class="box-title display-block">
              Dushanba
              <span class="text-muted"> 30 yanvar, 2023 </span>
            </h3>
          </div>
          <div class="box-footer" v-for="item in 3" :key="item">
            <ul>
              <li class="list-group-item">
                6. BANKLARDA BUXGALTERIYA HISOBI<br />
                <span class="text-center text-muted">E-402</span>
                <span class="separator">/</span>
                <span class="text-center text-muted">Amaliyot</span>
                <span class="separator">/</span>
                <span class="text-center text-muted">FAYZIYEV SH. N.</span>
                <span class="pull-right text-muted">13:20</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationTimeTable",
  components: {},
  data() {
    return {
      value: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      showSelect: false,
    };
  },
  methods: {
    studentsWeek(item) {
      this.showSelect = false;
      this.value = item.value;
    },
    hideSelectDropdown() {
      this.showSelect = false;
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.grid-block.student-week-day {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #d2d6de;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height: 260px;
  &:hover {
  }
  &.box-success {
    border-top-color: #40d88a;
  }
  .box-header {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    .box-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      font-size: 18px;
      line-height: 1;
      font-weight: 500;
      .text-muted {
        font-size: 16px;
        color: #777;
      }
    }
  }
  .box-footer {
    padding: 0px;
    background-color: #fff;
    ul {
      li {
        position: relative;
        display: block;
        padding: 10px 15px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        .text-muted {
          color: #777777;
        }
        .separator {
          display: inline-block;
          padding: 0 10px;
          color: #e3e3e3;
        }
        span:last-child {
          float: right;
        }
      }
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

.custom__btn {
  width: 100px !important;
}
@media (max-width: 991px) {
  .grid-block {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .grid-block.student-week-day {
    display: flex;
    button {
      flex: 2;
    }
    .custom-select {
      flex: 8;
    }
  }
}
@media (max-width: 768px) {
  .grid-block {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .grid-block.student-week-day {
    display: flex;
    button {
      flex: 1;
    }
    .custom-select {
      flex: 10;
    }
  }
}
@media (max-width: 500px) {
  .grid-block.student-week-day {
    display: flex;
    button {
      display: none;
    }
    .custom-select {
      flex: auto;
    }
  }
}
</style>
