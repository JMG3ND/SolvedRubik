<template>
    <!--Menú de navegación que se utiliza para navegar entre las distíntas secciones del contenido main-->
    <aside v-if="data" ref="asidevar" class="toc-sidebar">
        <h2 class="toc-sidebar__title">En este artículo</h2>
        <nav class="toc-sidebar__nav">
            <ul class="toc-sidebar__list">
                <li class="toc-sidebar__item" v-for="element in  data ">
                    <!--Consiste en la utilización de un ancla dinámico que se obtiene del arreglo con la propiedad id-->
                    <a class="toc-sidebar__link" :href="`#${element.id}`">
                        {{ element.title }}
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
/*
Recibe una data que debe ser un arreglo de objetos
Con el siguiente formato

Array = [{title: String, id: String}];

Si se pasa un arreglo que no contenga estas dos propiedades el componente no funciona;
*/
defineProps({
    data: Array
});

/* 
Se quiere que las anclas se resalten cuando el usuario se encuentra en una sección en específico de la página.

Para lograr esto ocuparemos el método intersection observe
Este objeto observará las secciones del main para pintar las anclas
*/

</script>

<style lang="scss">
@import '@/assets/colors-theme.scss';

.toc-sidebar {

    &__list {
        list-style-type: none;
    }

    &__nav {
        margin-left: 1rem;
        margin-top: 1rem;
    }

    &__link {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-left: 2px solid $dark-border-box-color;
        font-size: small;

        &:hover {
            color: white;
            border-left: 2px solid white;

            body.light & {
                color: rgb(11, 0, 110);
                border-left: 2px solid black;
            }
        }

        &--active {
            color: white;
            border-left: 2px solid white;
            background-color: $dark-baground-color-z-index-1;

            body.light & {
                color: rgb(11, 0, 110);
                border-left: 2px solid black;
                background-color: $light-baground-color-z-index-1;
            }
        }
    }
}
</style>