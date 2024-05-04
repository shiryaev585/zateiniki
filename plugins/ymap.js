import plugin from 'vue-yandex-maps';

export default defineNuxtPlugin((nuxtApp) => {
    const settings = {
        apiKey: nuxtApp.$config?.public?.ymapKey,
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
        el: '#map',
    };

    nuxtApp.vueApp.use(plugin, settings);
});
