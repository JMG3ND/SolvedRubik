<template>
    <div class="not-found">
        <div>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
        </div>
        <font-awesome-icon class="not-found__icon" icon="fa-solid fa-circle-exclamation" />


    </div>
</template>

<style lang="scss">
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    gap: 2rem;

    &__icon {
        font-size: xx-large;
    }
} 
</style>