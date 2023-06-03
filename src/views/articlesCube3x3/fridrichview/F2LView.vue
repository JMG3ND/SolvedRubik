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
            <img width="150" height="120" :src="algorithm.image" alt="Imágen de algoritmo F2L">
        </CardAlgorithm>
    </AlgorithmSection>
</template>

<script setup>
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import CardArticle from '@/components/CardArticle.vue';
import AlgorithmSection from '@/components/AlgorithmSection.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//sección con imágen
const sectionArray = [
    {
        id: 'basic',
        title: 'Básico',
        data: [
            {
                image: "/F2L/basic-1.png",
                algorithm: "U' F' U F"
            },
            {
                image: "/F2L/basic-2.png",
                algorithm: "U R U' R'"
            },
            {
                image: "/F2L/basic-3.png",
                algorithm: "F' U' F"
            },
            {
                image: "/F2L/basic-4.png",
                algorithm: "R U R'"
            },
        ]
    },
    {
        id: 'basicandwhiteontheside',
        title: 'Blanco en lateral',
        data: [
            {
                image: "/F2L/blanco-en-lateral-1.png",
                algorithm: "R U' R' U R U' R' U2"
            },
            {
                image: "/F2L/blanco-en-lateral-2.png",
                algorithm: "R U2 R' U F' U' F2 R' F' R"
            },
            {
                image: "/F2L/blanco-en-lateral-3.png",
                algorithm: "R U' R' U2 F' U' F"
            },
            {
                image: "/F2L/blanco-en-lateral-4.png",
                algorithm: "F' U F U2 R U R'"
            },
            {
                image: "/F2L/blanco-en-lateral-5.png",
                algorithm: "U' R U' R' U R U R'"
            },
            {
                image: "/F2L/blanco-en-lateral-6.png",
                algorithm: "d R' U R U' R' U' R"
            },
            {
                image: "/F2L/blanco-en-lateral-7.png",
                algorithm: "U F' U' F U2 F' U F"
            },
            {
                image: "/F2L/blanco-en-lateral-8.png",
                algorithm: "U' R U R' U' R U2 R"
            },
            {
                image: "/F2L/blanco-en-lateral-9.png",
                algorithm: "U' R U R' U R U R'"
            },
            {
                image: "/F2L/blanco-en-lateral-10.png",
                algorithm: "U' R U' R' U F' U' F"
            },
            {
                image: "/F2L/blanco-en-lateral-11.png",
                algorithm: "y' U R' U2 R U2 R' U R"
            },
            {
                image: "/F2L/blanco-en-lateral-12.png",
                algorithm: "U' R U2 R' U2 R U' R'"
            },
        ]
    },
    {
        id: 'whiteup',
        title: 'Blanco hacia arriba',
        data: [
            {
                image: "/F2L/blanco-hacia-arriba-1.png",
                algorithm: "R U R' U2 (R U R' U') R U R'"
            },
            {
                image: "/F2L/blanco-hacia-arriba-2.png",
                algorithm: "R U R' U R U2 R' F' U2 F"
            },
            {
                image: "/F2L/blanco-hacia-arriba-3.png",
                algorithm: "F' U2 F U F' U' F"
            },
            {
                image: "/F2L/blanco-hacia-arriba-4.png",
                algorithm: "R U2 R' U' R U R'"
            },
            {
                image: "/F2L/blanco-hacia-arriba-5.png",
                algorithm: "U' F' U2 F U' F' U F"
            },
            {
                image: "/F2L/blanco-hacia-arriba-6.png",
                algorithm: "U R U2 R' U R U' R'"
            },
            {
                image: "/F2L/blanco-hacia-arriba-7.png",
                algorithm: "U2 R U R' U R U' R'"
            },
            {
                image: "/F2L/blanco-hacia-arriba-8.png",
                algorithm: "U2 F' U' F U' F' U F"
            },
        ]
    },
    {
        id: 'whiteinbottomlayeredgeintoplayer',
        title: 'Blanco en capa inferior, arista en capa superior',
        data: [
            {
                image: "/F2L/blanco-inf-arista-sup-1.png",
                algorithm: "U R U' R' U' F' U F"
            },
            {
                image: "/F2L/blanco-inf-arista-sup-2.png",
                algorithm: "U' F' U F U R U' R'"
            },
            {
                image: "/F2L/blanco-inf-arista-sup-3.png",
                algorithm: "F' U F U' F' U F"
            },
            {
                image: "/F2L/blanco-inf-arista-sup-4.png",
                algorithm: "R U' R' U R U' R'"
            },
            {
                image: "/F2L/blanco-inf-arista-sup-5.png",
                algorithm: "U' (R U R' U') R U R'"
            },
            {
                image: "/F2L/blanco-inf-arista-sup-6.png",
                algorithm: "U' R U' R' F' U' F"
            },
        ]
    },
    {
        id: 'whiteintoplayeredgeinsecondlayer',
        title: 'Blanco en capa superior, arista en segunda capa',
        data: [
            {
                image: "/F2L/blanco-sup-arista-mid-1.png",
                algorithm: "R U R' U' R U R' U' R U R'"
            },
            {
                image: "/F2L/blanco-sup-arista-mid-2.png",
                algorithm: "R U' R' F' U2 F"
            },
            {
                image: "/F2L/blanco-sup-arista-mid-3.png",
                algorithm: "U' R U2 R' U R U R'"
            },
            {
                image: "/F2L/blanco-sup-arista-mid-4.png",
                algorithm: "U' R U' R' U2 R U' R'"
            },
            {
                image: "/F2L/blanco-sup-arista-mid-5.png",
                algorithm: "d R' U' R d' R U R'"
            },
            {
                image: "/F2L/blanco-sup-arista-mid-6.png",
                algorithm: "U' R U R' d R' U' R"
            },
        ]
    },
    {
        id: 'corneronbottomlayeredgeonsecondlayer',
        title: 'Esquina en capa inferior, arista en segunda capa',
        data: [
            {
                image: "/F2L/esquina-inf-arista-mid-1.png",
                algorithm: "R U2 R' U R U2 R' U F' U' F"
            },
            {
                image: "/F2L/esquina-inf-arista-mid-2.png",
                algorithm: "R U' R' U R U2 R' U R U' R'"
            },
            {
                image: "/F2L/esquina-inf-arista-mid-3.png",
                algorithm: "(R U R' U') R U2 R' U' R U R'"
            },
            {
                image: "/F2L/esquina-inf-arista-mid-4.png",
                algorithm: "R U' R' U R' U' R F' U F"
            },
            {
                image: "/F2L/esquina-inf-arista-mid-5.png",
                algorithm: "F' U F U2 R U R' U R U' R'"
            },
        ]
    }
];

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