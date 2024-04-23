<template>
    <div class="page">
        <intro-block title="Контакты" :src="src" />
        <contact-block />
    </div>
</template>

<script setup>
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';
import src from '~/assets/images/index/intro_3.jpg';
</script>

<style lang="scss" scoped>
.page {
    height: 300vh;
}

.next-block {
    
}
</style>