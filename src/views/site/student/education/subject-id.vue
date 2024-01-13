<template>
  <div class="lesson-view" style="padding-bottom: 30px">
    <div>
      <div class="player-container">
        <vue-core-video-player
          cover="./svg/prewiew.svg"
          :autoplay="false"
          :src="`https://api.fastlms.uz${this.videoRef}`"
        ></vue-core-video-player>
      </div>
      <div class="list-chips">
        <div v-for="(item, index) in video" :key="index">
          <button
            @click="perform(item)"
            :class="videoContentId === item?.id ? 'chips active' : 'chips'"
          >
            <div>{{ index + 1 }} -</div>
            <div>
              {{ item?.name }}
            </div>
          </button>
        </div>
      </div>

      <div
        class="lesson-additionals-card mt-20"
        style="padding-top: 22px; padding-bottom: 0px"
      >
        <div class="d-flex justify-space-between align-center">
          <AppText
            :size="isMobileSmall ? 16 : isMobile ? 18 : 24"
            :weight="600"
          >
            Mavzuga oid fayllar
          </AppText>
          <AppButton
            @click="downloadAll"
            theme="secondary"
            :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
            :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
            :height="isMobileSmall ? '40' : '50'"
          >
            Barchasini yuklash
          </AppButton>
        </div>
        <hr style="margin-top: 22px; margin-bottom: 0px" />
        <div
          v-for="(item, index) in file"
          :key="index"
          class="color-black d-block lesson-file-link"
        >
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex justify-start align-center">
              <svg
                class="lesson-file-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_529_2705)">
                  <path
                    d="M19.275 6.975L14.025 1.725C13.875 1.575 13.725 1.5 13.5 1.5H6C5.175 1.5 4.5 2.175 4.5 3V21C4.5 21.825 5.175 22.5 6 22.5H18C18.825 22.5 19.5 21.825 19.5 21V7.5C19.5 7.275 19.425 7.125 19.275 6.975ZM13.5 3.3L17.7 7.5H13.5V3.3ZM18 21H6V3H12V7.5C12 8.325 12.675 9 13.5 9H18V21Z"
                    fill="#000"
                  />
                  <path d="M16.5 16.5H7.5V18H16.5V16.5Z" fill="#000" />
                  <path d="M16.5 12H7.5V13.5H16.5V12Z" fill="#000" />
                </g>
                <defs>
                  <clipPath id="clip0_529_2705">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p class="mb-0">{{ index + 1 }} : {{ item?.name }}</p>
            </div>
            <div
              style="cursor: pointer"
              @click="download(item.file_file)"
              class="d-flex align-center gap-10"
            >
              <svg
                class="lesson-download-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_529_2734)">
                  <path
                    d="M19.5 18V21H4.5V18H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V18H19.5Z"
                    fill="#000"
                  />
                  <path
                    d="M19.5 10.5L18.4425 9.4425L12.75 15.1275V1.5H11.25V15.1275L5.5575 9.4425L4.5 10.5L12 18L19.5 10.5Z"
                    fill="#000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_529_2734">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import axios from "axios";
export default {
  name: "subject-id",
  props: ["id"],
  components: { AppButton },
  data() {
    return {
      file: [],
      video: [],
      videoContentId: null,
      drawer: false,
      subjectId: null,
      videoRef: JSON.parse(localStorage.getItem("videoContent"))?.vide_file,
      title: JSON.parse(localStorage.getItem("videoContent"))?.name,
    };
  },
  methods: {
    downloadAll() {
      this.file?.map((temp) => {
        this.download(temp.file_file);
      });
    },
    download(file) {
      axios
        .get(`https://api.fastlms.uz${file}`, { responseType: "blob" }) // Set responseType to 'blob'
        .then((res) => {
          this.handleDownloadResponse(res, file);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    handleDownloadResponse(response, file) {
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      const filename = file.split("/").pop();
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    },

    playerStateChanged() {
      //console.log(event)
    },
    updateVideoSource() {
      const videoElement = this.$refs.videoPlayer;
      if (videoElement) {
        videoElement.src = `https://api.fastlms.uz${this.videoRef}`;
        videoElement.load();
      }
    },
    perform(item) {
      this.videoRef = item?.vide_file;
      this.title = item?.name;
      localStorage.setItem("videoContent", JSON.stringify(item));
      console.log(item);
      this.videoContentId = JSON.parse(
        localStorage.getItem("videoContent")
      )?.id;
    },
    getSubjects() {
      console.log("test");
      this.$http
        .get(`student/content/topic/one/?topic_id=${this.id}`)
        .then((res) => {
          console.log("res", res);
          this.file = res.results.topic_files;
          this.video = res.results.topic_videos;
          console.log(localStorage.getItem("videoContent"));
          if (
            localStorage.getItem("videoContent") === null ||
            localStorage.getItem("videoContent") === undefined
          ) {
            this.videoRef = res.results.topic_videos[0]?.vide_file;
            this.title = res.results.topic_videos[0]?.name;
            localStorage.setItem(
              "videoContent",
              JSON.stringify(res.results.topic_videos[0])
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {},
  watch: {
    videoRef(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.updateVideoSource();
      }
    },
  },
  mounted() {
    this.videoContentId = JSON.parse(localStorage.getItem("videoContent"))?.id;
    this.getSubjects();
    this.subjectId = this.$route.params.subject_id;
  },
  created() {},
};
</script>

<style lang="scss">
.list-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.chips {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.41);
  border-radius: 30px;
  &.active {
    border: 2px solid #008bf8;
  }
}
.button-use {
  padding: 10px 20px;
  background: #008bf8;
  border-radius: 5px;
  color: #fff;
  margin-right: 15px;
}
.el-drawer.ltr,
.modules-body {
  flex: 1;
}
.modules-sidebar-wrapper {
  .modules-name {
    font-weight: 500;
    font-size: 22px;
    line-height: 109%;
    letter-spacing: -0.02em;
    color: #000;
  }
  .modules-number {
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #222;
    border: 1px solid #000;
    border-radius: 173.134px;
    padding: 9px 16px;
    margin-left: 18px;
  }
  .course-modules-parts li {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #222;
    padding: 24px 12px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.35s;
    &:hover {
      box-shadow: inset -3px 0 10px 0 rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: inset -3px 0 10px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: inset -3px 0 10px 0 rgba(0, 0, 0, 0.15);
    }
    .lesson-duration {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #222;
      margin-bottom: 0;
      white-space: nowrap;
    }

    .lesson__status__wrapper {
      column-gap: 10px;
    }
  }
}
.modules-sidebar-header {
  flex: auto;
  margin-right: 12px;
}

.lesson-view .d-grid {
  display: grid;
  grid-template-columns: 2fr 23fr;
}
.lesson-view-to-back-icon {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 30px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lesson-view-open-bar-icon {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 30px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
}
.lesson-view-header-title {
  font-weight: 600;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #000;
  margin-bottom: 43px;
  margin-top: 5px;
}
//
.lesson-additionals-card {
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.06);
  padding: 10px;
}
.lesson-additionals-card hr {
  height: 2.5px;
  background-color: #000;
  opacity: 1;
  border: none;
  box-sizing: border-box;
  margin: 30px 0;
}
.lesson-file-link {
  border-bottom: 1px solid #000;
  padding: 30px 0;
  transition: 0.1s;
  &:last-child {
    border: none;
  }
}
.lesson-file-link p {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #000;
  margin-left: 8px;
  transition: 0.1s;
}
.file-size {
  font-size: 14px;
  font-weight: 500;
  color: #40d88a;
  cursor: default;
}
.lesson-file-link:hover .lesson-download-icon {
  animation: downloadIcon 0.5s ease-in;
}
//
.video-ruminant-btn {
  font-size: 14px;
  border-radius: 6px;
  padding: 12px 24px;
  border: 1px solid #b7eb8f;
  background: transparent;
  color: #5ccc2b;
  transition: 0.2s linear;
  font-family: inherit;
}
.video-ruminant-btn:hover {
  color: #389e0d;
  background: #e8f5da;
  border-color: transparent;
}
.video-ruminant-btn:disabled {
  border: transparent;
  color: #bbb;
  background: hsla(0, 0%, 47%, 0.1);
}
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (max-width: 768px) {
  .modules-sidebar-wrapper {
    .modules-name {
      font-size: 16px;
    }
    .modules-number {
      font-size: 16px;
      padding: 6px 12px;
      margin-left: 10px;
    }
    .course-checked-icon {
      width: 18px;
    }
  }
  .lesson-view .d-grid {
    grid-template-columns: 2fr;
  }
}
@keyframes downloadIcon {
  0% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-6px);
  }
  70% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
}
.player-container {
  margin-bottom: 5px;
  width: 100% !important;
  height: 70vh;
}
</style>
