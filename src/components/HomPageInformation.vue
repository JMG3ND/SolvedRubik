<template>
  <section class="home-page-information justify-elements-in-screen">
    <div class="home-page-information__container justify-elements-in-screen__container">
      <header class="home-page-information__title-container">
        <h1 class="home-page-information__title">ARTÍCULOS</h1>
      </header>
      <article class="home-page-information__item-container">
        <!--Block-->
        <ArticleItem title="CUBO 3X3" :imageArticle="cube3x3"
          description="Algoritmos para resolver el cubo tres por tres" />
      </article>
    </div>
  </section>

  <section class="home-page-information justify-elements-in-screen">
    <div class="home-page-information__container justify-elements-in-screen__container">
      <header class="home-page-information__title-container">
        <h1 class="home-page-information__title">ARTÍCULOS EN DESARROLLO</h1>
      </header>
      <article class="home-page-information__item-container">
        <!--Block-->
        <ArticleItem title="CUBO 2X2" :imageArticle="cube2x2"
          description="Algoritmos para resolver el cubo dos por dos" />
        <ArticleItem title="CUBO 4X4" :imageArticle="cube4x4"
          description="Algoritmos para resolver el cubo cuatro por cuatro" />
        <ArticleItem title="CUBO 5X5" :imageArticle="cube5x5"
          description="Algoritmos para resolver el cubo cinco por cinco" />
      </article>
    </div>
  </section>
</template>

<script setup>
import ArticleItem from './ArticleItem.vue';
import cube2x2 from '../assets/images/home-page-article/cubo-dos-por-dos.png';
import cube3x3 from '../assets/images/home-page-article/cubo-tres-por-tres.png';
import cube4x4 from '../assets/images/home-page-article/cubo-cuatro-por-cuatro.png';
import cube5x5 from '../assets/images/home-page-article/cubo-cinco-por-cinco.png';
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

.home-page-information {

  &__title {
    margin: 0 auto;
    padding: 1rem;
    max-width: 850px;
  }

  &__item-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    gap: 0.5rem;
    max-width: 850px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 700px) {
  .home-page-information {
    &__item-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>