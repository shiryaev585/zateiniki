import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footer', {
    state: () => ({
        isVisible: true,
    }),

    actions: {
        setFooter(payload) {
            this.isVisible = payload;
        },
    },
});
