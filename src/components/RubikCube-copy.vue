<template>
    <div class="rubik-cube-copy">
        <div class="rubik-cube-copy__canvas" ref="canvas"></div>
        <div class="rubik-cube-copy__container-controls">
            <button @click="anterior">&lt;</button>
            <p>{{ algorithm }}</p>
            <button @click="siguiente">></button>
        </div>
    </div>
</template>

<script setup>
import { Ambient } from '@/script/rubik-cube/ambient.js';
import { RubikCube } from '@/script/rubik-cube/rubikCube.js';
import { ref, onMounted, onUnmounted } from 'vue';

//Recibe un algoritmo como string
const props = defineProps({
    algorithm: {
        type: String,
        default: null
    }
});
let indexCharacter = 0;
const siguiente = () => {
    if (indexCharacter < characters.length) {
        secuence(characters[indexCharacter]);
        indexCharacter++;
    }
}
const anterior = () => {
    if (indexCharacter > 0) {
        indexCharacter--;
        secuence(`${characters[indexCharacter]}'`);
    }
}

let ambient, rubikcube, characters = [];

//Se crea un array para hacer una cola de eventos para animar los movimientos del cubo de forma secuencial
let eventArray = [];
const secuence = (character) => {
    eventArray.push(character);
    if (eventArray.length === 1) recursive();
};
const recursive = () => {
    if (eventArray.length >= 1) {
        rubikcube.rotateTarget(eventArray[0]);
        setTimeout(() => {
            eventArray.shift();
            recursive();
        }, 550);
    }
}

//Se crea un contenedor de escena para el cubo
const canvas = ref();
const changeWith = () => {
    if (canvas.value) {
        canvas.value.style.height = `${canvas.value.clientWidth}px`;
        ambient.resizeCamera(canvas.value);
        ambient.resizeRenderer(canvas.value);
    }
}

onMounted(() => {
    canvas.value.style.height = `${canvas.value.clientWidth}px`;
    ambient = new Ambient(canvas.value);
    rubikcube = new RubikCube();

    ambient.scene.add(rubikcube.cube);

    function animate() {
        requestAnimationFrame(animate);
        ambient.renderer();
    }
    animate();
    window.addEventListener('resize', changeWith);

    //Eliminamos los espacios en blanco de la cadena el algoritmo
    const array = props.algorithm.replace(/\s/g, '');

    //Asignamos los caracteres dentro de cada una de las casillas de un array
    characters = array.split('');
});
onUnmounted(() => {
    window.removeEventListener('resize', changeWith);
})

</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.rubik-cube-copy {
    display: block;
    width: 40%;

    &__canvas {
        width: 95%;
        border-radius: 5%;
        border: 1px solid black;
        background-color: #444654;
        overflow: hidden;

        position: sticky;
        top: 25%;
        bottom: 1000px;
    }

    &__container-controls {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        button {
            padding: 1rem;
        }
    }
}

@media screen and (max-width: 850px) {
    .rubik-cube {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        &__canvas {
            position: sticky;
            top: 100px;
            bottom: 1000px;
            width: 80%;
        }
    }
}
</style>