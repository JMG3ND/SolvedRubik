<template>
    <div class="rubik-cube">
        <div class="rubik-cube__canvas" ref="canvas"></div>
        <div class="rubik-cube__controls">
            <button v-for="character in moves" @click="secuence(character)" class="rubik-cube__button">{{
                character }}</button>
        </div>
    </div>
</template>

<script setup>
import { Ambient } from '@/script/rubik-cube/ambient.js';
import { RubikCube } from '@/script/rubik-cube/rubikCube.js';
import { ref, onMounted, onUnmounted } from 'vue';

let ambient, rubikcube;

const moves = ["F", "F'", "B", "B'", "R", "R'", "L", "L'", "U", "U'", "D", "D'", "X", "X'", "Y", "Y'"];

let eventArray = [];
const secuence = (character) => {
    eventArray.push(character);
    console.log(eventArray)
    if (eventArray.length === 1) recursive();
};

const recursive = () => {
    if (eventArray.length >= 1) {
        rubikcube.rotateTarget(eventArray[0]);
        setTimeout(() => {
            eventArray.shift();
            console.log(eventArray);
            recursive();
        }, 550);
    }
}

class movement {

}

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
    }

    &__controls {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    &__button {
        background-color: $dark-baground-color-z-index-1;

        body.light & {
            background-color: $light-baground-color-z-index-1;
        }

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
            width: 80%;
        }
    }
}
</style>