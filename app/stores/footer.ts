import { defineStore } from 'pinia';

interface FooterState {
    isVisible: boolean;
}

export const useFooterStore = defineStore('footer', {
    state: (): FooterState => ({
        isVisible: true,
    }),

    actions: {
        setFooter(payload: boolean): void {
            this.isVisible = payload;
        },
    },
});