<template>
  <div class="content">
    <app-loading v-if="loading" />
    <div class="box">
      <div class="box-header pa-10">
        <h3 class="box-title">Passport ma'lumoti</h3>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table>
            <tbody>
              <tr>
                <th>Fuqarolik</th>
                <td>{{ user?.country?.name }}</td>
              </tr>
              <tr>
                <th>Pasport raqami</th>
                <td>{{ user?.passport_number }}</td>
              </tr>
              <tr>
                <th>JSHSHIR-kod</th>
                <td>{{ user?.passport_pin }}</td>
              </tr>
              <tr>
                <th>Familiya</th>
                <td>{{ user?.second_name }}</td>
              </tr>
              <tr>
                <th>Ismi</th>
                <td>{{ user?.first_name }}</td>
              </tr>
              <tr>
                <th>Otasining ismi º</th>
                <td>{{ user?.third_name }}</td>
              </tr>
              <tr>
                <th>Tug‘ilgan sana</th>
                <td>{{ user?.birth_date }}</td>
              </tr>
              <tr>
                <th>Jins</th>
                <td>{{ user?.gender?.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-header pa-10">
        <h3 class="box-title">Doimiy manzil ma'lumotlari</h3>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table>
            <tbody>
              <tr>
                <th>Davlat</th>
                <td>{{ user?.country?.name }}</td>
              </tr>
              <tr>
                <th>Viloyat</th>
                <td>{{ user?.province?.name }}</td>
              </tr>
              <tr>
                <th>Tuman</th>
                <td>{{ user?.district?.name }}</td>
              </tr>
              <tr>
                <th>Uy manzili</th>
                <td>{{ user?.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-header pa-10">
        <h3 class="box-title">Joriy manzil ma'lumotlari</h3>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table>
            <tbody>
              <tr>
                <th>Yashash joyi</th>
                <td>{{ user?.accommodation?.name }}</td>
              </tr>
              <tr>
                <th>Joriy viloyat</th>
                <td>{{ user?.province?.name }}</td>
              </tr>
              <tr>
                <th>Joriy tuman</th>
                <td>{{ user?.district?.name }}</td>
              </tr>
              <tr>
                <th>Joriy manzil</th>
                <td>{{ user?.address }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ user?.email }}</td>
              </tr>
              <tr>
                <th>Talaba telefoni (+998 xx ххх-хх-хх)</th>
                <td>{{ user?.phone }}</td>
              </tr>
              <tr>
                <th>Ota-onasi telefoni</th>
                <td></td>
              </tr>
              <tr>
                <th>Mas'ul shaxs telefoni</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-header pa-10">
        <h3 class="box-title">Ta’lim ma’lumoti</h3>
      </div>
      <div class="box-body">
        <div class="table-block">
          <table>
            <tbody>
              <tr>
                <th>Mutaxassislik</th>
                <td>{{ user?.specialty?.name }}</td>
              </tr>
              <tr>
                <th>Fakultet</th>
                <td>{{ user?.faculty?.name }}</td>
              </tr>
              <tr>
                <th>Kurs</th>
                <td>{{ user?.level?.name }}</td>
              </tr>
              <tr>
                <th>Guruh</th>
                <td>{{ user?.group?.name }}</td>
              </tr>
              <tr>
                <th>To‘lov shakli</th>
                <td>{{ user?.paymentForm?.name }}</td>
              </tr>
              <tr>
                <th>Ta’lim turi</th>
                <td>{{ user?.educationType?.name }}</td>
              </tr>
              <tr>
                <th>Ta’lim shakli</th>
                <td>{{ user?.educationForm?.name }}</td>
              </tr>
              <tr>
                <th>O‘quv yili</th>
                <td>{{ user?.semester?.education_year?.name }}</td>
              </tr>
              <tr>
                <th>Semestr</th>
                <td>{{ user?.semester?.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLoading from "@/components/shared-components/AppLoading.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "personal-data",
  components: { AppLoading },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    ...mapGetters(["user", "loading"]),
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 2px solid #3c8dbc;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  &-title {
    margin-bottom: 0;
    padding: 15px 0;
  }
}
th {
  border-right: 1px solid #f4f4f4 !important;
}
td {
  width: 60%;
  white-space: normal;
}
</style>
