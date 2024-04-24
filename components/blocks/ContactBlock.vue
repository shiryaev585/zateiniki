<template>
    <div class="contact-block container">
        <site-preloader :show-preloader="showPreloader" is-light />
        <div class="info">
            <div v-observe class="info-box anim-appear delay-1">
                <span class="label">Телефон</span>
                <a href="tel:+79031231212" class="value">+7(903)123-12-12</a>
            </div>
            <div v-observe class="info-box anim-appear delay-3">
                <span class="label">Email</span>
                <a href="mailto:zateiniki@mail.ru" class="value">zateiniki@mail.ru</a>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <form
                v-if="!success"
                v-observe
                class="form anim-appear delay-5"
                @submit.prevent="submit"
            >
                <h3 class="form__subtitle">Оставьте Ваши контакты и мы Вам перезвоним</h3>
                <div class="inputs">
                    <ui-input
                        v-model="form.name"
                        name="name"
                        type="text"
                        label="Имя*"
                        required
                        is-light
                    />
                    <ui-input
                        v-model="form.phone"
                        mask-data="+7 (###) ###-##-##"
                        name="phone"
                        type="tel"
                        label="Телефон*"
                        required
                        is-light
                    />
                </div>
                <ui-btn
                    label="Связаться с нами"
                    class="form__btn"
                    is-light
                />
            </form>
            <div v-else class="success">
                <h3 class="success__subtitle">заявка принята</h3>
                <span class="success__txt">Мы свяжемся с Вами в ближайшее время</span>
                <ui-btn
                    label="Отправить ещё раз"
                    is-light
                    @click="success = false"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import SitePreloader from '~/components/default/SitePreloader.vue';

export default {
    name: 'ContactBlock',

    components: {
        SitePreloader
    },

    async setup() {
        const form = reactive({});
        const showPreloader = ref(false);
        const success = ref(false);

        return {
            form,
            showPreloader,
            success
        };
    },

    methods: {
        async submit() {
            // this.success = true;
            const formData = new FormData();
            formData.append('name', this.form?.name);
            formData.append('phone', this.form?.phone);
            this.showPreloader = true;
            try {
                const res = await fetch(this.$config.public.requestUrl, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                });
                if (res.ok) {
                    this.success = true;
                }
                this.form.name = '';
                this.form.phone = '';
            } catch (e) {
                console.error(e);
            } finally {
                this.showPreloader = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.contact-block {
    position: relative;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @include centered(center);
    gap: 5%;

    @include sm-down {
        flex-direction: column;
    }
}

.info {
    flex: 1;
    @include centered(center);
    flex-direction: column;

    @include sm-down {
        flex-direction: row;
        width: 70%;
        justify-content: space-between;
    }

    &-box {
        display: flex;
        flex-direction: column;
    }
}

.label, .value {
    color: $light-grey;
    padding: 1rem 0;
}

.label {
    font-size: 1.4rem;
}

.value {
    font-size: 2.4rem;
}

.form, .success {
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $light-grey;
    flex: 1;
}

.form {
    @include sm-down {
        width: 70%;
    }

    &__subtitle {
        margin-bottom: 4rem;

        @include sm-down {
            text-align: center;
        }
    }

    & .inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 4rem;
        width: 75%;

        @include sm-down {
            width: 100%;
        }
    }

    &__btn {
        @include sm-down {
            margin: 0 auto;
        }
    }
}

.success {
    @include sm-down {
        align-items: center;
    }

    &__subtitle {
        text-transform: uppercase;
        font-size: 5rem;
        margin-bottom: 2rem;
    }

    &__txt {
        font-size: 2.4rem;
        display: block;
        margin-bottom: 6rem;
    }
}
</style>