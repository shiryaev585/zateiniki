<template>
    <div class="about-page">
        <intro-block title="О нас" src="/images/index/intro_1.webp" class="block" />
        <div class="block">
            <p
                v-observe
                class="description container my-2 color-light-grey anim-appear"
            >
                Театр&nbsp;&mdash; важнейшее средство приобщения ребенка к&nbsp;духовным ценностям через собственный внутренний опыт, через личные переживания.
            </p>

            <p
                v-observe
                class="description container my-2 color-light-grey anim-appear"
            >
                Театральное искусство, представляя собой синтез различных видов искусств (музыкального, хореографического, изобразительного, литературного) способствует формированию и&nbsp;развитию эстетической культуры личности ребёнка, предоставляет возможность раскрытия индивидуального творческого потенциала.
            </p>
        </div>
        <about-advantages class="advantages-block block" />
        <about-info class="block" />
        <content-block :content="diplomas" class="block" />
        <contact-block title="А ещё нам можно написать :)" light-bg class="block left-offset" />
        <photo-block :photos="charity" title="Благотворительность и волонтёрская деятельность" class="block" />
    </div>
</template>

<script setup lang="ts">
import type { MetaObject } from 'nuxt/schema';
import { useFooterStore } from '~/stores/footer';
import { type ContentItem, type Teacher } from '~/utils/types';
import { IntroBlock, ContentBlock, ContactBlock, PhotoBlock } from '~/components/blocks';

const footerStore = useFooterStore();

const head: MetaObject = {
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
};

useHead(head);

const { data: media } = await useApi<ContentItem[]>('/media/', { method: 'GET', query: { per_page: 100 } });
const charity = computed(() => media.value?.filter((item: ContentItem) => item?.link?.includes('charity')).reverse());
const diplomas = computed(() => media.value?.filter((item: ContentItem) => item?.link?.includes('diplomas')).reverse());

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