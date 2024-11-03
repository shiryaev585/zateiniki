<template>
    <div class="intro">
        <div v-observe class="intro__text anim-appear">
            <h1 class="title anim-left anim-inner">
                Театральная студия Затейники
            </h1>
            <span class="anim-left anim-inner">Весь мир - театр, мы все - актеры поневоле, Всесильная Судьба распределяет роли, И небеса следят за нашею игрой!</span>
            <span class="anim-left anim-inner author">Пьер де Ронсар</span>
        </div>

        <ui-btn
            v-observe
            label="Связаться с нами"
            class="btn anim-appear"
            is-light
            @click="globalStore.toggleModal(true)"
        />
            
        <swiper
            v-observe
            class="slider-bg"
            :centered-slides="true"
            :parallax="true"
            :slides-per-view="3.5"
            :space-between="80"
            :controller="{ control: mainSlider }"
            :modules="[Controller]"
            @swiper="setBgSlider"
            @slide-change="onSlideChange"
        >
            <swiper-slide
                v-for="(slide, idx) in slides"
                :key="idx"
                class="slide"
            >
                <nuxt-img
                    class="slide__img"
                    data-swiper-parallax="50%"
                    :src="slide.src"
                    :srcset="slide.srcset"
                    :sizes="slide.sizes"
                    :alt="slide.alt"
                    loading="lazy"
                />
            </swiper-slide>
        </swiper>

        <swiper
            v-observe
            class="slider-main anim-appear delay-4"
            :centered-slides="true"
            :parallax="true"
            :controller="{ control: bgSlider }"
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
            :modules="[Controller]"
            @swiper="setMainSlider"
            @slide-change="onSlideChange"
        >
            <swiper-slide
                v-for="(slide, idx) in slides"
                :key="idx"
                class="slide"
            >
                <nuxt-link :to="menuRoutes[idx].path">
                    <span v-observe class="name anim-appear">{{ menuRoutes[idx].name }}</span>
                    <nuxt-img
                        class="slide__img"
                        data-swiper-parallax="50%"
                        :src="slide.src"
                        :srcset="slide.srcset"
                        :sizes="slide.sizes"
                        :alt="slide.alt"
                        loading="lazy"
                    />
                </nuxt-link>
            </swiper-slide>
        </swiper>

        <div
            v-if="sliderProgress"
            v-observe
            class="text-2 anim-appear"
        >
            <span>Театр — это такая кафедра, с которой можно много сказать миру добра.</span>
            <span class="author">Николай Васильевич Гоголь</span>
        </div>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Controller } from 'swiper/modules';
import { useGlobalStore } from '~/stores/global';

register();

const slides = [
    {
        src: '/images/index/intro_1.webp',
        srcset: '/images/index/intro_1-400w.webp 400w, /images/index/intro_1-600w.webp 600w, /images/index/intro_1-800w.webp 800w, /images/index/intro_1-1000w.webp 1000w, /images/index/intro_1-1200w.webp 1200w',
        sizes: '(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (min-width: 1001px) 1200px',
        alt: 'изображение театра, ссылка ведёт на страницу "о нас"'
    },
    {
        src: '/images/index/intro_2.webp',
        srcset: '/images/index/intro_2-400w.webp 400w, /images/index/intro_2-600w.webp 600w, /images/index/intro_2-800w.webp 800w, /images/index/intro_2-1000w.webp 1000w, /images/index/intro_2-1200w.webp 1200w',
        sizes: '(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (min-width: 1001px) 1200px',
        alt: 'изображение театра, ссылка ведёт на страницу "Спектакли"'
    },
    {
        src: '/images/index/intro_3.webp',
        srcset: '/images/index/intro_3-400w.webp 400w, /images/index/intro_3-600w.webp 600w, /images/index/intro_3-800w.webp 800w, /images/index/intro_3-1000w.webp 1000w, /images/index/intro_3-1200w.webp 1200w',
        sizes: '(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (min-width: 1001px) 1200px',
        alt: 'изображение театра, ссылка ведёт на страницу "Контакты"'
    }
];
const globalStore = useGlobalStore();
const sliderProgress = ref(false);
const mainSlider = ref(null);
const bgSlider = ref(null);
const setMainSlider = (swiper) => {
    mainSlider.value = swiper;
};
const setBgSlider = (swiper) => {
    bgSlider.value = swiper;
};
const onSlideChange = ({ activeIndex }) => {
    slides?.length === activeIndex + 1 ? sliderProgress.value = true : sliderProgress.value = false;
};
</script>

<style lang="scss" scope>
.intro {
    --offset-x: 10%;

    height: 100vh;
    background: $dark50;
    color: #fff;
    overflow: hidden;
    position: relative;

    @include sm-down {
        --offset-x: 50%;
    }

    @include xs-down {
        --offset-x: 2rem;
    }

    &__text {
        font-family: $font-main;
        position: absolute;
        top: 20%;
        left: var(--offset-x);
        width: 20%;
        pointer-events: none;

        @include sm-down {
            width: 40%;
            text-align: center;
            z-index: 2;
            transform: translateX(-50%);
        }

        @include xs-down {
            text-align: left;
            width: 90%;
            top: 25%;
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
    }

    & .btn {
        position: absolute;
        z-index: 2;
        left: var(--offset-x);
        top: 60%;

        @include sm-down {
            transform: translateX(-50%);
        }

        @include xs-down {
            transform: none;
        }

        @media (max-height: 450px) {
            transform: none;
            left: 2rem;
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
    opacity: 0;
    transition: opacity .75s .2s;
    filter: saturate(100) blur(100px);

    &.animated {
        opacity: 0.25;
    }

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
        object-fit: cover;
        will-change: scroll-position;

        @include sm-down {
            width: 120%;
            left: -10%;
            opacity: .5;
        }
    }

    & .name {
        color: #fff;
        display: block;

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

    @media (max-height: 450px) {
        width: 50%;
        transform: none;
        left: 2rem;
        right: auto;
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