<template>
    <div class="about-page">
        <intro-block title="О нас" :src="src" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import src from '~/assets/images/index/intro_1.jpg';

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