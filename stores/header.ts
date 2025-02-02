import { defineStore } from 'pinia';

interface HeaderState {
    isScrolled: boolean;
    isMenuOpened: boolean;
}

export const useHeaderStore = defineStore('header', {
    state: (): HeaderState => ({
        isScrolled: false,
        isMenuOpened: false,
    }),

    actions: {
        checkHeader(payload: boolean): void {
            this.isScrolled = payload;
        },

        toggleMenu(payload: boolean): void {
            this.isMenuOpened = payload;
        },
    },
});
