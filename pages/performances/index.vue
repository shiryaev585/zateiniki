<template>
    <div class="performances-page">
        <intro-block title="Спектакли" :src="src" />
    </div>
</template>
<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import src from '~/assets/images/index/intro_2.jpg';

const footerStore = useFooterStore();

onMounted(() => {
    footerStore.setFooter(true);
});
</script>
<style lang="scss" scoped>
.performances-page {
    height: 300vh;
}
</style>