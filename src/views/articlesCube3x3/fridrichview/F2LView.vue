<template>
    <CardArticle class="identifier-section" id="algorithmf2l" title="Algoritmos F2L">
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
            <OrtogonalCube :image="algorithm.image" />
        </CardAlgorithm>
    </AlgorithmSection>
</template>

<script setup>
import OrtogonalCube from '@/components/OrtogonalCube.vue';
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import CardArticle from '@/components/CardArticle.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//Contenido de las secciones
//null = 0 white = 1, orange = 2, blue = 3, red = 4, green = 5, yellow = 6
const n = 0, w = 1, o = 2, b = 3, r = 4, g = 5, y = 6;
const sectionArray = [
    {
        id: 'basic',
        title: 'Básico',
        data: [
            {
                image: {
                    up: [n, n, n, b, y, n, b, n, n],
                    left: [o, o, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, o, o, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, b, n, n, b, b, n, b, b]
                },
                algorithm: "U R U' R'"
            },
            {
                image: {
                    up: [n, b, n, n, y, n, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, y, o, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "R U R'"
            },
        ]
    },
    {
        id: 'basicandwhiteontheside',
        title: 'Blanco en lateral',
        data: [
            {
                image: {
                    up: [n, n, n, o, y, n, b, n, n],
                    left: [o, b, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "R U' R' U R U' R' U2"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, o, b, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, o, n, n, b, b, n, b, b]
                },
                algorithm: "R U2 R' U F' U' F2 R' F' R"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, b, b, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, o, n, n, b, b, n, b, b]
                },
                algorithm: "R U' R' U2 F' U' F"
            },
            {
                image: {
                    up: [n, n, n, o, y, n, o, n, n],
                    left: [w, b, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "F' U F U2 R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, b, o, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, b, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U' R' U R U R'"
            },
            {
                image: {
                    up: [n, n, n, b, y, n, o, n, n],
                    left: [w, o, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "d R' U R U' R' U' R"
            },
            {
                image: {
                    up: [n, b, n, n, y, n, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U F' U' F U2 F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, o, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U R' U' R U2 R"
            },
            {
                image: {
                    up: [n, o, n, n, y, n, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U R' U R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, b, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U' R' U F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, y, b, b, n, n],
                    left: [o, n, n, n, o, o, n, o, o],
                    right: [w, n, n, n, b, b, n, b, b]
                },
                algorithm: "y' U R' U2 R U2 R' U R"
            },
            {
                image: {
                    up: [n, o, n, n, y, n, o, n, n],
                    left: [w, n, n, n, o, o, n, o, o],
                    right: [b, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' R U2 R' U2 R U' R'"
            },
        ]
    },
    {
        id: 'whiteup',
        title: 'Blanco hacia arriba',
        data: [
            {
                image: {
                    up: [n, n, n, o, y, n, w, n, n],
                    left: [b, b, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "R U R' U2 (R U R' U') R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, w, b, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, o, n, n, b, b, n, b, b]
                },
                algorithm: "R U R' U R U2 R' F' U2 F"
            },
            {
                image: {
                    up: [n, n, n, b, y, n, w, n, n],
                    left: [b, o, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "F' U2 F U F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, w, o, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, b, n, n, b, b, n, b, b]
                },
                algorithm: "R U2 R' U' R U R'"
            },
            {
                image: {
                    up: [n, b, n, n, y, n, w, n, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "U' F' U2 F U' F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, o, w, n, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "U R U2 R' U R U' R'"
            },
            {
                image: {
                    up: [n, o, n, n, y, n, w, n, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "U2 R U R' U R U' R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, b, w, n, n],
                    left: [b, n, n, n, o, o, n, o, o],
                    right: [o, n, n, n, b, b, n, b, b]
                },
                algorithm: "U2 F' U' F U' F' U F"
            },
        ]
    },
    {
        id: 'whiteinbottomlayeredgeintoplayer',
        title: 'Blanco en capa inferior, arista en capa superior',
        data: [
            {
                image: {
                    up: [n, n, n, b, y, n, n, n, n],
                    left: [n, o, n, n, o, o, o, o, o],
                    right: [n, n, n, n, b, b, b, b, b]
                },
                algorithm: "U R U' R' U' F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, o, n],
                    left: [n, n, n, n, o, o, o, o, o],
                    right: [n, b, n, n, b, b, b, b, b]
                },
                algorithm: "U' F' U F U R U' R'"
            },
            {
                image: {
                    up: [n, n, n, b, y, n, n, n, n],
                    left: [n, o, n, n, o, o, b, o, o],
                    right: [n, n, n, n, b, b, w, b, b]
                },
                algorithm: "F' U F U' F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, o, n],
                    left: [n, n, n, n, o, o, w, o, o],
                    right: [n, b, n, n, b, b, o, b, b]
                },
                algorithm: "R U' R' U R U' R'"
            },
            {
                image: {
                    up: [n, n, n, o, y, n, n, n, n],
                    left: [n, b, n, n, o, o, b, o, o],
                    right: [n, n, n, n, b, b, w, b, b]
                },
                algorithm: "U' (R U R' U') R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, b, n],
                    left: [n, n, n, n, o, o, w, o, o],
                    right: [n, o, n, n, b, b, o, b, b]
                },
                algorithm: "U' R U' R' F' U' F"
            },
        ]
    },
    {
        id: 'whiteintoplayeredgeinsecondlayer',
        title: 'Blanco en capa superior, arista en segunda capa',
        data: [
            {
                image: {
                    up: [n, n, n, n, y, n, w, n, n],
                    left: [b, n, n, o, o, o, n, o, o],
                    right: [o, n, n, b, b, b, n, b, b]
                },
                algorithm: "(R U R' U') (R U R' U') R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, b, n, n],
                    left: [o, n, n, o, o, o, n, o, o],
                    right: [w, n, n, b, b, b, n, b, b]
                },
                algorithm: "R U' R' F' U2 F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, b, n, n],
                    left: [o, n, n, o, o, o, n, o, o],
                    right: [w, n, n, b, b, b, n, b, b]
                },
                algorithm: "U' R U2 R' U R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, o, n, n],
                    left: [w, n, n, o, o, o, n, o, o],
                    right: [b, n, n, b, b, b, n, b, b]
                },
                algorithm: "U' R U' R' U2 R U' R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, b, n, n],
                    left: [o, n, n, b, o, o, n, o, o],
                    right: [w, n, n, o, b, b, n, b, b]
                },
                algorithm: "d R' U' R d' R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, o, n, n],
                    left: [w, n, n, b, o, o, n, o, o],
                    right: [b, n, n, o, b, b, n, b, b]
                },
                algorithm: "U' R U R' d R' U' R"
            },
        ]
    },
    {
        id: 'corneronbottomlayeredgeonsecondlayer',
        title: 'Esquina en capa inferior, arista en segunda capa',
        data: [
            {
                image: {
                    up: [n, n, n, n, y, n, n, n, n],
                    left: [n, n, n, b, o, o, o, o, o],
                    right: [n, n, n, o, b, b, b, b, b]
                },
                algorithm: "R U2 R' U R U2 R' U F' U' F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, n, n],
                    left: [n, n, n, o, o, o, b, o, o],
                    right: [n, n, n, b, b, b, w, b, b]
                },
                algorithm: "R U' R' U R U2 R' U R U' R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, n, n],
                    left: [n, n, n, o, o, o, w, o, o],
                    right: [n, n, n, b, b, b, o, b, b]
                },
                algorithm: "(R U R' U') R U2 R' U' R U R'"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, n, n],
                    left: [n, n, n, b, o, o, b, o, o],
                    right: [n, n, n, o, b, b, w, b, b]
                },
                algorithm: "R U' R' U R' U' R F' U F"
            },
            {
                image: {
                    up: [n, n, n, n, y, n, n, n, n],
                    left: [n, n, n, b, o, o, w, o, o],
                    right: [n, n, n, o, b, b, o, b, b]
                },
                algorithm: "F' U F U2 R U R' U R U' R'"
            },
        ]
    }
]

//Reinicio los datos del tocSidebar y asigna algunos eventos
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => {
    const GlobalSectionArray = [
        {
            id: 'algorithmf2l',
            title: 'Algoritmos F2L'
        },
        ...sectionArray
    ]
    tocSidebarDataFill(GlobalSectionArray, '.identifier-section');
});
</script>