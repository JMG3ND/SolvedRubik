<script setup>
const emit = defineEmits(['showSidebar'])
</script>

<template>
    <div class="article-actions justify-elements-in-screen">
        <div class="justify-elements-in-screen__container"><button @click="emit('showSidebar')"
                class="article-actions__button">
                <font-awesome-icon icon="fa-solid fa-list" />
            </button></div>
    </div>
</template>

<style lang="scss">
@import '../assets/colors-theme.scss';

@media screen and (max-width:850px) {
    .article-actions {
        background-color: $dark-baground-color-z-index-1;
        border-bottom: 1px solid $dark-border-box-color;

        body.light & {
            background-color: $light-baground-color-z-index-1;
            border-bottom: 1px solid $light-border-box-color;
        }

        position: fixed;

        &__button {
            display: block;
            background-color: transparent;
            border: 1px solid $dark-border-box-color;
            font-size: large;
            padding: 5px;
        }
    }
}

@media screen and (min-width: 851px) {
    .article-actions {
        height: 2rem;
        background-color: $dark-baground-color-z-index-1;
        border-bottom: 1px solid $dark-border-box-color;

        body.light & {
            background-color: $light-baground-color-z-index-1;
            border-bottom: 1px solid $light-border-box-color;
        }

        position: fixed;

        &__button {
            display: none;
        }
    }
}
</style>