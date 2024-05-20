// https://nuxt.com/docs/api/configuration/nuxt-config

import {resolve} from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    // "@": resolve(__dirname, "/")
    asserts: "/<rootDir>/assets"
  },

  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", '@pinia/nuxt'],
});