<template>
    <div :class="$style.Layout">
        <site-header />
        <site-menu />
        <main id="top">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import SiteHeader from '~/components/default/SiteHeader.vue';
import SiteMenu from '~/components/default/SiteMenu.vue';

export default {
    name: 'DefaultLayout',

    components: { SiteHeader, SiteMenu },
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
}
</style>
