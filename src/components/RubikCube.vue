<template>
    <div class="rubik-cube">
        <div class="rubik-cube__canvas" ref="canvas"></div>
        <div class="rubik-cube__controls-container">
            <slot :rubikcube="rubikcube"></slot>
        </div>
    </div>
</template>

<script setup>
import { Ambient } from '@/script/rubik-cube/ambient.js';
import { RubikCube } from '@/script/rubik-cube/rubikCube.js';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['inverseAlgorithm']);
let ambient, rubikcube = new RubikCube(true);

//Se crea un contenedor de escena para el cubo
const canvas = ref();

function createInverseAlgorithm(array = []) {
    array.forEach((element, index) => {
        element.includes("'") ? array[index] = element.replace(/'/g, '') : array[index] = element + "'";
    });
    return array;
}
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
    ambient.scene.add(rubikcube.cube);
    function animate() {
        requestAnimationFrame(animate);
        ambient.renderer();
    }
    animate();
    window.addEventListener('resize', changeWith);
    rubikcube.configure(createInverseAlgorithm(props.inverseAlgorithm));
});
onUnmounted(() => {
    window.removeEventListener('resize', changeWith);
    ambient.scene.clear();
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

    &__controls-container {
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 850px) {
    .rubik-cube {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8rem;

        &__canvas {
            position: sticky;
            top: 100px;
            bottom: 1000px;
            width: 80%;
        }
    }
}
</style>