<template>
    <div :class="['modal', { _visible: isModal }]">
        <button class="close" @click="globalStore.toggleModal(false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <rect x="21.5859" y="7.44336" width="20" height="1.05263" transform="rotate(135 21.5859 7.44336)" fill="#171717" />
                <rect x="20.5078" y="21.9204" width="20" height="0.999999" transform="rotate(-135 20.5078 21.9204)" fill="#171717" />
            </svg>
        </button>
        <div class="container form-container">
            <h2 class="title">
                Напишите нам
            </h2>
            <form class="form" @submit.prevent="submit()">
                <div class="inputs">
                    <ui-input
                        name="Имя"
                        type="text"
                        label="Имя"
                        required
                        @input="$emit('input', $event)"
                        @change="$emit('change', $event)"
                    />
                    <!-- <ui-input
                        name="Email"
                        type="email"
                        label="Email"
                        required
                        @input="$emit('input', $event)"
                        @change="$emit('change', $event)"
                    /> -->
                    <ui-input
                        name="Телефон"
                        type="tel"
                        label="Телефон"
                        required
                        @input="$emit('input', $event)"
                        @change="$emit('change', $event)"
                    />
                </div>
                <ui-btn
                    label="Связаться с нами"
                    class="btn"
                    is-dark
                />
            </form>
        </div>
    </div>
</template>

<script>
import { useGlobalStore } from '~/stores/global';

export default {
    name: 'SiteModal',

    setup() {
        const globalStore = useGlobalStore();
        const isModal = computed(() => globalStore.isModal);

        const data = {
            name: 'John',
            email: 'some@mail.com',
            phone: '+78887776655',
            message: 'Hello!'
        };

        const test = async () => {
            console.log('test');
            const res = await $fetch( '/api/request', {
                method: 'POST',
                body: data
            });
            console.log('res', res);
        };

        return {
            globalStore,
            isModal,
            test
        };
    },

    methods: {
        submit() {
            console.log('submit', this.isModal);
            this.test();
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    // background: #fff;
    background-image: linear-gradient(to right, #00ccb9, #5640d3 100%);
    z-index: 10;
    transition: top .75s $easing;

    &._visible {
        top: 0;
    }
}

.close {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
    background: transparent;
    width: 3rem;
    height: 3rem;
    transition: transform .35s;

    &:hover {
        transform: scale(1.2) rotate(180deg);
    }

    & svg {
        width: 100%;
        height: 100%;
    }
}

.form-container {
    margin-top: 12rem;
}

.form {
    width: 75%;
}

.title {
    font-size: 3.4rem;
}
.inputs {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;   
}

.btn {
    margin-top: 6rem;
}
</style>