// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
        },
    },
    css: ['@/assets/style/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/style/shared/_variables.scss";@import "~/assets/style/shared/_mixins.scss";',
                },
            },
        },
    },
    plugins: [
        '~/plugins/observe-directive.js',
        '~/plugins/maska.js',
    ],
    modules: ['@pinia/nuxt', '@nuxt/image', 'vue-yandex-maps/nuxt'],
    yandexMaps: {
        apikey: process.env.YMAP_KEY,
    },
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL
        }
    },
});