import { vMaska } from 'maska';
import { type App } from 'vue';

export default defineNuxtPlugin((nuxtApp: { vueApp: App }) => {
    nuxtApp.vueApp.directive('maska', vMaska);
});