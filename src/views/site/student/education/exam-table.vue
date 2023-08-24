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
    </div>
    <div>
      <ul class="timeline">
        <ul v-for="item in 5" :key="item">
          <li class="time-label">
            <span class="bg-primary"> Dushanba, 20-mart, 2023 </span>
          </li>
          <li>
            <i class="fa bg-info fa-check"></i>
            <div class="timeline-item">
              <div class="time">
                <span class="time-header">1-on</span>
                <span class="time-icon">
                  <i class="fa fa-clock-o"></i> 13:20
                </span>
              </div>
              <div class="timeline-body">
                Fan: AUDIT<br />
                O'qituvchi: FAYZIYEV SHAXOBIDIN NURUTDINOVICH<br />
                Auditoriya: J-302<br />
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationExamTable",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.timeline {
  position: relative;
  margin: 30px 0 30px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #ddd;
    left: 31px;
    margin: 0;
    border-radius: 2px;
  }
  ul {
    & > li {
      position: relative;
      margin-right: 10px;
      margin-bottom: 15px;
      & > span {
        font-size: 14px;
        font-weight: 500;
        padding: 5px;
        background-color: #fff;
        border-radius: 4px;
        background-color: #00598f !important;
        color: white;
        display: inline-block;
      }
    }
    & li > {
      .timeline-item {
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        background: #fff;
        color: #919caa;
        margin-left: 60px;
        margin-right: 15px;
        position: relative;
        & > .time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f4f4f4;
          color: #919caa;
          padding: 10px;
          font-size: 14px;
          font-weight: 600;
        }
        & > .timeline-body {
          padding: 10px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
        }
      }
      .fa {
        width: 30px;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        position: absolute;
        color: #fff;
        background: #00598f;
        border-radius: 50%;
        text-align: center;
        left: 18px;
        top: 0;
      }
    }
  }
}
</style>
