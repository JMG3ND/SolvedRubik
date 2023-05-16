<template>
    <CardArticle class="identifier-section" title="Algoritmos F2L">
        <p>
            El paso F2L (First Two Layers) del método Fridrich para resolver el cubo de Rubik se centra en completar las dos
            capas inferiores del cubo mientras se resuelve la primera capa cruzada. Consiste en emparejar una esquina y un
            borde correspondiente en la capa inferior y luego insertarlos en su posición correcta en la segunda capa. El
            objetivo es resolver eficientemente las ocho esquinas y los doce bordes de las dos capas inferiores antes de
            pasar al siguiente paso de resolución del cubo.
        </p>
    </CardArticle>

    <AlgorithmSection class="identifier-section" id="esquinaenlacapasup" title="Esquina en la capa superior">
        <CardAlgorithm v-for=" in 2" description="U' F' U F l l l l l l l l l">
            <div class="f2l-algorithm-image">
                <div ref="cube" class="f2l-algorithm-image__cube">
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--up">
                        <div class="f2l-algorithm-image__piece" style="background-color: white"></div>
                        <div class="f2l-algorithm-image__piece" v-for=" in 8"></div>
                    </div>
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--left">
                        <div class="f2l-algorithm-image__piece" v-for=" in 9"></div>
                    </div>
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--right">
                        <div class="f2l-algorithm-image__piece" v-for=" in 9"></div>
                    </div>
                </div>
            </div>
        </CardAlgorithm>
    </AlgorithmSection>
</template>

<script setup>
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import CardArticle from '@/components/CardArticle.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { ref, onMounted, onUnmounted } from 'vue';

//Contenido de las secciones
const sectionArray = [
    {
        id: 'Edgeandcornerontoplayer',
        title: 'Esquina y arista en la capa superior',
        data: null,
    }
]

//Variable de referencia al objeto cubo
const cube = ref(null);

//Lógica que ajusta el tamaño del cubo de la cara Z
const adjustTranslateZ = () => {
    cube.value.forEach(element => {
        const desplazamiento = window.getComputedStyle(element.children[1]).getPropertyValue("transform");
        const matriz = desplazamiento.match(/matrix3d\(([^)]+)\)/)[1].split(", ");
        const desplazamientoX = parseFloat(matriz[12]);
        element.children[2].style = `transform: translateZ(${-1 * desplazamientoX}px)`;
    });
}

//Reinicio los datos del tocSidebar y asigna algunos eventos
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => {
    tocSidebarDataFill(null);
    adjustTranslateZ();
    window.addEventListener('resize', adjustTranslateZ);
});
onUnmounted(() => window.removeEventListener('resize', adjustTranslateZ));
</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.f2l-algorithm-image {
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    perspective: 2000px;
    width: 100%;
    height: 100%;
    max-height: 200px;
    max-width: 200px;

    &__cube {
        transform-style: preserve-3d;
        perspective: 2000px;
        position: relative;
        height: 100%;
        width: 100%;

        transform: rotateY(50deg) rotateX(337deg) rotateZ(335deg) translate3d(20%, 10%, 0);
    }


    &__face {
        transform-style: preserve-3d;
        perspective: 2000px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3px;
        width: 60%;
        height: 60%;

        &--up {
            transform: translateY(-52%) rotateX(90deg);
        }

        &--left {
            transform: translateX(-52%) rotateY(90deg);
        }

        //El desplazamiento de la cara derecha se hace mediante JS ya que el % es una propiedad de 2 dimenciones y no de 3
        /*&--right { 
            transform: translateZ(35px);
        }*/
    }

    &__piece {
        border: 1px solid black;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background-color: white;
    }
}
</style>