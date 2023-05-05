<template>
    <aside ref="asidevar" class="toc-sidebar">
        <h2 class="toc-sidebar__title">En este artículo</h2>
        <nav class="toc-sidebar__nav">
            <ul class="toc-sidebar__list">
                <li class="toc-sidebar__item" v-for="element in  data ">
                    <a class="toc-sidebar__link" :href="`#${element.id}`">
                        {{ element.title }}
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
defineProps({
    data: Array
});
</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.toc-sidebar {

    &__list {
        list-style-type: none;
    }

    &__nav {
        margin-left: 1rem;
        margin-top: 1rem;
    }

    &__link {
        display: inline-block;
        text-decoration: none;
        padding: 0.3rem;
        border-left: 2px solid $dark-border-box-color;

        &:hover {
            color: white;
            border-left: 2px solid white;

            body.light & {
                color: black;
                border-left: 2px solid black;
            }
        }
    }
}
</style>