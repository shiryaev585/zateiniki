<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.webp" />
        <video-block :videos="videos" />
        <photo-block :photos="photos" title="Наши выступления и репетиции" class="photo-block" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import VideoBlock from '~/components/blocks/VideoBlock.vue';
import PhotoBlock from '~/components/blocks/PhotoBlock.vue';

const footerStore = useFooterStore();
const { data } = await useFetch('/api/performances');
const videos = computed(() => data.value?.find((item) => item.uuid === 'videos')?.videos);
const photos = computed(() => data.value?.find((item) => item.uuid === 'images')?.images);

onMounted(() => {
    footerStore.setFooter(true);
});
</script>

<style lang="scss" scoped>
.photo-block {
    padding-bottom: 8rem;
}
</style>