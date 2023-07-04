// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    vscode: {},
  },
  typescript: {
    shim: false,
  },
  nitro: {
    preset: "vercel-edge",
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
});
