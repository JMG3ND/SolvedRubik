<template>
    <CardArticle title="Introducción al cubo 3x3">
        <p>El cubo de Rubik 3x3 es un rompecabezas tridimensional inventado por Erno
            Rubik en 1974. Consiste en un cuboide
            con seis caras de diferentes colores y un mecanismo interno que permite girar sus capas en diferentes
            direcciones. El objetivo es mezclar los colores de las caras y luego resolver el rompecabezas,
            devolviéndolo a
            su estado original con cada una de las seis caras mostrando un solo color sólido. Este rompecabezas se
            ha
            convertido en un icono de la cultura pop y un desafío popular para los aficionados a los rompecabezas y
            los
            deportes mentales.</p>
        <p>
            Además de ser un rompecabezas divertido y desafiante, el cubo de Rubik 3x3 también ha sido objeto de estudio
            por parte de matemáticos y científicos de la computación. En la actualidad, existen numerosos algoritmos y
            técnicas que se han desarrollado para resolver el cubo de Rubik de manera rápida y eficiente. Algunos de
            estos métodos utilizan patrones y estrategias específicas, mientras que otros emplean algoritmos complejos
            basados en la teoría de los grupos y la teoría de la información. Si bien resolver el cubo de Rubik puede
            parecer un desafío intimidante al principio, con la práctica y la dedicación, cualquier persona puede
            aprender a hacerlo y convertirse en un experto en la materia.
        </p>
        <p>
            En esta sección de la págian podrá encontrar algunos de los métodos de resolución existentes para el cubo de
            rubik 3x3 y se detalla paso a paso como completar la resolución del mismo según el método que se elija
            aprender
        </p>
    </CardArticle>
</template>

<script setup>
import CardArticle from '@/components/CardArticle.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => tocSidebarDataFill(null));
</script>