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
                <img width="150" height="150" :src="etapa.image" alt="Imágen que representa el paso de fridrich" />
            </CardAlgorithm>
        </RouterLink>
    </AlgorithmSection>
</template>

<script setup>
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import CardArticle from '@/components/CardArticle.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const etapasImage = [
    {
        url: '/cube-three-by-three/fridrich-cross',
        title: '1. Cross',
        image: '/fridrich-steps/etapa-de-resolucion-fridrich-1.png'
    },
    {
        url: '/cube-three-by-three/f2l',
        title: '2. F2L',
        image: '/fridrich-steps/etapa-de-resolucion-fridrich-2.png'
    },
    {
        url: '/cube-three-by-three/oll',
        title: '3. OLL',
        image: '/fridrich-steps/etapa-de-resolucion-fridrich-3.png'
    },
    {
        url: '/cube-three-by-three/pll',
        title: '4. PLL',
        image: '/fridrich-steps/etapa-de-resolucion-fridrich-4.png'
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
}
</style>