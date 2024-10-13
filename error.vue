<template>
    <nuxt-layout v-if="error">
        <div class="error-page container">
            <span class="text">Страница не найдена</span>
            <h2>{{ error.statusCode }}</h2>
            <ui-btn
                label="На главную"
                class="form__btn"
                is-light
                @click="handleError"
            />
        </div>
    </nuxt-layout>
</template>

<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<style lang="scss" scope>
.error-page {
    position: relative;
    height: calc(100vh - var(--header-height));
    min-height: 55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .text, h2 {
        color: $light-grey;
    }

    & .text {
        font-size: 2.4rem;
    }

    & h2 {
        font-family: $font-second;
        font-size: 25rem;
        letter-spacing: 1.5rem;
        margin: 1rem 0;
    }
}
</style>
