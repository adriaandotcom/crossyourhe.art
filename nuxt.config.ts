// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Cross your heart",
      meta: [
        {
          name: "description",
          content: "Calculate a cross-multiplication without picking up a pen.",
        },
      ],
    },
  },
});
