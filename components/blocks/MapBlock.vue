<template>
    <div id="map" v-observe class="map anim-appear delay-2 ">
        <client-only>
            <yandex-map
                :settings="{
                    location: {
                        center: contacts.coords,
                        zoom: 15,
                    },
                }"
            >
                <yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
                <yandex-map-default-features-layer />
                <yandex-map-controls :settings="{ position: 'right' }">
                    <yandex-map-zoom-control />
                </yandex-map-controls>

                <yandex-map-default-marker :settings="{ coordinates: contacts.coords, title: 'Затейники' }" />
            </yandex-map>
        </client-only>
    </div>
</template>
  
<script setup>
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapDefaultMarker
} from 'vue-yandex-maps';
</script>

<style lang="scss" scoped>
.map {
    height: fit-content;
}

:deep(.__ymap_container) {
    height: 60vh;
}
</style>