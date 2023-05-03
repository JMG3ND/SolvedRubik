<template>
    <figure class="card-algoritmo">
        <div ref="image_container" :style="{ height: setHeight }" class="card-algoritmo__image-container">
            <ImageAlgrithm :colors="image" />
        </div>
        <figcaption class="card-algoritmo__description">{{ description }}</figcaption>
    </figure>
</template>

<script setup>
import ImageAlgrithm from '@/components/ImageAlgrithm.vue';
import { ref, computed } from 'vue';
defineProps({
    image: Array,
    description: String,
})

//Función que mantiene la proporción de la imágen
const image_container = ref(null);
const setHeight = computed(() => {
    if (image_container.value) {
        const width = image_container.value.clientWidth;
        return `${width}px`;
    }
    return ``;
});
</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.card-algoritmo {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    max-width: 200px;
    border-radius: 10px;

    background-color: $dark-baground-color-z-index-2;

    body.light & {
        background-color: $light-baground-color-z-index-2;
    }

    &__image-container {
        margin-bottom: 1rem;
        width: clamp(100px, 100%, 150px);
    }

    &__description {
        text-align: center;
    }
}
</style>