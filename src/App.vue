<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNavegationBar from './components/TopNavegationBar.vue';
</script>

<template>
  <TopNavegationBar />
  <RouterView />
</template>

<style lang="scss">
@import './assets/styale-default.scss';
</style>
