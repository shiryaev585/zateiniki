export const scrollElementIntoView = (element, behavior = 'smooth') => {
    const scrollTop = window.scrollY || element.scrollTop;
    const headerHeight = document.querySelector('header').clientHeight;
    const finalOffset = element.getBoundingClientRect().top + scrollTop - headerHeight;
    window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'auto',
    });
};