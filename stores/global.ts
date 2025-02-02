import { defineStore } from 'pinia';

interface GlobalState {
    isBodyLocked: boolean;
    isModal: boolean;
    showPreloader: boolean;
}

export const useGlobalStore = defineStore('global', {
    state: (): GlobalState => ({
        isBodyLocked: false,
        isModal: false,
        showPreloader: false,
    }),

    actions: {
        toggleBodyLocked(): void {
            this.isBodyLocked = !this.isBodyLocked;

            if (this.isBodyLocked) {
                document.body.classList.add('_locked');
            } else {
                document.body.classList.remove('_locked');
            }
        },

        toggleModal(payload: boolean): void {
            this.isModal = payload;
            this.toggleBodyLocked();
        },

        togglePreloader(payload: boolean): void {
            this.showPreloader = payload;
        },
    },
});