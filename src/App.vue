<template>
  <TopNavegationBar />
  <RouterView />
  <FooterPrincipal />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopNavegationBar from './components/TopNavegationBar.vue';
import FooterPrincipal from './components/FooterPrincipal.vue';
</script>

<style lang="scss">
//Estilos por defecto de la app
@import './assets/styale-default.scss';
</style>
