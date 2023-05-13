<template>
    <div class="cube-card">
        <div v-for=" in 9" class="cube-card__piece cube-card__piece--active">
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.cube-card {
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
        border: 1px solid black;

        &--active {
            background-color: #f4ec00;
        }
    }
}
</style>