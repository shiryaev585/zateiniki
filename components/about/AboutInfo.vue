<template>
    <div class="about-info container">
        <div v-observe class="about-info__img anim-appear">
            <nuxt-img
                :src="teacher.img_one"
                alt="teacher-image"
                loading="lazy"
                class="img img-1"
            />
            <template v-for="(innerText, idx) in teacher.text" :key="idx">
                <p v-observe class="text color-light-grey anim-appear">
                    {{ innerText }}
                </p>
                <nuxt-img
                    v-if="idx === 2"
                    :src="teacher.img_two"
                    alt="teacher-image"
                    loading="lazy"
                    class="img img-2"
                />
            </template>
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

        & .img {
            object-fit: cover;
            transition: transform 2s .25s $easeOut;

            @include xs-down {
                width: 100%;
                margin: 0 auto 1rem;
            }
        }
    }

    & .text:not(.about-info .text:last-of-type) {
        margin-bottom: 2rem;
    }
}

.img-1 {
    float: left;
    margin-right: 1rem;
    width: 40rem;
    transform: translateX(-25px);

    @include md-down {
        width: 35rem;
    }
}

.img-2 {
    float: right;
    margin-left: 1rem;
    width: 40rem;
    transform: translateX(25px);

    @include md-down {
        width: 25rem;
    }
}

.animated.about-info__img .img {
    transform: translateX(0);
}
</style>