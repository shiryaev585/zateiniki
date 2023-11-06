<template>
    <header :class="['header', { _scrolled: isScrolled }]">
        <div class="container header__container">
            <nuxt-link class="logo" to="/" @click="headerStore.toggleMenu(false)">
                Затейники
            </nuxt-link>
            <div :class="['burger', { _open: isMenuOpened }]" @click="toggleMenu">
                <div class="line up"></div>
                <div class="line down"></div>
            </div>
        </div>
    </header>
</template>

<script>
import { useHeaderStore } from '~/stores/header';

export default {
    name: 'SiteHeader',

    setup() {
        const isScrolled = ref(false);
        const headerStore = useHeaderStore();
        const isMenuOpened = computed(() => headerStore.isMenuOpened);

        const checkScroll = () => {
            const currentScroll = window.scrollY > 5;

            if (isScrolled === currentScroll) { return; }
            isScrolled.value = currentScroll;
        };

        const toggleMenu = () => {
            headerStore.isMenuOpened ? headerStore.toggleMenu(false) : headerStore.toggleMenu(true);
        };


        return {
            isScrolled,
            isMenuOpened,
            checkScroll,
            toggleMenu,
            headerStore
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

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: background .35s $easing;

    &__container {
        @include centered(space-between);
        padding: 2rem 0;
    }

    &._scrolled {
        background: $dark50;
    }
}

.logo {
    font-family: $font-second;
    font-size: 5rem;
    line-height: 1.2;
    @include link-hover;
}

.burger {
    width: 3rem;
    height: 3rem;
    position: relative;
    cursor: pointer;

    @include sm-down {
        width: 2.2rem;
        height: 2.2rem;
    }

    &:hover {
        & .up{
            width: 3rem;

            @include sm-down {
                width: 2.2rem;
            }
        }

        & .down {
            width: 2rem;

            @include sm-down {
                width: 1.6rem;
            }
        }
    }

    & .line {
        position: absolute;
        left: 0;
        height: 2px;
        background-color: #fff;

        @include xss-down {
            height: 1px;
        }
    }

    & .up {
        top: 30%;
        width: 2rem;
        transition: all .35s $easing;

        @include sm-down {
            width: 1.6rem;
        }
    }

    & .down {
        top: 70%;
        width: 3rem;
        transition: all .35s $easing;

        @include sm-down {
            width: 2.2rem;
        }
    }

    &._open {
        & .line {
            width: 3rem;
            top: 50%;

            &.up {
                transform: rotate(45deg);
            }

            &.down{
                transform: rotate(-45deg);
            }

            @include sm-down {
                width: 2.2rem;
            }
        }
    }
}
</style>