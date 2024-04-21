<template>
    <div :class="$style.Layout">
        <site-header />
        <site-menu />
        <site-modal />
        <main id="top">
            <slot></slot>
        </main>
        <site-preloader :show-preloader="showPreloader" />
    </div>
</template>

<script>
import SiteHeader from '~/components/default/SiteHeader.vue';
import SiteMenu from '~/components/default/SiteMenu.vue';
import SiteModal from '~/components/default/SiteModal.vue';
import SitePreloader from '~/components/default/SitePreloader.vue';
import { useGlobalStore } from '~/stores/global';

export default {
    name: 'DefaultLayout',

    components: {
        SiteHeader,
        SiteMenu,
        SiteModal,
        SitePreloader
    },

    setup() {
        const globalStore = useGlobalStore();
        const showPreloader = computed(() => globalStore.showPreloader);

        return {
            showPreloader
        };
    }
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
}
</style>
