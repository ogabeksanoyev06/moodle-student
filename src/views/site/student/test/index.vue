<template>
  <section>
    <div class="test">
      <div class="test_left">
        <div class="test_body" ref="testBody">
          <div class="test_subject">
            <div
              class="test_question"
              v-for="(question, q) in questions"
              :key="q"
              :ref="'question_' + q"
            >
              <div class="test_question-title pt-1">
                <AppText :size="16" :weight="600">
                  <span v-html="question.name"></span>
                </AppText>
              </div>
              <ul class="test_answers pb-1">
                <li
                  class="test_answers-title"
                  v-for="(item, a) in question.answers"
                  :key="a"
                  @click="selectAnswer(question.id, item.id)"
                >
                  <AppText
                    :size="isMobile ? 14 : 16"
                    :line-height="isMobile ? 20 : 24"
                    weight="600"
                    class="mr-1"
                  >
                    {{ answerLabels[a] + ")" }}
                  </AppText>
                  <AppText
                    :size="isMobile ? 14 : 14"
                    :line-height="isMobile ? 20 : 24"
                    weight="500"
                  >
                    <span v-html="item.name"></span>
                  </AppText>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="test_right">
        <div class="test_pagination-top">
          <span
            style="
              font-size: 1.7rem;
              max-width: 200px;
              border: 1px solid #00b74a;
              color: #00b74a;
              padding: 0 10px;
            "
          >
            {{ timerFormat(testTimer) }}
          </span>
        </div>
        <ul class="test_pagination">
          <li
            class="test_pagination-item"
            v-for="(question, index) in questions"
            :key="index"
            @click="scrollToQuestion(index)"
          >
            {{ index + 1 }}
          </li>
        </ul>
        <div class="test_pagination-bottom">
          <button @click="showModalClick">Yakunlash</button>
        </div>
      </div>
    </div>
    <AppModal @close="closeModal" :class="{ visible: showModal }" :width="300">
      <template #modalHeader> Test natijangiz </template>
      <template #modalBody> </template>
    </AppModal>
    <div
      class="overlay"
      :class="{ visible: showModal }"
      @click="closeModal"
    ></div>
  </section>
</template>
<script>
import AppModal from "@/components/shared-components/AppModal.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AppModal },
  name: "AppTest",
  data() {
    return {
      questions: [],
      exam_id: "",
      exam_detail: null,
      ip_address: "",
      student_id: "",
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      testTimer: 0,
      activeP: 0,
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    scrollToQuestion(index) {
      const testElement = this.$refs["question_" + index][0];
      if (testElement) {
        testElement.scrollIntoView({ behavior: "smooth" });
      }
      this.activeP = index;
    },
    async getExamTest() {
      this.loading = true;
      await this.$http
        .get(`test/${this.exam_id}/for/${this.student_id}/`)
        .then((response) => {
          response.forEach((element) => {
            let model = {
              id: element.id,
              name: element.name,
              answers: element.answers,
              is_selected: null,
            };
            this.questions.push(model);
          });
        })
        .catch((err) => {
          this.notificationMessage(err.response.data.message, "error");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async resultCreate() {
      const result = {
        exam: this.exam_id,
        student: this.student_id,
        group: this.user.group.id,
        ip_address: this.ip_address,
        attempts: this.exam_detail.attempts,
        total_count: this.exam_detail.total_count,
        max_score: this.exam_detail.max_score,
        end_time: this.exam_detail.end_time,
        is_start: true,
        exam_time: 0,
        correct_answer: 0,
      };
      await this.$http
        .post(`result/create`, result)
        .then((res) => {
          console.log("sasasasass", res);
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            const errors = err.response.data;
            for (const key in errors) {
              if (Object.hasOwnProperty.call(errors, key)) {
                const errorMessages = errors[key];
                this.notificationMessage(
                  `${key}: ${errorMessages.join(", ")}`,
                  "error"
                );
              }
            }
          }
        })
        .finally(() => {});
    },
    async getExamDetail() {
      await this.$http
        .get(`exam-detail/${this.exam_id}`)
        .then((res) => {
          this.exam_detail = res;
        })
        .catch(() => {})
        .finally(() => {});
    },
    setTimer() {
      let _this = this;
      this.testTimer = 50 * 60;
      let testTimerInterval = setInterval(function () {
        if (_this.testTimer / 60 <= 0) {
          _this.testFinish();
          clearInterval(testTimerInterval);
          return;
        }
        _this.testTimer--;
      }, 1000);
    },
    timerFormat(time) {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
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
          if (!e.candidate) {
            return;
          }

          const ipRegex = /\d+\.\d+\.\d+\.\d+/;
          const ipAddress = ipRegex.exec(e.candidate.candidate)[0];

          resolve(ipAddress);
          this.ip_address = ipAddress;
          pc.onicecandidate = null;
          pc.close();
        };
      });
    },
    //
    selectAnswer(questionId, answerId) {
      this.$http
        .patch(`student-exam-answers/${this.exam_id}/for/${this.student_id}/`, {
          question: questionId,
          answer: answerId,
          is_selected: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    isSelected(questionId, answerId) {
      const selectedQuestion = this.questions.find((q) => q.id === questionId);
      if (selectedQuestion) {
        const selectedAnswer = selectedQuestion.answers.find(
          (a) => a.id === answerId
        );
        return selectedAnswer ? selectedAnswer.isSelected : false;
      }
      return false;
    },
    finishTest() {},

    closeModal() {
      this.showModal = false;
      document.body.style.overflowY = "scroll";
    },
    showModalClick() {
      this.showModal = true;
      document.body.style.overflowY = "hidden";
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    await this.getUser();
    await this.getExamTest();
    await this.getExamDetail();
    await this.fetchLocalIPAddress();
    await this.resultCreate();
    this.setTimer();
  },
  created() {
    this.exam_id = this.$route.params.exam_id;
    this.student_id = localStorage.getItem("student_id");
  },
};
</script>
<style lang="scss" scoped>
section {
  height: calc(100vh - 150px);
}
.test {
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 40px;
  height: 100%;
  overflow: hidden;
  &_left {
    overflow: auto;
  }
  &_right {
  }
  &_question {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin-bottom: 20px;
  }
  &_question-title {
    padding: 5px 15px;
  }
  &_answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
  }
  &_answers-title {
    display: flex;
    align-items: flex-start;
    padding: 5px 15px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #008bf8;
      color: #fff;
    }
    &.active {
      background-color: #00b74a;
      color: #fff;
    }
  }
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  &_pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  &_pagination-bottom {
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border-top: 1px solid #e0e0e0;
    button {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.375rem 1.5rem;
      line-height: 1.5;
      text-align: center;
      background-color: #dc4c64;
      color: #fff;
      box-shadow: 0 8px 9px -4px rgba(0, 0, 0, 0.15),
        0 4px 18px 0 rgba(0, 0, 0, 0.1);
    }
  }

  &_pagination-top {
    background-color: #fff;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }
  &_pagination-item {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #00b74a;
    color: #00b74a;
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: #00b74a;
    }
  }
}
</style>
