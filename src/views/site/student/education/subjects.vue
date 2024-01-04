<template>
  <div class=" list-subjects">

      <div  v-for="item in subjects" :key="item.id" class="subject-list-card">
        <div class="header-card">
          <div class="title-card">{{item.subject_id.name}}</div>
          <div class="subtitle">
            <span>{{item.subject_id.subjectgroup.name}}</span> | <span>{{item.curriculum_id.markingsystem.gpa_limit}}</span>
          </div>
        </div>
        <div class="body-card">
          <div class='card-body-section'>
            <div class="title-section">
              Maruza soni
            </div>
            <div class="info-section">
              <div class="tag">
                {{item.topic_count}}
              </div>
              <div class="info">
                <img width="13" height="13" src="/svg/amountLecture.svg" alt=""/>
              </div>
            </div>
          </div>
          <div class='card-body-section'>
            <div class="title-section">
              Video darsliklar
            </div>
            <div class="info-section">
              <div class="tag">
                {{item.video_count}}
              </div>
              <div class="info">
                <img width="13" height="13" src="/svg/vidio.svg" alt=""/>
              </div>
            </div>
          </div>
          <div class='card-body-section'>
            <div class="title-section">
              Topshiriqlar soni
            </div>
            <div class="info-section">
              <div class="tag">
                {{ item.task_count}}
              </div>
              <div class="info">
                <img width="13" height="13" src="/svg/user.svg" alt=""/>
              </div>
            </div>
          </div>
          <router-link :to="{name:'education-subject-id',params:{id:item.id}}" >
            <div class="footer-card">

              <button class="button-card">
                Kirish
              </button>

            </div>
          </router-link>
        </div>
      </div>

  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EducationSubjects",
  data() {
    return {
      subjects:[]
    };
  },
  methods: {
    getSubjects(){
      axios.get(`https://api.fastlms.uz/api/student/content/get_all_active/?group_id=${localStorage.getItem('group')}`).then((res)=>{
        console.log(res)

        this.subjects=res.data.results
        console.log(this.subjects.length)
      })
    },
    goToLink(id) {
      this.$router.push({
        name: "education-subject-id",
        params: { subject_id: id },
      });
    },
  },
  mounted() {
    this.getSubjects()
  }
};
</script>
<style scoped lang="scss">
.list-subjects{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

}
.subject-list-card{
  background: #008BF8;
  max-width: 281px;
  width: 100%;
  border-radius: 20px;

  .header-card{
    padding: 24px;
    box-sizing: border-box;
    .title-card{
      color: #F2F3F8;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.32px;
    }
    .subtitle{
      margin-top: 3px;
      color:  #F2F3F8;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.24px;
    }

  }
  .body-card{
    border-top-left-radius: 0 !important;
    border-radius: 20px;
    padding: 24px;
    box-sizing: border-box;
    background: #fff;
    .card-body-section{
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-section{
        color: #919CAA;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.28px;
      }
      .info-section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .tag{
          display: inline-flex;
          padding: 0 8px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
          border-radius: 100px;
          background:  #008BF8;
          color: #FFF;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.2px;
        }
      }
    }
    .footer-card{
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      .button-card{
        height: 24px;
        width: 100%;
        border-radius: 12px;
        background:  linear-gradient(133deg, #008BF8 0.82%, #0043A7 99.18%);
        color:  #F2F3F8;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.24px;
      }
    }
  }
}
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
