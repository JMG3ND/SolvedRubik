<template>
    <div class="rubik-cube">
        <div class="rubik-cube__canvas" ref="canvas"></div>
        <div class="rubik-cube__controls">
            <template v-for="element in movements" class="rubik-cube__movement-container">
                <button v-for="character in element" @click="secuence(character)" class="rubik-cube__button">{{
                    character }}</button>
            </template>
        </div>
    </div>
</template>

<script setup>
import { Ambient } from '@/script/rubik-cube/ambient.js';
import { RubikCube } from '@/script/rubik-cube/rubikCube.js';
import { ref, onMounted, onUnmounted } from 'vue';

let ambient, rubikcube;

const movements = [
    ["F", "F'", "F2"],
    ["B", "B'", "B2"],
    ["R", "R'", "R2"],
    ["L", "L'", "L2"],
    ["U", "U'", "U2"],
    ["D", "D'", "D2"],
    ["M", "M'", "M2"],
    ["E", "E'", "E2"],
    ["S", "S'", "S2"],
    ["r", "r'", "r2"],
    ["l", "l'", "l2"],
    ["u", "u'", "u2"],
    ["d", "d'", "d2"],
    ["X", "X'", "X2"],
    ["Y", "Y'", "Y2"],
    ["Z", "Z'", "Z2"]
];

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
});
onUnmounted(() => {
    window.removeEventListener('resize', changeWith);
})

</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.rubik-cube {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

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

    &__controls {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    &__button {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
            background-color: $light-baground-color-z-index-1;
        }

        border: none;
        border-radius: 5px;
        padding: 1rem;
        margin: 0.1rem;
        font-size: large;
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