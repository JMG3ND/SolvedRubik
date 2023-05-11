<template>
    <figure class="oll-card-algoritmo">
        <div ref="image_container" :style="{ height: setHeight }" class="oll-card-algoritmo__image-container">
            <div class="algorithm-image">
                <div v-for="element in image" class="algorithm-image__piece" :class="color(element)"></div>
            </div>
        </div>
        <figcaption class="oll-card-algoritmo__description">{{ description }}</figcaption>
    </figure>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
defineProps({
    image: Array,
    description: String,
})

//Método que asigna las clases de cada pieza del cubo
const color = element => {
    switch (element) {
        case 1:
            return 'algorithm-image__piece--active';
        case 2:
            return 'algorithm-image__piece--top'
        case 3:
            return 'algorithm-image__piece--right'
        case 4:
            return 'algorithm-image__piece--left'
        case 5:
            return 'algorithm-image__piece--bottom'
        default:
            return '';
    }
};

//Función que mantiene la proporción de la imágen
const width = ref(null);
const image_container = ref(null);
const setHeight = computed(() => `${width.value}px`);
const changeWith = () => {
    if (image_container.value)
        width.value = image_container.value.clientWidth;
}

onMounted(() => changeWith());
window.addEventListener("resize", changeWith); //Evento que se ejecuta cuando cambia el tamaño de la ventana
</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.oll-card-algoritmo {
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

%extend-piece {
    content: '';
    position: absolute;
    background-color: #f4ec00;
    border-radius: 100px;
    min-width: 4px;
    min-height: 4px;
    border: 1px solid black;
}

.algorithm-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    width: 100%;
    height: 100%;

    &__piece {
        position: relative;
        z-index: 0;
        border-radius: 10%;
        background-color: #8e8e8e;
        border: 1px solid black;

        &--active {
            background-color: #f4ec00;
        }

        &--top::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            top: -15%;
        }

        &--right::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            right: -15%;
        }

        &--left::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            left: -15%;
        }

        &--bottom::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            bottom: -15%;
        }
    }
}
</style>