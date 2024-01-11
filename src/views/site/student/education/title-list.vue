<template>
  <div>
    <div class="lesson-list">
      <div
          v-show="subjects.length>0"
        v-for="(t, index) in this.subjects"
        :key="t.id"
        class="lesson-list-item"
      >
        <div class="name">
          <div class="tr">{{ index + 1 }}.</div>
          <div>
            {{ t.name }}
          </div>
        </div>
        <div class="action">
          <router-link
            :to="{ name: 'education-subject-id-files', params: { id: t.id } }"
          >
            <button class="button-use">Kirish</button>
          </router-link>
          <div v-show="t.in_progress" class="loader"></div>
        </div>
      </div>
      <NoContent v-show="subjects.length<=0"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NoContent from "@/views/site/NoContent.vue";

export default {
  name: "Title-list",
  components: {NoContent},
  props: ["id"],
  data() {
    return {
      subjects: [],
    };
  },
  methods: {
    getSubjects() {
      axios
        .get(
          `https://api.fastlms.uz/api/student/content/topic/get_all/?content_id=${
            this.id
          }&group_id=${localStorage.getItem("group")}`
        )
        .then((res) => {
          this.subjects = res.data.results;
          console.log(res);
        }).catch(()=>{

      })
    },
  },
  mounted() {
    this.getSubjects();
  },
};
</script>
<style scoped lang="scss">
.button-use {
  padding: 10px 20px;
  background: #008bf8;
  border-radius: 5px;
  color: #fff;
  margin-right: 15px;
}
.loader {
  width: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #008bf8;
  box-shadow: 0 0 0 0 #008bf8;
  animation: l2 1.5s infinite linear;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #0004;
  animation: inherit;
  animation-delay: -0.5s;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l2 {
  100% {
    box-shadow: 0 0 0 20px rgba(0, 139, 248, 0.25);
  }
}
.lesson-list {
  margin-top: 40px;
  .lesson-list-item {
    display: flex;
    border-radius: 12px;
    height: 53px;
    background: #f8faff;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 20px;
    margin-bottom: 20px;
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      color: #031b3c;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.32px;
    }
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
}
</style>
