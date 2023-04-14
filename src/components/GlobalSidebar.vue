<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    data: Array
})

console.log(props.data);
</script>

<template>
    <aside class="global-sidebar">
        <h2 class="global-sidebar__title"> {{ title }} </h2>
        <ul class="global-sidebar__list">
            <li class="global-sidebar__item-container" v-for="element in data">
                <h3 class="global-sidebar__method-title">{{ element.name }}</h3>
                <ul class="global-sidebar__articles-container">
                    <template v-for="article in element.articles">
                        <li class="global-sidebar__article-item">
                            <RouterLink class="global-sidebar__article-link" :to="article.link">{{ article.name }}
                            </RouterLink>
                        </li>
                    </template>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss">
.global-sidebar {


    &__title {
        padding: 0.5rem;
    }

    &__list {
        padding: 0.5rem;
        text-decoration: none;
    }

    &__articles-container {
        padding: 0.5rem;
        text-decoration: none;
    }

    &__article-item {
        display: block;
        text-decoration: none;
    }

    &__article-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 0.5rem;
        border-left: 3px solid #474747;
    }

    & .router-link-active {
        background-color: rgba(255, 255, 0, 0.299);
        border-color: yellow;
    }
}
</style>