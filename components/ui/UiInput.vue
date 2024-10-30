<template>
    <div :class="['ui-input', { _focused: focused, _filled: modelValue, _light: isLight }]">
        <label :for="name" class="label">{{ label }}</label>
        <input
            :id="name"
            v-maska
            :value="modelValue"
            :name="name"
            :disabled="disabled"
            :required="required"
            :data-maska="maskData"
            class="input"
            :type="type"
            @focus="focused = true"
            @blur="focused = false"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
defineEmits(['update:modelValue']);
defineProps({
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

    modelValue: {
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
        
    maskData: {
        type: String,
        default: ''
    },

    isLight: {
        type: Boolean,
        default: false
    }
});
const focused = ref(false);
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

._light {
    & .label {
        color: $light-grey;
    }

    & .input {
        border-bottom: 1px solid $light-grey;
        color: $light-grey;
    }
}
</style>