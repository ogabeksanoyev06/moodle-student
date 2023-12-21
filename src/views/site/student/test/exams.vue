<template>
  <div class="exam-list">
    {{ user }}
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">Nomi</th>
                  <th scope="col">O'quv yili</th>
                  <th scope="col">Guruhlar</th>
                  <th scope="col">Savollar</th>
                  <th scope="col">Boshlanish</th>
                  <th scope="col">Tugash</th>
                  <th scope="col">Vaqti</th>
                  <th scope="col">Faol</th>
                </tr>
              </thead>
              <transition name="fade" :duration="2000">
                <tbody class="table-bordered">
                  <tr v-for="(tariff, index) in 10" :key="index">
                    <td></td>
                    <td></td>
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
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async mounted() {
    await this.getUser();
    this.student_id = this.user.student_id_number;
    await this.getExamList();
  },
};
</script>

<style lang="scss" scoped></style>
