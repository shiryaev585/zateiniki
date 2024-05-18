<template>
    <div class="about-info container">
        <div class="about-info__img">
            <nuxt-img
                :src="teacher.src"
                alt="teacher-image"
                loading="lazy"
                class="img"
            />
        </div>
        <div class="about-info__text">
            <p
                v-for="(innerText, idx) in teacher.text"
                :key="idx"
                class="text color-light-grey"
            >
                {{ innerText }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    teacher: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss" scoped>
.about-info {
    display: flex;
    gap: 3rem;

    @include xs-down {
        flex-direction: column;
    }

    &__img {
        position: relative;
        height: 50rem;

        & .img {
            height: 100%;
            object-fit: cover;

            @include xs-down {
                display: block;
                margin: auto;
            }

            @include xss-down {
                width: 100%;
            }
        }
    }

    & .text:not(.about-info .text:last-of-type) {
        margin-bottom: 2rem;
    }
}
</style>