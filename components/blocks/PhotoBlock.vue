<template>
    <div class="wrapper container">
        <h2 v-if="title" v-observe>
            <span class="subtitle">{{ title }}</span>
        </h2>
        <div class="photos">
            <div
                v-for="(photo, idx) in photos"
                :key="photo.uuid"
                v-observe
                class="photo"
                @click="initSlider(idx)"
            >
                <nuxt-img
                    :src="photo.src"
                    class="img delay-2"
                    alt="image"
                    loading="lazy"
                />
            </div>
        </div>

        <transition name="fade">
            <div v-if="isSlider" class="slider">
                <ui-close class="close-btn" color="#d3d3d3" @close="hideSlider" />
                <swiper
                    class="slider-container"
                    :modules="modules"
                    :initial-slide="activeSlide"
                    :loop="true"
                    :navigation="{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }"
                >
                    <swiper-slide
                        v-for="photo in photos"
                        :key="photo.uuid"
                        class="photo-slide"
                    >
                        <div class="inner">
                            <div class="inner__bg" :style="{ backgroundImage: `url('${photo.src}')` }"></div>
                            <nuxt-img
                                :src="photo.src"
                                class="image"
                                alt="image"
                                loading="lazy"
                            />
                        </div>
                    </swiper-slide>
                    <button type="button" class="prev-btn">
                        <nuxt-img
                            src="/icons/arrow-left.svg"
                            alt="navigation-icon"
                            class="icon"
                            loading="lazy"
                        />
                    </button>
                    <button type="button" class="next-btn">
                        <nuxt-img
                            src="/icons/arrow-right.svg"
                            alt="navigation-icon"
                            class="icon"
                            loading="lazy"
                        />
                    </button>
                </swiper>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { useGlobalStore } from '~/stores/global';

import 'swiper/css';
import 'swiper/css/navigation';

defineProps({
    photos: {
        type: Object,
        required: true
    },

    title: {
        type: String,
        default: ''
    }
});

const swiper = Swiper;
const swiperSlide = SwiperSlide;
const globalStore = useGlobalStore();
const isSlider = ref(false);
const activeSlide = ref(0);

const initSlider = (idx) => {
    isSlider.value = true;
    globalStore.toggleBodyLocked();
    activeSlide.value = idx;
};

const hideSlider = () => {
    isSlider.value = false;
    activeSlide.value = 0;
    globalStore.toggleBodyLocked();
};

const modules = [Navigation];

register();
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
}

.subtitle {
    transform: translateX(-200%);
    transition: transform 2s $easeText;
}

.photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

    @include md-down {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @include xs-down {
        grid-template-columns: 1fr 1fr;
    }

    @include xss-down {
        grid-template-columns: 1fr;
    }

    & .photo {
        position: relative;
        height: 25rem;
        cursor: pointer;
        transition: box-shadow .3s;

        &:hover {
            box-shadow: 0px -1px 21px -2px rgba(0,0,0,0.56);
            -webkit-box-shadow: 0px -1px 21px -2px rgba(0,0,0,0.56);
            -moz-box-shadow: 0px -1px 21px -2px rgba(0,0,0,0.56);
        }
    }

    & .img {
        position: absolute;
        width: 100%;
        height: 0;
        object-fit: cover;
        transition-property: height;
        transition-duration: .7s;
        transition-timing-function: ease-in-out;
    }
}

.slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.4);
    z-index: 12;

    & .close-btn {
        z-index: 12;
    }
}

.slider-container {
    height: 100%;

    & .prev-btn,
    & .next-btn {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 2;
        height: 5rem;
        width: 5rem;
        background: rgba(0, 0, 0, .4);
        transition: opacity .3s;

        &:hover {
            opacity: .6;
        }

        & .icon {
            width: 100%;
            height: 100%;
        }
    }

    & .prev-btn {
        left: 0;
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        padding-right: 15px;
    }

    & .next-btn {
        right: 0;
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        padding-left: 15px;
    }
}

.photo-slide {
    height: 100%;
    position: relative;
    @include centered(center);

    & .inner {
        position: relative;
        width: 80vw;
        height: 80vh;
        @include centered(center);

        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(40px);
            }
        }
    }

    & .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 2;
    }
}

.animated {
    & .subtitle {
        transform: translateX(0);
    }

    & .img {
        height: 100%;
    }
}
</style>