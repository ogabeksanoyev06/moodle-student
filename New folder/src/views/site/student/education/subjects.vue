<template>
  <div>
    <ul class="box-list">
      <li
        class="box box-widget widget-user"
        v-for="(item, index) in 3"
        :key="index"
      >
        <div class="widget-user-header">
          <h4 class="widget-user-username">OʻZBEKISTONNING ENG YANGI TARIXI</h4>
          <h5 class="widget-user-desc">Majburiy | 120 soat | 4.0 kredit</h5>
        </div>
        <div class="box-footer">
          <ul class="nav-stacked">
            <li @click="goToLink(index)">
              <span>Resurslar soni</span>
              <span class="pull-right badge bg-blue"> 30 </span>
            </li>
            <li>
              <span> Topshiriqlar soni</span>
              <span class="pull-right badge bg-red"> 0 / 0 </span>
            </li>

            <li>
              <span>Mavzulashtirilgan testlar</span>
              <span class="pull-right badge bg-red"> 0 / 0 </span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "EducationSubjects",
  data() {
    return {};
  },
  methods: {
    goToLink(id) {
      this.$router.push({
        name: "education-subject-id",
        params: { subject_id: id },
      });
    },
  },
};
</script>
<style scoped lang="scss">
.box-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.box {
  position: relative;
  background-color: #008bf8;
  border-radius: 16px;
  filter: drop-shadow(0px 0px 20px #ebedf3);
  max-width: 380px;
  width: 100%;
  &:hover {
    filter: none;
  }
}
.box-footer {
  border-radius: 0px 20px 16px 16px;
  background-color: #fff;
}
.widget-user .widget-user-header {
  padding: 20px;
  min-height: 120px;
  color: #fff;
}
.widget-user .widget-user-username {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 400;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.widget-user .widget-user-desc {
  font-weight: 400;
}
.nav-stacked {
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
    padding: 20px 15px;
    cursor: pointer;
  }
  .badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777777;
    border-radius: 10px;
  }
}
.bg-blue {
  background-color: #008bf8 !important;
}
.bg-red {
  background-color: #dd4b39 !important;
}
</style>
