<template>
  <div class="lesson-view" style="padding-bottom: 30px">
    <div class="">
      <div class="d-grid">
        <div :style="isMobile ? 'display:none ;' : 'display: block;'">
          <div class="lesson-view-to-back-icon pointer">
            <svg
              class=""
              width="9"
              height="15"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 9L9.5 0.25L10.725 1.475L3.2 9L10.725 16.525L9.5 17.75L0.75 9Z"
                fill="#000"
              />
            </svg>
          </div>
          <div class="lesson-view-open-bar-icon pointer" @click="drawer = true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_529_2697)">
                <path d="M16.5 4.5H3V6H16.5V4.5Z" fill="#000" />
                <path d="M16.5 9H3V10.5H16.5V9Z" fill="#000" />
                <path d="M12 13.5H3V15H12V13.5Z" fill="#000" />
                <path d="M15.75 13.5L21 17.25L15.75 21V13.5Z" fill="#000" />
              </g>
              <defs>
                <clipPath id="clip0_529_2697">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <h3 class="lesson-view-header-title">Mavzu: Soliq haqida</h3>
          <video-player
            :options="videoOptions"
            @player-state-changed="playerStateChanged"
            ref="myPlayer"
            style="width: 100%; object-fit: contain"
          />
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
                theme="secondary"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
                :height="isMobileSmall ? '40' : '50'"
              >
                Barchasini yuklash
              </AppButton>
            </div>
            <hr style="margin-top: 22px; margin-bottom: 0px" />
            <a
              href="#"
              target="_blank"
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
                  <p class="mb-0">Mavzu : Soliq ishi.pdf</p>
                </div>
                <div class="d-flex align-center gap-10">
                  <span class="file-size">3 MB</span>
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
            </a>
            <a
              href="#"
              target="_blank"
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
                  <p class="mb-0">1.3.pdf</p>
                </div>
                <div class="d-flex align-center gap-10">
                  <span class="file-size">3 MB</span>
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
            </a>
          </div>
          <div class="w-100 d-flex justify-space-between py-20">
            <button class="video-ruminant-btn d-flex align-center gap-10">
              <span
                role="img"
                aria-label="double-left"
                rev=""
                class="anticon anticon-double-left"
                style="font-size: 14px"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="double-left"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
                  />
                </svg>
              </span>
              Orqaga
            </button>

            <button
              disabled
              class="video-ruminant-btn d-flex align-center gap-10"
            >
              Oldinga
              <span
                role="img"
                aria-label="double-right"
                rev=""
                class="anticon anticon-double-right"
                style="font-size: 14px"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="double-right"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      :direction="isMobile ? 'btt' : 'ltr'"
    >
      <div class="modules-body">
        <div class="modules-sidebar-wrapper">
          <el-collapse>
            <el-collapse-item v-for="item in 5" :key="item">
              <template slot="title">
                <div class="modules-sidebar-header">
                  <div class="d-flex align-center justify-space-between">
                    <h4 class="modules-name">1. Kirish</h4>
                    <div class="d-flex align-center">
                      <svg
                        class="course-checked-icon ms-4"
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0.25C12.885 0.25 9.83985 1.17372 7.24978 2.90435C4.6597 4.63499 2.64098 7.0948 1.4489 9.97274C0.256824 12.8507 -0.0550783 16.0175 0.552639 19.0727C1.16036 22.1279 2.6604 24.9343 4.86307 27.1369C7.06575 29.3396 9.87213 30.8397 12.9273 31.4474C15.9825 32.0551 19.1493 31.7432 22.0273 30.5511C24.9052 29.359 27.365 27.3403 29.0957 24.7502C30.8263 22.1602 31.75 19.1151 31.75 16C31.75 11.8228 30.0906 7.81677 27.1369 4.86307C24.1832 1.90937 20.1772 0.25 16 0.25ZM13.75 22.2896L8.12501 16.6646L9.91443 14.875L13.75 18.7104L22.0863 10.375L23.8814 12.1591L13.75 22.2896Z"
                          fill="#82D300"
                        />
                      </svg>
                      <span class="modules-number">1-modul</span>
                    </div>
                  </div>
                </div>
              </template>
              <ul class="course-modules-parts">
                <li
                  class="bg-white d-flex align-center justify-space-between open-course"
                  v-for="item in 3"
                  :key="item"
                  @click="drawer = false"
                >
                  <div class="d-flex align-center gap-10">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2325_1840)">
                          <path
                            d="M15 0C6.7285 0 0 6.72914 0 15C0 23.2709 6.7285 30 15 30C23.2715 30 30 23.2709 30 15C30 6.72914 23.2715 0 15 0ZM20.9631 15.5255L12.2132 21.1505C12.1106 21.217 11.9922 21.25 11.875 21.25C11.7725 21.25 11.6687 21.2244 11.576 21.1737C11.3745 21.0639 11.25 20.8539 11.25 20.625V9.375C11.25 9.14613 11.3745 8.93613 11.576 8.82627C11.7737 8.71764 12.0215 8.72432 12.2132 8.84947L20.9631 14.4745C21.1414 14.5892 21.25 14.7876 21.25 15C21.25 15.2124 21.1414 15.4107 20.9631 15.5255Z"
                            fill="#031B3C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2325_1840">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="d-flex flex-column gap-5">
                      <AppText :size="12" :weight="700">
                        Video darslik 1
                      </AppText>
                      <AppText :size="14">Lorem, ipsum dolor.</AppText>
                    </div>
                  </div>

                  <div
                    class="d-flex align-center justify-space-between lesson__status__wrapper"
                    style="white-space: nowrap"
                  >
                    <svg
                      class="course-checked-icon"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0.25C12.885 0.25 9.83985 1.17372 7.24978 2.90435C4.6597 4.63499 2.64098 7.0948 1.4489 9.97274C0.256824 12.8507 -0.0550783 16.0175 0.552639 19.0727C1.16036 22.1279 2.6604 24.9343 4.86307 27.1369C7.06575 29.3396 9.87213 30.8397 12.9273 31.4474C15.9825 32.0551 19.1493 31.7432 22.0273 30.5511C24.9052 29.359 27.365 27.3403 29.0957 24.7502C30.8263 22.1602 31.75 19.1151 31.75 16C31.75 11.8228 30.0906 7.81677 27.1369 4.86307C24.1832 1.90937 20.1772 0.25 16 0.25ZM13.75 22.2896L8.12501 16.6646L9.91443 14.875L13.75 18.7104L22.0863 10.375L23.8814 12.1591L13.75 22.2896Z"
                        fill="#82D300"
                      ></path>
                    </svg>
                    <p class="lesson-duration">14 : 07</p>
                  </div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { videoPlayer } from "vue-vjs-hls";
export default {
  name: "subject-id",
  components: { videoPlayer, AppButton },
  data() {
    return {
      drawer: false,
      subjectId: null,
      videoOptions: {
        autoplay: true,
        controls: true,
        start: 0,
        source: {
          src: "https://example.com/index.m3u8",
          type: "application/x-mpegURL",
        },
        language: "ru-Ru",
        playbackRates: [0.7, 1.0, 1.3, 1.5, 1.7],
        poster: "//vjs.zencdn.net/v/oceans.png",
      },
    };
  },
  methods: {
    playerStateChanged() {
      //console.log(event)
    },
  },
  computed: {},
  watch: {},
  mounted() {
    this.subjectId = this.$route.params.subject_id;
  },
  created() {},
};
</script>

<style lang="scss">
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
</style>
