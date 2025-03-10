<template>
    <div :class="['contact-block container', { 'light-bg': lightBg }]">
        <site-preloader :show-preloader="showPreloader" is-light />
        <h2 v-if="title" v-observe class="contact-block__title anim-appear delay-1">
            {{ title }}
        </h2>
        <div v-else class="info">
            <div v-observe class="info-box anim-appear delay-1">
                <span class="label">Телефон</span>
                <a :href="phoneHref" class="value">{{ contacts.phone.value }}</a>
            </div>
            <div v-observe class="info-box anim-appear delay-3">
                <span class="label">Email</span>
                <a :href="emailHref" class="value">{{ contacts.email.value }}</a>
            </div>
            <div v-observe class="info-box anim-appear delay-3">
                <span class="label">Адрес</span>
                <a :href="addressHref" target="_blanc" class="value">{{ contacts.address.value }}</a>
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
                        id="name"
                        v-model="form.name"
                        name="name"
                        type="text"
                        label="Имя*"
                        required
                        is-light
                    />
                    <ui-input
                        id="phone"
                        v-model="form.phone"
                        mask-data="+7 (###) ###-##-##"
                        name="phone"
                        type="tel"
                        label="Телефон*"
                        required
                        is-light
                    />
                    <span class="privacy">Нажимая кнопку «Связаться с нами» Вы даёте своё согласие на обработку <nuxt-link to="/privacy">персональных данных</nuxt-link></span>
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

<script setup lang="ts">
import { SitePreloader } from '~/components/default';

withDefaults(defineProps<{
    title?: string,
    lightBg?: boolean
}>(), {
    title: '',
    lightBg: false
});

interface Form {
    name: string,
    phone: string,
    email?: string
}

const config = useRuntimeConfig();
const form = reactive<Form>({ name: '', phone: '' });
const showPreloader = ref<boolean>(false);
const success = ref<boolean>(false);
const phoneHref = computed<string>(() => contacts?.phone?.type + contacts?.phone?.value?.replace(/(\()|(\)|(-))/g, ''));
const emailHref = computed<string>(() => contacts?.email?.type + contacts?.email?.value);
const addressHref = computed<string>(() => contacts?.address?.href || '');

const submit = async () => {
    const formData = new FormData();
    formData.append('name', form?.name);
    formData.append('phone', form?.phone);
    showPreloader.value = true;
    try {
        const res = await useApi(config.public.requestUrl, {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' },
        });
        if (res.data) {
            success.value = true;
        }
        form.name = '';
        form.phone = '';
    } catch (e) {
        console.error(e);
    } finally {
        showPreloader.value = false;
    }
};
</script>

<style lang="scss" scoped>
.contact-block {
    position: relative;
    @include centered(center);
    gap: 5%;

    @include sm-down {
        flex-direction: column;
    }

    &__title {
        flex: 1;
        text-align: center;
        color: $light-grey;
        font-size: 5rem;
        padding-left: 2rem;

        @include xs-down {
            font-size: 3rem;
        }
    }

    &.light-bg {
        padding-top: 4rem;
        padding-bottom: 4rem;

        & :is(.contact-block__title, .form__subtitle, .label, .input, .success__subtitle, .success__txt) {
            color: $dark50;
        }

        & :deep(.input) {
            border-bottom: 1px solid $dark50;
        }

        & :deep(.ui-btn) {
            color: $dark50;
            border: 1px solid $dark50; 
        }

        & :is(.privacy, .privacy a) {
            color: $dark50;
        }
    }
}

.info {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @include sm-down {
        flex-direction: row;
        width: 70%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @include xs-down {
        width: 95%;
    }

    @include xss-down {
        width: 100%;
    }

    &-box {
        display: flex;
        flex-direction: column;
        padding-left: 15rem;

        @include md-down {
            padding-left: 0;
        }

        &:last-of-type {
            @include sm-down {
                margin: 0 auto;
            }

            @include xs-down {
                margin: 0;
            }
        }
    }
}

.label, .value {
    color: $light-grey;
    padding: 1rem 0;
}

.label {
    font-size: 1.4rem;

    @include xss-down {
        font-size: 1.2rem;
    }
}

.value {
    font-size: 2.4rem;
    transition: opacity .3s;

    &:hover {
        opacity: .6;
    }

    @include xss-down {
        font-size: 1.8rem;
    }
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
        margin-top: 1rem;
    }

    @include xs-down {
        width: 95%;
    }

    @include xss-down {
        width: 100%;
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

.privacy {
    font-size: 1.2rem;
    color: $light-grey;

    & a {
        color: $light-grey;
        text-decoration: underline;
        transition: opacity .3s;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>