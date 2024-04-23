<template>
    <div class="performances-page">
        <intro-block title="Спектакли" :src="src" />
    </div>
</template>
<script setup>
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import src from '~/assets/images/index/intro_2.jpg';
</script>
<style lang="scss" scoped>
.performances-page {
    height: 300vh;
}
</style>