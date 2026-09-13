<template>
    <div class="about-info container">
        <div v-observe class="about-info__img anim-appear">
            <template v-for="(item, idx) in teacher" :key="idx">
                <p v-if="item.text" v-observe class="text color-light-grey anim-appear">
                    {{ item.text }}
                </p>
                <div v-else :class="[`img img-${idx + 1}`]" v-html="item.image"></div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const teacher = [
    {
        text: 'В театральной студии «Затейники» интегрируются образовательные технологии, направленные на личностное развитие и социокультурную адаптацию. Программа направлена на формирование у детей начальных знаний, умений и навыков в области актёрской психофизики, на развитие образного мышления, воображения и фантазии.',
        image: '',
    },
    {
        text: 'В театральную студию дети приходят без специального отбора. На занятиях происходит сплачивание детей разного возраста в единый творческий коллектив. В объединении каждый учащийся может узнать самого себя, поверить в себя, заявить о себе окружающим, реализовать себя, как творческую личность, расширить свой кругозор и приобрести новых друзей.',
        image: '',
    },
    {
        text: 'Художественный руководитель и преподаватель театральной студии «Затейники» Ширяева Ольга Александровна работает с детьми более 10 лет.',
        image: '',
    },
    {
        text: '«Детское творчество часто воспринимается развлечением и игрой, но оно необычайно важно, как для самого ребёнка, развития его потенциала, воображения, знаний и умений, так и для окружающих нас людей, которым ребята способны подарить радость, смех, улыбки, сделать их счастливыми выступая, играя на сцене. Очень важной составляющей нашей творческой деятельности является волонтёрская работа. Мы с ребятами посещаем интернаты, социальные дома. Много тепла, радости и любви мы получаем в награду за наши выступления. Творческая деятельность нашей театральной студии — необыкновенный источник энергии, знаний, развития, радости и любви».',
        image: '',
    },
    {
        text: 'Дети — невероятно творческий народ. Они бесконечно пробуют, узнают, интересуются. Наша задача помочь им и поддержать их творческие стремления.',
        image: '',
    },
];
</script>

<style lang="scss" scoped>
.about-info {
    display: flex;
    gap: 3rem;

    @include xs-down {
        flex-direction: column;
    }

    &__img {
        position: relative;

        & .img {
            object-fit: cover;
            transition: transform 2s .25s $easeOut;

            @include xs-down {
                width: 100%;
                margin: 0 auto 1rem;
            }
        }
    }

    & .text:not(.about-info .text:last-of-type) {
        margin-bottom: 2rem;
    }
}

.img {
    & :deep(img) {
        width: 100%;
    }
}

.img-1 {
    float: left;
    margin-right: 1rem;
    width: 40rem;
    transform: translateX(-25px);

    @include md-down {
        width: 35rem;
    }
}

.img-5 {
    float: right;
    margin-left: 1rem;
    width: 40rem;
    transform: translateX(25px);

    @include md-down {
        width: 25rem;
    }
}

.animated.about-info__img .img {
    transform: translateX(0);
}
</style>