<template>
  <div class="list-subjects">
    <div v-for="item in subjects" :key="item.id" class="subject-list-card">
      <div class="header-card">
        <div class="title-card">{{ item.subject_id.name }}</div>
        <div class="subtitle">
          <span>{{ item.subject_id.subjectgroup.name }}</span> |
          <span>{{ item.curriculum_id.markingsystem.gpa_limit }}</span>
        </div>
      </div>
      <div class="body-card">
        <div class="card-body-section" @click="goToLink(item.id)">
          <div class="title-section">Resruslar</div>
          <div class="info-section">
            <div class="tag">
              {{ item.topic_count }}
            </div>
            <div class="info">
              <img width="13" height="13" src="/svg/amountLecture.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="card-body-section" @click="goToLinkTask(item.id)">
          <div class="title-section">Topshiriqlar soni</div>
          <div class="info-section">
            <div class="tag">
              {{ item.task_count }}
            </div>
            <div class="info">
              <img width="13" height="13" src="/svg/user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EducationSubjects",
  data() {
    return {
      subjects: [],
    };
  },
  methods: {
    getSubjects() {
      this.$http
        .get(
          `student/content/get_all_active/?group_id=${localStorage.getItem(
            "group"
          )}`
        )
        .then((res) => {
          console.log(res);
          this.subjects = res.results;
          console.log(this.subjects.length);
        });
    },
    goToLink(id) {
      this.$router.push({
        name: "education-subject-id",
        params: { id: id },
      });
    },
    goToLinkTask(id) {
      this.$router.push({
        name: "education-subject-tasks",
        params: { id: id },
      });
    },
  },
  mounted() {
    this.getSubjects();
  },
};
</script>
<style scoped lang="scss">
.list-subjects {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.subject-list-card {
  max-width: 350px;
  width: 100%;
  border-radius: 4px;

  .header-card {
    padding: 24px;
    background: #008bf8;
    box-sizing: border-box;
    .title-card {
      color: #f2f3f8;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.32px;
    }
    .subtitle {
      margin-top: 3px;
      color: #f2f3f8;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.24px;
    }
  }
  .body-card {
    border-top-left-radius: 0 !important;
    box-sizing: border-box;
    background: #fff;
    border-radius: 0 0 4px 4px;
    .card-body-section {
      padding: 10px 15px;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      &:last-of-type {
        border-bottom: none;
      }
      .title-section {
        color: #919caa;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.28px;
      }
      .info-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .tag {
          display: inline-flex;
          padding: 0 8px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
          border-radius: 100px;
          background: #008bf8;
          color: #fff;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.2px;
        }
      }
    }
    .footer-card {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      .button-card {
        height: 40px;
        width: 100%;
        background: linear-gradient(133deg, #008bf8 0.82%, #0043a7 99.18%);
        color: #f2f3f8;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
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
