<template>
    <div class="about-page">
        <intro-block title="О нас" src="/images/index/intro_1.webp" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';

const footerStore = useFooterStore();

onMounted(() => {
    footerStore.setFooter(true);
});
</script>
<style lang="scss" scoped>
.about-page {
    height: 300vh;
}
</style>