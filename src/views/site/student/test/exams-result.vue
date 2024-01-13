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
              <transition name="fade" :duration="2000">
                <tbody class="table-bordered">
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
                    <br/>
                    {{
                      $moment(item.exam.end_time).format("YYYY-MM-DD HH:ss")
                    }}
                  </td>
                  <td>


                    <button
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

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";


export default {
  name: "exam-list",


  data() {
    return {
      examList: [],
      errorMessage: "",
      student_id: null,
      ip_address: ''
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    getExamList() {
      this.loading = true;
      this.$http
          .get(`exam-list-finish/${this.student_id}`)
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

      this.$http.get(`check-attempts/${this.student_id}/for/${exam_id}`).then((res)=>{
        if(res.status){
          this.$router.push({
            name: "test",
            params: {exam_id: exam_id},
          });
        }

      }).catch(()=>{

      })


    },
    goToTestCheck(exam_id) {
      this.$http.post("check-continue/", {
        exam: exam_id,
        student: this.student_id,
        ip_address: this.ip_address
      }).then(() => {
        this.$router.push({
          name: "test",
          params: {exam_id: exam_id},
        });
      }).catch((err) => {
        this.notificationMessage(err.response.data.message, "error");
      })
    },

    async fetchLocalIPAddress() {
      try {
        const ipAddress = await this.getIPAddressViaWebRTC();
        if (ipAddress) {
          return ipAddress;
        }
        const localIPAddress = await this.getIPAddressViaService();
        if (localIPAddress) {
          return localIPAddress;
        }
        return null;
      } catch (error) {
        console.error("Error fetching local IP address:", error);
        return null;
      }
    },

    async getIPAddressViaWebRTC() {
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
            }
          }
          pc.onicecandidate = null;
          pc.close();
        };
      });
    },

    async getIPAddressViaService() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error("Error fetching IP address via service:", error);
        return null;
      }
    },

    goResult(exam_id) {
      this.$router.push({
        name: "test-result-one",
        params: {student_id: this.user.id, exam_id: exam_id},
      });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    this.fetchLocalIPAddress().then((ipAddress) => {
      this.ip_address = ipAddress
    });
    await this.getUser();
    this.student_id = this.user.id;
    localStorage.setItem("student_id", this.student_id)
    await this.getExamList();
  },

  created() {
  },

};
</script>

<style lang="scss" scoped></style>
