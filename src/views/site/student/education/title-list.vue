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
                <th scope="col">Xolat</th>
                <th scope="col">Kirish</th>
              </tr>
              </thead>
              <transition  name="fade" :duration="2000">
                <tbody  class="table-bordered">
                <tr v-for="(t, index) in this.subjects" :key="index">
                  <td>
                   {{t.name}}
                  </td>
                  <td style="width: 100px">
                    <div :class="t.in_progress?'active true':'active'">

                    </div>
                  </td>
                  <td style="width: 100px !important;">
                    <router-link
                        :to="{ name: 'education-subject-id-files', params: { id: t.id } }"
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
      errorMessage: "",
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
          console.log(res);
          this.subjects = res.results;

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
.active{
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  &.true{
    background: #28C76F ;
    animation: pulse-animation 2s infinite;
  }
}
@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}
</style>
