<template>
    <div :class="$style.Layout">
        <site-header />
        <site-menu />
        <site-modal />
        <main id="top" ref="top">
            <slot></slot>
        </main>
        <site-preloader :show-preloader="showPreloader" />
        <site-footer />
        <transition name="fade">
            <button
                v-if="isScrolled"
                :class="$style.toTopBtn"
                @click="scrollElementIntoView(top)"
            >
                <nuxt-icon name="arrow-up" />
            </button>
        </transition>
    </div>
</template>

<script>
import SiteHeader from '~/components/default/SiteHeader.vue';
import SiteMenu from '~/components/default/SiteMenu.vue';
import SiteModal from '~/components/default/SiteModal.vue';
import SitePreloader from '~/components/default/SitePreloader.vue';
import SiteFooter from '~/components/default/SiteFooter.vue';
import { useGlobalStore } from '~/stores/global';

export default {
    name: 'DefaultLayout',

    components: {
        SiteHeader,
        SiteMenu,
        SiteModal,
        SitePreloader,
        SiteFooter
    },

    setup() {
        const isScrolled = ref(false);
        const top = ref(null);
        const globalStore = useGlobalStore();
        const showPreloader = computed(() => globalStore.showPreloader);

        const checkScroll = () => {
            const currentScroll = window.scrollY > 300;

            if (isScrolled === currentScroll) { return; }
            isScrolled.value = currentScroll;
        };

        return {
            showPreloader,
            checkScroll,
            isScrolled,
            top
        };
    },

    mounted () {
        window.addEventListener('scroll', this.checkScroll);
    },

    beforeUnmount () {
        window.removeEventListener('scroll', this.checkScroll);
    }
};
</script>

<style lang="scss" module>
.Layout {
    position: relative;
    min-height: 100vh;
    background: rgb(97,108,162);
    background: linear-gradient(90deg, rgba(97,108,162,1) 0%, rgba(38,36,77,1) 100%);
}

.toTopBtn {
    position: fixed;
    bottom: 5rem;
    right: 3rem;
    width: 50px;
    height: 50px;
    background: transparent;
    cursor: pointer;
    color: #0056ab;
    border-radius: 50%;
    z-index: 8;
    transition: all .4s;

    &:hover {
        box-shadow: 0 0 5px $box-shadow-color, 0 0 25px $box-shadow-color, 0 0 50px $box-shadow-color, 0 0 100px $box-shadow-color;
        transform: scale(1.1);
    }

    & svg {
        width: 100%;
        height: 100%;
    }
}
</style>
