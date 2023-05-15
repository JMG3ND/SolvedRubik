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
        <CardAlgorithm description="U' F' U F f f f f f f f f f f f f f">
            <div class="f2l-algorithm-image">
                <div class="f2l-algorithm-image__cube">
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
import { onMounted } from 'vue';

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => tocSidebarDataFill(null));
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

        transform: rotateY(50deg) rotateX(337deg) rotateZ(335deg) translate3d(10px, 10px, 10px);
    }


    &__face {
        transform-style: preserve-3d;
        perspective: 2000px;
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        width: 100px;
        height: 100px;

        &--up {
            transform: translateY(-50%) rotateX(90deg);
        }

        &--left {
            transform: translateX(-50%) rotateY(90deg);
        }

        &--right {
            transform: translateZ(50px);
        }
    }

    &__piece {
        width: 100%;
        height: 100%;
        background-color: white;
    }
}
</style>