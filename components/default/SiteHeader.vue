<template>
    <header :class="['header', { _scrolled: isScrolled }]">
        <div class="container header__container">
            <nuxt-link
                class="logo"
                to="/"
                @click="headerStore.toggleMenu(false)"
            >
                Затейники
            </nuxt-link>
            <div class="actions">
                <transition name="fade">
                    <button
                        v-if="!isMenuOpened"
                        class="btn color-light-grey"
                        @click="globalStore.toggleModal(true)"
                    >
                        Свяжитесь с нами
                    </button>
                </transition>
                <div :class="['burger', { _open: isMenuOpened }]" @click="toggleMenu">
                    <div class="line up"></div>
                    <div class="line down"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useHeaderStore } from '~/stores/header';
import { useGlobalStore } from '~/stores/global';

export default {
    name: 'SiteHeader',

    setup() {
        const isScrolled = ref(false);
        const headerStore = useHeaderStore();
        const globalStore = useGlobalStore();
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
            headerStore,
            globalStore
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
        height: 8rem;

        @include xss-down {
            height: 6rem;
        }
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

    @include xss-down {
        font-size: 3rem;
    }
}

.actions {
    @include centered(center);
    gap: 5rem;

    & .btn {
        background: transparent;
        cursor: pointer;
        transition: opacity .3s;
        font-family: $font-main;
        font-size: 1.6rem;

        &:hover {
            opacity: .6;
        }
    }
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