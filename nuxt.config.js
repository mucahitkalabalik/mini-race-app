export default {
  ssr: false,

  target: "static",

  head: {
    title: "teamso-case",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
      },
    ],
  },
  css: ["@/assets/main.scss"],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ["bootstrap-vue/nuxt"],

  build: {
    loaders: {
      sass: {
        sassOptions: {
          quietDeps: true,
        },
      },
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
};
