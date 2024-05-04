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
        '~/plugins/global-components.js',
        '~/plugins/maska.js',
        { src: '~/plugins/ymap.js',  mode: 'client' }
    ],
    modules: [
        '@pinia/nuxt',
        '@nuxt/image'
    ],
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL,
            ymapKey: process.env.YMAP_KEY
        }
    },
});