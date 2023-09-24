<template>
    <Teleport to="body">
        <div v-if="show" class="representation-algorithm">
            <div class="representation-algorithm__container">
                <button @click="$emit('changeShow')" class="representation-algorithm__button-close">X</button>
                <RubikCube>

                </RubikCube>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import RubikCube from './RubikCube.vue';

defineProps(["show"]);
defineEmits(["changeShow"]);
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