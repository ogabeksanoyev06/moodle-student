<template>
  <div class="exam-list">
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">Nomi</th>
                  <th scope="col">Maks ball</th>
                  <th scope="col">Test davri</th>
                  <th></th>
                </tr>
              </thead>
              <transition v-show="examList.length>0" name="fade" :duration="2000">
                <tbody  class="table-bordered">
                  <tr v-for="(item, index) in examList" :key="index">
                    <td>
                      {{ index + 1 }}. {{ item.exam.name }}.
                      {{ item.exam.curriculum.name }}
                    </td>

                    <td>
                      {{ item.exam.max_score }}
                    </td>
                    <td>
                      {{
                        $moment(item.exam.begin_time).format("YYYY-MM-DD HH:ss")
                      }}
                      <br />
                      {{
                        $moment(item.exam.end_time).format("YYYY-MM-DD HH:ss")
                      }}
                    </td>
                    <td>
<div v-show="!item.is_finish">
  <button
      :disabled="!item.is_active || !item.exam.exam_status"
      v-show="!item.is_start"
      class="btn btn-success w-100"
      @click="goToTest(item.exam.id, item.id)"
  >
    Boshlash
  </button>
  <button :disabled="!item.is_active || !item.exam.exam_status" @click="goToTestCheck(item.exam.id)" class="btn btn-success w-100" v-show="item.is_start">
    Davom etish
  </button>
</div>

                      <button
                          v-show="item.is_finish"
                          class="btn btn-success w-100"
                          @click="goResult(item.exam.id, item.id)"
                      >
                        Natija
                      </button>
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
            <no-content v-show="examList.length<=0" style="margin-top: 5px;margin-bottom: 5px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NoContent from "@/views/site/NoContent.vue";

export default {
  name: "exam-list",
  components: {NoContent},

  data() {
    return {
      examList: [],
      errorMessage: "",
      student_id: null,
      ip_address:''
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    getExamList() {
      this.loading = true;
      this.$http
        .get(`exam-list/${this.student_id}`)
        .then((res) => {
          this.examList = res;
          console.log(res)
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goToTest(exam_id) {
      this.$router.push({
        name: "test",
        params: { exam_id: exam_id },
      });
    },
    goToTestCheck(exam_id) {
      this.$http.post("check-continue/",{
        exam:exam_id,
        student:this.student_id,
        ip_address:this.ip_address
      }).then(()=>{
        this.$router.push({
          name: "test",
          params: { exam_id: exam_id },
        });
      }).catch((err)=>{
        this.notificationMessage(err.response.data.message, "error");
      })
    },

    async fetchLocalIPAddress() {
      return new Promise((resolve) => {
        window.RTCPeerConnection =
            window.RTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.webkitRTCPeerConnection;

        const pc = new RTCPeerConnection();

        pc.createDataChannel("");

        pc.createOffer().then((offer) => {
          pc.setLocalDescription(offer);
        });

        pc.onicecandidate = (e) => {
          if (e && e.candidate && e.candidate.candidate) {
            const ipRegex = /\d+\.\d+\.\d+\.\d+/;
            const match = ipRegex.exec(e.candidate.candidate);

            if (match) {
              const ipAddress = match[0];
              resolve(ipAddress);
              this.ip_address = ipAddress;
            }
          }

          // Always clear the event handler and close the connection
          pc.onicecandidate = null;
          pc.close();
        };
      });
    },

    goResult(exam_id) {
      this.$router.push({
        name: "test-result-one",
        params: { student_id:this.user.id,exam_id: exam_id },
      });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    this.fetchLocalIPAddress();
    await this.getUser();
    this.student_id = this.user.id;
    localStorage.setItem("student_id", this.student_id)
    await this.getExamList();
  },

  created() {},

};
</script>

<style lang="scss" scoped></style>
