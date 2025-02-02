<template>
    <div class="index">
        <index-intro />
    </div>
</template>

<script setup lang="ts">
import type { MetaObject } from 'nuxt/schema';
import { useFooterStore } from '~/stores/footer';

const footerStore = useFooterStore();

const head: MetaObject = {
    title: 'Затейники | Театральная студия в Марьино',
    meta: [
        { name: 'description', content: 'Детская театральная студия в Марьино. Проходит набор в детскую театральную студию детей школьного возраста. В театральной студии "Затейники" интегрируются образовательные технологии, направленные на личностное развитие и социокультурную адаптацию. Программа направлена на формирование у детей начальных знаний, умений и навыков в области актёрской психофизики, на развитие образного мышления, воображения и фантазии. Ваш ребёнок будет выступать на настоящей сцене.' },
        { property: 'og:title', content: 'Затейники | Театральная студия в Марьино' },
        { property: 'og:description', content: 'Детская театральная студия в Марьино. Проходит набор в детскую театральную студию детей школьного возраста. В театральной студии "Затейники" интегрируются образовательные технологии, направленные на личностное развитие и социокультурную адаптацию. Программа направлена на формирование у детей начальных знаний, умений и навыков в области актёрской психофизики, на развитие образного мышления, воображения и фантазии. Ваш ребёнок будет выступать на настоящей сцене.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zateinikiteatr.ru' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image', content: 'https://zateinikiteatr.online/wp-content/uploads/2024/10/intro_2.webp' },
    ],
};

useHead(head);

onMounted(() => {
    footerStore.setFooter(false);
});
</script>

<style lang="scss" scoped>
.index {
    min-height: 100vh;
}
</style>