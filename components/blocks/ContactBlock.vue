<template>
    <div v-observe class="contact-block container">
        <div class="info">
            <div class="info-box">
                <span class="label">Телефон</span>
                <a href="tel:+79031231212" class="value">+7(903)123-12-12</a>
            </div>
            <div class="info-box">
                <span class="label">Email</span>
                <a href="mailto:zateiniki@mail.ru" class="value">zateiniki@mail.ru</a>
            </div>
        </div>

        <form class="form" @submit.prevent="submit">
            <h3>Оставьте Ваши контакты и мы Вам перезвоним</h3>
            <div class="inputs">
                <ui-input
                    v-model="form.name"
                    name="name"
                    type="text"
                    label="Имя*"
                    required
                />
                <ui-input
                    v-model="form.phone"
                    mask-data="+7 (###) ###-##-##"
                    name="phone"
                    type="tel"
                    label="Телефон*"
                    required
                />
            </div>
            <ui-btn
                label="Связаться с нами"
                class="btn anim-appear"
                is-light
            />
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactBlock',

    data() {
        return {
            form: {}
        };
    },

    methods: {
        submit() {
            console.log('submit');
        }
    }
};
</script>

<style lang="scss" scoped>
.contact-block {
    padding-top: 4rem;
    padding-bottom: 4rem;
    @include centered(center);
    gap: 20%;
}

.info-box {
    display: flex;
    flex-direction: column;
}

.label, .value {
    color: $grey;
    padding: 1rem 0;
}

.label {
    font-size: 1.4rem;
}

.value {
    font-size: 2.4rem;
}

.form {
    color: $grey;
}
</style>