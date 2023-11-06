<template>
    <div :class="['menu', { _opened: isMenuOpened }]">
        <div class="overlay" @click="headerStore.toggleMenu(false)"></div>
        <ul class="menu__inner">
            <li
                v-for="route in menuRoutes"
                :key="route.id"
                class="menu__item"
            >
                <nuxt-link
                    :to="route.path"
                    :class="['menu__link']"
                    @click="headerStore.toggleMenu(false)"
                >
                    {{ route.name }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { useHeaderStore } from '~/stores/header';

export default {
    name: 'SiteMenu',

    setup() {
        const headerStore = useHeaderStore();
        const isMenuOpened = computed(() => headerStore.isMenuOpened);
        const menuRoutes = [
            {
                id: 1,
                name: 'О нас',
                path: '/about'
            },
            {
                id: 2,
                name: 'Спектакли',
                path: '/performances'
            },
            {
                id: 3,
                name: 'Контакты',
                path: '/contacts'
            }
        ];

        return {
            isMenuOpened,
            menuRoutes,
            headerStore
        };
    }
};
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
    transform: translateX(-100%);
    transition: transform .35s $easing;

    &._opened {
        transform: translateX(0);

        & .menu__inner {
            width: 20%;
        }
    }

    &__inner {
        @include centered(center);
        flex-direction: column;
        gap: 2rem;
        position: relative;
        width: 0;
        height: 100%;
        z-index: 9;
        background: $dark50;
        transition: width .35s $easing;
    }

    &__link {
        font-size: 1.8rem;
        line-height: 1.2;
        color: #fff;
        padding: 1rem 0;
        @include link-hover;
    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
}
</style>