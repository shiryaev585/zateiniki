<template>
    <div class="page">
        <intro-block title="Контакты" src="/images/index/intro_3.webp" class="block" />
        <contact-block class="block" />
        <div v-observe class="pointer container block anim-appear">
            <p class="color-light-grey">
                Занятия проходят в здании 4 корпуса школы 1566
            </p>
            <button class="btn" @click="scrollElementIntoView(map.$el)">
                <nuxt-img
                    src="/icons/arrow-down.svg"
                    alt="arrow-down-icon"
                    width="32"
                    height="32"
                    loading="lazy"
                />
            </button>
        </div>
        <map-block ref="map" />
    </div>
</template>

<script setup>
import { useFooterStore } from '~/stores/footer';
import IntroBlock from '~/components/blocks/IntroBlock.vue';
import ContactBlock from '~/components/blocks/ContactBlock.vue';
import MapBlock from '~/components/blocks/MapBlock.vue';

const footerStore = useFooterStore();
const map = ref(null);

useHead({
    title: 'Затейники - Контакты',
    meta: [
        { name: 'description', content: 'Оставьте Ваши контакты для получения консультации или записи в театральную студию' }
    ],
});

onMounted(() => {
    footerStore.setFooter(true);
});
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