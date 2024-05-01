<template>
    <div class="page">
        <intro-block title="Контакты" src="/images/index/intro_3.jpg" />
        <contact-block />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';

const footerStore = useFooterStore();

onMounted(() => {
    footerStore.setFooter(true);
});
</script>