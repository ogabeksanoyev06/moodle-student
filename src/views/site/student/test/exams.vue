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
                  <th scope="col">Natija</th>
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
                    <td></td>
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
                      <button
                        :disabled="item.is_active && item.exam.exam_status && item.is_finish"
                        class="btn btn-success w-100"
                        @click="goToTest(item.exam.id, item.id)"
                      >
                        Boshlash
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "exam-list",
  data() {
    return {
      examList: [],
      errorMessage: "",
      student_id: null,
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
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    await this.getUser();
    this.student_id = this.user.id;
    localStorage.setItem("student_id", this.student_id);

    await this.getExamList();
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
