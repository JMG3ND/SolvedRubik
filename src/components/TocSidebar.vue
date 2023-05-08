<template>
    <!--Menú de navegación que se utiliza para navegar entre las distíntas secciones del contenido main-->
    <aside ref="asidevar" class="toc-sidebar">
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
        text-decoration: none;
        padding: 0.3rem;
        border-left: 2px solid $dark-border-box-color;

        &:hover {
            color: white;
            border-left: 2px solid white;

            body.light & {
                color: black;
                border-left: 2px solid black;
            }
        }
    }
}
</style>