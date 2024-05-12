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
    { src: 'https://www.youtube.com/embed/iNXNO2V0eoU?si=q69DYjhrwq1_I9ri', img: '/images/index/intro_1.jpg' },
    { src: 'https://www.youtube.com/embed/xWVhf8s60eI?si=9DOz9eWUhzZbVeJJ', img: '/images/index/intro_2.jpg' },
    { src: 'https://www.youtube.com/embed/LlVVv86XCmM?si=dTHgAsUFqo1LlKA3', img: '/images/index/intro_3.jpg' },
]);

onMounted(() => {
    footerStore.setFooter(true);
});
</script>