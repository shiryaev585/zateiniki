<template>
    <div :class="$style.index">
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
        // const videos = await useFetch('/api/videos').data;

        return {
            performances,
            // videos
        };
    },

    computed: {
        getPath() {
            return this.videos.videosData[0].url;
        }
    }
};
</script>
<style lang="scss" module>
.index {
    height: 200vh;
}
</style>