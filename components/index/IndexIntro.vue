<template>
    <div :class="$style.intro">
        <swiper-container
            :class="$style.slider"
            :centered-slides="true"
            :parallax="true"
            :breakpoints="{
                0: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                },
                768: {
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
                :class="$style.slide"
            >
                <div
                    :class="$style.slide__img"
                    data-swiper-parallax="50%"
                    :style="{ backgroundImage: `url('${image}')` }"
                >
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script>
import { register } from 'swiper/element/bundle';
import image_1 from '~/assets/images/index/intro_1.jpg';
import image_2 from '~/assets/images/index/intro_2.jpg';
import image_3 from '~/assets/images/index/intro_3.jpg';
import image_4 from '~/assets/images/index/intro_4.jpg';

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
        const onSlideChange = (e) => {
            console.log('slide changed');
        };

        const images = [image_1, image_2, image_3, image_4];

        return {
            onSlideChange,
            images
        };
    },

    data() {
        return {
            sliderProgress: 0
        };
    },

    watch: {
        sliderProgress() {
            console.log(this.sliderProgress);
            if(this.sliderProgress >= 0.85) {
                console.log('GOAL PUSH');
            }
        }
    },

    methods: {
        onProgress(e) {
            const [swiper, progress] = e.detail;
            this.sliderProgress = progress;
        }
    }
};
</script>

<style lang="scss" module>
.intro {
    height: 100vh;
    background: $dark;
    color: #fff;
    overflow: hidden;
}

.slider {
    height: 100%;
    width: 120%;
    transform: translateX(-10%) rotate(15deg);
    overflow: visible;
    top: 10vh;
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
    }
}
</style>