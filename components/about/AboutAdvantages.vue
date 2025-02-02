<template>
    <div class="advantages container light-bg right-offset">
        <h2 v-observe class="advantages__title">
            <span class="subtitle">Театральное творчество поможет Вашему ребёнку</span>
        </h2>
        <ul class="advantages__list">
            <li
                v-for="item in advantages"
                :key="item.id"
                v-observe
                :class="[`advantage anim-appear delay-${item.id}`]"
            >
                <nuxt-img
                    :src="item.icon"
                    alt="icon"
                    height="62"
                    loading="lazy"
                />
                <span>{{ item.advantage }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Advantage {
    icon: string,
    advantage: string,
    id: number
}

const advantages: Advantage[] = reactive([
    {
        icon: '/icons/advantages/1.svg',
        advantage: 'развить творческий потенциал',
        id: 1
    },
    {
        icon: '/icons/advantages/2.svg',
        advantage: 'импровизировать в любой момент жизни',
        id: 2
    },
    {
        icon: '/icons/advantages/3.svg',
        advantage: 'развить сценическое движение и пластику',
        id: 3
    },
    {
        icon: '/icons/advantages/4.svg',
        advantage: 'удерживать внимание аудитории',
        id: 4
    },
    {
        icon: '/icons/advantages/5.svg',
        advantage: 'избавиться от психологических и физических зажимов',
        id: 5
    },
    {
        icon: '/icons/advantages/6.svg',
        advantage: 'встретить единомышленников  и друзей',
        id: 6
    },
]);
</script>

<style lang="scss" scoped>
.advantages {
    &__title {
        text-align: center;

        & .subtitle {
            transform: translateX(-200%);
            transition: transform 2s $easeText;
            color: $dark50;
        }

        &.animated .subtitle {
            transform: translateX(0);
        }
    }

    &__list {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
        padding-right: 2rem;

        @include xss-down {
            padding-right: 0;
        }
    }

    & .advantage {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        gap: 1rem;
        color: $light-grey;

        @include md-down {
            min-width: calc(33% - 2rem);
        }

        @include xs-down {
            min-width: calc(50% - 2rem);
        }

        @include xss-down {
            min-width: 100%;
        }

        & img {
            height: 4rem;
        }

        & span {
            text-align: center;
            text-transform: uppercase;
            color: $dark50;
        }
    }
}
</style>