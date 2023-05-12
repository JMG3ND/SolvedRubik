<template>
    <figure class="pll-card-algoritmo">
        <header class="pll-card-algoritmo__header">{{ title }}</header>
        <div ref="image_container" :style="{ height: setHeight }" class="pll-card-algoritmo__image-container">
            <div class="pll-card-algoritmo__image">
                <div v-for=" in 9" class="pll-card-algoritmo__piece"></div>
                <div v-for="row in image" class="pll-card-algoritmo__arrow-container"
                    :class='`pll-card-algoritmo__arrow-container--${row[0]} pll-card-algoritmo__arrow-container--rotate-${row[1]}`'>
                    <ArrowAnimate />
                </div>
            </div>
        </div>
        <figcaption class="pll-card-algoritmo__description">{{ algorithm }}</figcaption>
    </figure>
</template>

<script setup>
import ArrowAnimate from '@/components/ArrowAnimate.vue';
import { ref, computed, onMounted } from 'vue';

defineProps({
    title: String,
    image: Array,
    algorithm: String,
})

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

.pll-card-algoritmo {
    position: relative;
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

    &__header {
        padding-bottom: 1rem;
    }

    &__image-container {
        margin-bottom: 1rem;
        width: clamp(100px, 100%, 150px);
    }

    &__description {
        text-align: center;
    }

    &__image {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        width: 100%;
        height: 100%;
    }

    &__piece {
        position: relative;
        z-index: 0;
        border-radius: 10%;
        background-color: #f4ec00;
        border: 1px solid black;
    }

    &__arrow-container {
        display: flex;
        align-items: center;
        position: absolute;
        overflow: hidden;

        //Horizontales
        &--1 {
            top: 0;
            bottom: calc(100% - 100%/3);
            left: calc(100%/6);
            right: calc(100%/6);
        }

        //Este puede cambiar varía para las esquinas
        &--2 {
            top: calc(100%/6);
            left: calc(100%/6);
            right: calc(100%/6);
            bottom: calc(100%/6);
        }


        &--3 {
            top: calc(100% - 100%/3);
            bottom: 0;
            left: calc(100%/6);
            right: calc(100%/6);
        }

        //Aristas
        //top-left
        &--4 {
            top: 0;
            left: 0;
            right: calc(100%/3);
            bottom: calc(100%/3);
        }

        //top-right
        &--5 {
            top: 0;
            left: calc(100%/3);
            right: 0;
            bottom: calc(100%/3);
        }

        //bottom-left
        &--6 {
            top: calc(100%/3);
            left: calc(100%/3);
            right: 0;
            bottom: 0;
        }

        //bottom-right
        &--7 {
            top: calc(100%/3);
            left: 0;
            right: calc(100%/3);
            bottom: 0;
        }

        //Vertical
        //left
        &--8 {
            top: 48%;
            left: -25%;
            right: 45%;
        }

        //right
        &--9 {
            top: 48%;
            left: 45%;
            right: -25%;
        }

        &--rotate {
            @for $i from 1 through 7 {
                &-#{$i*45} {
                    transform: rotate(#{$i*45}deg);
                }
            }
        }
    }
}
</style>