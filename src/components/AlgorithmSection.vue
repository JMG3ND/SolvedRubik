<template>
    <section :id="id" class="algorithm-section">
        <header class="algorithm-section__header">
            <h2 class="algorithm-section__title">{{ title }}</h2>
        </header>
        <div class="algorithm-section__card-container">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
defineProps(['id', 'title']);
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

//oll-algorithm-section
.algorithm-section {
    margin-bottom: 1rem;
    background-color: $dark-baground-color-z-index-1;

    body.light & {
        background-color: $light-baground-color-z-index-1;
    }

    padding: 1rem;
    border-radius: 20px;

    &__card-container {
        width: 100%;
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 1rem;
        justify-items: center;
    }
}

@media screen and (max-width: 640px) {
    .algorithm-section {
        &__card-container {
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>