<template>
    <div class="representation-algorithm">
        <RubikCube algorithm="F R U"></RubikCube>
    </div>
</template>

<script setup>
import RubikCube from './RubikCube-copy.vue';
</script>

<style lang="scss">
.representation-algorithm {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(85, 85, 85, 0.635);
}
</style>