<template>
  <div>
    <div>
      <div class="m-0">
        <div class="card-content">
          <div class="card-body">
            <div class="main-item-menu row">
              <div class="col-md-5 card right">
                <div class="header">Natijalar</div>
                <div>
                  <div class="item">
                    <div class="name">Imtihon</div>
                    <div class="main-item">
                      {{ this.exam.exam.name }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">Talaba</div>
                    <div class="main-item">
                      {{ this.exam.student.full_name }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">Guruh</div>
                    <div class="main-item">
                      {{ this.exam.group.name }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">Boshlandi</div>
                    <div class="main-item">
                      {{
                        $moment(this.exam.begin_time).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">Tugadi</div>
                    <div class="main-item">
                      {{
                        $moment(this.exam.end_time).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">To'g'ri</div>
                    <div class="main-item">
                      {{ this.exam.correct_answer }}
                    </div>
                  </div>
                  <div class="item">
                    <div class="name">Foiz</div>
                    <div class="main-item">
                      {{ this.exam.percentage }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 card left">
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
                          <div class="question-an">
                            <span v-html="question.name"></span>
                          </div>
                        </div>
                        <ul class="test_answers pb-1">
                          <li
                            v-for="(item, a) in question.answers"
                            :key="a"
                            :class="
                              item.is_selected && item.is_true
                                ? 'test_answers-title active'
                                : item.is_selected && !item.is_true
                                ? 'test_answers-title wrong'
                                : 'test_answers-title'
                            "
                          >
                            <div
                              class="mr-1"
                              v-show="item.is_selected && item.is_true"
                            >
                              ✔
                            </div>
                            <div
                              class="mr-1"
                              v-show="item.is_selected && !item.is_true"
                            >
                              ✖
                            </div>
                            <div class="answer-one" v-html="item.name"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          <div-->
          <!--              class="d-flex justify-content-center"-->
          <!--              v-if="educationYearP.length > 0"-->
          <!--          >-->
          <!--            <v-pagination-->
          <!--                v-model="currentPage"-->
          <!--                :classes="bootstrapPaginationClasses"-->
          <!--                :page-count="totalSize"-->
          <!--            />-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      examId: "",
      studentId: "",
      exam: {},
      questions: [],
      selected: [],
    };
  },
  methods: {
    getExam() {
      this.$http
        .get(`result/${this.examId}/student/${this.studentId}/`)
        .then((res) => {
          this.exam = res.data;
        })
        .catch(() => {});
    },
    getQuestion() {
      this.$http
        .get(
          `student-select-answers-get-profile/${this.examId}/for/${this.studentId}/`
        )
        .then((res) => {
          res.data.data.json_field.forEach((element) => {
            let model = {
              id: element.id,
              name: element.name,
              answers: element.answers.map((answer) => ({
                ...answer,
                is_selected: false,
                is_true: false,
              })),
            };
            this.questions.push(model);
          });
          this.collectSelect(res.data.data.exam_select_answer);
        })
        .catch(() => {});
    },
    collectSelect(select) {
      select.forEach((pair) => {
        const questionId = pair.question;
        const answerId = pair.is_selected;
        const trueId = pair.true_answer;
        const selectedQuestion = this.questions.find(
          (q) => q.id === questionId
        );
        if (selectedQuestion) {
          selectedQuestion.answers.forEach((answer) => {
            answer.is_selected = false;
            answer.is_true = false;
          });

          const selectedAnswer = selectedQuestion.answers.find(
            (a) => a.id === answerId
          );
          if (selectedAnswer) {
            selectedAnswer.is_selected = true;
          }

          const selectedAnswerTrue = selectedQuestion.answers.find(
            (a) => a.id === trueId
          );
          if (selectedAnswerTrue) {
            selectedAnswerTrue.is_true = true;
          }
        }
      });
      console.log(this.questions);
    },
  },
  created() {
    this.examId = this.$route.params.exam_id;
    this.studentId = this.$route.params.student_id;
  },
  mounted() {
    this.getExam();
    this.getQuestion();
  },
};
</script>
<style lang="scss" scoped>
.header {
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}
.card {
  padding: 5px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 5px;
  .name {
    font-weight: 700;
  }
  .main-item {
    font-size: 12px;
    width: 70%;
  }
  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.09);
  }
}
.main-item-menu {
  display: flex;
  justify-content: space-between;
}
.right {
  margin-left: -5px;
  height: fit-content;
}

.test_left {
  overflow: auto;

  .test_question {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin-bottom: 20px;
  }
  .test_question-title {
    padding: 5px 15px;
  }
  .test_answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
  }
  .test_answers-title {
    display: flex;
    align-items: flex-start;
    padding: 5px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #008bf8;
      color: #fff;
    }
    &.active {
      background-color: #00b74a;
      color: #fff;
    }
    &.wrong {
      background-color: red;
      color: #fff;
    }
  }
}
.question-an {
  font-weight: 600;
}
li {
  list-style: none;
}
</style>
