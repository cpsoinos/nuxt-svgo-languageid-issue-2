// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "nuxt-svgo",
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
        },
      },
    },
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },
  svgo: {
    autoImportPath: "./assets/svg/",
    customComponent: "Icon",
    dts: true,
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        "removeDimensions",
        "removeStyleElement",
        "convertStyleToAttrs",
      ],
    },
  },
})
