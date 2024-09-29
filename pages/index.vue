<template>
    <div class="index">
        <index-intro />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';

const footerStore = useFooterStore();

useHead({
    title: 'Затейники | Театральная студия в Марьино',
    meta: [
        { name: 'description', content: 'Детская театральная студия в Марьино' }
    ],
});

onMounted(() => {
    footerStore.setFooter(false);
});
</script>

<style lang="scss" scoped>
.index {
    min-height: 100vh;
}
</style>