<template>
    <figure class="card-algoritmo">
        <img class="card-algoritmo__image" :src="image" alt="">
        <figcaption class="card-algoritmo__description">{{ description }}</figcaption>
    </figure>
</template>

<script setup>
defineProps({
    image: URL,
    description: String,
})
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

    &__image {
        margin-bottom: 1rem;
        width: 150px;
        height: 150px;
        background-color: white;
    }

    &__description {
        text-align: center;
    }
}
</style>