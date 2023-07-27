<template>
    <CardArticle class="identifier-section" id="fridrichcross" title="Cruz">
        <p>
            El proceso de armar la cruz en el cubo de Rubik se refiere a completar la primera capa del cubo, donde se
            resuelve
            el patrón de una cruz en una cara del cubo utilizando piezas de un solo color. La cruz se compone de cuatro
            aristas
            que forman una línea horizontal o vertical, dependiendo de cómo esté orientado el cubo.
        </p>
        <p>
            Aquí hay una descripción básica del procedimiento para armar la cruz en el cubo de Rubik:
        </p>
        <ol>
            <li>
                <strong>Elige un color base:</strong> Observa el cubo y selecciona un color que quieras utilizar como base
                para tu cruz. Este
                será el color de la cara que estás resolviendo primero.
            </li>
            <li>
                <strong>Encuentra una arista correcta:</strong> Busca una arista que tenga el color base seleccionado.
            </li>
            <li>
                <strong>Ubica la arista correcta:</strong> Examina el cubo y localiza dónde encajaría la arista correcta. Si
                la arista ya
                está en su
                lugar, pasa a la siguiente.
            </li>
            <li>
                <strong>Orienta la arista:</strong> Si la arista está en la cara incorrecta pero en la posición correcta,
                debes girar esa
                capa para
                colocarla en la posición correcta y orientarla apropiadamente. Esto se logra mediante la ejecución de
                algoritmos
                específicos para girar las capas del cubo de Rubik.
            </li>
            <li>
                <strong>Repite el proceso:</strong> Continúa buscando aristas correctas y colocándolas en su lugar hasta que
                hayas completado
                la cruz
                en la cara seleccionada.
            </li>
        </ol>
        <p>
            Es importante destacar que esta es solo la primera fase de la resolución del cubo de Rubik, y una vez que hayas
            armado la cruz, deberás continuar con los siguientes pasos para completar el cubo por completo. Hay diferentes
            métodos y algoritmos para resolver el cubo, por lo que este proceso puede variar dependiendo del enfoque
            utilizado.
        </p>
    </CardArticle>
    <CardArticle class="identifier-section" id="colorbase" title="Elige un color base">
        <p>
            Observa el cubo y selecciona un color que quieras utilizar como base para tu cruz. Este
            será el color de la cara que estás resolviendo primero.
        </p>
        <p>
            Para este ejemplo elegiremos el color blanco, por lo cual buscaremos el centro blanco del cubo
        </p>
        <div class="image-container">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color.png"
                alt="selección de centro">
        </div>
    </CardArticle>
    <CardArticle class="identifier-section" id="aristacorrecta" title="Arista con color elegido">
        <p>
            Busca una arista que tenga el color base seleccionado. Las piezas de aristas tienen 2 colores, y el objetivo es
            lograr que la arista coincida en color con los centros correspondientes. Por ejemplo, consideremos la siguiente
            imagen: muestra el centro que hemos elegido, la arista encontrada con el color seleccionado y el centro que
            corresponde al segundo color de la arista.
        </p>
        <div class="image-container">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color-arista.png"
                alt="selección de centro">
        </div>
        <p>
            Para este caso en concreto aplicando el algoritmo <strong>F' U'</strong> se cumple el objetivo que es lograr que
            la arista coincida en color con cada uno de los centros, obteniendo como resultado la
            siguiente forma.
        </p>
        <div class="image-container">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color-arista-2.png"
                alt="selección de centro">
        </div>
        <p>
            Para cada una de las aristas adyacentes al color elegido (recordemos que una cara tiene cuatro aristas), es
            necesario llevar a
            cabo este paso. Se debe tener precaución de no desconfigurar las aristas que ya se han colocado. La técnica
            utilizada para lograr esto es emplear la capa contraria a la de la cara en la que se está armando la cruz.
        </p>
        <div class="image-container">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color-arista-3.png"
                alt="selección de centro">
        </div>
    </CardArticle>
    <CardArticle class="identifier-section" id="completecross" title="Completar cruz">
        <p>El resultado de completar el procedimiento para las 4 aristas es obtener la forma de cruz en la cara del cubo</p>
        <div class="image-container">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color-arista-4.png"
                alt="selección de centro">
        </div>
    </CardArticle>
</template>

<script setup>
import CardArticle from "@/components/CardArticle.vue";
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => {
    const sectionArray = [
        {
            title: "Cruz",
            id: "fridrichcross"
        },
        {
            title: "Elige un color base",
            id: "colorbase"
        },
        {
            title: "Arista con color elegido",
            id: "aristacorrecta"
        },
        {
            title: "Completar la cruz",
            id: "completecross"
        }
    ];
    tocSidebarDataFill(sectionArray, ".identifier-section");
});
</script>

<style lang="scss">
.image-container {
    display: flex;
    justify-content: center;

}</style>