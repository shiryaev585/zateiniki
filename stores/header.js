import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
    state: () => ({
        isScrolled: false,
        isMenuOpened: false,
    }),

    actions: {
        checkHeader(payload) {
            this.isScrolled = payload;
        },

        toggleMenu(payload) {
            this.isMenuOpened = payload;
        },
    },
});
