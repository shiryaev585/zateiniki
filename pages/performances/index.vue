<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.jpg" />
        <video-block :videos="videos" />
        <photo-block :photos="photos" title="Наши выступления и репетиции" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import VideoBlock from '~/components/blocks/VideoBlock.vue';
import PhotoBlock from '~/components/blocks/PhotoBlock.vue';

const footerStore = useFooterStore();

const videos = reactive([
    { src: 'https://www.youtube.com/embed/iNXNO2V0eoU?si=q69DYjhrwq1_I9ri', img: '/images/index/intro_1.jpg' },
    { src: 'https://www.youtube.com/embed/xWVhf8s60eI?si=9DOz9eWUhzZbVeJJ', img: '/images/index/intro_2.jpg' },
    { src: 'https://www.youtube.com/embed/LlVVv86XCmM?si=dTHgAsUFqo1LlKA3', img: '/images/index/intro_3.jpg' },
]);

const photos = reactive([
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOeqVncxp5yocpopceSjXWULg4ORJZbi5oqgON3Q1lRUMGdfnH59df06uOUlFeVnEqpWr5zNYCbZz3A0SOKGIFXEmael58DoEn55iFWMbKMmDBAxbY=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOV7GM3sj6uPugsc3S4XphLQcUyOZ1ELcssMHtAITk-qVW18Kzt1r0OPoOfj4654N3vXO0KyHaKIwv1YO-Tqrmo2EAoPKEBtDRmGuwfynWT7zAwnBc=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMZq5vsZNXct79Ca_XgcvVcg1wFmjhMnPCe9u4BRmUQ1iHbHTqQuedx4rinnBwRvWda1wVDTpfJLSdT1jTRi3Y0qoZYjLjqjqe6uh94H0VJbdZJxLU=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNqrq-oojp0bcEsBkYwp_VlhZGn828keTDN7zWZHODC5aUuEWeR4NNvdnJfRCyDy6V5HcAipfvoMRYxtYGmtqB8sn8xZBdu9SQowcAitPomfA-MqwA=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczP_gVfVWHevpdPiNzsGAXaiqJMPqeDW24I1BESniGqFSPL03pl2I_THFhEjlUs11KS0mUbJzNauM0h7e5WX7WlqQfp6RkdHMdarfjod28n8yTt9Z7I=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczO9-VK7BBCDt88b04K1Tt29V0NEhXm4-p73_qp5bKDPaRTVBsaLej7zBBNVJ62RFe1kLSDorD8QWCtY3NCHm_XT3_gJvXpV2UynXGy5SG2U6ZHXDYk=w2400' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOapfbHVG3EagEDHtd37WmzUbyQIxXcFbCUTgWkpxrLivZBMctiqNk6nsfiZB2WUpurCChmMPw3K0cg_L61wME1KikCAVy83RRll89hskCX720TCPk=w2400' },
]);

onMounted(() => {
    footerStore.setFooter(true);
});
</script>