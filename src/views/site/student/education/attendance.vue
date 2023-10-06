<template>
  <div class="content">
    <semestr-pagination />
    <div class="box">
      <div class="box-header">
        <div class="grid-block-4 mla">
          <div></div>
          <div></div>
          <base-select
            type="text"
            vid="Fakultet"
            :options-prop="faculty"
            placeholder="O'quv rejani tanlang"
          />
          <base-input type="text" placeholder="Fan / Xodim bo'yicha qidirish" />
        </div>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Semestr</th>
                <th>Dars sanasi</th>
                <th>Fanlar</th>
                <th>Mashg'ulot</th>
                <th>Sababli</th>
                <th>Soatlar</th>
                <th>Xodim</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in 10" :key="i">
                <td>sasas</td>
                <td>sasa</td>
                <td>Mahalliy</td>
                <td>sasas</td>
                <td>sasa</td>
                <td>Mahalliy</td>
                <td>sasas</td>
                <td>sasa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseSelect from "@/components/shared-components/BaseSelect.vue";
import BaseInput from "@/components/shared-components/BaseInput.vue";
import SemestrPagination from '@/components/shared-components/SemestrPagination.vue';
export default {
  components: { BaseSelect, BaseInput, SemestrPagination },
  name: "EducationAttendance",
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box-header {
  padding: 15px 0;
}
</style>
