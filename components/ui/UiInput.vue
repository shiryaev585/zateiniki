<template>
    <div :class="['ui-input', { _focused: focused, _filled: value }]">
        <label for="input" class="label">{{ label }}</label>
        <input 
            :id="name"
            v-model="value"
            :name="name"
            :disabled="disabled"
            :required="required"
            class="input"
            :type="type"
            @focus="focused = true"
            @blur="focused = false"
        />
    </div>
</template>

<script>
export default {
    name: 'UiInput',

    props: {
        label: {
            type: String,
            default: ''
        },

        name: {
            type: String,
            default: ''
        },

        type: {
            type: String,
            default: ''
        },

        initialValue: {
            type: [String, Number],
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        },

        required: {
            type: Boolean,
            default: false
        },
        
        errors: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            focused: false,
            filled: false,
            value: ''
        };
    },

};
</script>

<style lang="scss" scoped>
.ui-input {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &._filled,
    &._focused {
        & .label {
            transform: translate3d(0, -1.5rem, 0);
            font-size: 1rem;
            opacity: 1;
            pointer-events: none;
        }
    }
}

.label {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 1.5rem;
    line-height: 2;
    font-weight: 300;
    opacity: 1;
    transform-origin: 0 0;
    transition: all .4s $easing;
}


.input {
    padding: 1rem 0;
    border-bottom: 1px solid $dark;
    font-size: 1.5rem;
    background: transparent;
}
</style>