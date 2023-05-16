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

    <AlgorithmSection v-for="item in sectionArray" class="identifier-section" :id="item.id" :title="item.title">
        <CardAlgorithm v-for="algorithm in item.data" :description="algorithm.algorithm">
            <div class="f2l-algorithm-image">
                <div ref="cube" class="f2l-algorithm-image__cube">
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--up">
                        <div v-for="piece in algorithm.image.up" class="f2l-algorithm-image__piece" :class="color(piece)">
                        </div>
                    </div>
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--left">
                        <div v-for="piece in algorithm.image.left" class="f2l-algorithm-image__piece" :class="color(piece)">
                        </div>
                    </div>
                    <div class="f2l-algorithm-image__face f2l-algorithm-image__face--right">
                        <div v-for="piece in algorithm.image.right" class="f2l-algorithm-image__piece"
                            :class="color(piece)"></div>
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
//null = 0 white = 1, orange = 2, blue = 3, red = 4, green = 5, yellow = 6
const n = 0, w = 1, o = 2, b = 3, r = 4, g = 5, y = 6;
const sectionArray = [
    {
        id: 'edgeandcornerontoplayer',
        title: 'Esquina y arista en la capa superior',
        data: [
            {
                image: {
                    up: [n, n, n, b, n, n, b, n, n],
                    left: [o, o, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, n, n, o, o, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, b, n, n, b, b, n, b, b]
                },
                algorithm: "U R U' R'"
            },
            {
                image: {
                    up: [n, o, n, n, n, n, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, n, o, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "R U R'"
            },
            {
                image: {
                    up: [n, n, n, o, n, n, b, n, n],
                    left: [o, b, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "R U' R' U R U' R' U2"
            },
            {
                image: {
                    up: [n, n, n, n, n, n, o, b, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, o, n, n, b, b, n, b, b]
                },
                algorithm: "R U2 R' U F' U' F2 R' F' R"
            },
            {
                image: {
                    up: [n, n, n, n, n, n, b, b, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, o, n, n, b, b, n, b, b]
                },
                algorithm: "R U' R' U2 F' U' F"
            },
            {
                image: {
                    up: [n, n, n, o, n, n, o, n, n],
                    left: [w, b, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "F' U F U2 R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, n, n, b, o, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, b, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U' R' U R U R'"
            },
            {
                image: {
                    up: [n, n, n, b, n, n, o, n, n],
                    left: [w, o, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "d R' U R U' R' U' R"
            },
            {
                image: {
                    up: [n, b, n, n, n, n, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U F' U' F U2 F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, n, o, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U R' U' R U2 R"
            },
            {
                image: {
                    up: [n, o, n, n, n, n, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U R' U R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, n, b, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U' R' U F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, n, b, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "y' U R' U2 R U2 R' U R"
            },
            {
                image: {
                    up: [n, o, n, n, n, n, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U2 R' U2 R U' R'"
            },
        ]
    },
]

//Método que retorna las clases correspondientes al color de la pieza
const color = (element) => {
    switch (element) {
        case 1: return 'f2l-algorithm-image__piece--white';
        case 2: return 'f2l-algorithm-image__piece--orange';
        case 3: return 'f2l-algorithm-image__piece--blue';
        case 4: return 'f2l-algorithm-image__piece--red';
        case 5: return 'f2l-algorithm-image__piece--green';
        case 6: return 'f2l-algorithm-image__piece--yellow';
        default: return '';
    }
}

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
        background-color: #8e8e8e;

        &--white {
            background-color: $white;
        }

        &--blue {
            background-color: $blue;
        }

        &--orange {
            background-color: $orange;
        }

        &--yellow {
            background-color: $yellow;
        }

        &--green {
            background-color: $green;
        }

        &--red {
            background-color: $red;
        }
    }
}
</style>