<template>
    <div class="about-page">
        <intro-block title="О нас" src="/images/index/intro_1.webp" class="block" />
        <div class="block">
            <p
                v-for="(innerText, idx) in description"
                :key="idx"
                v-observe
                class="description container my-2 color-light-grey anim-appear"
            >
                {{ innerText }}
            </p>
        </div>
        <about-advantages class="advantages-block block" />
        <about-info :teacher="teacher" class="block" />
        <content-block :content="diplomas" class="block" />
        <contact-block title="А ещё нам можно написать :)" class="block" />
        <photo-block :photos="images" title="Благотворительность и волонтёрская деятельность" class="block" />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContentBlock from '~/components/blocks/ContentBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';
import PhotoBlock from '~/components/blocks/PhotoBlock.vue';

const footerStore = useFooterStore();
const { data } = await useFetch('/api/about');
const description = computed(() => data.value?.find((item) => item.uuid === 'description')?.description);
const teacher = computed(() => data.value?.find((item) => item.uuid === 'teacher')?.teacher);
const images = computed(() => data.value?.find((item) => item.uuid === 'images')?.images);
const diplomas = computed(() => teacher.value?.diplomas);

useHead({
    title: 'Затейники - О нас',
    meta: [
        { name: 'description', content: 'Детская театральная студия в Марьино, спектакли, выступления, репетиции, благотворительность' }
    ],
});

onMounted(() => {
    footerStore.setFooter(true);
});
</script>

<style lang="scss" scoped>
.about-page {
    & .advantages-block {
        padding-top: 4trm;
        padding-bottom: 4rem;
    }
}
</style>