<template>
    <div :class="['modal', { _visible: isModal }]">
        <ui-close color="#171717" @close="globalStore.toggleModal(false)" />
        <div class="container form-container">
            <h2 class="title">
                Закажите звонок
            </h2>
            <form class="form" @submit.prevent="submit()">
                <div class="inputs">
                    <ui-input
                        v-model="form.name"
                        name="name"
                        type="text"
                        label="Имя*"
                        required
                    />
                    <ui-input
                        v-model="form.phone"
                        mask-data="+7 (###) ###-##-##"
                        name="phone"
                        type="tel"
                        label="Телефон*"
                        required
                    />
                </div>
                <ui-btn
                    label="Связаться с нами"
                    class="btn"
                    is-dark
                />
            </form>
        </div>
    </div>
</template>

<script>
import { useGlobalStore } from '~/stores/global';

export default {
    name: 'SiteModal',

    async setup() {
        const globalStore = useGlobalStore();
        const isModal = computed(() => globalStore.isModal);
        const form = reactive({});

        return {
            globalStore,
            isModal,
            form
        };
    },

    methods: {
        async submit() {
            const formData = new FormData();
            formData.append('name', this.form?.name);
            formData.append('phone', this.form?.phone);
            this.globalStore.togglePreloader(true);
            try {
                const res = await fetch(this.$config?.public?.requestUrl, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                });
                this.form.name = '';
                this.form.phone = '';
                if (res.ok) {
                    this.globalStore.toggleModal(false);
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.globalStore.togglePreloader(false);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #00ccb9, #5640d3 100%);
    z-index: 10;
    transition: top .75s $easing;

    &._visible {
        top: 0;
    }
}

.form-container {
    margin-top: 12rem;
}

.form {
    width: 75%;
}

.title {
    font-size: 3.4rem;
}
.inputs {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;   
}

.btn {
    margin-top: 6rem;
}
</style>