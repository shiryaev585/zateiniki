export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('observe', {
        mounted (element) {
            console.log(element);

            const callback = (entries, observer) => {
                if(entries[0].isIntersecting) {
                    element.classList.add('animated');
                }
            };

            const observer = new IntersectionObserver(callback, {
                rootMargin: '0px',
                threshold: 1
            });
            observer.observe(element);
        },
    });
});
