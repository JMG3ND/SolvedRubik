<template>
  <section class="home-page-information justify-elements-in-screen">
    <div class="home-page-information__container justify-elements-in-screen__container">
      <header class="home-page-information__title-container">
        <h1 class="home-page-information__title">ARTÍCULOS</h1>
      </header>
      <article class="home-page-information__item-container">

        <!--Block-->
        <section class="article-item">
          <div class="article-item__image-container"><img class="article-item__image" :src="cube3x3Img"
              alt="Cubo de rubik 2x2"></div>
          <div class="article-item__informataion-container">
            <header class="article-item__title-container">
              <h2 class="article-item__title">CUBO 3X3</h2>
            </header>
            <article class="article-item__description-container">
              <p class="article-item__description">Algoritmos para resolver el cubo de rubik tres por tres</p>
            </article>
            <footer class="article-item__link-container">
              <RouterLink to="/cube-three-by-three" class="button-link">Ir</RouterLink>
            </footer>
          </div>
        </section>

      </article>
    </div>
  </section>

  <section class="home-page-information justify-elements-in-screen">
    <div class="home-page-information__container justify-elements-in-screen__container">
      <header class="home-page-information__title-container">
        <h1 class="home-page-information__title">ARTÍCULOS EN DESARROLLO</h1>
      </header>
      <article class="home-page-information__item-container">


      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import cube3x3Img from '../assets/images/home-page-article/cubo-tres-por-tres.png'
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

.article-item {
  position: relative;
  grid-template-columns: 0.8fr 1fr;
  display: grid;
  border-radius: 20px;
  padding: 0.5rem;
  background-color: $dark-baground-color-z-index-1;

  body.light & {
    background-color: $light-baground-color-z-index-1;
  }

  &__informataion-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__image-container {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  &__image {
    width: 100%;
    padding: 10px;
    background-color: $dark-baground-color-z-index-2;

    body.light & {
      background-color: $light-baground-color-z-index-3;
    }

    border-radius: 10px;
  }

  &__title {
    margin-bottom: 0.5rem;
  }

  &__description-container {
    height: 100%;
  }

  &__link-container {
    text-align: end;
  }
}

.button-link {
  display: inline-block;
  text-decoration: none;
  padding: 10px 40px 10px 40px;
  border-radius: 10px;
  background-color: $dark-baground-color-z-index-3;

  body.light & {
    background-color: $light-baground-color-z-index-3;
  }
}
</style>