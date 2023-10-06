<template>
  <footer class="footer" :class="isDesktopSmall ? 'py-30' : 'py-60'">
    <div class="container">
      <div class="footer__inner mb-20">
        <div class="footer__left">
          <div class="footer__details">
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 20"
                weight="600"
                class="color-white mb-20"
              >
                Biz bilan bog'laning
              </app-text>
              <div class="footer__contacts-item mb-5">
                <a href="tel: +998 91 123-45-67" target="_blank">
                  <app-text size="14" weight="500" class="color-white">
                    Tel: (8 371) 234-46-26
                  </app-text>
                </a>
              </div>
              <div class="footer__contacts-item mb-5">
                <a href="tel: +998 91 123-45-67" target="_blank">
                  <app-text size="14" weight="500" class="color-white">
                    Fax: (8 371) 234-11-48
                  </app-text>
                </a>
              </div>
              <div class="footer__contacts-item mb-5">
                <app-text size="14" weight="500" class="color-white">
                  Email: devonxona@tfi.uz
                </app-text>
              </div>
              <div class="footer__contacts-item mb-5">
                <a href="tel: +(8 371) 235-77-66" target="_blank">
                  <app-text size="14" weight="500" class="color-white">
                    Ishonch telefoni: (8 371) 235-77-66
                  </app-text>
                </a>
              </div>
            </div>
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 20"
                weight="600"
                class="color-white mb-20"
              >
                Toshkent moliya instituti
              </app-text>
              <div class="footer__contacts-item mb-5">
                <a href="https://tfi.uz/uz-Latn" target="_blank">
                  <app-text size="14" weight="500" class="color-white">
                    Rasmiy website: tfi.uz
                  </app-text>
                </a>
              </div>
            </div>
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 20"
                weight="600"
                class="color-white mb-20"
              >
                Toshkent moliya instituti
              </app-text>
              <div class="footer__contacts-item mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.304181696386!2d69.28119175036133!3d41.32399847916824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b34353d430d%3A0x3512027741c5a434!2z0KLQvtGI0LrQtdC90YIg0JzQvtC70LjRjyDQmNC90YHRgtC40YLRg9GC0Lg!5e0!3m2!1sru!2s!4v1678830156843!5m2!1sru!2s"
                  style="border: 0; border-radius: 20px"
                  width="100%"
                  height="350px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <AppText
          size="12"
          line-height="16"
          max-width="754"
          class="text-center color-white mx-auto"
        >
          Copyright © 1999-2023. Saytda joylashtirilgan barcha maʼlumotlar
          Oʼzbekiston va xalqaro qonunchilik mualliflik xuquqlari asosida
          ximoyalangan. Saytdagi maʼlumotlardan sayt muallifi ruxsatisiz
          foydalanish taʼqiqlanadi.
        </AppText>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "LandingFooter",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #0253da;
  padding-bottom: 20px;
  &__inner {
    width: 100%;
  }
  &__details {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
@media (max-width: 1024px) {
  .footer {
    &__inner {
      width: 100%;
    }
    &__details {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 768px) {
  .footer {
    &__inner {
      width: 100%;
    }
    &__details {
      grid-template-columns: 1fr;
    }
  }
}
</style>
