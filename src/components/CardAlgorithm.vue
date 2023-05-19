<template>
    <figure class="card-algoritmo">
        <header v-if="title">
            <h2>{{ title }}</h2>
        </header>
        <div ref="image_container" class="card-algoritmo__image-container">
            <slot></slot>
        </div>
        <figcaption v-if="description" class="card-algoritmo__description">{{ description }}</figcaption>
    </figure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
defineProps({
    description: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    }
})

//Función que mantiene la proporción de la imágen
const image_container = ref(null);
const changeWith = () => {
    if (image_container.value)
        image_container.value.style.height = `${image_container.value.clientWidth}px`;
}

onMounted(() => {
    changeWith();
    window.addEventListener("resize", changeWith); //Evento que se ejecuta cuando cambia el tamaño de la ventana
});
onBeforeUnmount(() => window.removeEventListener("resize", changeWith))
</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.card-algoritmo {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    max-width: 200px;
    border-radius: 10px;
    width: 100%;

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