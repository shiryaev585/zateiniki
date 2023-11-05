<template>
    <div :class="$style.Layout">
        <site-header />
        <main id="top">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import SiteHeader from '~/components/default/SiteHeader.vue';

export default {
    name: 'DefaultLayout',

    components: { SiteHeader },
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
}
</style>
