<template>
    <div class="index">
        <index-intro />
    </div>
</template>
<script>
import IndexIntro from '~/components/index/IndexIntro.vue';

export default {
    name: 'IndexPage',

    components: { IndexIntro },

    async setup() {
        const performances = await useFetch('/api/performances').data;
        // const requests = await useFetch('/api/request').data;

        return {
            performances,
            // requests
        };
    },
};
</script>

<style lang="scss" scoped>
.index {
    min-height: 100vh;
}
</style>