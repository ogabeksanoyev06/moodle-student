<template>
  <div class="academic-data">
    <div class="container">
      <semestr-pagination />
      <div class="box box-success">
        <div class="box-header">
          <h3 class="box-title">
            1-semestr ( 12 oktabr, 2020
            <span class="separator">/</span> 27 fevral, 2021 )
          </h3>
        </div>
        <div class="box-body">
          <div class="table-block">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Fanlar</th>
                  <th>Fan turi</th>
                  <th>Yuklama</th>
                  <th>Kredit</th>
                  <th>Reyting / Ball</th>
                  <th>Baho</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in 10" :key="item">
                  <td>{{ i + 1 }}</td>
                  <td>
                    Iqtisodiyotda informatsion kommunikatsion texnologiyalar
                  </td>
                  <td>Majburiy</td>
                  <td>120 soat</td>
                  <td>4.0</td>
                  <td>109 / 91</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SemestrPagination from "@/components/shared-components/SemestrPagination.vue";
export default {
  components: { SemestrPagination },
  name: "EducationAcademicData",
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  border-top: 3px solid #40d88a;
  border-radius: 4px;
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
  }
}
</style>
