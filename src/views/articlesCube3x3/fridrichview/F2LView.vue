<template>
    <h1>F2L</h1>
</template>

<script setup>
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => tocSidebarDataFill(null));
</script>