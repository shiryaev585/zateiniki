<template>
    <div class="intro">
        <div v-observe class="intro__text anim-appear duration-4">
            <h1 class="title anim-left anim-inner">
                Театральная студия Затейники
            </h1>
            <span class="anim-left anim-inner">Весь мир - театр, мы все - актеры поневоле, Всесильная Судьба распределяет роли, И небеса следят за нашею игрой!</span>
            <span class="anim-left anim-inner author">Пьер де Ронсар</span>
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
        >
            <swiper-slide
                v-for="(image, idx) in images"
                :key="idx"
                class="slide"
            >
                <nuxt-link :to="menuRoutes[idx].path">
                    <span v-observe class="name anim-appear">{{ menuRoutes[idx].name }}</span>
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
            v-if="sliderProgress === 1"
            v-observe
            class="text-2 anim-appear"
        >
            <span>Театр — это такая кафедра, с которой можно много сказать миру добра.</span>
            <span class="author">Николай Васильевич Гоголь</span>
        </div>
    </div>
</template>

<script>
import { register } from 'swiper/element/bundle';
import { SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import image_1 from '/images/index/intro_1.webp';
import image_2 from '/images/index/intro_2.webp';
import image_3 from '/images/index/intro_3.webp';
import { useGlobalStore } from '~/stores/global';

register();

export default {
    name: 'IndexIntro',

    components: {
        SwiperSlide
    },

    setup() {
        const images = [image_1, image_2, image_3];
        const globalStore = useGlobalStore();
        const isModal = computed(() => globalStore.isModal);
        const sliderProgress = ref(0);

        return {
            images,
            globalStore,
            isModal,
            sliderProgress
        };
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
            margin-bottom: 2rem;

            &:last-of-type {
                margin-bottom: 8rem;

                @include sm-down {
                    margin-bottom: 4rem;
                }
            }
        }

        & .btn {
            position: relative;
            z-index: 2;
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
            opacity: .5;
        }
    }

    & .name {
        color: #fff;

        @include sm-down {
            position: absolute;
            bottom: 0;
            right: 10%;
            z-index: 1;
            font-family: $font-second;
            font-size: 6rem;
            letter-spacing: 10px;
        }
    }
}

.text-2 {
    position: absolute;
    right: 10%;
    bottom: 10%;
    z-index: 2;
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

.author {
    font-size: 1.2rem;
    text-align: end;
}
</style>