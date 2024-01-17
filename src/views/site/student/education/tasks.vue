<template>
  <div class="task-list">
    <Modal
      modal-size="fit-content"
      :modal="isOpenModal"
      @modal-closed="closeModalS"
    >
      <div class="main-menu-item">
        <el-form
          label-position="top"
          :model="task"
          :rules="rules"
          ref="task"
          label-width="100%"
          class="demo-ruleForm"
        >
          <el-form-item prop="file">
            <el-upload
              size="large"
              ref="video"
              class="upload-demo custom-width"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleFileChange"
              :auto-upload="false"
              :limit="1"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              :rows="3"
              placeholder="Xabar yozish"
              v-model="task.comment"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <button
          @click="createTask('task', $event)"
          class="w-100 btn btn-primary waves-effect waves-light"
        >
          Saqlash
        </button>
      </div>
    </Modal>
    <Modal
      :modal="modal"
      :modalSize="'max-width:900px'"
      @modal-closed="closeModalS"
    >
      <div class="card">
        <div class="card-content">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fayl</th>
                    <th scope="col">Izoh</th>
                    <th scope="col" style="white-space: nowrap">
                      Fayl yuklangan vaqt
                    </th>
                  </tr>
                </thead>
                <transition name="fade" :duration="2000">
                  <tbody
                    class="table-bordered"
                    v-if="student_task_fayls.length > 0"
                  >
                    <tr
                      v-for="(item, index) in student_task_fayls"
                      :key="index"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>
                        <button @click="downloadFile(item.student_file)">
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
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </td>
                      <td>
                        <span v-if="item.comment">{{ item.comment }}</span>
                        <span v-else>Izoh mavjud emas</span>
                      </td>

                      <td>
                        {{
                          $moment(item.file_date_sending).format(
                            "YYYY-MM-DD HH:ss"
                          )
                        }}
                      </td>
                    </tr>
                  </tbody>
                  <tbody class="table-bordered" v-else>
                    <tr>
                      <td colspan="4" class="text-center">
                        Yuklangan fayllar mavjud emas!
                      </td>
                    </tr>
                  </tbody>
                </transition>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>

    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sarlavha</th>
                  <th scope="col">Izoh</th>
                  <th scope="col">Boshlanish</th>
                  <th scope="col">Tugash</th>
                  <th scope="col">Fayllar</th>
                  <th scope="col">Fayllar yuklash</th>
                  <th scope="col">Yuklangan fayllar</th>
                  <th scope="col">Ball</th>
                </tr>
              </thead>
              <transition name="fade" :duration="2000">
                <tbody class="table-bordered">
                  <tr v-for="(item, index) in tasks" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.tasks_id.name }}</td>
                    <td>{{ item.tasks_id.comment }}</td>
                    <td>
                      {{
                        $moment(item.tasks_id.start_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        $moment(item.tasks_id.end_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </td>
                    <td>
                      <button @click="down(item)">
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
                      </button>
                    </td>
                    <td>
                      <button
                        v-show="!item.file_status"
                        @click="openModal(item)"
                        class="btn btn-primary waves-effect waves-light"
                      >
                        Fayl yuklash
                      </button>
                      <div v-show="item.file_status">Fayl yuklangan</div>
                    </td>
                    <td>
                      <button
                        @click="openModalFayl(item.id)"
                        class="btn btn-primary waves-effect waves-light"
                      >
                        Ko'rish
                      </button>
                    </td>
                    <td style="text-align: center">
                      {{ item.mark }}
                    </td>
                  </tr>
                </tbody>
              </transition>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sarlavha</th>
                  <th scope="col">Yuklangan fayllar va izohlar</th>
                </tr>
              </thead>
              <transition name="fade" :duration="2000">
                <tbody class="table-bordered">
                  <tr v-for="(item, index) in tasks" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.tasks_id.name }}</td>
                    <td>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fayl</th>
                        <th scope="col">Izoh</th>
                        <th scope="col">Vaqt</th>
                      </tr>
                      <tr
                        v-for="(file, i) in item.student_task_fayls"
                        :key="file.id"
                      >
                        <td>{{ i + 1 }}</td>
                        <td>
                          <button @click="downloadFile(file.student_file)">
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
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span></span>
                          </button>
                        </td>
                        <td>
                          <span v-if="file.comment">{{ file.comment }}</span>
                          <span v-else>Izoh mavjud emas</span>
                        </td>
                        <td>
                          {{
                            $moment(file.file_date_sending).format(
                              "YYYY-MM-DD HH:ss"
                            )
                          }}
                        </td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </transition>
            </table>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "@/components/Modal.vue";
import axios from "axios";

export default {
  name: "tasks-list",
  components: { Modal },
  data() {
    return {
      fileList: [],
      id: "",
      tasks: [],
      isOpenModal: false,
      modal: false,
      student_task_fayls: [],
      task: {
        file: null,
        comment: "",
        student_id: "",
        connect_id: "",
        student_task_fayls: "",
      },
      rules: {
        file: [
          { required: true, message: "Iltimos to'ldiring!", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleFileChange(file) {
      this.task.file = file.raw;
    },
    openModal(id) {
      this.task.connect_id = id;
      this.isOpenModal = true;
    },
    openModalFayl(id) {
      this.modal = true;
      this.tasks.forEach((element) => {
        if (element.id === id) {
          this.student_task_fayls = element.student_task_fayls;
        }
      });
    },
    closeModalS() {
      this.isOpenModal = false;
      this.modal = false;
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    createTask(formName, e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("student_id", this.task.student_id);
      formData.append("student_file", this.task.file);
      formData.append("tasks_id", this.task.connect_id.tasks_id.id);
      formData.append("student_connect_task_id", this.task.connect_id.id);
      formData.append("comment", this.task.comment);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .post("student/task/", formData, {
              headers: {
                "Content-type": "multipart/form-data",
              },
            })
            .then((res) => {
              console.log(res);
              this.$refs[formName].resetFields();
              this.notificationMessage(
                "Fayl muofaqiyatli qo'shildi!",
                "success"
              );
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              this.notificationMessage(err.response.data.message, "error");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    downloadFile(file) {
      axios
        .get(`https://api.fastlms.uz${file}`, { responseType: "blob" }) // Set responseType to 'blob'
        .then((res) => {
          const blob = new Blob([res.data]);
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = file;

          // Faylni yuklash uchun linkni bosish
          link.click();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    down(files) {
      files.tasks_id.task_files?.map((task) => {
        console.log(task);
        this.download(task.task_file);
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
    getTasks(id) {
      console.log("aa");
      this.$http
        .get(`student/topic/tasks/?topic_id=${this.id}&student_id=${id}`)
        .then((res) => {
          console.log(res);
          this.tasks = res.results;
        });
    },
    getUser() {
      this.$http
        .get("get/student/" + localStorage.getItem("studentId") + "/")
        .then((res) => {
          this.task.student_id = res.id;
          this.getTasks(res.id);
        });
    },
    // getTasks(id) {
    //   console.log("aa");
    //   this.$http
    //     .get(`student/topic/tasks/?topic_id=${this.id}&student_id=${id}`)
    //     .then((res) => {
    //       console.log(res);
    //       this.tasks = res.results;
    //     })
    //     .catch(() => {});
    // },
    // getUser() {
    //   this.$http
    //     .get("get/student/" + localStorage.getItem("studentId") + "/")
    //     .then((res) => {
    //       this.task.student_id = res.id;
    //       this.getTasks(res.id);
    //     })
    //     .catch(() => {});
    // },
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.main-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  max-width: 500px;
}
.custom-width {
  max-width: 500px !important;
  width: 100%;
}
.el-upload-dragger {
  max-width: 500px !important;
  width: 100% !important;
}
</style>
