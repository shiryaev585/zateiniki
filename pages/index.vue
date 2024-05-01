<template>
    <div class="index">
        <index-intro />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';

const footerStore = useFooterStore();

onMounted(() => {
    footerStore.setFooter(false);
});
</script>

<style lang="scss" scoped>
.index {
    min-height: 100vh;
}
</style>