<script setup>
import { ref } from 'vue';
import SubMenuItem from './SubMenuItem.vue';

defineProps({
    title: String,
    subMenu: Array
})

//El siguiente código activa y desactiva el menú hamburguesa
let contentItemActive = false;
const contentItemActiveClass = ref('');
const activeItem = () => {
	contentItemActive = !contentItemActive
	contentItemActiveClass.value = contentItemActive ? "main-menu-item--active" : "";
}

</script>

<template>
    <div class="main-menu-item" :class="contentItemActiveClass">
        <div class="main-menu-item__content-item-head">
            <a class="main-menu-item__item" href="#">
                <span class="main-menu-item__text">{{ title }}</span>
            </a>
            <button v-if="subMenu" @click="activeItem" class="main-menu-item__button"><font-awesome-icon
                    icon="fa-solid fa-caret-down" /></button>
        </div>
        <div v-if="subMenu" class="main-menu-item__sub-menu-container">
            <ul class="sub-menu">
                <!--Block-->
                <SubMenuItem v-for="element in subMenu" :title="element.title" :description="element.description"
                    :color="element.color" />
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/colors-theme.scss';

@media screen and (min-width: 851px) {
    .main-menu-item {
        &__item {
            position: relative;
            display: block;
            text-decoration: none;
            padding: 15px;
            border-radius: 5PX;

            &:hover {
                background-color: $dark-bagraund-color-top-level-entry-hover;

                body.light & {
                    background-color: $light-bagraund-color-top-level-entry-hover;
                }
            }
        }

        /*&__text{}*/
        &__button {
            display: none;
        }

        &__sub-menu-container {
            display: none;
            position: absolute;
        }

        &:hover &__sub-menu-container {
            display: flex;
        }
    }
}

@media screen and (max-width: 850px) {
    .main-menu-item {
        &__item {
            position: relative;
            display: inline-block;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            padding: 15px;
        }

        &__content-item-head {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 30px;
        }

        &--active &__content-item-head {
            background-color: $dark-bagraund-color-top-level-entry-hover;

            body.light & {
                background-color: $light-bagraund-color-top-level-entry-hover;
            }
        }

        /*&__text{}*/
        &__button {
            background-color: $dark-baground-color-z-index-1;

            body.light & {
                background-color: $light-baground-color-z-index-1;
            }

            border-radius: 24px;
            width: 30px;
            height: 30px;
            border: none;
            transform: rotate(-90deg);
        }

        &--active &__button {
            transform: rotate(0deg);
        }

        &__sub-menu-container {
            position: unset;
            display: flex;
            width: 100%;
            height: 1px;
            overflow: hidden;
        }

        &--active &__sub-menu-container {
            height: auto;
        }
    }
}
</style>