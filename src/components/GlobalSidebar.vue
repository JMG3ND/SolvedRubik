<script setup>
import ToggleList from '../components/ToggleList.vue';

defineProps({
    title: String,
    data: Array
})

</script>

<template>
    <aside class="global-sidebar">
        <h2 class="global-sidebar__title"> {{ title }} </h2>
        <ul class="global-sidebar__list">
            <li class="global-sidebar__item-container" v-for="element in data">
                <ToggleList :link="element.link" :title="element.name" :list="element.articles" />
            </li>
        </ul>
    </aside>
</template>

<style lang="scss">
@media screen and (min-width: 1199px) {
    .global-sidebar {
        position: sticky;
        top: 90px;
    }
}


.global-sidebar {

    overflow-y: auto;

    &__title {
        padding: 1rem;
    }

    &__list {
        list-style-type: none;
    }
}
</style>