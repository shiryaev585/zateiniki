<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.jpg" />
        <video-block :videos="videos" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import VideoBlock from '~/components/blocks/VideoBlock.vue';

const footerStore = useFooterStore();

const videos = reactive([
    { src: 'https://www.youtube.com/embed/lr1rYnUubpQ?si=3DteLTB1yGJjVgbX', img: '/images/index/intro_1.jpg' },
    { src: 'https://www.youtube.com/embed/hMAfJDb6NF8?si=P70Cee-vapblMfUu', img: '/images/index/intro_2.jpg' },
    { src: 'https://www.youtube.com/embed/hMAfJDb6NF8?si=P70Cee-vapblMfUu', img: '/images/index/intro_3.jpg' },
]);

onMounted(() => {
    footerStore.setFooter(true);
});
</script>