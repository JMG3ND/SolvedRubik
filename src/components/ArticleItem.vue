<template>
    <section class="article-item">
        <div class="article-item__image-container"><img class="article-item__image" :src="imageArticle"
                alt="Cubo de rubik 2x2"></div>
        <div class="article-item__informataion-container">
            <header class="article-item__title-container">
                <h2 class="article-item__title">{{ title }}</h2>
            </header>
            <article class="article-item__description-container">
                <p class="article-item__description">{{ description }}</p>
            </article>
            <footer class="article-item__link-container">
                <RouterLink v-if="url" :to="url" class="button-link">Ir</RouterLink>
            </footer>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    imageArticle: String,
    description: String,
    url: {
        type: String,
        default: null
    }
});
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

.article-item {
    position: relative;
    grid-template-columns: 0.8fr 1fr;
    display: grid;
    border-radius: 20px;
    padding: 0.5rem;
    background-color: $dark-baground-color-z-index-1;

    body.light & {
        background-color: $light-baground-color-z-index-1;
    }

    &__informataion-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__image-container {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
    }

    &__image {
        width: 100%;
        padding: 10px;
        background-color: $dark-baground-color-z-index-2;

        body.light & {
            background-color: $light-baground-color-z-index-3;
        }

        border-radius: 10px;
    }

    &__title {
        margin-bottom: 0.5rem;
    }

    &__description-container {
        height: 100%;
    }

    &__link-container {
        text-align: end;
    }
}

.button-link {
    display: inline-block;
    text-decoration: none;
    padding: 10px 40px 10px 40px;
    border-radius: 10px;
    background-color: $dark-baground-color-z-index-3;

    body.light & {
        background-color: $light-baground-color-z-index-3;
    }
}
</style>