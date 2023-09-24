<template>
  <div class="tab__main">
    <div class="tab sticky">
      <h3 class="title">Fanlar</h3>
      <div class="mb-30">
        <button class="tab__item active">Iqtisodiy xavfsizlik</button>
        <button class="tab__item" v-for="item in 6" :key="item">
          Iqtisodiy xavfsizlik
        </button>
      </div>
    </div>
    <div class="tab__body">
      <h3 class="title">Darslar ro'yxati</h3>
      <div class="box" v-for="(item, i) in 8" :key="i">
        <div class="box-header" @click="toggleAccordion(i)">
          <h3 class="box-title">17 October - 23 October</h3>
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
            :class="{ opened: activeIndex === i }"
            v-show="activeIndex === i"
          >
            <div class="box-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus temporibus rerum nostrum minima, dicta vitae
              necessitatibus sint molestiae facere eos dolorum iste pariatur
              ipsum reprehenderit ab provident, quo repudiandae. Debitis.
            </div>
          </div>
        </transition>
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
      activeIndex: 0,
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
  },
};
</script>
<style lang="scss" scoped>
.tab {
  &__main {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 40px;
  }
  &__item {
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 10px;
    color: #919caa;
    font-size: 15px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #008bf8;
      color: #fff;
    }
    &.active {
      background-color: #008bf8;
      color: #fff;
    }
  }
  &__body {
    flex: 1;
  }
}
.box {
  border-radius: 4px;
  border: 1px solid #eaeaeb;
  margin: 0 0 15px;
  transition: box-shadow 0.15s ease-in-out;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  }
  .box-header {
    padding: 20px 25px;
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
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
    padding: 0px 25px;
    padding-bottom: 10px;
    &.opened {
    }
  }
}
.title {
  font-size: 20px;
  color: #232323;
  font-weight: 700;
  margin-bottom: 15px;
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
@media (max-width: 768px) {
  .tab {
    &__main {
      grid-template-columns: 1fr;
    }
  }
}
</style>
