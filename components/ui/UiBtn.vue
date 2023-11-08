<template>
    <component
        :is="url ? 'nuxt-link' : 'button'"
        :to="url ? url : null"
        :class="['ui-btn', { _light: isLight, _dark: isDark }]"
    >
        <span v-if="label" v-html="label"></span>
        <slot v-else></slot>
    </component>
</template>

<script>
export default {
    name: 'UiBtn',

    props: {
        url: {
            type: String,
            default: ''
        },

        label: {
            type: String,
            default: ''
        },

        isLight: {
            type: Boolean,
            default: false
        },

        isDark: {
            type: Boolean,
            default: false
        },
    }
};
</script>

<style lang="scss" scoped>
.ui-btn {
    padding: 1rem;
    width: 18rem;
    background: transparent;
    cursor: pointer;
    border: 1px solid $dark;
    transition: all .35s;

    &._light {
        border: 1px solid #fff;
        color: #fff;
    }

    &._dark {
        border: 1px solid $dark;
        color: $dark;
    }

    &:hover {
        background: $box-shadow-color;
        color: #fff;
        border: 1px solid $box-shadow-color;
        box-shadow: 0 0 5px $box-shadow-color, 0 0 25px $box-shadow-color, 0 0 50px $box-shadow-color, 0 0 100px $box-shadow-color;
    }
}
</style>