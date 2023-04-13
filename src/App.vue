<script setup>
import { RouterView } from 'vue-router'
import TopNavegationBar from './components/TopNavegationBar.vue';
import FooterPrincipal from './components/FooterPrincipal.vue';
</script>

<template>
  <TopNavegationBar />
  <RouterView />
  <FooterPrincipal />
</template>

<style lang="scss">
@import './assets/styale-default.scss';
</style>
