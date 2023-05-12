<template>
    <div class="arrow">
        <div class="arrow__body"></div>
        <div class="arrow__tip"></div>
    </div>
</template>

<style lang="scss">
$color: red;

.arrow {
    display: flex;
    width: 50%;
    align-items: center;
    position: relative;
    animation: animationFlecha 1.5s infinite cubic-bezier(0.36, 0.66, 0.7, 0.38);

    &__body {
        width: 100%;
        height: 10px;
        background-color: $color;
        border-radius: 5px 0 0 5px;
    }

    &__tip {
        border-left: 20px solid $color;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }
}

@keyframes animationFlecha {
    from {
        left: -100%;
    }

    to {
        left: 100%;
    }
}
</style>