<template>
    <div class="wrapper container">
        <div
            v-for="(item, idx) in content"
            :key="item.image_src"
            v-observe
            class="image"
            @click="setActiveItem(item)"
        >
            <div class="overlay"></div>
            <nuxt-img
                :src="item.image_src"
                :class="['image__img', `delay-${idx % 2 === 0 ? 1 : 3}`]"
                loading="lazy"
            />
            <svg v-if="withFrame" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.78,13.45,11.58,4A3,3,0,0,0,7,6.59V25.41a3,3,0,0,0,3,3A3,3,0,0,0,11.58,28l15.2-9.41a3,3,0,0,0,0-5.1Z" />
            </svg>
        </div>
        <transition name="fade">
            <div v-if="activeSrc" class="modal">
                <ui-close color="#d3d3d3" @close="closeModal" />
                <iframe
                    v-if="withFrame"
                    class="frame"
                    :src="activeSrc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
                <nuxt-img
                    v-else
                    :src="activeSrc"
                    class="modal-image"
                    loading="lazy"
                />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/global';

const props = defineProps({
    content: {
        type: Array,
        required: true
    },

    withFrame: {
        type: Boolean,
        default: false
    }
});

const globalStore = useGlobalStore();
const activeSrc = ref('');

const setActiveItem = (item) => {
    if (props.withFrame) {
        activeSrc.value = item?.video_src;
    } else {
        activeSrc.value = item?.image_src;
    }
    globalStore.toggleBodyLocked();
};

const closeModal = () => {
    globalStore.toggleBodyLocked();
    activeSrc.value = '';
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
}

.image {
    position: relative;
    width: 48%;
    height: 35rem;
    cursor: pointer;

    @include md-down {
        width: 100%;
    }

    &:hover .overlay {
        background: rgb(0, 0, 0, 0.5);
    }

    & .overlay {
        background: transparent;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        transition: background .3s;
    }

    &__img {
        position: absolute;
        width: 0%;
        height: 100%;
        object-fit: cover;
        transition-property: width;
        transition-duration: .7s;
        transition-timing-function: ease-in-out;
    }

    & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
        height: 64px;
        opacity: 0;
        transition: opacity .3s 1s;
        z-index: 2;

        & path {
            fill: #fff;
        }
    }
}

.animated {
    & .image__img {
        width: 100%;
    }

    & svg {
        opacity: 1;
    }
}

.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0, 0.7);
    z-index: 11;
    @include centered(center);

    & .frame,
    & .modal-image {
        width: 80vw;
        height: 80vh;
    }

    & .modal-image {
        object-fit: contain;
    }
}
</style>