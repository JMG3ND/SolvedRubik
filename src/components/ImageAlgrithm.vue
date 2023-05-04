<template>
    <div class="algorithm-image">
        <div v-for="element in colors" class="algorithm-image__piece" :class="color(element)"></div>
    </div>
</template>

<script setup>

defineProps({
    colors: Array,
})

const color = element => {
    switch (element) {
        case 1:
            return 'algorithm-image__piece--active';
        case 2:
            return 'algorithm-image__piece--top'
        case 3:
            return 'algorithm-image__piece--right'
        case 4:
            return 'algorithm-image__piece--left'
        case 5:
            return 'algorithm-image__piece--bottom'
        default:
            return '';
    }
};
</script>

<style lang="scss">
%extend-piece {
    content: '';
    position: absolute;
    background-color: #f4ec00;
    border-radius: 100px;
    border: 1px solid black;
    min-width: 4px;
    min-height: 4px;
}

.algorithm-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    width: 100%;
    height: 100%;

    &__piece {
        position: relative;
        z-index: 0;
        border-radius: 10%;
        background-color: #8e8e8e;

        &--active {
            background-color: #f4ec00;
        }

        &--top::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            top: -12%;
        }

        &--right::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            right: -12%;
        }

        &--left::before {
            @extend %extend-piece;
            width: 7%;
            height: 100%;
            left: -12%;
        }

        &--bottom::before {
            @extend %extend-piece;
            width: 100%;
            height: 5%;
            bottom: -12%;
        }
    }
}
</style>