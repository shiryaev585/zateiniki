<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.webp" class="block" />
        <content-block :content="videos" with-frame class="block" />
        <photo-block :photos="performances" title="Наши выступления и репетиции" class="block" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContentBlock from '~/components/blocks/ContentBlock.vue';
import PhotoBlock from '~/components/blocks/PhotoBlock.vue';

const footerStore = useFooterStore();

const videos = [{
    source_url: '/images/index/intro_1.webp',
    video_src: 'https://www.youtube.com/embed/iNXNO2V0eoU?si=q69DYjhrwq1_I9ri'
},{
    source_url: '/images/index/intro_2.webp',
    video_src: 'https://www.youtube.com/embed/xWVhf8s60eI?si=9DOz9eWUhzZbVeJJ'
},{
    source_url: '/images/index/intro_3.webp',
    video_src: 'https://www.youtube.com/embed/LlVVv86XCmM?si=dTHgAsUFqo1LlKA3'
}];

useHead({
    title: 'Затейники - Спектакли',
    meta: [
        { name: 'description', content: 'Детская театральная студия в Марьино, спектакли, выступления, репетиции, благотворительность' }
    ],
});

const { data: media } = await useApi('/media/', { query: { per_page: 100 } });
const performances = computed(() => media.value?.filter((item) => item?.link?.includes('performances')));

onMounted(() => {
    footerStore.setFooter(true);
});
</script>