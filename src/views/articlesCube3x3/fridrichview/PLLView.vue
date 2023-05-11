<template>
    <CardArticle title="Algoritmos PLL">
        <p>
            Los Algoritmos PLL (Permutation of the Last Layer) se refiere al cuarto y último paso en el método de resolución
            del cubo de Rubik
            de
            Fridrich. En este paso, el objetivo es permutar (cambiar de posición) las piezas de la última capa del cubo, de
            tal
            manera que todas las piezas estén en su lugar correcto y el cubo esté resuelto.
        </p>
        <p>
            Para lograr esto, se utilizan una serie de algoritmos que permutan las piezas de la última capa del cubo de
            Rubik.
            Hay 21 posibles casos diferentes de permutación de la última capa, y para cada caso existe un algoritmo
            específico
            que resuelve el caso en cuestión.
        </p>
        <p>
            Los algoritmos del PLL son un poco más complejos que los del OLL, pero una vez que se han aprendido, la
            resolución
            del cubo de Rubik se vuelve mucho más rápida y eficiente. Al completar el paso PLL, todas las piezas de la
            última
            capa estarán en su posición correcta y el cubo de Rubik estará resuelto.
        </p>
    </CardArticle>

    <AlgorithmSection v-for="element in sectionArray" :id="element.id" :title="element.title">
        <PLLCardAlgorithm v-for="card in element.data" :title="card.title" :image="card.image"
            :algorithm="card.algorithm" />
    </AlgorithmSection>
</template>

<script setup>
import PLLCardAlgorithm from '@/components/PLLCardAlgorithm.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import CardArticle from '@/components/CardArticle.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

/* Método que llena los datos de la tienda del tocSidebar */
const { tocSidebarDataFill } = useTocSidebarStore();

//En la data se define las coordenadas de las flechas
//| 1 | 2 | 3 |
//| 4 | 5 | 6 |
//| 7 | 8 | 9 |
const sectionArray = [
    {
        id: 'basicalgorithm',
        title: 'Algoritmos Básicos',
        data: [
            {
                title: "U1",
                image: [[2, 4], [4, 6], [6, 2]],
                algorithm: "R U R' U R' U' R2 U' R' U R' U R",
            },
            {
                title: "U2",
                image: [[4, 2], [2, 6], [6, 4]],
                algorithm: "R' U R' U' R' U' R' U R U R2",
            },
            {
                title: "Z",
                image: [[2, 6], [6, 2], [4, 8], [8, 4]],
                algorithm: "M2 U' M2 U' M' U2 M2 U2 M' U2",
            },
            {
                title: "H",
                image: [[2, 8], [8, 2], [4, 6], [6, 4]],
                algorithm: "M2 U M2 U2 M2 U M2",
            },
            {
                title: "A1",
                image: [[1, 3], [3, 7], [3, 1]],
                algorithm: "R U R' F' r U R' U' r' F R2 U' R'",
            },
            {
                title: "A2",
                image: [[3, 1], [1, 7], [7, 3]],
                algorithm: "R U R2 F' r U R U' r' F R U' R'",
            },
            {
                title: "E",
                image: [[1, 3], [3, 1], [7, 9], [9, 7]],
                algorithm: "X' R U' R' D R U R' D' R U R' D R U' R' D'",
            }
        ]
    },
    {
        id: 'advancedalgorithm',
        title: 'Algoritmos Avanzados',
        data: null
    }
]

/* Se ejecuta la función onMounted para llenar el tocSidebar con el contenido de las secciones
de esta vista */
onMounted(() => tocSidebarDataFill(sectionArray, ".algorithm-section"));
</script>