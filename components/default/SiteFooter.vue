<template>
    <footer v-if="isFooterVisible" class="footer">
        <div class="container footer__container">
            <nuxt-link class="footer__logo" to="/">
                Затейники
            </nuxt-link>
            <div class="footer__info">
                <ul class="list">
                    <li
                        v-for="route in menuRoutes"
                        :key="route.id"
                        class="item"
                    >
                        <nuxt-link
                            :to="route.path"
                            class="item__link"
                        >
                            {{ route.name }}
                        </nuxt-link>
                    </li>
                </ul>
                <ul class="list">
                    <li
                        v-for="contact in contactsList"
                        :key="contact.value"
                        class="item"
                    >
                        <a
                            v-if="contact.type === 'tel:'"
                            :href="contact.type + contact.value?.replace(/(\()|(\)|(-))/g, '')"
                            aria-label="набрать наш номер"
                            class="item__link"
                        >
                            {{ contact.value }}
                        </a>
                        <a
                            v-else-if="contact.type"
                            :href="contact.type + contact.value"
                            aria-label="свяжитесь с нами по email"
                            class="item__link"
                        >
                            {{ contact.value }}
                        </a>
                        <span v-else class="item__inner">{{ contact.value }}</span>
                    </li>
                </ul>
            </div>
            <div class="footer__route">
                <a :href="contacts?.address?.href" target="_blank" aria-label="проложить удобный маршрут">
                    <span>Проложить маршрут</span>
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="15.8184" cy="16.3609" r="15" />
                            <path
                                d="M12.251 16.4423L11.1609 18.3304C10.564 19.3643 10.9182 20.6863 11.9521 21.2833V21.2833C12.986 21.8802 14.308 21.5259 14.9049 20.4921L17.0767 16.7304C17.6736 15.6966 18.9956 15.3423 20.0295 15.9392V15.9392C21.0634 16.5361 21.4177 17.8582 20.8207 18.8921L19.7391 20.7656"
                                stroke-linecap="round"
                            />
                            <path
                                d="M15.7288 10.2735C15.7288 11.4941 15.0144 12.6716 14.2264 13.5865C13.8397 14.0355 13.4517 14.4022 13.1602 14.6567C13.0953 14.7133 13.0354 14.7642 12.9816 14.809C12.9278 14.7642 12.8679 14.7133 12.803 14.6567C12.5115 14.4022 12.1235 14.0355 11.7368 13.5865C10.9488 12.6716 10.2344 11.4941 10.2344 10.2735C10.2344 8.75622 11.4644 7.52625 12.9816 7.52625C14.4989 7.52625 15.7288 8.75622 15.7288 10.2735ZM12.6868 15.0432C12.6868 15.0432 12.6868 15.0432 12.6868 15.0432L12.6868 15.0432Z" />
                            <circle cx="18.0476" cy="23.6401" r="1.55545" />
                        </g>
                    </svg>

                </a>
            </div>
            <div class="footer__socials">
                <a
                    :href="`https://api.whatsapp.com/send/?phone=${whatsupPhone}`"
                    aria-label="свяжитесь с нами в соц сетях"
                    target="_blank"
                    class="social-link"
                >
                    <svg
                        fill="#d3d3d3"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20.5,3.5C18.25,1.25,15.2,0,12,0C5.41,0,0,5.41,0,12c0,2.11,0.65,4.11,1.7,5.92 L0,24l6.33-1.55C8.08,23.41,10,24,12,24c6.59,0,12-5.41,12-12C24,8.81,22.76,5.76,20.5,3.5z M12,22c-1.78,0-3.48-0.59-5.01-1.49 l-0.36-0.22l-3.76,0.99l1-3.67l-0.24-0.38C2.64,15.65,2,13.88,2,12C2,6.52,6.52,2,12,2c2.65,0,5.2,1.05,7.08,2.93S22,9.35,22,12 C22,17.48,17.47,22,12,22z M17.5,14.45c-0.3-0.15-1.77-0.87-2.04-0.97c-0.27-0.1-0.47-0.15-0.67,0.15 c-0.2,0.3-0.77,0.97-0.95,1.17c-0.17,0.2-0.35,0.22-0.65,0.07c-0.3-0.15-1.26-0.46-2.4-1.48c-0.89-0.79-1.49-1.77-1.66-2.07 c-0.17-0.3-0.02-0.46,0.13-0.61c0.13-0.13,0.3-0.35,0.45-0.52s0.2-0.3,0.3-0.5c0.1-0.2,0.05-0.37-0.02-0.52 C9.91,9.02,9.31,7.55,9.06,6.95c-0.24-0.58-0.49-0.5-0.67-0.51C8.22,6.43,8.02,6.43,7.82,6.43S7.3,6.51,7.02,6.8 C6.75,7.1,5.98,7.83,5.98,9.3c0,1.47,1.07,2.89,1.22,3.09c0.15,0.2,2.11,3.22,5.1,4.51c0.71,0.31,1.27,0.49,1.7,0.63 c0.72,0.23,1.37,0.2,1.88,0.12c0.57-0.09,1.77-0.72,2.02-1.42c0.25-0.7,0.25-1.3,0.17-1.42C18,14.68,17.8,14.6,17.5,14.45z" />
                    </svg>
                </a>
                <a
                    href="https://vk.com/club176546660"
                    aria-label="свяжитесь с нами в соц сетях"
                    target="_blank"
                    class="social-link"
                >
                    <svg
                        fill="#d3d3d3"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m23.456 5.784c-.27.849-.634 1.588-1.09 2.259l.019-.03q-.672 1.12-1.605 2.588-.8 1.159-.847 1.2c-.138.173-.234.385-.267.618l-.001.007c.027.212.125.397.268.535l.4.446q3.21 3.299 3.611 4.548c.035.092.055.198.055.309 0 .194-.062.373-.167.52l.002-.003c-.176.181-.422.293-.694.293-.03 0-.061-.001-.09-.004h.004-2.631c-.001 0-.003 0-.005 0-.337 0-.647-.118-.89-.314l.003.002c-.354-.291-.669-.606-.951-.948l-.009-.012q-.691-.781-1.226-1.315-1.782-1.694-2.63-1.694c-.021-.002-.045-.003-.07-.003-.165 0-.319.051-.446.138l.003-.002c-.104.13-.167.298-.167.479 0 .036.002.07.007.105v-.004c-.027.314-.043.679-.043 1.048 0 .119.002.237.005.355v-.017 1.159c.01.047.016.101.016.156 0 .242-.11.458-.282.601l-.001.001c-.387.177-.839.281-1.316.281-.102 0-.202-.005-.301-.014l.013.001c-1.574-.03-3.034-.491-4.275-1.268l.035.02c-1.511-.918-2.763-2.113-3.717-3.525l-.027-.042c-.906-1.202-1.751-2.56-2.471-3.992l-.07-.154c-.421-.802-.857-1.788-1.233-2.802l-.06-.185c-.153-.456-.264-.986-.31-1.535l-.002-.025q0-.758.892-.758h2.63c.024-.002.052-.003.081-.003.248 0 .477.085.658.228l-.002-.002c.2.219.348.488.421.788l.003.012c.484 1.367.997 2.515 1.587 3.615l-.067-.137c.482.97 1.015 1.805 1.623 2.576l-.023-.031q.8.982 1.248.982c.009.001.02.001.032.001.148 0 .277-.08.347-.2l.001-.002c.074-.19.117-.411.117-.641 0-.049-.002-.098-.006-.146v.006-3.879c-.021-.457-.133-.884-.32-1.267l.008.019c-.124-.264-.273-.492-.45-.695l.003.004c-.164-.164-.276-.379-.311-.619l-.001-.006c0-.17.078-.323.2-.423l.001-.001c.121-.111.283-.178.46-.178h.008 4.146c.022-.003.047-.004.073-.004.195 0 .37.088.486.226l.001.001c.103.188.164.413.164.651 0 .038-.002.075-.005.112v-.005 5.173c-.002.024-.003.052-.003.08 0 .184.051.357.139.504l-.002-.004c.073.108.195.178.333.178h.001c.176-.012.336-.07.471-.162l-.003.002c.272-.187.506-.4.709-.641l.004-.005c.607-.686 1.167-1.444 1.655-2.25l.039-.07c.344-.57.716-1.272 1.053-1.993l.062-.147.446-.892c.155-.446.571-.76 1.06-.76.019 0 .038 0 .057.001h-.003 2.631q1.066 0 .8.981z" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import { useFooterStore } from '~/stores/footer';

export default {
    name: 'SiteFooter',

    setup() {
        const footerStore = useFooterStore();
        const isFooterVisible = computed(() => footerStore.isVisible);
        const contactsList = computed(() => Object.values(contacts)
            ?.filter((item) => item?.value && item));
        const whatsupPhone = computed(() => contacts.phone.value?.replace(/\D/g, ''));

        return {
            isFooterVisible,
            contactsList,
            whatsupPhone
        };
    }
};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background: $dark50;
    color: $light-grey;
    padding: 2rem 0;

    &__container {
        display: flex;
        position: relative;

        @include sm-down {
            flex-direction: column;
        }
    }

    &__logo {
        font-family: $font-second;
        font-size: 2.4rem;
        letter-spacing: .5rem;
        position: relative;
        height: fit-content;
        background-image: linear-gradient(to right, #00ccb9, #5640d3 50%, #fff 50%);
        background-size: 200% 100%;
        background-position: 0;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__info {
        display: flex;
        gap: 3rem;
        margin-left: 15%;

        @include sm-down {
            margin-left: 0;
        }
    }

    & .list {
        & .item {
            &__link,
            &__inner {
                font-size: 1.4rem;
                display: block;
                color: $light-grey;
                padding: .5rem 0;
            }

            &__link {
                transition: opacity .3s;

                &:hover {
                    opacity: .6;
                }
            }
        }
    }

    &__route {
        margin-top: auto;
        margin-left: auto;
        transition: opacity .3s;
        stroke: $light-grey;

        &:hover {
            opacity: .6;
        }

        @include sm-down {
            position: absolute;
            top: 0;
            right: 4rem;
        }

        @include xs-down {
            right: 2rem;
        }

        @include xss-down {
            position: static;
            margin: 1rem auto 0 0;
        }

        & a {
            color: $light-grey;
            @include centered(center);
            gap: 1rem;
            padding: 0.5rem 0;
        }
    }

    &__socials {
        margin-top: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 2rem;

        @include xss-down {
            margin: 1rem auto 0;
        }

        & .social-link {
            width: 24px;
            height: 24px;
            padding: 0.5rem 0;
            transition: opacity .3s;

            &:hover {
                opacity: .6;
            }
        }
    }
}
</style>