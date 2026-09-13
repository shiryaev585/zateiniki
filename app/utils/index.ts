export const scrollElementIntoView = (element: HTMLElement, behavior: ScrollBehavior = 'smooth'): void => {
    const scrollTop: number = window.scrollY || element.scrollTop;
    const header: HTMLElement | null = document.querySelector('header');
    if (!header) {
        console.error('Header element not found');
        return;
    }

    const headerHeight: number = header.clientHeight;
    const finalOffset: number = element.getBoundingClientRect().top + scrollTop - headerHeight;

    window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'auto',
    });
};