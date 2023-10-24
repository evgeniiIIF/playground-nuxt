// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: true,
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', '@vueuse/nuxt', 'nuxt-svgo', '@nuxt/image', 'nuxt-swiper'],
  googleFonts: {
    families: {
      Roboto: true,
      download: true,
    },
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Ic',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['@/assets/style/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/style/variables.scss";
            @import "@/assets/style/mixins.scss";
          `,
        },
      },
    },
  },
  swiper: {
    styleLang: 'scss',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'NUXT_PUBLIC_API_BASE_URL',
    },
  },
});
