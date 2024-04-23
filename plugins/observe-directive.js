export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('observe', {
        mounted (element) {
            const callback = (entries) => {
                entries[0].isIntersecting
                    ? element.classList.add('animated')
                    : element.classList.remove('animated');
            };

            const observer = new IntersectionObserver(callback, {
                rootMargin: '0px',
                threshold: 0.1
            });
            observer.observe(element);
        },
    });
});
