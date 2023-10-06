<template>
  <div class="content">
    <div class="info-box">
      <semestr-pagination />
      <div class="">
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
          <base-select type="text" placeholder="Haftani tanlang" />
          <button class="custom__btn mra">
            <img
              src="/icons/angle-left.svg"
              style="transform: rotate(180deg)"
            />
          </button>
        </div>
      </div>
      <div class="grid-block">
        <div class="box" v-for="item in 4" :key="item">
          <div class="box-header">
            <h3 class="box-title">
              Dushanba
              <span class="text-muted"> 30 yanvar, 2023 </span>
            </h3>
          </div>
          <ul class="box-footer">
            <li class="list-group-item" v-for="item in 3" :key="item">
              <div>
                6. BANKLARDA BUXGALTERIYA HISOBI<br />
                <span class="text-center text-muted">E-402</span>
                <span class="separator">/</span>
                <span class="text-center text-muted">Amaliyot</span>
                <span class="separator">/</span>
                <span class="text-center text-muted">FAYZIYEV SH. N.</span>
              </div>
              <span class="pull-right text-muted">13:20</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import SemestrPagination from "@/components/shared-components/SemestrPagination.vue";
export default {
  name: "EducationTimeTable",
  components: { BaseSelect, SemestrPagination },
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
  methods: {},
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
.custom__btn {
  min-width: 100px;
}
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.15);
  }
  .box-header {
    color: #3f8bf1;
    display: block;
    padding: 15px 10px;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    .box-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0px;
      .text-muted {
        font-size: 16px;
        color: #3f8bf1;
      }
    }
  }
  .box-footer {
    padding: 0px;
    background-color: #fff;

    li {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px 15px;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 500;
      &:last-child {
        border-bottom: none;
      }
      .text-muted {
        color: #777777;
        display: inline;
        font-size: 12px;
        font-weight: 400;
      }
      .separator {
        display: inline-block;
        padding: 0 5px;
        color: #e3e3e3;
      }
      .pull-right {
        color: #40d88a;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 991px) {
  .grid-block {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .grid-block.student-week-day {
    grid-template-columns: 2fr 8fr 2fr;
  }
}
@media (max-width: 768px) {
  .grid-block {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .grid-block.student-week-day {
    grid-template-columns: 1fr 10fr 1fr;
  }
}
@media (max-width: 500px) {
  .grid-block.student-week-day {
    grid-template-columns: 1fr;
    button {
      display: none;
    }
  }
}
</style>
