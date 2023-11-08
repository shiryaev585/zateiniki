import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isBodyLocked: false,
        isModal: false
    }),

    actions: {
        toggleBodyLocked() {
            this.isBodyLocked = !this.isBodyLocked;

            this.isBodyLocked
                ? document.body.classList.add('_locked')
                : document.body.classList.remove('_locked');
        },

        toggleModal(payload) {
            this.isModal = payload;
        }
    },
});
