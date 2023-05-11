<template>
    <CardArticle title="Método Fridrich">
        <p>
            El método de resolución Fridrich es un enfoque eficiente y popular para resolver el cubo de Rubik, que
            se
            enfoca en resolver múltiples caras simultáneamente en lugar de abordar cada cara individualmente. Fue
            desarrollado por la cubera Jessica Fridrich a principios de los años 90 y ha sido utilizado por muchos
            cuberos profesionales desde entonces. </p>
        <p>El método Fridrich consta de cuatro etapas:</p>
        <ol>
            <li>Cross o cruz: En esta etapa, el objetivo es formar una cruz en la cara inferior del cubo, utilizando
                los
                colores de los centros como guía.</li>
            <li>F2L o First Two Layers (primeras dos capas): En esta etapa, se resuelven las cuatro esquinas y los
                cuatro bordes que forman las dos primeras capas del cubo.</li>
            <li>OLL o Orientation of the Last Layer (orientación de la última capa): En esta etapa, se orientan
                todas
                las piezas de la última capa del cubo para que todas las caras estén del mismo color.</li>
            <li>PLL o Permutation of the Last Layer (permutación de la última capa): En esta etapa, se permutan
                todas
                las piezas de la última capa para completar la resolución del cubo.</li>
        </ol>
        <p>El método Fridrich es un método avanzado y requiere mucha práctica y
            habilidad para llevarlo a cabo con
            éxito. Aunque puede ser difícil de aprender al principio, es uno de los métodos más rápidos para
            resolver el
            cubo de Rubik y es utilizado por muchos cuberos profesionales.</p>
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