<template>
    <header class="header">
        <div class="container header__container">
            <nuxt-link to="/">
                <div class="logo">Затейники</div>
            </nuxt-link>
            <div class="burger">burger</div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader',
};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    &__container {
        @include centered(space-between);
        padding: 2rem 0;
    }
}

.logo {
    font-family: $font-second;
    font-size: 5rem;
    color: $box-shadow-color;
}
</style>