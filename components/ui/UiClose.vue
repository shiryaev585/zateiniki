<template>
    <button class="close" aria-label="close" @click="emits('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <rect x="21.5859" y="7.44336" width="20" height="1.05263" transform="rotate(135 21.5859 7.44336)" :fill="color" />
            <rect x="20.5078" y="21.9204" width="20" height="0.999999" transform="rotate(-135 20.5078 21.9204)" :fill="color" />
        </svg>
    </button>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        required: true
    }
});

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.close {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
    background: transparent;
    width: 4rem;
    height: 4rem;
    transition: transform .35s;

    @include xss-down {
        top: 0;
        right: 0;
    }

    &:hover {
        transform: scale(1.2) rotate(180deg);
    }

    & svg {
        width: 100%;
        height: 100%;
    }
}
</style>