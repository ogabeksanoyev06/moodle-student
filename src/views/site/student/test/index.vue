<template>
  <section>
    <div class="test">
      <div class="test_left">
        <canvas v-show="false"  width="500" height="500" id="fake"></canvas>
        <video v-show="false"  ref="video" width="640" height="480" autoplay></video>
        <canvas v-show="false" ref="canvas" width="640" height="480"></canvas>
        <img v-show="false" id="faceImage" ref="faceImage" alt="Face Image">
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
                  v-for="(item, a) in question.answers"
                  :key="a"
                  @click="selectAnswer(question.id, item.id)"
                  :class="
                    item.is_selected
                      ? 'test_answers-title active'
                      : 'test_answers-title'
                  "
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
          <button
            @click="checkLogOut1"
            style="width: fit-content !important"
            class="btn btn-danger"
          >
            Yopish
          </button>
        </div>
        <ul class="test_pagination">
          <li
            v-for="(question, index) in questions"
            :key="index"
            @click="scrollToQuestion(index)"
            :class="
              question.is_selected
                ? 'test_pagination-item active'
                : 'test_pagination-item'
            "
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
      <template #modalHeader> Testni yakunlamoqchimisiz ?</template>
      <template #modalBody>
        <div @click="closeModal" class="buttons">
          <button class="btn btn-danger">Yo'q</button>
          <button @click="finishTest" class="btn btn-success">Ha</button>
        </div>
      </template>
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
import * as faceapi from "face-api.js";
export default {
  components: { AppModal },
  name: "AppTest",
  data() {
    return {
      questions: [],
      select: [],
      exam_id: "",
      exam_detail: null,
      ip_address: "",
      student_id: "",
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      testTimer: 0,
      activeP: 0,
      showModal: false,
      screenStream: null,
      isScreenSharing: false,
      isStartStream: false,
      isPageInFocus: true,
      videoStream: null,
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
        .post(`test/begin/`, {
          exam: this.exam_id,
          ip_address: this.ip_address,
          student: this.student_id,
        })
        .then((response) => {
          response.forEach((element) => {
            let model = {
              id: element.id,
              name: element.name,
              answers: element.answers.map((answer) => ({
                ...answer,
                is_selected: false,
              })),
              is_selected: false,
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
        is_start: true,
        exam_time: this.exam_detail.exam_time,
        correct_answer: 0,
      };
      await this.$http
        .post(`result/create`, result)
        .then((res) => {
          console.log("res", res);
          this.testTimer = Math.abs(res.exam_time_second);
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
    getDefault() {
      this.$http
        .get(
          `student-select-answers-get/${this.exam_id}/for/${this.student_id}/`
        )
        .then((res) => {
          this.select = res.data;
          this.collectSelect();
        })
        .catch((err) => {
          console.log(err);
        });
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
      let testTimerInterval = setInterval(function () {
        if (_this.testTimer / 60 <= 0) {
          _this.finishTest();
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
    // async fetchLocalIPAddress() {
    //   return new Promise((resolve) => {
    //     window.RTCPeerConnection =
    //         window.RTCPeerConnection ||
    //         window.mozRTCPeerConnection ||
    //         window.webkitRTCPeerConnection;
    //
    //     const pc = new RTCPeerConnection();
    //
    //     pc.createDataChannel("");
    //
    //     pc.createOffer().then((offer) => {
    //       pc.setLocalDescription(offer);
    //     });
    //
    //     pc.onicecandidate = (e) => {
    //       if (e && e.candidate && e.candidate.candidate) {
    //         const ipRegex = /\d+\.\d+\.\d+\.\d+/;
    //         const match = ipRegex.exec(e.candidate.candidate);
    //
    //         if (match) {
    //           const ipAddress = match[0];
    //           resolve(ipAddress);
    //           this.ip_address = ipAddress;
    //         }
    //       }
    //
    //       // Always clear the event handler and close the connection
    //       pc.onicecandidate = null;
    //       pc.close();
    //     };
    //   });
    // },
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

          // Always clear the event handler and close the connection
          pc.onicecandidate = null;
          pc.close();
        };
      });
    },

    async getIPAddressViaService() {
      try {
        // Use a third-party service to get the public IP address
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        // Extract the IP address from the response
        return data.ip;
      } catch (error) {
        console.error("Error fetching IP address via service:", error);
        return null;
      }
    },
    stopScreenSharing() {

      if (this.screenStream) {
        const tracks = this.screenStream.getTracks();
        tracks.forEach((track) => track.stop());
        this.isStartStream = false;
        console.log('Screen sharing stream stopped');
      }
    },
    selectAnswer(questionId, answerId) {
      this.fetchLocalIPAddress().then((ipAddress) => {
        this.ip_address = ipAddress;
      });
      this.$http
        .patch(`student-exam-answers/${this.exam_id}/for/${this.student_id}/`, {
          question: questionId,
          is_selected: answerId,
          ip_address: this.ip_address,
        })
        .then((res) => {
          this.select = res;
          this.collectSelect();
          console.log(this.questions);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    collectSelect() {
      this.select.forEach((pair) => {
        const questionId = pair.question;
        const answerId = pair.is_selected;
        const selectedQuestion = this.questions.find(
          (q) => q.id === questionId
        );
        if (selectedQuestion) {
          selectedQuestion.is_selected = true;
          selectedQuestion.answers.forEach((answer) => {
            answer.is_selected = false;
          });
          const selectedAnswer = selectedQuestion.answers.find(
            (a) => a.id === answerId
          );
          if (selectedAnswer) {
            selectedAnswer.is_selected = true;
          }
        }
      });
    },
    finishTest() {
      this.$http
        .get(`exam-finish/${this.exam_id}/finish/${this.student_id}/`)
        .then(() => {
          this.$router.push({
            name: "test-exams",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    closeModal() {
      this.showModal = false;
      document.body.style.overflowY = "scroll";
    },
    showModalClick() {
      this.showModal = true;
      document.body.style.overflowY = "hidden";
    },
    checkLogOut1() {
      this.$http
        .post("check-logout/", {
          exam: this.exam_id,
          student: this.student_id,
        })
        .then(() => {
          this.$router.push({
            name: "test-exams",
          });
        })
        .catch(() => {});
    },
    checkLogOut2() {
      this.$http
        .post("check-logout/", {
          exam: this.exam_id,
          student: this.student_id,
        })
        .then(() => {

        })
        .catch(() => {});
    },
    handleBeforeUnload(event) {

      const data = {
        exam: this.exam_id,
        student: this.student_id,
      };

      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });
      navigator.sendBeacon("https://api.fastlms.uz/api/check-logout/", blob);
      event.preventDefault();
      if (this.isStartStream) {
        const confirmationMessage = 'You are currently screen sharing. Are you sure you want to leave?';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    },
    async startScreenSharing() {
      try {
        const displayMediaOptions = {
          video: {
            mediaSource: 'screen',
            displaySurface: "monitor"
          }
        };
        if (navigator.mediaDevices.getDisplayMedia) {
          navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then((success) => {
            success.addEventListener('inactive', () => {
              this.isStartStream = false
              console.log('Screen capture stream has stopped');
            });
            this.isStartStream = true
            this.screenStream = success
            this.enterFullscreen()
          }).catch((error) => {
            console.log(error)
          });
        } else {
          navigator.getDisplayMedia(displayMediaOptions).then((success) => {
            success.addEventListener('inactive', () => {
              this.isStartStream = false
              console.log('Screen capture stream has stopped');
            });
            this.isStartStream = true
            this.screenStream = success
            this.enterFullscreen()
          }).catch((error) => {
            console.log(error)
          });
        }

        window.addEventListener('beforeunload', this.handleBeforeUnload);
      } catch (error) {
        console.error('Error accessing screen:', error.message || error);
      }
    },
    async takeScreenShot() {
      try {
        const track = this.screenStream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);
        const bitmap = await imageCapture.grabFrame();
        const canvas = document.getElementById('fake');
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const context = canvas.getContext('2d');
        context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
        const image = canvas.toDataURL();
        const res = await fetch(image);
        const buff = await res.arrayBuffer();
        const file = [
          new File([buff], `photo_${new Date()}.jpg`, {
            type: 'image/jpeg',
          }),
        ];
        console.log(file);
      } catch (error) {
        console.error('Error taking screenshot:', error.message || error);
      }
    },
    checkPageFocus() {
      const isCurrentlyInFocus = document.hasFocus();
      if (!isCurrentlyInFocus && !this.hasTakenScreenshot && this.isStartStream) {
        console.log('Page has lost focus. Taking screenshot...');
        this.takeScreenShot();
        this.hasTakenScreenshot = true;
      } else if (isCurrentlyInFocus && this.hasTakenScreenshot && this.isStartStream) {
        console.log('Page has regained focus. Taking screenshot...');
        this.hasTakenScreenshot = false;
      }

      this.isPageInFocus = isCurrentlyInFocus;

      this.isPageInFocus = document.hasFocus();
    },
    async startVideo() {
      try {
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;
        let faceDetected = false; // Variable to track if a face was previously detected

        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);

        video.srcObject = await navigator.mediaDevices.getUserMedia({ video: {} });
        this.videoStream = video.srcObject;
        video.addEventListener('play', async () => {
          const displaySize = { width: video.width, height: video.height };
          faceapi.matchDimensions(canvas, displaySize);

          setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceDescriptors();

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            if (detections.length <= 0) {
              faceapi.draw.drawDetections(canvas, resizedDetections);
              faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

              if (!faceDetected) {
                // const screenshotDataUrl = this.captureVideoFrame(video, canvas);
                // console.log('Face Detected - Video Frame Data URL:', screenshotDataUrl);
                faceDetected = true;
              }
            } else {
              faceDetected = false;
            }
          }, 100);
        });
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    },
    captureVideoFrame(video, canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    },
    handleResize() {
      this.takeScreenShot()
    },
    stopVideo() {
      if (this.videoStream) {
        const tracks = this.videoStream.getTracks();
        tracks.forEach(track => track.stop());
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
    this.checkLogOut2();
    this.stopVideo();
    this.stopScreenSharing()
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    if(!this.isScreenSharing){
      this.startScreenSharing()
    }
    await this.startVideo()
    this.focusInterval = setInterval(this.checkPageFocus, 500);
    this.checkPageFocus();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    this.fetchLocalIPAddress().then((ipAddress) => {
      this.ip_address = ipAddress;
    });
    await this.getUser();
    await this.getExamDetail();
    await this.resultCreate();
    await this.getExamTest();
    this.setTimer();
    this.getDefault();
  },
  created() {
    this.exam_id = this.$route.params.exam_id;
    this.student_id = localStorage.getItem("student_id");
  },
};
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
}
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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
