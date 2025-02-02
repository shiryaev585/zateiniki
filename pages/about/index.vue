<template>
    <div class="about-page">
        <intro-block title="О нас" src="/images/index/intro_1.webp" class="block" />
        <div class="block">
            <p
                v-for="(inner, idx) in description"
                :key="idx"
                v-observe
                class="description container my-2 color-light-grey anim-appear"
            >
                {{ inner }}
            </p>
        </div>
        <about-advantages class="advantages-block block" />
        <about-info :teacher="teacher" class="block" />
        <content-block :content="diplomas" class="block" />
        <contact-block title="А ещё нам можно написать :)" light-bg class="block left-offset" />
        <photo-block :photos="charity" title="Благотворительность и волонтёрская деятельность" class="block" />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import { IntroBlock, ContentBlock, ContactBlock, PhotoBlock } from '~/components/blocks';

const footerStore = useFooterStore();

useHead({
    title: 'Затейники | Театральная студия в Марьино | О нас',
    meta: [
        { name: 'description', content: 'Набор в театральную студию детей школьного возраста - запишите своего ребёнка на курсы театрального искусства в театральной студии Затейники в Марьино. Поможем сформировать и развить эстетическую культуру личности ребёнка, предоставим возможность раскрытия индивидуального творческого потенциала. , благотворительность' },
        { property: 'og:title', content: 'Затейники | Театральная студия в Марьино | О нас' },
        { property: 'og:description', content: 'Набор в театральную студию детей школьного возраста - запишите своего ребёнка на курсы театрального искусства в театральной студии Затейники в Марьино. Поможем сформировать и развить эстетическую культуру личности ребёнка, предоставим возможность раскрытия индивидуального творческого потенциала. Ваш ребёнок будет выступать на настоящей сцене.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zateinikiteatr.ru' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image', content: 'https://zateinikiteatr.online/wp-content/uploads/2024/10/16-scaled.webp' },
    ],
});

const { data: about } = await useApi('/about/');
const description = computed(() => about.value?.map((item) => item?.text).reverse());

const { data: teacher } = await useApi('/teacher/');

const { data: media } = await useApi('/media/', { query: { per_page: 100 } });
const charity = computed(() => media.value?.filter((item) => item?.link?.includes('charity')).reverse());
const diplomas = computed(() => media.value?.filter((item) => item?.link?.includes('diplomas')).reverse());

onMounted(() => {
    footerStore.setFooter(true);
});
</script>

<style lang="scss" scoped>
.about-page {
    & .description {
        width: 70%;

        @include sm-down {
            width: auto;
        }
    }

    & .advantages-block {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
</style>