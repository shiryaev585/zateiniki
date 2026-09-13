// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        },
    },
    css: ['~/assets/style/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/shared/_variables.scss" as *; @use "~/assets/style/shared/_mixins.scss" as *;',
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
        }
    },
});