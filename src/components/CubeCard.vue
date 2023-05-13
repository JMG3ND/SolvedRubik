<template>
    <div class="cube-card">
        <div class="cube-card__piece cube-card__piece--esquina1"></div>
        <div class="cube-card__piece cube-card__piece--arista1"></div>
        <div class="cube-card__piece cube-card__piece--esquina2"></div>
        <div class="cube-card__piece cube-card__piece--arista2"></div>
        <div class="cube-card__piece"></div>
        <div class="cube-card__piece cube-card__piece--arista3"></div>
        <div class="cube-card__piece cube-card__piece--esquina3"></div>
        <div class="cube-card__piece cube-card__piece--arista4"></div>
        <div class="cube-card__piece cube-card__piece--esquina4"></div>
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
        border: 1px solid black;
        background-color: #f4ec00;

        $animationDuration: 3s;

        &--esquina1 {
            animation: esquina1 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina1 {
                from {
                    transform: translateX(0) translateY(0);
                }

                to {
                    transform: translateX(-50%) translateY(-50%);
                }
            }
        }

        &--arista1 {
            animation: arista1 $animationDuration infinite ease-in-out alternate;

            @keyframes arista1 {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(-50%);
                }
            }
        }

        &--esquina2 {
            animation: esquina2 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina2 {
                from {
                    transform: translateX(0) translateY(0);
                }

                to {
                    transform: translateX(50%) translateY(-50%);
                }
            }
        }

        &--arista2 {
            animation: arista2 $animationDuration infinite ease-in-out alternate;

            @keyframes arista2 {
                from {
                    transform: translateX(0);
                }

                to {
                    transform: translateX(-50%);
                }
            }
        }

        &--esquina3 {
            animation: esquina3 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina3 {
                from {
                    transform: translateX(0) translateY(0);
                }

                to {
                    transform: translateX(-50%) translateY(50%);
                }
            }
        }

        &--arista3 {
            animation: arista3 $animationDuration infinite ease-in-out alternate;

            @keyframes arista3 {
                from {
                    transform: translateX(0);
                }

                to {
                    transform: translateX(50%);
                }
            }
        }

        &--esquina4 {
            animation: esquina4 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina4 {
                from {
                    transform: translateX(0) translateY(0);
                }

                to {
                    transform: translateX(50%) translateY(50%);
                }
            }
        }

        &--arista4 {
            animation: arista4 $animationDuration infinite ease-in-out alternate;

            @keyframes arista4 {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(50%);
                }
            }
        }
    }
}
</style>