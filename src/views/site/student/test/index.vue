<template>
  <section>
    <div class="test_title mb-30">
      <AppText :size="isMobileSmall ? 16 : isMobile ? 18 : 20" :weight="600">
        Test Sarlavhasi
      </AppText>
      <span
        style="
          font-size: 1.7rem;
          max-width: 200px;
          border: 1px solid #00b74a;
          color: #00b74a;
          padding: 0 10px;
        "
      >
        03:27:57
      </span>
    </div>
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
                  {{ q + 1 }}. {{ question.question }}
                </AppText>
              </div>
              <ul class="test_answers pb-1">
                <li
                  class="test_answers-title"
                  v-for="(item, a) in question.answers"
                  :key="a"
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
                    {{ item.answer }}
                  </AppText>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="test_right">
        <ul class="test_pagination">
          <li
            class="test_pagination-item"
            v-for="(question, index) in questions"
            :key="index"
            :class="{ active: index === activeP }"
            @click="scrollToQuestion(index)"
          >
            {{ index + 1 }}
          </li>
        </ul>
        <div class="test_pagination-bottom">
          <button>Yakunlash</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppTest",
  data() {
    return {
      questions: [
        {
          id: 0,
          question:
            "К основными показателям качества работы аудиторской организации можно отнести:",
          answers: [
            {
              answer: "контроля соблюдение международных стандартов аудита.",
              isTrue: true,
            },
            {
              answer: "отсутствие методики проведения аудиторской проверки",
              isTrue: false,
            },
            {
              answer: "отсутствие системы внутреннего контроля",
              isTrue: false,
            },
            {
              answer: "наличие жалоб юридических и физических лиц",
              isTrue: false,
            },
          ],
        },
        {
          id: 1,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 2,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 2,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 2,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Финансовая (бухгалтерская) отчётность организации может быть признана достоверной, если:",
          answers: [
            {
              answer: "Соблюдены все вышеперечисленные (a и b) условия.",
              isTrue: true,
            },
            {
              answer:
                "Нарушения требований нормативных актов, по профессиональному суждению аудитора, несущественны",
              isTrue: false,
            },
            {
              answer:
                "Выявленные аудитором и не устраненные аудируемым лицом искажения цифр намного ниже уровня существенности",
              isTrue: false,
            },
            {
              answer: "Нет верных ответов",
              isTrue: false,
            },
          ],
        },
      ],
      answerLabels: ["A", "B", "C", "D", "E", "F", "G", "H"],
      testTimer: 0,
      activeP: 0,
    };
  },
  methods: {
    scrollToQuestion(index) {
      const testElement = this.$refs["question_" + index][0];
      if (testElement) {
        testElement.scrollIntoView({ behavior: "smooth" });
      }
      this.activeP = index;
    },
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
