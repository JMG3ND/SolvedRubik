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
@import '@/assets/colors-theme.scss';

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
                    background-color: $yellow;
                }

                to {
                    transform: translateX(-50%) translateY(-50%);
                    background-color: $white;
                }
            }
        }

        &--arista1 {
            animation: arista1 $animationDuration infinite ease-in-out alternate;

            @keyframes arista1 {
                from {
                    transform: translateY(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateY(-50%);
                    background-color: $orange;
                }
            }
        }

        &--esquina2 {
            animation: esquina2 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina2 {
                from {
                    transform: translateX(0) translateY(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateX(50%) translateY(-50%);
                    background-color: $orange;
                }
            }
        }

        &--arista2 {
            animation: arista2 $animationDuration infinite ease-in-out alternate;

            @keyframes arista2 {
                from {
                    transform: translateX(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateX(-50%);
                    background-color: $green;
                }
            }
        }

        &--esquina3 {
            animation: esquina3 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina3 {
                from {
                    transform: translateX(0) translateY(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateX(-50%) translateY(50%);
                    background-color: $orange;
                }
            }
        }

        &--arista3 {
            animation: arista3 $animationDuration infinite ease-in-out alternate;

            @keyframes arista3 {
                from {
                    transform: translateX(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateX(50%);
                    background-color: $red;
                }
            }
        }

        &--esquina4 {
            animation: esquina4 $animationDuration infinite ease-in-out alternate;

            @keyframes esquina4 {
                from {
                    transform: translateX(0) translateY(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateX(50%) translateY(50%);
                    background-color: $red;
                }
            }
        }

        &--arista4 {
            animation: arista4 $animationDuration infinite ease-in-out alternate;

            @keyframes arista4 {
                from {
                    transform: translateY(0);
                    background-color: $yellow;
                }

                to {
                    transform: translateY(50%);
                    background-color: $green;
                }
            }
        }
    }
}
</style>