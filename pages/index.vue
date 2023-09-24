<template>
    <div :class="$style.wrp">
        <div :class="$style.wrp__main">IndexPage</div>
    </div>
</template>
<script>
export default {
    name: 'IndexPage',

    async setup() {
        const { data } = await useFetch('/api/performances');

        return data;
    },
};
</script>
<style lang="scss" module>
.wrp {
    &__main {
        height: 20vh;
        background: coral;

        @include lg-down {
            background: teal;
        }
    }
}
</style>