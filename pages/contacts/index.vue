<template>
    <div class="page">
        <intro-block title="Контакты" src="/images/index/intro_3.webp" />
        <contact-block />
        <map-block />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';
import MapBlock from '~/components/blocks/MapBlock.vue';

const footerStore = useFooterStore();

onMounted(() => {
    footerStore.setFooter(true);
});
</script>