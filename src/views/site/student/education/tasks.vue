<template>
  <div class="task-list">
    <div class="card">
      {{ fileList }}
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sarlavha</th>
                  <th scope="col">Mashg'ulot</th>
                  <th scope="col">Fayllar yuklash</th>
                </tr>
              </thead>
              <transition name="fade" :duration="2000">
                <tbody class="table-bordered">
                  <tr v-for="(item, index) in 10" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>Elektron hukumat</td>
                    <td>Maruza</td>
                    <td>
                      <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :auto-upload="false"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                      >
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          @click="submitUpload"
                        >
                          Fayl yuklash
                        </button>
                      </el-upload>
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


import {mapActions} from "vuex";

export default {
  name: "tasks-list",
  data() {
    return {
      fileList: [],
      id:''
    };
  },
  methods: {
    ...mapActions(["getUser"]),
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    getTasks(){
      console.log('aa')
      this.$http.get(`student/topic/tasks/?topic_id=${this.id}&student_id=${this.user.id}`).then((res)=>{
        console.log(res)
      })
    },
    getUser(){
      this.$http.get("get/student/"+ localStorage.getItem("studentId") + "/").then(()=>{
        this.getTasks()
      })
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    this.getUser()
  }
};
</script>

<style lang="scss" scoped></style>
