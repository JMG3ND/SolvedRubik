<template >
    <Teleport to="header">
        <div class="representation-algorithm">
            <div class="representation-algorithm__container">
                <button @click="$emit('changeShow'); indexCharacter = 0" class="representation-algorithm__button-close">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
                <RubikCube v-slot="slotProps" :inverse-algorithm="[...algorithmArray].reverse()">
                    <div class="representation-algorithm__controls-container">
                        <button class="representation-algorithm__button"
                            @click="slotProps.rubikcube.secuence(previusMovement())">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        </button>
                        <div class="representation-algorithm__algorithm-container">
                            <span v-for="element, index in algorithmArray" :class="changeCharacterFocus(index)"
                                class="representation-algorithm__character-container">
                                {{ element }} </span>
                        </div>
                        <button class="representation-algorithm__button"
                            @click="slotProps.rubikcube.secuence(nextMovement())">
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </button>
                    </div>
                </RubikCube>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import RubikCube from './RubikCube.vue';
import { ref } from 'vue'

const props = defineProps(["show", "algorithm", "algorithmArray"]);
defineEmits(["changeShow"]);

//Cambio de color en función del focus del caracter del algoritmo
const characterFocus = ref(0);
const changeCharacterFocus = (index) => characterFocus.value == index ? 'representation-algorithm__character-container--focus' : '';

//El indexCharacter determina cual es el código que determina el movimiento actual del cubo
//por los métodos siguientes y anterior
let indexCharacter = 0;
function nextMovement() {
    if (indexCharacter < props.algorithmArray.length) {
        indexCharacter++;
        characterFocus.value++;
        return props.algorithmArray[indexCharacter - 1];
    } else {
        return "";
    }
}
function previusMovement() {
    if (indexCharacter > 0) {
        indexCharacter--;
        characterFocus.value--;
        let string = props.algorithmArray[indexCharacter];
        if (string.includes("'")) {
            string = string.replace(/'/g, '');
        } else if (!string.includes('2')) string = string + "'";
        return string;
    } else {
        return "";
    }
}
</script>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

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

    &__algorithm-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.5rem;
    }

    &__character-container {
        font-size: large;
        transition: scale 100ms ease-in-out;

        &--focus {
            background-color: rgb(92, 92, 92);
            padding: 2%;
            border-radius: 5px;
            scale: 1.5;
        }
    }

    &__container {
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding: 2rem;
        width: 50%;
        height: 50%;
        background-color: rgba(0, 0, 0, 0.635);

        body.light & {
            background-color: rgba(54, 54, 54, 0.783);
        }
    }

    &__button-close {
        position: absolute;
        font-size: xx-large;
        top: 20px;
        right: 20px;
        border: none;
        padding: 0.3rem 0.6rem;
        border-radius: 50%;
        background-color: $dark-button;

        body.light & {
            background-color: $light-button;
        }

        cursor: pointer;

        &:hover {
            background-color: rgb(255, 100, 100);
        }
    }

    &__button {
        font-size: xx-large;
        scale: 2;
        cursor: pointer;
        background-color: transparent;
        border: none;
        transition: scale 100ms;

        &:hover {
            scale: 2.5;
        }

    }

    &__controls-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
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