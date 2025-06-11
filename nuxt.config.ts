// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      ignore: [
        "/about",
        "/present-continues",
        "/a-few-stories",
        "/boccaccio-dream",
        "/play-with-a-snake",
        "/beside-the-color",
        "/rabbits",
        "/learning-from-bowerbird",
        "/life-drawings",
        "/family",
        "/movement-score",
        "/you-look-like-an-angel",
        "/baltic-sand",

        "/contacts",
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/global.css"],
});
