import Vue from "vue";
import VueRouter from "vue-router";
import TokenService from "@/service/TokenService";
Vue.use(VueRouter);

const routes = [
  {
    path: "/landing-page",
    name: "landing-page",
    component: () => import("../components/landing-page"),
    meta: { guestOnly: true },
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../components/layouts/auth/login.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/404",
    name: "error-404",
    component: () => import("../components/pages/error/404.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      // home
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      // education
      {
        path: "education/curriculum",
        name: "education-curriculum",
        component: () =>
          import("../views/site/student/education/curriculum.vue"),
      },
      {
        path: "education/time-table",
        name: "education-time-table",
        component: () =>
          import("../views/site/student/education/time-table.vue"),
      },
      {
        path: "education/exam-table",
        name: "education-exam-table",
        component: () =>
          import("../views/site/student/education/exam-table.vue"),
      },
      {
        path: "education/subjects",
        name: "education-subjects",
        component: () => import("../views/site/student/education/subjects.vue"),
      },
      {
        path: "education/attendance",
        name: "education-attendance",
        component: () =>
          import("../views/site/student/education/attendance.vue"),
      },
      {
        path: "education/performance",
        name: "education-performance",
        component: () =>
          import("../views/site/student/education/performance.vue"),
      },
      {
        path: "education/academic-data",
        name: "education-academic-data",
        component: () =>
          import("../views/site/student/education/academic-data.vue"),
      },
      {
        path: "education/subject-choose",
        name: "education-subject-choose",
        component: () =>
          import("../views/site/student/education/subject-choose.vue"),
      },
      // test
      {
        path: "test/exams",
        name: "test-exams",
        component: () => import("../views/site/student/test/exams.vue"),
      },
      // retraining
      {
        path: "retraining/application",
        name: "retraining-application",
        component: () =>
          import("../views/site/student/retraining/application.vue"),
      },
      {
        path: "retraining/exam-table",
        name: "retraining-exam-table",
        component: () =>
          import("../views/site/student/retraining/exam-table.vue"),
      },
      {
        path: "retraining/performance",
        name: "retraining-performance",
        component: () =>
          import("../views/site/student/retraining/performance.vue"),
      },
      {
        path: "retraining/time-table",
        name: "retraining-time-table",
        component: () =>
          import("../views/site/student/retraining/time-table.vue"),
      },
      //student
      {
        path: "student/decree",
        name: "student-decree",
        component: () => import("../views/site/student/decree.vue"),
      },
      {
        path: "student/contract",
        name: "student-contract",
        component: () => import("../views/site/student/contract.vue"),
      },
      {
        path: "student/reference",
        name: "student-reference",
        component: () => import("../views/site/student/reference.vue"),
      },
      {
        path: "student/document",
        name: "student-document",
        component: () => import("../views/site/student/document.vue"),
      },
      {
        path: "student/circulation-sheet",
        name: "student-circulation-sheet",
        component: () => import("../views/site/student/circulation-sheet.vue"),
      },
      {
        path: "student/personal-data",
        name: "student-personal-data",
        component: () => import("../views/site/student/personal-data.vue"),
      },
      {
        path: "student/graduate-qualifying",
        name: "student-graduate-qualifying",
        component: () =>
          import("../views/site/student/graduate-qualifying.vue"),
      },
      // message
      {
        path: "message/my-messages",
        name: "message-my-messages",
        component: () =>
          import("../views/site/student/message/my-messages.vue"),
      },
      {
        path: "message/compose",
        name: "message-compose",
        component: () => import("../views/site/student/message/compose.vue"),
      },
      // dashboard
      {
        path: "dashboard/profile",
        name: "dashboard-profile",
        component: () => import("../views/site/student/dashboard/profile.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

router.beforeEach((to, from, next) => {
  const tokenExists = !!TokenService.getToken();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!tokenExists) {
      next({ name: "landing-page" });
      return;
    }
  }

  if (to.matched.some((record) => record.meta.guestOnly)) {
    if (tokenExists) {
      next("/");
      return;
    }
  }

  next();
});

export default router;
