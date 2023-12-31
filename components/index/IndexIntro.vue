<template>
    <div class="intro">
        <div v-observe class="intro__text anim-appear">
            <h1 class="title anim-left anim-inner">
                Театральная студия Затейники
            </h1>
            <span class="anim-left anim-inner">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti esse porro quod aliquid at saepe.</span>
            <ui-btn
                v-observe
                label="Связаться с нами"
                class="btn anim-appear"
                is-light
                @click="globalStore.toggleModal(true)"
            />
        </div>
        <swiper-container
            class="slider-bg"
            :centered-slides="true"
            :parallax="true"
            :slides-per-view="3.5"
            :space-between="80"
            controller-control=".slider-main"
            @progress="onProgress"
            @slidechange="onSlideChange"
        >
            <swiper-slide
                v-for="(image, idx) in images"
                :key="idx"
                class="slide"
            >
                <div
                    class="slide__img"
                    data-swiper-parallax="50%"
                    :style="{ backgroundImage: `url('${image}')` }"
                >
                </div>
            </swiper-slide>
        </swiper-container>

        <swiper-container
            class="slider-main"
            :centered-slides="true"
            :parallax="true"
            controller-control=".slider-bg"
            :mousewheel="true"
            :breakpoints="{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1025: {
                    slidesPerView: 3.5,
                    spaceBetween: 80
                }
            }"
            @progress="onProgress"
            @slidechange="onSlideChange"
        >
            <swiper-slide
                v-for="(image, idx) in images"
                :key="idx"
                class="slide"
            >
                <nuxt-link :to="menuRoutes[idx].path">
                    <span>{{ menuRoutes[idx].name }}</span>
                    <div
                        class="slide__img"
                        data-swiper-parallax="50%"
                        :style="{ backgroundImage: `url('${image}')` }"
                    >
                    </div>
                </nuxt-link>
            </swiper-slide>
        </swiper-container>

        <div
            v-if="isBlockVisible"
            v-observe
            class="text-2 anim-appear"
        >
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit dolorem culpa cum ut in praesentium, quod consequuntur blanditiis dolore!</span>
        </div>
    </div>
</template>

<script>
import { register } from 'swiper/element/bundle';
import image_1 from '~/assets/images/index/intro_1.jpg';
import image_2 from '~/assets/images/index/intro_2.jpg';
import image_3 from '~/assets/images/index/intro_3.jpg';
import image_4 from '~/assets/images/index/intro_4.jpg';
import { useGlobalStore } from '~/stores/global';

register();

export default {
    name: 'IndexIntro',

    props: {
        performances: {
            type: Array,
            default: () => []
        }
    },

    setup() {
        const images = [image_1, image_2, image_3, image_4];
        const globalStore = useGlobalStore();
        const isModal = computed(() => globalStore.isModal);

        return {
            images,
            globalStore,
            isModal
        };
    },

    data() {
        return {
            sliderProgress: 0,
            isBlockVisible: false
        };
    },

    watch: {
        sliderProgress() {
            this.sliderProgress >= 0.85 ? this.isBlockVisible = true : this.isBlockVisible = false;
        }
    },

    methods: {
        onProgress(e) {
            const [swiper, progress] = e.detail;
            this.sliderProgress = progress;
        },
    }
};
</script>

<style lang="scss" scope>
.intro {
    height: 100vh;
    background: $dark50;
    color: #fff;
    overflow: hidden;
    position: relative;

    &__text {
        font-family: $font-main;
        position: absolute;
        top: 20%;
        left: 10%;
        width: 20%;

        @include sm-down {
            width: 40%;
            text-align: center;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
        }

        @include xs-down {
            text-align: left;
            width: 90%;
            top: 25%;
            left: 2rem;
            transform: none;
        }

        &.animated {
            opacity: 1;

            & .anim-inner {
                display: block;
                transform: translateX(0%);
            }
        }

        & .title {
            margin-bottom: 2rem;
        }

        & span {
            margin-bottom: 8rem;

            @include sm-down {
                margin-bottom: 4rem;
            }
        }

        & .btn {
            position: relative;
            z-index: 2;

            &.animated {
                opacity: 1;
            }
        }
    }
}

.slider-main {
    height: 100%;
    width: 120%;
    transform: translateX(-10%) rotate(15deg);
    overflow: visible;
    top: -88vh;

    @include sm-down {
        transform: translateX(-10%);
        top: calc(-100vh + 8rem);
    }

    @include xss-down {
        top: calc(-100vh + 6rem);
    }
}

.slider-bg {
    height: 100%;
    width: 150%;
    transform: translateX(-10%) rotate(-15deg);
    overflow: visible;
    top: 10vh;
    left: -20vw;
    z-index: 0;
    opacity: .25;
    filter: saturate(100) blur(100px);

    & .slide {
        max-height: 100vh !important;
    }
}

.slide {
    max-height: 75vh;
    overflow: hidden;
    transition: transform 4s $easeText;

    &__img {
        position: absolute;
        width: 300%;
        height: 100%;
        left: -40%;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;

        @include sm-down {
            width: 120%;
            left: -10%;
        }
    }

    & span {
        color: #fff;
    }
}

.text-2 {
    position: absolute;
    right: 10%;
    bottom: 10%;
    z-index: 2;
    width: 20%;

    @include sm-down {
        right: 50%;
        bottom: 5%;
        transform: translateX(50%);
        width: 90%;
    }

    &.animated {
        opacity: 1;
    }
}
</style>