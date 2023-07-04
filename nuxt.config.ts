// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    vscode: {},
  },
  typescript: {
    shim: false,
  },
  imports: {
    // autoImport: false,
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
});
