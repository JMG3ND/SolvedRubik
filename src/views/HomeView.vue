<template>
    <!--Main Finder-->
    <div class="home-page-finder justify-elements-in-screen">
        <div class="home-page-finder__container justify-elements-in-screen__container">
            <div class="home-page-finder__form" action="">
                <img class="home-page-finder__title home-page-finder__title--dark"
                    src="@/assets/images/logo-solvedrubik-hom-page-presentation-dark-640.png" alt="título Solved Rubik">
                <img class="home-page-finder__title home-page-finder__title--light"
                    src="@/assets/images/logo-solvedrubik-hom-page-presentation-light-640.png" alt="título Solved Rubik">
            </div>
        </div>
    </div>

    <!--Home Page Information-->
    <div class="justify-elements-in-screen">
        <div class="justify-elements-in-screen__container">
            <main class="home-page-information">
                <section class="home-page-information__section">
                    <CardArticle title="¿Qué es Solved Rubik?">
                        <p>
                            En esta web encontrarás artículos guía para aprender a resolver el cubo de rubik desde lo más
                            básico hasta lo más avanzado Además, podrás encontrar videos instructivos, recomendaciones de
                            cubos
                            para principiantes y expertos, y consejos para mejorar tu técnica. Si eres un principiante en el
                            mundo del cubo de Rubik, te recomendamos comenzar por los artículos para principiantes,
                            donde aprenderás los conceptos básicos y los movimientos fundamentales. Si ya tienes experiencia
                            en resolver el cubo, te recomendamos explorar nuestras secciones avanzadas, donde encontrarás
                            técnicas más complejas y desafiantes para mejorar tu velocidad y habilidad en la resolución del
                            cubo de Rubik.
                        </p>
                    </CardArticle>
                </section>
                <section class="home-page-information__section">
                    <div class="home-page-information__container ">
                        <header class="home-page-information__title-container">
                            <h2 class="home-page-information__title">Artículos Disponibles</h2>
                        </header>
                        <article class="home-page-information__item-container">
                            <!--Block-->
                            <ArticleItem title="CUBO 3X3" :imageArticle="cube3x3" url="/cube-three-by-three"
                                description="Algoritmos para resolver el cubo tres por tres" />
                        </article>
                    </div>
                </section>
                <section class="home-page-information__section">
                    <div class="home-page-information__container">
                        <header class="home-page-information__title-container">
                            <h2 class="home-page-information__title">Artículos en Desarrollo</h2>
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
            </main>
        </div>
    </div>
</template>

<script setup>
import CardArticle from '../components/CardArticle.vue';
import ArticleItem from '@/components/ArticleItem.vue';
import cube2x2 from '@/assets/images/home-page-article/cubo-dos-por-dos.png';
import cube3x3 from '@/assets/images/home-page-article/cubo-tres-por-tres.png';
import cube4x4 from '@/assets/images/home-page-article/cubo-cuatro-por-cuatro.png';
import cube5x5 from '@/assets/images/home-page-article/cubo-cinco-por-cinco.png';
import { onMounted } from 'vue';

//Hace scroll cuando carga el componente
onMounted(() => window.scrollTo({ top: 0 }));
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

//Main Finder
.home-page-finder {
    box-shadow: 2px;
    background-color: $dark-baground-color-z-index-3;

    body.light & {
        background-color: $light-baground-color-z-index-3;
    }

    &__form {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        gap: 20px;
        padding: 5% 0;
        align-items: center;
    }

    &__title {
        width: 640px;

        &--light {
            display: none;

            body.light & {
                display: block;
            }
        }

        &--dark {
            body.light & {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 850px) {
    .home-page-finder {
        &__title {
            width: 75%;
        }
    }
}

//Home Page Information
.home-page-information {
    margin: 0 auto;
    max-width: 850px;

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

    &__section {
        margin-top: 1rem;
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