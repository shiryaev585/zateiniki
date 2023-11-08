<template>
    <div :class="$style.Layout">
        <site-header />
        <site-menu />
        <site-modal />
        <main id="top">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import SiteHeader from '~/components/default/SiteHeader.vue';
import SiteMenu from '~/components/default/SiteMenu.vue';
import SiteModal from '~/components/default/SiteModal.vue';

export default {
    name: 'DefaultLayout',

    components: {
        SiteHeader,
        SiteMenu,
        SiteModal
    },
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
}
</style>
