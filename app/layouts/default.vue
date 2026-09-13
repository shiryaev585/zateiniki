<template>
    <div :class="$style.Layout">
        <site-header />
        <site-menu />
        <site-modal />
        <main>
            <slot></slot>
        </main>
        <site-preloader :show-preloader="showPreloader" />
        <site-footer />
    </div>
</template>

<script setup lang="ts">
import { SiteHeader, SiteMenu, SiteModal, SitePreloader, SiteFooter } from '~/components/default';
import { useGlobalStore } from '~/stores/global';

const globalStore = useGlobalStore();
const showPreloader = computed<boolean>(() => globalStore.showPreloader);
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
    background: rgb(97,108,162);
    background: linear-gradient(90deg, rgba(97,108,162,1) 0%, rgba(38,36,77,1) 100%);
}
</style>
