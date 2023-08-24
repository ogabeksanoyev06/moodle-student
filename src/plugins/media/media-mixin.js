import Vue from "vue";
import { mapGetters } from "vuex";

function mediaHelper(width, desiredWidth) {
  return width && width <= desiredWidth;
}

Vue.mixin({
  computed: {
    ...mapGetters(["windowWidth"]),
    isDesktop() {
      return this.windowWidth && this.windowWidth > 800;
    },
    isDesktopMedium() {
      return mediaHelper(this.windowWidth, 1240);
    },
    isDesktopSmall() {
      return mediaHelper(this.windowWidth, 1040);
    },
    isMobile() {
      return mediaHelper(this.windowWidth, 800);
    },
    isMobileMedium() {
      return mediaHelper(this.windowWidth, 650);
    },
    isMobileSmall() {
      return mediaHelper(this.windowWidth, 500);
    },
  },
});
