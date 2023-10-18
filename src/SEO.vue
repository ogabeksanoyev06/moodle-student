<template>
  <div>
    a
  </div>
</template>

<script>
export default {
  name: "SEO",
  props: {
    title: {
      type: String,
      default: "Next js template"
    }
  },
  metaInfo() {
    const defaultTitle = "Next js template";
    return {
      title: this.title || defaultTitle,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
        { charset: "utf-8" },
        { name: "description", content: "Next js" },
        { name: "keywords", content: "Cspace, coworking, co-working, center, tashkent" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.title || defaultTitle },
        { property: "og:description", content: "Next js" },
        { property: "og:site_name", content: this.title || defaultTitle },
        {
          property: "og:image",
          content: "https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be"
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.title || defaultTitle },
        { name: "twitter:description", content: "Next js" },
        { name: "twitter:site", content: this.title || defaultTitle },
        { name: "twitter:creator", content: "Udevs" },
        {
          name: "twitter:image",
          content: "https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be"
        }
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" }
        // Add other links as needed, like the fonts link
      ]
    };
  }
};
</script>
