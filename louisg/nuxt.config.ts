// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  css: [
      "~/assets/style/main.scss",
  ],

  ssr: false,

  app: {
      baseURL: '/portfolio/', // baseURL: '/<repository>/'
      buildAssetsDir: 'assets',
      head: {
          title: "Louis Gambier",
          link: [
              { rel: "preconnect", href: "https://fonts.googleapis.com" },
              { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
              { href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap", rel: "stylesheet" }
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

  modules: ["nuxt-icon", "nuxt-swiper"],
})