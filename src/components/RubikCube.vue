<template>
    <div class="canvas" ref="canvas"></div>
</template>

<script setup>
import { Ambient } from '@/script/rubik-cube/ambient.js';
import { RubikCube } from '@/script/rubik-cube/rubikCube.js';
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref();
const changeWith = () => {
    if (canvas.value)
        canvas.value.style.height = `${canvas.value.clientWidth}px`;
}

onMounted(() => {
    canvas.value.style.height = `${canvas.value.clientWidth}px`;
    const ambient = new Ambient(canvas.value);
    const rubikcube = new RubikCube();

    ambient.scene.add(rubikcube.cube);

    function animate() {
        requestAnimationFrame(animate);
        ambient.renderer();
    }
    animate();
    window.addEventListener('resize', changeWith);
});
onUnmounted(() => {
    window.removeEventListener('resize', changeWith)
})

</script>

<style lang="scss">
.canvas {
    width: 100%;
    background-color: white;
}
</style>