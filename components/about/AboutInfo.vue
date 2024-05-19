<template>
    <div class="about-info container">
        <div v-observe class="about-info__img anim-appear">
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
                v-observe
                class="text color-light-grey anim-appear"
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
            transform: translateX(-25px);
            transition: transform 2s .25s $easeOut;

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

.animated.about-info__img .img {
    transform: translateX(0);
}
</style>