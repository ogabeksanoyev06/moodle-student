<template>
  <div>
   




    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
              <tr>
                <th scope="col">Nomi</th>
                <th scope="col">Kirish</th>
              </tr>
              </thead>
              <transition  name="fade" :duration="2000">
                <tbody  class="table-bordered">
                <tr v-for="(t, index) in this.subjects" :key="index">
                  <td>
                    {{t.name}}
                  </td>
                  <td style="width: 100px !important;">
                    <router-link
                        :to="{ name: 'education-tasks-id', params: { id: t.id } }"
                    >
                      <button class="btn btn-success ">Kirish</button>
                    </router-link>
                  </td>

                </tr>
                <tr v-if="errorMessage !== ''">
                  <td class="text-center" colspan="5">
                    {{ errorMessage }}
                  </td>
                </tr>
                </tbody>

              </transition>

            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "Title-list",
  props: ["id"],
  data() {
    return {
      subjects: [],
      errorMessage:''
    };
  },
  methods: {
    getSubjects() {
      this.$http
        .get(
          `student/content/topic/get_all/?content_id=${
            this.id
          }&group_id=${localStorage.getItem("group")}`
        )
        .then((res) => {
          this.subjects = res.results;
          console.log(res);
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message
        });
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
