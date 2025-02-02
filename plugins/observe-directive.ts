import { type App, type DirectiveBinding } from 'vue';

export default defineNuxtPlugin((nuxtApp: { vueApp: App }) => {
    nuxtApp.vueApp.directive('observe', {
        mounted(element: HTMLElement, binding: DirectiveBinding) {
            const { class: className = 'animated', threshold = 0.1 } = binding.value || {};

            const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting) {
                    element.classList.add(className);
                } else {
                    element.classList.remove(className);
                }
            };

            const observer = new IntersectionObserver(callback, {
                rootMargin: '0px',
                threshold: threshold
            });
            observer.observe(element);
        },
    });
});