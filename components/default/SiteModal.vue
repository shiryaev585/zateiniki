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
                        name="modal-name"
                        type="text"
                        label="Имя*"
                        required
                    />
                    <ui-input
                        v-model="form.phone"
                        mask-data="+7 (###) ###-##-##"
                        name="modal-phone"
                        type="tel"
                        label="Телефон*"
                        required
                    />
                    <span class="privacy">Нажимая кнопку «Связаться с нами» Вы даёте своё согласие на обработку <nuxt-link to="/privacy" @click="globalStore.toggleModal(false)">персональных данных</nuxt-link></span>
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

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global';

interface Form {
    name: string,
    phone: string,
    email?: string
}

const config = useRuntimeConfig();
const globalStore = useGlobalStore();
const isModal = computed<boolean>(() => globalStore.isModal);
const form = reactive<Form>({ name: '', phone: '' });

const submit = async () => {
    const formData = new FormData();
    formData.append('name', form?.name);
    formData.append('phone', form?.phone);
    try {
        const res = await useApi(config.public.requestUrl, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' },
        });
        if (res.data) {
            globalStore.toggleModal(false);
        }
        form.name = '';
        form.phone = '';
    } catch (e) {
        console.error(e);
    } finally {
        globalStore.togglePreloader(false);
    }
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: -150%;
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

    @include sm-down {
        margin-top: 2rem;
    }
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

    @include sm-down {
        margin-top: 2rem;
    }
}

.btn {
    margin-top: 6rem;

    @include sm-down {
        margin-top: 3rem;
    }
}

.privacy {
    font-size: 1.2rem;
    color: $dark50;

    & a {
        color: $dark50;
        text-decoration: underline;
        transition: opacity .3s;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>