<template>
    <aside class="global-sidebar">
        <RouterLink @click="clickRouterLink" :to="url" class="global-sidebar__title"> {{ title }} </RouterLink>
        <ul class="global-sidebar__list">
            <li class="global-sidebar__item-container" v-for="element in data">
                <ToggleList :link="element.link" :title="element.name" :list="element.articles"
                    @hiddenSidebar="emit('hiddenSidebar')" />
            </li>
        </ul>
    </aside>
</template>

<script setup>
import ToggleList from '../components/ToggleList.vue';
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    url: String,
    data: Array,
})
//Método que hace un scroll de la página al inicio cada vez que se cambia de artículo mediante el GlobalSidebar
const emit = defineEmits(['hiddenSidebar']);
const clickRouterLink = () => emit('hiddenSidebar');
</script>

<style lang="scss">
.global-sidebar {
    padding-right: 1rem;
    overflow-y: auto;

    &__title {
        display: block;
        padding: 1rem;
        font-size: large;
    }

    &__list {
        list-style-type: none;
    }
}
</style>