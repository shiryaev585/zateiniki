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
            <nav class="navbar">
                <nuxt-link
                    v-for="route in menuRoutes"
                    :key="route.id"
                    :to="route.path"
                    :class="['navbar__link']"
                >
                    {{ route.name }}
                </nuxt-link>
            </nav>
            <div class="actions">
                <transition-group name="fade">
                    <button
                        v-if="!isMenuOpened"
                        class="btn color-light-grey"
                        @click="globalStore.toggleModal(true)"
                    >
                        Свяжитесь с нами
                    </button>
                    <a
                        v-if="!isMenuOpened"
                        class="mob-btn color-light-grey"
                        :href="contacts.phone.type + contacts.phone.value?.replace(/(\()|(\)|(-))/g, '')"
                        aria-label="набрать наш номер"
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.8651 23.9132L29.7156 23.4632C29.3621 22.4118 28.2031 21.3153 27.1381 21.0264L23.1967 19.9495C22.1278 19.6587 20.6032 20.0498 19.8212 20.8319L18.3947 22.2586C13.2106 20.8575 9.14553 16.7916 7.74662 11.6075L9.17313 10.1808C9.95518 9.39863 10.3461 7.87568 10.0553 6.80667L8.98057 2.86261C8.68977 1.79556 7.59147 0.636154 6.54231 0.286303L6.09236 0.135002C5.04121 -0.214799 3.54205 0.139001 2.76015 0.921053L0.626335 3.05721C0.245133 3.43646 0.00153191 4.52122 0.00153191 4.52517C-0.0731185 11.3009 2.58325 17.8291 7.37532 22.6221C12.1556 27.4031 18.6581 30.0561 25.4131 29.9991C25.4481 29.9991 26.5641 29.7596 26.9456 29.3801L29.0791 27.2461C29.8611 26.4641 30.2146 24.9646 29.8651 23.9132Z" fill="#d3d3d3" />
                        </svg>
                    </a>
                </transition-group>
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
    width: 100vw;
    height: var(--header-height);
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

.navbar {
    @include centered(center);
    margin-left: auto;
    margin-right: 10rem;
    gap: 2rem;

    &__link {
        position: relative;
        color: $light-grey;

        &:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -3px;
            width: 0;
            height: 1px;
            background-color: $light-grey;
            transition: width .4s;
        }

        @media (hover: hover) {
            &:hover:after {
                content: "";
                width: 100%;
                display: block;
                position: absolute;
                left: 0;
                bottom: -3px;
                height: 1px;
                background-color: $light-grey;
                transition: width .4s;
            }
        }

        @media (hover: none) {
            &:active:after {
                content: "";
                width: 100%;
                display: block;
                position: absolute;
                left: 0;
                bottom: -3px;
                height: 1px;
                background-color: $light-grey;
                transition: width .4s;
            }
        }

        &.router-link-exact-active {
            pointer-events: none;

            &:after {
                content: "";
                display: block;
                position: absolute;
                right: 0;
                bottom: -3px;
                width: 100%;
                height: 1px;
                background-color: $light-grey;
                transition: width .4s;
            }
        }
    }

    @include xs-down {
        display: none;
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

        @include xs-down {
            display: none;
        }

        &:hover {
            opacity: .6;
        }
    }

    & .mob-btn {
        display: none;

        @include xs-down {
            display: block;
            background: transparent;
            width: 30px;
            height: 30px;
        }

        & svg {
            width: 100%;
            height: 100%;
        }
    }
}

.burger {
    width: 3rem;
    height: 3rem;
    position: relative;
    cursor: pointer;
    display: none;

    @include xs-down {
        display: block;
    }

    & .line {
        position: absolute;
        left: 0;
        height: 2px;
        background-color: #fff;
    }

    & .up {
        top: 30%;
        width: 2rem;
        transition: all .75s $easing;
    }

    & .down {
        top: 70%;
        width: 3rem;
        transition: all .75s $easing;
    }

    &._open {
        & .line {
            width: 3rem;
            top: 50%;

            &.up {
                transform: rotate(225deg);
            }

            &.down{
                transform: rotate(-225deg);
            }
        }
    }
}
</style>