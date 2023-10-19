// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  css: [
      "~/assets/style/main.scss",
  ],

  ssr: false,

  app: {
      baseURL: '/lgambier.github.io/', // baseURL: '/<repository>/'
      buildAssetsDir: 'assets',
      head: {
          link: [
              { rel: "preconnect", href: "https://fonts.googleapis.com" },
              { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
              { href: "https://fonts.googleapis.com/css2?family=Righteous&display=swap", rel: "stylesheet" }
          ],
      }
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@use "@/assets/style/_variables.scss" as *;',
              },
          },
      },
  },

  modules: ["nuxt-icon"],
})