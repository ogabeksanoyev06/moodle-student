<template>
  <div class="content">
    <div class="info-box box-mini">
      <div class="info-box__inner">
        <div class="info-box__left">
          <div class="info-box-icon">
            <i class="fa fa-file"></i>
          </div>
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
    </div>
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
export default {
  components: { BaseSelect, BaseInput },
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
