<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0" />
    <meta charset="utf-8" />
    <title>{{ pageTitle }}</title>
    <meta name="description" content="Next js" />
    <meta name="keywords" content="Cspace, coworking, co-working, center, tashkent" />
    <meta property="og:type" content="website" />
    <meta property="og:title" :content="pageTitle" />
    <meta property="og:description" content="Next js" />
    <meta property="og:site_name" :content="pageTitle" />
    <meta property="og:image" content="https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" :content="pageTitle" />
    <meta name="twitter:description" content="Next js" />
    <meta name="twitter:site" :content="pageTitle" />
    <meta name="twitter:creator" content="Udevs" />
    <meta name="twitter:image" content="https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be" />

    <link rel="icon" href="/favicon.ico" />
    <!-- Uncomment the line below if you need to use the font -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;600;700&display=swap" rel="stylesheet" /> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Next js template"
    }
  },
  computed: {
    pageTitle() {
      return this.title || "Next js template";
    }
  }
};
</script>
