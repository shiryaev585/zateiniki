<template>
    <div :class="$style.Layout">
        <nuxt-link to="/">main</nuxt-link>
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/contacts">contacts</nuxt-link>
        <main id="top">
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
}
</style>
