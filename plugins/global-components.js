import components from '~/components/ui/index.js';

export default defineNuxtPlugin(nuxtApp => {
    components.forEach((component) => {
        nuxtApp.vueApp.component(component.name, component);
    });
});
