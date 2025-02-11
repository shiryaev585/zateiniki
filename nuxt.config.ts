// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
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
        '~/plugins/observe-directive',
        '~/plugins/maska',
    ],
    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'vue-yandex-maps/nuxt',
        'yandex-metrika-module-nuxt3',
    ],
    yandexMaps: {
        apikey: process.env.YMAP_KEY,
    },
    yandexMetrika: {
        id: process.env.YMETRIKA_ID
    },
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL,
            apiUrl: process.env.API_URL,
        }
    },
});