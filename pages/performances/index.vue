<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.webp" class="block" />
        <content-block :content="videos" with-frame class="block" />
        <photo-block :photos="photos" title="Наши выступления и репетиции" class="block" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContentBlock from '~/components/blocks/ContentBlock.vue';
import PhotoBlock from '~/components/blocks/PhotoBlock.vue';

const footerStore = useFooterStore();
const { data } = await useFetch('/api/performances');
const videos = computed(() => data.value?.find((item) => item.uuid === 'videos')?.videos);
const photos = computed(() => data.value?.find((item) => item.uuid === 'images')?.images);

useHead({
    title: 'Затейники - Спектакли',
    meta: [
        { name: 'description', content: 'Детская театральная студия в Марьино, спектакли, выступления, репетиции, благотворительность' }
    ],
});

onMounted(() => {
    footerStore.setFooter(true);
});
</script>