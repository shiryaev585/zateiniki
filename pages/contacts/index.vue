<template>
    <div class="page">
        <intro-block title="Контакты" src="/images/index/intro_3.webp" class="block" />
        <contact-block class="block" />
        <div v-observe class="pointer container block anim-appear">
            <p class="color-light-grey">
                Занятия проходят в здании 4 корпуса школы 1566
            </p>
            <button class="btn" @click="scrollElementIntoView(map.$el)">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" fill="#d3d3d3" />
                    <path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" fill="#d3d3d3" />
                </svg>
            </button>
        </div>
        <map-block ref="map" />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';
import MapBlock from '~/components/blocks/MapBlock.vue';

const footerStore = useFooterStore();
const map = ref(null);

const scrollElementIntoView = (element, behavior = 'smooth') => {
    const scrollTop = window.scrollY || element.scrollTop;
    const headerHeight = document.querySelector('header').clientHeight;
    const finalOffset = element.getBoundingClientRect().top + scrollTop - headerHeight;
    window.parent.scrollTo({
        top: finalOffset,
        behavior: behavior || 'auto',
    });
};

onMounted(() => {
    footerStore.setFooter(true);
});
</script>

<style lang="scss" scoped>
.pointer {
    @include centered(center);
    flex-direction: column;

    & .btn {
        width: 32px;
        height: 32px;
        cursor: pointer;
        background: transparent;
        margin-top: 2rem;
        transition: opacity .3s;

        &:hover {
            opacity: .6;
        }

        & svg {
            width: 100%;
            height: 100%;
        }
    }
}
</style>