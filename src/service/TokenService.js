// import axios from "axios";

const FRONT_TOKEN_KEY = "AuthorizationFront";
const FRONT_REFRESH_TOKEN_KEY = "RefreshFront";
const FRONT_TOKEN_EXPIRE = "TokenExpireFront";
const TokenService = {
  getToken() {
    return localStorage.getItem(FRONT_TOKEN_KEY);
  },
  saveToken(token) {
    localStorage.setItem(FRONT_TOKEN_KEY, token);
    // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  saveRefreshToken(token) {
    localStorage.setItem(FRONT_REFRESH_TOKEN_KEY, token);
  },
  saveExpireTime(expireTime) {
    localStorage.setItem(FRONT_TOKEN_EXPIRE, expireTime);
  },
  removeToken() {
    localStorage.removeItem(FRONT_TOKEN_KEY);
    localStorage.clear();
  },
  removeRefreshToken() {
    localStorage.removeItem(FRONT_REFRESH_TOKEN_KEY);
  },
  getRefreshToken() {
    return localStorage.getItem(FRONT_REFRESH_TOKEN_KEY);
  },
  getExpireTime() {
    return localStorage.getItem(FRONT_TOKEN_EXPIRE);
  },
};

export default TokenService;
