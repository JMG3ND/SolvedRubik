<template>
    <section class="main-section">
        <header class="main-section__header">
            <h1 class="main-section__header">Intoducción Cubo 3x3</h1>
        </header>
        <article class="main-section__article">
            <p class="main-section__paragraph">El cubo de Rubik 3x3 es un rompecabezas tridimensional inventado por Erno
                Rubik en 1974. Consiste en un cuboide
                con seis caras de diferentes colores y un mecanismo interno que permite girar sus capas en diferentes
                direcciones. El objetivo es mezclar los colores de las caras y luego resolver el rompecabezas,
                devolviéndolo a
                su estado original con cada una de las seis caras mostrando un solo color sólido. Este rompecabezas se
                ha
                convertido en un icono de la cultura pop y un desafío popular para los aficionados a los rompecabezas y
                los
                deportes mentales.</p>
            <p class="main-section__paragraph">
                Además de ser un rompecabezas divertido y desafiante, el cubo de Rubik 3x3 también ha sido objeto de estudio
                por parte de matemáticos y científicos de la computación. En la actualidad, existen numerosos algoritmos y
                técnicas que se han desarrollado para resolver el cubo de Rubik de manera rápida y eficiente. Algunos de
                estos métodos utilizan patrones y estrategias específicas, mientras que otros emplean algoritmos complejos
                basados en la teoría de los grupos y la teoría de la información. Si bien resolver el cubo de Rubik puede
                parecer un desafío intimidante al principio, con la práctica y la dedicación, cualquier persona puede
                aprender a hacerlo y convertirse en un experto en la materia.
            </p>
            <p class="main-section__paragraph">
                En esta sección de la págian podrá encontrar algunos de los métodos de resolución existentes para el cubo de
                rubik 3x3 y se detalla paso a paso como completar la resolución del mismo según el método que se elija
                aprender
            </p>
        </article>
    </section>
</template>

<script setup></script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

.main-section {
    background-color: $dark-baground-color-z-index-1;

    body.light & {
        background-color: $light-baground-color-z-index-1;
    }

    padding: 1rem;
    border-radius: 20px;

    &__paragraph {
        line-height: 1em;
    }
}
</style>