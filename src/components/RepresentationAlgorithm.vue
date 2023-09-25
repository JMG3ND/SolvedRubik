<template>
    <Teleport to="body">
        <div v-if="show" class="representation-algorithm">
            <div class="representation-algorithm__container">
                <button @click="$emit('changeShow'); indexCharacter = 0"
                    class="representation-algorithm__button-close">X</button>
                <RubikCube v-slot="slotProps">
                    <p style="color: white;">{{ algorithm }}</p>
                    <button @click="slotProps.rubikcube.secuence(anterior())">&lt;</button>
                    <button @click="slotProps.rubikcube.secuence(siguiente())">></button>
                </RubikCube>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import RubikCube from './RubikCube.vue';

const props = defineProps(["show", "algorithm", "algorithmArray"]);
defineEmits(["changeShow"]);

let indexCharacter = 0;
function siguiente() {
    if (indexCharacter < props.algorithmArray.length) {
        indexCharacter++;
        return props.algorithmArray[indexCharacter - 1];
    } else {
        return "";
    }
}
function anterior() {
    if (indexCharacter > 0) {
        indexCharacter--;
        let string = props.algorithmArray[indexCharacter];
        string.includes("'") ? string = string.replace(/'/g, '') : string = string + "'";
        return string;
    } else {
        return "";
    }
}

</script>

<style lang="scss">
.representation-algorithm {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(85, 85, 85, 0.635);

    &__container {
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding: 2rem;
        width: 50%;
        height: 50%;
        background-color: rgba(0, 0, 0, 0.635);
    }

    &__button-close {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 1rem 1.2rem;
        border-radius: 50%;
    }
}
</style>