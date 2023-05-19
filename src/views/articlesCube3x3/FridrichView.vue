<template>
    <CardArticle class="identifier-section" id="fridrichmethod" title="Método Fridrich">
        <p>
            El método de resolución Fridrich es un enfoque eficiente y popular para resolver el cubo de Rubik, que
            se
            enfoca en resolver múltiples caras simultáneamente en lugar de abordar cada cara individualmente. Fue
            desarrollado por la cubera Jessica Fridrich a principios de los años 90 y ha sido utilizado por muchos
            cuberos profesionales desde entonces. </p>
        <p>El método Fridrich consta de cuatro etapas:</p>
        <ol>
            <li><strong>Cross o cruz:</strong> En esta etapa, el objetivo es formar una cruz en la cara inferior del cubo,
                utilizando
                los
                colores de los centros como guía.</li>
            <li><strong>F2L o First Two Layers (primeras dos capas):</strong> En esta etapa, se resuelven las cuatro
                esquinas y los
                cuatro bordes que forman las dos primeras capas del cubo.</li>
            <li><strong>OLL o Orientation of the Last Layer (orientación de la última capa):</strong> En esta etapa, se
                orientan
                todas
                las piezas de la última capa del cubo para que todas las caras estén del mismo color.</li>
            <li><strong>PLL o Permutation of the Last Layer (permutación de la última capa):</strong> En esta etapa, se
                permutan
                todas
                las piezas de la última capa para completar la resolución del cubo.</li>
        </ol>
        <p>El método Fridrich es un método avanzado y requiere mucha práctica y
            habilidad para llevarlo a cabo con
            éxito. Aunque puede ser difícil de aprender al principio, es uno de los métodos más rápidos para
            resolver el
            cubo de Rubik y es utilizado por muchos cuberos profesionales.</p>
    </CardArticle>

    <AlgorithmSection class="identifier-section" id="resolutionstep" title="Etapas de resolución Fridrich">
        <RouterLink class="router-link-fridrich-step" v-for="etapa in etapasImage" :to="etapa.url">
            <CardAlgorithm :title="etapa.title">
                <OrtogonalCube :image="etapa.image" />
            </CardAlgorithm>
        </RouterLink>
    </AlgorithmSection>
</template>

<script setup>
import OrtogonalCube from '@/components/OrtogonalCube.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import CardArticle from '@/components/CardArticle.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

//null = 0 white = 1, orange = 2, blue = 3, red = 4, green = 5, yellow = 6
const n = 0, w = 1, o = 2, b = 3, r = 4, g = 5, y = 6;
const etapasImage = [
    {
        url: '/cube-three-by-three/fridrich-cross',
        title: '1. Cross',
        image: {
            up: [n, w, n, w, w, w, n, w, n],
            left: [n, o, n, n, o, n, n, n, n],
            right: [n, b, n, n, b, n, n, n, n]
        }
    },
    {
        url: '/cube-three-by-three/f2l',
        title: '2. F2L',
        image: {
            up: [n, n, n, n, y, n, n, n, n],
            left: [n, n, n, o, o, o, o, o, o],
            right: [n, n, n, b, b, b, b, b, b]
        }
    },
    {
        url: '/cube-three-by-three/oll',
        title: '3. OLL',
        image: {
            up: [y, y, y, y, y, y, y, y, y],
            left: [n, n, n, o, o, o, o, o, o],
            right: [n, n, n, b, b, b, b, b, b]
        }
    },
    {
        url: '/cube-three-by-three/pll',
        title: '4. PLL',
        image: {
            up: [y, y, y, y, y, y, y, y, y],
            left: [o, o, o, o, o, o, o, o, o],
            right: [b, b, b, b, b, b, b, b, b]
        }
    }
]

//Secciones para el tocSidebarData
const sectionArray = [
    {
        id: 'fridrichmethod',
        title: 'Método Fridrich'
    },
    {
        id: 'resolutionstep',
        title: 'Etapas de resolución Fridrich'
    }
]

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => tocSidebarDataFill(sectionArray, '.identifier-section'));
</script>

<style lang="scss">
.router-link-fridrich-step {
    width: 100%;
}</style>