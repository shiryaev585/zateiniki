<template>
    <div id="map" v-observe class="map anim-appear delay-2 ">
        <client-only>
            <yandex-map
                :coordinates="contacts.coords"
                :zoom="14"
                :controls="['routeButtonControl', 'zoomControl']"
            >
                <yandex-marker 
                    :coordinates="contacts.coords"
                    marker-id="123"
                />
            </yandex-map>
        </client-only>
    </div>
</template>

<script>
import { yandexMap, yandexMarker } from 'vue-yandex-maps';

export default {
    name: 'MapBlock',

    components: {
        yandexMap,
        yandexMarker
    }
};
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

.yandex-container {
    height: 50vh;
}
</style>