<template>
    <article class="card-article">
        <header class="card-article__header">
            <h1 class="card-article__title">{{ title }}</h1>
        </header>
        <slot></slot>
    </article>
</template>

<script setup>
defineProps(["title"]);
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

.card-article {

    padding: 1rem;
    border-radius: 20px;

    h1 {
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.5rem;
        margin: 1rem 0 2rem;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    ol,
    ul {
        padding: 0 2rem;

        li {
            line-height: 1.5rem;
        }
    }
}
</style>