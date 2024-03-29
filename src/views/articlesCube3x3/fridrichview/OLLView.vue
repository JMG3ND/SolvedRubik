<template>
    <CardArticle class="identifier-section" id='algorithmoll' title="Algoritmos OLL">
        <p>
            Los algoritmos OLL (Orientation of the Last Layer) se refiere al
            tercer paso en el que se orienta la última capa del cubo (la capa superior) de manera que todas las piezas de la
            última capa estén orientadas correctamente.
        </p>
        <p>
            Para lograr esto, se deben aplicar una serie de algoritmos que cambian la orientación de las piezas de la última
            capa. Hay 57 posibles casos OLL diferentes, y cada uno tiene su propio algoritmo asociado para resolverlo.
        </p>
        <p>
            El objetivo del paso OLL es dejar la última capa orientada correctamente para que el siguiente paso, PLL
            (Permutation of the Last Layer), pueda permutar las piezas de la última capa y completar la resolución del cubo.
        </p>
        <p>
            Una vez completado el paso OLL, se puede avanzar al paso PLL, en el que se permutan las piezas de la última capa
            para completar la resolución del cubo de Rubik.
        </p>
    </CardArticle>

    <AlgorithmSection class="identifier-section" v-for="element in sectionArray" :id="element.id" :title="element.title">
        <CardAlgorithm @click="changeShow(algorithm.algorithm)" v-for="algorithm in element.data"
            :description="algorithm.algorithm">
            <div class="oll-algorithm-image">
                <div v-for="piece in algorithm.image" class="oll-algorithm-image__piece" :class="color(piece)"></div>
            </div>
        </CardAlgorithm>
    </AlgorithmSection>

    <Teleport to="header">
        <Transition>
            <RepresentationAlgorithm v-if="show" tipe="oll" :algorithmArray="convertirStringAArray(actualAlgorithm)"
                :algorithm="actualAlgorithm" :show="show" @changeShow="changeShow">
            </RepresentationAlgorithm>
        </Transition>
    </Teleport>
</template>

<script setup>
import RepresentationAlgorithm from '@/components/RepresentationAlgorithm.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import CardArticle from '@/components/CardArticle.vue';
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { ref, onMounted } from 'vue';

//Variables que muestra y oculta el panel del algoritmo
const show = ref(false);
let actualAlgorithm = "";
const changeShow = (algorithm) => {
    show.value = !show.value;
    show.value ? actualAlgorithm = algorithm : actualAlgorithm = "";
}

function convertirStringAArray(str) {
    // Utilizamos una expresión regular para dividir el string en partes en función de los espacios que existen en str
    const partes = str.match(/[A-Za-z]'?2*|'/g);
    if (!partes) {
        return [];
    }
    return partes;
}

/* Método que llena los datos de la tienda del tocSidebar */
const { tocSidebarDataFill } = useTocSidebarStore();

//Método que asigna las clases de cada pieza del cubo
const color = element => {
    switch (element) {
        case 1:
            return 'oll-algorithm-image__piece--active';
        case 2:
            return 'oll-algorithm-image__piece--top'
        case 3:
            return 'oll-algorithm-image__piece--right'
        case 4:
            return 'oll-algorithm-image__piece--left'
        case 5:
            return 'oll-algorithm-image__piece--bottom'
        default:
            return '';
    }
};

//La imágen está generada con matrices 3x3 que se describen en el siguiente formato
//c = center, t = top, r = right, l = left, b = bottom
const c = 1, t = 2, r = 3, l = 4, b = 5;
const sectionArray = [
    {
        id: "casocruz",
        title: "Cruz",
        data: [
            {
                image: [
                    t, c, t,
                    c, c, c,
                    b, c, b,
                ],
                algorithm: "R U2 R' U' R U R' U' R U' R'",
            },
            {
                image: [
                    l, c, t,
                    c, c, c,
                    l, c, b,
                ],
                algorithm: "R U2 R2 U' R2 U' R2 U2 R",
            },
            {
                image: [
                    l, c, t,
                    c, c, c,
                    b, c, c,
                ],
                algorithm: "L' U R U' L U R'",
            },
            {
                image: [
                    t, c, r,
                    c, c, c,
                    c, c, b,
                ],
                algorithm: "R U' L' U R' U' L",
            },
            {
                image: [
                    t, c, t,
                    c, c, c,
                    c, c, c,
                ],
                algorithm: "R2 D' R U2 R' D R U2 R",
            },
            {
                image: [
                    t, c, c,
                    c, c, c,
                    b, c, c,
                ],
                algorithm: "r U R' U' r' F R F'",
            },
            {
                image: [
                    c, c, t,
                    c, c, c,
                    l, c, c,
                ],
                algorithm: "R' F' L' F R F' L F",
            }
        ],
    },
    {
        id: "casopunto",
        title: "Punto",
        data: [
            {
                image: [
                    l, t, r,
                    l, c, r,
                    l, b, r,
                ],
                algorithm: "R U2 R2 F R F' U2 R' F R F'",
            },
            {
                image: [
                    l, t, t,
                    l, c, r,
                    l, b, b,
                ],
                algorithm: "F R U R' U' F' f R U R' U' f'",
            },
            {
                image: [
                    t, t, r,
                    l, c, r,
                    c, b, b,
                ],
                algorithm: "M R U R' U r U2 r' U M'",
            },
            {
                image: [
                    l, t, t,
                    l, c, r,
                    b, b, c,
                ],
                algorithm: "M U' r U2 r' U' R U' R2 r",
            },
            {
                image: [
                    c, t, c,
                    l, c, r,
                    l, b, r,
                ],
                algorithm: "r' R U R U R' U' r R2 F R F'",
            },
            {
                image: [
                    t, t, t,
                    l, c, r,
                    c, b, c,
                ],
                algorithm: "F R U R' d R' U2 R' F R F'",
            },
            {
                image: [
                    c, t, t,
                    l, c, r,
                    l, b, c,
                ],
                algorithm: "R U R' U R' F R F' U2 R' F R F'",
            },
            {
                image: [
                    c, t, c,
                    l, c, r,
                    c, b, c,
                ],
                algorithm: "r' R U R U R' U' r2 R2 U R U' r'",
            },
        ],
    },
    {
        id: "casolinea",
        title: "Línea",
        data: [
            {
                image: [
                    t, c, r,
                    l, c, r,
                    b, c, r,
                ],
                algorithm: "R U R' U R d' R U' R' F'",
            },
            {
                image: [
                    l, c, r,
                    l, c, r,
                    l, c, r,
                ],
                algorithm: "R U' y R2 D R' U2 R D' R2 d R'",
            },
            {
                image: [
                    l, t, t,
                    c, c, c,
                    l, b, b,
                ],
                algorithm: "f R U R' U' R U R' U' f'",
            },
            {
                image: [
                    l, t, r,
                    c, c, c,
                    l, b, r,
                ],
                algorithm: "F R U R' U' x R U' L U R' U' r'",
            }
        ],
    },
    {
        id: "casolpequena",
        title: "L Pequeña",
        data: [
            {
                image: [
                    l, c, r,
                    l, c, c,
                    l, b, r,
                ],
                algorithm: "r U R' U R U' R' U R U2 r'",
            },
            {
                image: [
                    l, c, t,
                    l, c, c,
                    l, b, b,
                ],
                algorithm: "R' F R' F' R2 U2 y R' F R F'",
            },
            {
                image: [
                    t, c, r,
                    l, c, c,
                    b, b, r,
                ],
                algorithm: "F' L' U' L U L' U' L U F",
            },
            {
                image: [
                    l, t, r,
                    l, c, c,
                    l, c, r,
                ],
                algorithm: "r' U' R U' R' U R U' R' U2 r",
            },
            {
                image: [
                    l, t, t,
                    l, c, c,
                    l, c, b,
                ],
                algorithm: "R B' R B R2 U2 F R' F' R",
            },
            {
                image: [
                    l, c, t,
                    c, c, r,
                    l, b, b,
                ],
                algorithm: "F R U R' U' R U R' U' F'",
            },
        ],
    },
    {
        id: "casocuadrados",
        title: "Cuadrados",
        data: [
            {
                image: [
                    l, c, c,
                    l, c, c,
                    b, b, r,
                ],
                algorithm: "r U2 R' U' R U' r'",
            },
            {
                image: [
                    c, c, r,
                    c, c, r,
                    l, b, b,
                ],
                algorithm: "l' U2 L U L' U l",
            }
        ],
    },
    {
        id: "casorelampago",
        title: "Relámpago",
        data: [
            {
                image: [
                    t, c, r,
                    c, c, r,
                    c, b, b,
                ],
                algorithm: "L F R' F R F2 L'",
            },
            {
                image: [
                    l, t, t,
                    c, c, r,
                    b, c, c,
                ],
                algorithm: "U2 r R2 U' R U' R' U2 R U' M",
            },
            {
                image: [
                    c, t, c,
                    l, c, c,
                    b, c, b,
                ],
                algorithm: "R U' R' U2 R U y R U' R' U' F'",
            },
            {
                image: [
                    c, t, c,
                    l, c, c,
                    l, c, r,
                ],
                algorithm: "R2 U R' B' R U' R2 U l U l'",
            },
            {
                image: [
                    c, t, t,
                    c, c, r,
                    b, c, r,
                ],
                algorithm: "r' U' R U' R' U2 r",
            },
            {
                image: [
                    c, t, r,
                    c, c, r,
                    l, c, b,
                ],
                algorithm: "F' L' U' L U F U' F' L' U' L U F",
            },
            {
                image: [
                    c, t, c,
                    c, c, r,
                    b, c, b,
                ],
                algorithm: "L' U L U2 L' U' y' L' U L U F",
            },
            {
                image: [
                    c, t, c,
                    c, c, r,
                    l, c, r,
                ],
                algorithm: "L2 U' L B L' U L2 U' r' U' r",
            }
        ],
    },
    {
        id: "casopez",
        title: "Pez",
        data: [
            {
                image: [
                    c, c, r,
                    c, c, r,
                    b, b, c,
                ],
                algorithm: "F R U' R' U' R U R' F'",
            },
            {
                image: [
                    c, c, t,
                    c, c, r,
                    l, b, c,
                ],
                algorithm: "L U2 L2 B L B' L U2 L'",
            },
            {
                image: [
                    l, c, t,
                    c, c, r,
                    b, b, c,
                ],
                algorithm: "R U R' U' R' F R2 U R' U' F'",
            },
            {
                image: [
                    t, t, c,
                    c, c, r,
                    l, c, b,
                ],
                algorithm: "R U R' U R' F R F' R U2 R'",
            },
        ]
    },
    {
        id: "casoformadec",
        title: "Forma de C",
        data: [
            {
                image: [
                    c, t, c,
                    c, c, c,
                    b, b, b,
                ],
                algorithm: "F' L' U' L y' R U' R' U2 R",
            },
            {
                image: [
                    l, t, r,
                    c, c, c,
                    c, b, c,
                ],
                algorithm: "R U R2 U' R' F R U R U' F'",
            }
        ]
    },
    {
        id: "casoformadelgrande",
        title: "Forma de L Grande",
        data: [
            {
                image: [
                    l, t, t,
                    c, c, c,
                    b, b, c,
                ],
                algorithm: "R' F R U R' F' R y L U' L'",
            },
            {
                image: [
                    t, t, r,
                    c, c, c,
                    l, b, c,
                ],
                algorithm: "L' B' L R' U' R U L' B L",
            },
            {
                image: [
                    t, t, r,
                    c, c, c,
                    c, b, b,
                ],
                algorithm: "L F' L' U' L F L' y' R' U R",
            },
            {
                image: [
                    l, t, t,
                    c, c, c,
                    c, b, r,
                ],
                algorithm: "R B R' L U L' U' R B' R'",
            },
        ],
    },
    {
        id: "casoformadep",
        title: "Forma de P",
        data: [
            {
                image: [
                    c, c, r,
                    c, c, r,
                    c, b, r,
                ],
                algorithm: "F U R U' R' F'",
            },
            {
                image: [
                    c, c, t,
                    c, c, r,
                    c, b, b,
                ],
                algorithm: "L d R' d' L' U L F L'"
            },
            {
                image: [
                    l, c, c,
                    l, c, c,
                    l, b, c,
                ],
                algorithm: "F' U' L' U L F",
            },
            {
                image: [
                    t, c, c,
                    l, c, c,
                    b, b, c,
                ],
                algorithm: "R' d' L d R U' R' F' R",
            }
        ]
    },
    {
        id: "casoformadet",
        title: "Forma de T",
        data: [
            {
                image: [
                    t, t, c,
                    c, c, c,
                    b, b, c,
                ],
                algorithm: "R U R' U' R' F R F'",
            },
            {
                image: [
                    l, t, c,
                    c, c, c,
                    l, b, c,
                ],
                algorithm: "F R U R' U' F'",
            }
        ]
    },
    {
        id: "casoformadew",
        title: "Forma de W",
        data: [
            {
                image: [
                    t, c, c,
                    c, c, r,
                    c, b, r,
                ],
                algorithm: "R U R' U R U' R' U' R' F R F'",
            },
            {
                image: [
                    c, c, t,
                    l, c, c,
                    l, b, c,
                ],
                algorithm: "L' U' L U' L' U L U L F' L' F",
            }
        ]
    },
    {
        id: "casoformadez",
        title: "Forma de Z",
        data: [
            {
                image: [
                    c, t, t,
                    c, c, c,
                    l, b, c,
                ],
                algorithm: "R' F R U R' U' y L' d R",
            },
            {
                image: [
                    t, t, c,
                    c, c, c,
                    c, b, r,
                ],
                algorithm: "L F' L' U' L U y' R d' L'",
            },
        ]
    },
    {
        id: "casodeesquinabienorientadas",
        title: "Esquinas Bien Orientadas",
        data: [
            {
                image: [
                    c, t, c,
                    c, c, r,
                    c, c, c,
                ],
                algorithm: "M' U' M U2 M' U' M",
            },
            {
                image: [
                    c, t, c,
                    c, c, c,
                    c, b, c,
                ],
                algorithm: "L' R U R' U' L R' F R F'",
            }
        ]
    },
];

/* Se ejecuta la función onMounted para llenar el tocSidebar con el contenido de las secciones
de esta vista */
onMounted(() => {
    const GlobalSectionArray = [
        {
            id: 'algorithmoll',
            title: 'Algoritmos OLL'
        },
        ...sectionArray
    ]
    tocSidebarDataFill(GlobalSectionArray, ".identifier-section")
});
</script>

<style scoped lang="scss">
@use '@/assets/animation/representation-algorithm.scss';
%extend-piece {
    content: '';
    position: absolute;
    background-color: #f4ec00;
    border-radius: 100px;
    min-width: 4px;
    min-height: 4px;
    border: 1px solid black;
}

.oll-algorithm-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    width: 100%;
    height: 100%;

    &__piece {
        position: relative;
        z-index: 0;
        border-radius: 10%;
        background-color: #8e8e8e;
        border: 1px solid black;

        &--active {
            background-color: #f4ec00;
        }

        &--top::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            top: -15%;
        }

        &--right::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            right: -15%;
        }

        &--left::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            left: -15%;
        }

        &--bottom::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            bottom: -15%;
        }
    }
}
</style>