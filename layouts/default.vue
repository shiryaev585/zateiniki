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
                <svg viewBox="0 0 32 32" width="40" height="40" :class="$style.toTopBtn__icon" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" fill="#d3d3d3" />
                    <path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" fill="#d3d3d3" />
                </svg>
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
            const currentScroll = window.scrollY > 400;

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
    width: 40px;
    height: 40px;
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

    &__icon {
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
    }
}
</style>
