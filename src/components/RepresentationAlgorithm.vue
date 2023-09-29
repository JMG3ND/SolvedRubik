<template >
    <Teleport to="header">
        <div class="representation-algorithm">
            <div class="representation-algorithm__container">
                <button @click="$emit('changeShow'); indexCharacter = 0"
                    class="representation-algorithm__button-close">X</button>
                <RubikCube v-slot="slotProps" :inverse-algorithm="[...algorithmArray].reverse()">
                    <div class="representation-algorithm__controls-container">
                        <button class="representation-algorithm__button"
                            @click="slotProps.rubikcube.secuence(previusMovement())">&lt;</button>
                        <p style="color: white;">{{ algorithm }}</p>
                        <button class="representation-algorithm__button"
                            @click="slotProps.rubikcube.secuence(nextMovement())">></button>
                    </div>
                </RubikCube>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import RubikCube from './RubikCube.vue';

const props = defineProps(["show", "algorithm", "algorithmArray"]);
defineEmits(["changeShow"]);

//El indexCharacter determina cual es el código que determina el movimiento actual del cubo
//por los métodos siguientes y anterior
let indexCharacter = 0;
function nextMovement() {
    if (indexCharacter < props.algorithmArray.length) {
        indexCharacter++;
        return props.algorithmArray[indexCharacter - 1];
    } else {
        return "";
    }
}
function previusMovement() {
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

    &__button {
        padding: 1rem;
    }

    &__controls-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }
}

@media screen and (max-width: 1400px) {
    .representation-algorithm {
        &__container {
            width: 80%;
            height: 80%;
        }
    }
}

@media screen and (max-width: 850px) {
    .representation-algorithm {
        &__container {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }
}
</style>