<template>
    <div class="toggle" :class="computedIconShow">
        <header class="toggle__header">
            <RouterLink @click="clickRouterLink" :to="link" class="toggle__link">
                {{ title }}
                <div @click="activeIconShow" v-if="list" class="toggle__icon-show">
                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                </div>
            </RouterLink>
        </header>
        <article v-if="list" class="toggle__list-container">
            <ul class="toggle__list">
                <li v-for="element in list" class="toggle__item-container">
                    <ToggleList :link="element.link" :title="element.name" :list="element.articles"
                        @hiddenSidebar="emit('hiddenSidebar')"></ToggleList>
                </li>
            </ul>
        </article>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    link: String,
    list: Array
})

//Método que hace un scroll de la página al inicio cada vez que se cambia de artículo mediante el GlobalSidebar
const emit = defineEmits(['hiddenSidebar']);
const clickRouterLink = () => {
    window.scrollTo({ top: 0 });
    emit('hiddenSidebar');
}

//Lógica que describe si el toggle se muestra o no en la pantalla a menos de 850px
const iconShow = ref(true);
const activeIconShow = () => iconShow.value = !iconShow.value
const computedIconShow = computed(() => iconShow.value ? 'toggle--active' : '');
</script>

<style lang="scss">
@import '../assets/colors-theme.scss';

.toggle {
    padding-left: 1rem;

    &__link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        width: 100%;
        padding: 0.5rem;
        border-left: 2px solid $dark-border-box-color;

        body.light & {
            border-left: 2px solid $light-border-box-color;
        }

        &:hover {
            color: white;
            border-left: 2px solid white;

            body.light & {
                color: black;
                border-left: 2px solid black;
            }
        }
    }

    & .router-link-active {
        border-left: 2px solid white;
        background-color: $dark-baground-color-z-index-1;

        body.light & {
            border-left: 2px solid black;
            background-color: $light-baground-color-z-index-1;
        }
    }

    &__list {
        list-style-type: none;
        margin: 1rem 0;
    }

    &__button {
        border: none;
        background-color: transparent;
    }

    &__icon-show {
        transform: rotate(-90deg);
        transition: transform 0.1s;
    }

    &__list-container {
        height: 0;
        overflow: hidden;
    }

    &--active {
        >.toggle__header>.toggle__link>.toggle__icon-show {
            transform: unset;
        }

        >.toggle__list-container {
            height: auto;
        }
    }
}
</style>