<template>
    <div class="performances-page">
        <intro-block title="Спектакли" src="/images/index/intro_2.jpg" />
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
.performances-page {
    height: 300vh;
}
</style>