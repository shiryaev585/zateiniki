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

        <form v-observe class="form anim-appear delay-5" @submit.prevent="submit">
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
                class="btn"
                is-light
            />
        </form>
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

        return {
            form,
            showPreloader
        };
    },

    methods: {
        async submit() {
            const formData = new FormData();
            formData.append('name', this.form?.name);
            formData.append('phone', this.form?.phone);
            this.showPreloader = true;
            try {
                await fetch(this.$config.public.requestUrl, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                });
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
    gap: 20%;
}

.info-box {
    display: flex;
    flex-direction: column;
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

.form {
    color: $light-grey;

    &__subtitle {
        margin-bottom: 4rem;
    }

    & .inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 4rem;
    }
}
</style>