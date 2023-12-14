import Vue from "vue";
import VueRouter from "vue-router";
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
        path: "education/subject/resource/:id",
        name: "education-subject-id",
        component: () =>
          import("../views/site/student/education/title-list.vue"),
        props:true
      },
      {
        path: "education/subject/resource/files/:id",
        name: "education-subject-id-files",
        component: () =>
          import("../views/site/student/education/subject-id.vue"),
        props:true
      },
      {
        path: "education/performance",
        name: "education-performance",
        component: () =>
          import("../views/site/student/education/performance.vue"),
      },
      // test
      {
        path: "test/exams",
        name: "test-exams",
        component: () => import("../views/site/student/test/exams.vue"),
      },

      //student
      {
        path: "student/decree",
        name: "student-decree",
        component: () => import("../views/site/student/decree.vue"),
      },
      {
        path: "student/personal-data",
        name: "student-personal-data",
        component: () => import("../views/site/student/personal-data.vue"),
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

export default router;
