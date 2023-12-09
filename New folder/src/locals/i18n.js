import Vue from "vue";
import VueI18n from "vue-i18n";
import { ru } from "./lang/ru.json";
import { uz } from "./lang/uz.json";
import { eng } from "./lang/eng.json";

Vue.use(VueI18n);
export const selectedLocale = "uz";
export const languages = [
  { name: "Русский", value: "ru" },
  { name: "O'zbek", value: "uz" },
  { name: "English", value: "eng" },
];
const messages = {
  ru,
  uz,
  eng,
};
const i18n = new VueI18n({
  locale: selectedLocale,
  messages,
});

export default i18n;
