<script setup>
import { RouterLink } from 'vue-router';

const slidebarData = {
    title: 'Métodos',
    data: [
        {
            name: 'Principiantes',
            link: '/cube-three-by-three/beginners'
        },
        {
            name: 'Fridrich',
            link: '/cube-three-by-three/fridrich'
        },
    ]
}
</script>

<template>
    <aside class="global-sidebar">
        <h2 class="global-sidebar__title"> {{ slidebarData.title }} </h2>
        <ul class="global-sidebar__list">
            <li v-for="element in slidebarData.data" class="global-sidebar__item-container">
                <RouterLink :to="element.link">
                    {{ element.name }}
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss"></style>