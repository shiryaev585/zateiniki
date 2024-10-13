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
import { YandexMap, YandexMarker } from 'vue-yandex-maps';

export default {
    name: 'MapBlock',

    components: {
        YandexMap,
        YandexMarker
    }
};
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

.yandex-container {
    height: 60vh;
}
</style>