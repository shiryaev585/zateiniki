<template>
    <div class="about-info container">
        <div v-observe class="about-info__img anim-appear">
            <template v-for="(item, idx) in teacher" :key="idx">
                <p v-if="item.text" v-observe class="text color-light-grey anim-appear">
                    {{ item.text }}
                </p>
                <div v-else :class="[`img img-${idx + 1}`]" v-html="item.image"></div>
            </template>
        </div>
    </div>
</template>

<script setup>
defineProps({
    teacher: {
        type: Array,
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

.img {
    & :deep(img) {
        width: 100%;
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

.img-5 {
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