<template>
    <div class="page">
        <intro-block title="Контакты" src="/images/index/intro_3.webp" class="block" />
        <div v-observe class="pointer container block anim-appear">
            <p class="color-light-grey">
                Занятия проходят в здании 4 корпуса школы 1566
            </p>
            <button class="btn" @click="scrollToMap">
                <nuxt-img
                    src="/icons/arrow.svg"
                    alt="arrow-icon"
                    width="32"
                    height="32"
                    loading="lazy"
                />
            </button>
        </div>
        <contact-block class="block" />
        <map-block ref="map" />
    </div>
</template>

<script setup lang="ts">
import { useFooterStore } from '~/stores/footer';
import { IntroBlock, ContactBlock, MapBlock } from '~/components/blocks';
import type { MetaObject } from 'nuxt/schema';

const head: MetaObject = {
    title: 'Затейники | Театральная студия в Марьино | Контакты',
    meta: [
        { name: 'description', content: 'Набор в театральную студию детей школьного возраста - запишите своего ребёнка на курсы театрального искусства в театральной студии Затейники в Марьино. Поможем сформировать и развить эстетическую культуру личности ребёнка, предоставим возможность раскрытия индивидуального творческого потенциала. Ваш ребёнок будет выступать на настоящей сцене.' },
        { property: 'og:title', content: 'Затейники | Театральная студия в Марьино | Контакты' },
        { property: 'og:description', content: 'Набор в театральную студию детей школьного возраста - запишите своего ребёнка на курсы театрального искусства в театральной студии Затейники в Марьино. Поможем сформировать и развить эстетическую культуру личности ребёнка, предоставим возможность раскрытия индивидуального творческого потенциала. Ваш ребёнок будет выступать на настоящей сцене.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zateinikiteatr.ru' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image', content: 'https://zateinikiteatr.online/wp-content/uploads/2024/10/5-1-scaled.webp' },
    ],
};

useHead(head);

const footerStore = useFooterStore();
const map = ref<InstanceType<typeof MapBlock> | null>(null);

onMounted(() => {
    footerStore.setFooter(true);
});

const scrollToMap = () => {
    if (map.value) {
        scrollElementIntoView(map.value.$el);
    } else {
        console.error('map is not initialized');
    }
};
</script>

<style lang="scss" scoped>
.pointer {
    @include centered(center);
    flex-direction: column;

    & .btn {
        width: 32px;
        height: 32px;
        cursor: pointer;
        background: transparent;
        margin-top: 1rem;
        transition: opacity .3s;

        &:hover {
            opacity: .6;
        }
    }
}
</style>