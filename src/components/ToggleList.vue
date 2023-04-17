<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    link: String,
    list: Array
})

</script>

<template>
    <div class="toggle">
        <header class="toggle__header">
            <RouterLink :to="link" class="toggle__link">{{ title }}</RouterLink>
        </header>
        <article v-if="list" class="toggle__list-container">
            <ul class="toggle__list">
                <li v-for="element in list" class="toggle__item-container">
                    <ToggleList :link="element.link" :title="element.name" :list="element.articles"></ToggleList>
                </li>
            </ul>
        </article>
    </div>
</template>

<style lang="scss">
@import '../assets/colors-theme.scss';

.toggle {
    padding-left: 1rem;

    &__link {
        display: inline-block;
        text-decoration: none;
        width: 100%;
        padding: 0.5rem;
        border-left: 2px solid $dark-border-box-color;

        body.light & {
            border-left: 2px solid $light-border-box-color;
        }

        &:hover {
            color: $yellow;
            border-left: 2px solid $yellow;
        }
    }

    & .router-link-active {
        border-left: 2px solid $yellow;
        background-color: $dark-yellow-background;

        body.light & {
            background-color: $light-yellow-background;
        }
    }

    &__list {
        list-style-type: none;
        margin: 1rem 0;
    }
}
</style>