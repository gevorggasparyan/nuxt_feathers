// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/app.js',
    },
  ]
})
