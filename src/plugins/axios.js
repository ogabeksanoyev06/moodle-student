import axios from "axios";
import TokenService from "../service/TokenService";
import router from "../router/index";

export const baseURL = "https://api.fastlms.uz/api/";
export const baseURLHemis = "https://student.tfi.uz/rest/v1/";

export const http = axios.create({
  baseURL: baseURL,
});

function setConfiguration(provider) {
  provider.interceptors.request.use(
    (config) => {
      let token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      config.headers["Accept"] = "application/json";
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => Promise.reject(error)
  );
  provider.interceptors.response.use(
    (res) => res.data,
    (error) => {
      if (error.response && error.response.status === 401) {
        router
          .push({ name: "home" })
          .then(() => {})
          .catch(() => {
            if (error.response.status === 401) {
              //
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
