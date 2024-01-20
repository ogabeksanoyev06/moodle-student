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
                <th scope="col">Dars xonaga kirish</th>
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
                  <td style="width: 250px">
                    <button @click = "enterBBB(t.topic_bigbluebutton,t.id)" class="btn btn-success ">Dars xonaga kirish</button>
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


import {mapGetters} from "vuex";

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
    enterBBB(id,mid){
      this.$http.get(`student/topic/bigbluebutton/?bbb_id=${id}&group_id=${this.user.group.id}&topic_id=${mid}`).then(()=>{
        this.join(id)
      }).catch(()=>{

      })
    },
    join(id){
      this.$http.post(`bigbluebutton/join/attendee/`, {
          username: this.user.full_name,
          id: id
        }).then((res) => {
          window.open(res.url)
        }).catch(() => {
          this.errorNotification("Dars xona mavjud emas")
        })
    },
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
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.getSubjects();
    this.getUser();

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
