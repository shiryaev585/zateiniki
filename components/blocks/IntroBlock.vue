<template>
    <div v-observe class="intro-block">
        <nuxt-img
            class="bg"
            :src="src"
            alt="background-image"
            loading="lazy"
        />
        <h1 class="intro-block__title anim-appear">
            {{ title }}
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },

        src: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.intro-block {
    position: relative;
    height: 80vh;
    @include overlay(rgba(0, 0, 0, .6));
    overflow: hidden;

    &__title {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: #fff;
        font-family: $font-second;
        font-size: 13rem;
        letter-spacing: 2rem;
        transition: top 2s .5s;

        @include xs-down {
            font-size: 10rem;
            letter-spacing: 1rem;
        }
    }

    & .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.animated {
        & .bg {
            animation: bg-scale 4s forwards $easing;
        }

        & .intro-block__title {
            top: 50%;
            animation: fade-in 4s .8s forwards $easing;
        }
    }
}
</style>