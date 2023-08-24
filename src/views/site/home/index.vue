<template>
  <div>
    <div>
      <app-text
        size="18"
        line-height="24"
        class="color-main mb-10"
        weight="500"
      >
        Fanlar va resurslar
      </app-text>
      <div class="home__links">
        <router-link
          class="home__links-link"
          v-for="(item, i) in SciencesAndResources"
          :to="{ name: item.link }"
          :key="i"
        >
          <img src="/icons/homeIcons/document.svg" class="home__links-img" />
          <span class="home__links-title">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    <div>
      <app-text
        size="18"
        line-height="24"
        class="color-main mb-10"
        weight="500"
      >
        O'quv faoliyati
      </app-text>
      <div class="home__links">
        <router-link
          class="home__links-link"
          v-for="(item, i) in AcademicActivities"
          :to="{ name: item.link }"
          :key="i"
        >
          <img src="/icons/homeIcons/document.svg" class="home__links-img" />
          <span class="home__links-title">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    <div>
      <app-text
        size="18"
        line-height="24"
        class="color-main mb-10"
        weight="500"
      >
        Qayta o'qish
      </app-text>
      <div class="home__links">
        <router-link
          class="home__links-link"
          v-for="(item, i) in ReReading"
          :to="{ name: item.link }"
          :key="i"
        >
          <img src="/icons/homeIcons/document.svg" class="home__links-img" />
          <span class="home__links-title"> {{ item.title }} </span>
        </router-link>
      </div>
    </div>
    <div>
      <app-text
        size="18"
        line-height="24"
        class="color-main mb-10"
        weight="500"
      >
        Hujjatlar ro'yxati
      </app-text>
      <div class="home__links">
        <router-link
          to="/"
          class="home__links-link"
          v-for="(item, i) in ListOfDocuments"
          :key="i"
        >
          <img src="/icons/homeIcons/document.svg" class="home__links-img" />
          <span class="home__links-title"> {{ item.title }} </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHome",
  components: {},
  data() {
    return {
      SciencesAndResources: [
        {
          id: 0,
          img: "",
          title: "O'quv reja",
          link: "education-curriculum",
        },
        {
          id: 2,
          img: "",
          title: "Dars jadvali",
          link: "education-time-table",
        },
        {
          id: 3,
          img: "",
          title: "Nazorat jadvali",
          link: "education-exam-table",
        },
        {
          id: 4,
          img: "",
          title: "Fan tanlovi",
          link: "education-subject-choose",
        },
        {
          id: 5,
          img: "",
          title: "Fanlar resurslari",
          link: "education-subjects",
        },
      ],
      AcademicActivities: [
        {
          id: 1,
          img: "",
          title: "Davomat",
          link: "education-attendance",
        },
        {
          id: 2,
          img: "",
          title: "O'zlashtirish",
          link: "education-performance",
        },
        {
          id: 3,
          img: "",
          title: "Reyting daftarcha",
          link: "education-academic-data",
        },
        {
          id: 4,
          img: "",
          title: "Imtihonlar",
          link: "test-exams",
        },
        {
          id: 5,
          img: "",
          title: "Bitiruv ishi",
          link: "student-graduate-qualifying",
        },
      ],
      ReReading: [
        {
          id: 1,
          img: "",
          title: "Ariza qayta o'qish",
          link: "retraining-application",
        },
        {
          id: 2,
          img: "",
          title: "Q.O'qish mashg'ulotlari",
          link: "retraining-time-table",
        },
        {
          id: 3,
          img: "",
          title: "Q.O'qish nazorat jadvali",
          link: "retraining-exam-table",
        },
        {
          id: 4,
          img: "",
          title: "Q.O'qish o'zlashtirish",
          link: "retraining-performance",
        },
      ],
      ListOfDocuments: [
        {
          id: 1,
          img: "",
          title: "Buyruqlar",
        },
        {
          id: 2,
          img: "",
          title: "Shartnomalar",
        },
        {
          id: 3,
          img: "",
          title: "Ma'lumotnomalar",
        },
        {
          id: 4,
          img: "",
          title: "Bitiruv varaqa",
        },
        {
          id: 5,
          img: "",
          title: "Talaba hujjati",
        },
        {
          id: 6,
          img: "",
          title: "Mening xabarlarim",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$myBezier: cubic-bezier(0.4, 0, 0.2, 1);
.home__links {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 15px;
  margin-bottom: 60px;
  &-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 160px;
    min-height: 140px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px #ebedf3;
    padding: 14px;
    transition: transform 0.3s ease;
    // margin-left: auto;
    // margin-right: auto;
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  &-title {
    color: #919caa;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.28px;
    display: block;
    text-align: center;
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (max-width: 876px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 678px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
