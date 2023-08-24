import axios from "axios";
import TokenService from "../service/TokenService";
import router from "../router/index";
// import store from "../store";

export const baseURL = "http://api.fastlms.uz/api/";

export const http = axios.create({
  baseURL: baseURL,
});

function setConfiguration(provider) {
  provider.interceptors.request.use(
    (config) => {
      let token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        // store.dispatch("checkRefreshTime").then(() => {});
      }
      config.headers["Accept"] = "application/json";
      // config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Content-Type"] = "application/json";
      // config.headers["Language"] = localStorage.getItem("lang");
      return config;
    },
    (error) => Promise.reject(error)
  );
  provider.interceptors.response.use(
    (res) => res.data,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        router
          .push({ name: "login" })
          .then(() => {})
          .catch(() => {
            if (error.response.status === 401) {
              this.errorNotification("Token is expired");
            }
          });
      } else if (error.response && error.response.status === 403) {
        router.push({ path: "/403" }).then();
      }
      return Promise.reject(error);
    }
  );
}
setConfiguration(http);

export default http;
