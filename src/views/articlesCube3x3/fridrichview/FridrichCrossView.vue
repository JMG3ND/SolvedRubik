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
                Elige un color base: Observa el cubo y selecciona un color que quieras utilizar como base para tu cruz. Este
                será el color de la cara que estás resolviendo primero.
            </li>
            <li>
                Encuentra una arista correcta: Busca una pieza de esquina que tenga el color base seleccionado y una arista
                adyacente con otro color correspondiente a una cara adyacente.
            </li>
            <li>
                Ubica la arista correcta: Examina el cubo y localiza dónde encajaría la arista correcta. Si la arista ya
                está en su
                lugar, pasa a la siguiente.
            </li>
            <li>
                Orienta la arista: Si la arista está en la cara incorrecta pero en la posición correcta, debes girar esa
                capa para
                colocarla en la posición correcta y orientarla apropiadamente. Esto se logra mediante la ejecución de
                algoritmos
                específicos para girar las capas del cubo de Rubik.
            </li>
            <li>
                Repite el proceso: Continúa buscando aristas correctas y colocándolas en su lugar hasta que hayas completado
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
        <div class="select-face-color">
            <img class="select-face-color__image" width="250" src="/fridrich-cross/select-face-color.png"
                alt="selección de centro">
        </div>
    </CardArticle>
    <CardArticle class="identifier-section" id="aristacorrecta" title="Encuentra una arista correcta">
        <p>
            Busca una pieza de esquina que tenga el color base seleccionado y una arista adyacente con otro color
            correspondiente a una cara adyacente.
        </p>
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
            title: "Encuentra una arista correcta",
            id: "aristacorrecta"
        }
    ];
    tocSidebarDataFill(sectionArray, ".identifier-section");
});
</script>

<style lang="scss">
.select-face-color {
    display: flex;
    justify-content: center;
}
</style>