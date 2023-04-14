<script setup>
defineProps({
    data: Array
})
</script>

<template>
    <aside class="toc-sidebar">
        <h2>En este artículo</h2>
        <nav>
            <ul>
                <li v-for="element in data">{{ element }}</li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="scss"></style>