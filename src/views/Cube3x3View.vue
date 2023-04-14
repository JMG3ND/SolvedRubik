<script setup>
import { RouterView } from 'vue-router';
import { ref, computed } from 'vue';
import GlobalSidebar from '../components/GlobalSidebar.vue';
import TocSidebar from '../components/TocSidebar.vue';
import ArticleActions from '../components/ArticleActions.vue';

const sidebarShow = ref(false)
const showSidebar = () => sidebarShow.value = !sidebarShow.value
const changeShow = computed(() => sidebarShow.value ? 'content-divider__sidebar-container--show' : '')

const sidebarData = [
    {
        name: "Notación de movimientos",
        articles: null
    },
    {
        name: "Métodos de resolución",
        articles: [
            {
                name: "Principiante",
                link: '/cube-three-by-three/beginners',
                sections: [
                    'Cruz',
                    'Esquinas inferiores',
                    'Segunda capa',
                    'Cruz superior',
                    'Esquinas superiores',
                    'Orientación de esquinas',
                    'Permutación final de las esquinas'
                ]
            },
            {
                name: "Fridrich",
                link: '/cube-three-by-three/fridrich',
                sections: [
                    'Cross',
                    'F2L',
                    'PLL',
                    'OLL'
                ]
            }
        ]
    }
]

const tocSidebar = ref([]);

const changeTocData = (index) => {
    tocSidebar.value = sidebarData[1].articles[index].sections
    console.log(tocSidebar.value)
}

</script>

<template>
    <ArticleActions @showSidebar="showSidebar" />
    <div class="justify-elements-in-screen">
        <div class="content-divider justify-elements-in-screen__container">
            <div class="content-divider__sidebar-container" :class="changeShow">
                <div class="content-divider__sidebar-links">
                    <GlobalSidebar @changeDataToc="changeTocData" title="Cubo de tres por tres" :data="sidebarData" />
                </div>
                <div @click="changeTocData" class="content-divider__sidebar-toc">
                    <TocSidebar :data="tocSidebar" />
                </div>
            </div>
            <div class="content-divider__main-container">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/colors-theme.scss';

@media screen and (min-width: 1200px) {
    .content-divider {
        display: grid;
        grid-template-columns: 0.4fr 1fr 0.4fr;
        gap: 1rem;
        padding-top: 4rem;

        &__sidebar-container {
            display: contents;
        }

        &__main-container {
            grid-column: 2;
            grid-row: 1;
        }

        &__sidebar-toc {
            grid-column: 3;
        }
    }
}

@media screen and (max-width: 1199px) {
    .content-divider {
        display: grid;
        grid-template-columns: 0.6fr 1.4fr;
        padding-top: 4rem;

        &__sidebar-container {
            display: flex;
            flex-direction: column-reverse;
            justify-content: start;
        }
    }
}

@media screen and (max-width: 850px) {
    .content-divider {
        display: block;

        &__sidebar-container {
            background-color: $dark-baground-color-z-index-2;
            border: 2px solid $dark-baground-color-z-index-1;

            body.light & {
                background-color: $light-baground-color-z-index-2;
                border: 2px solid $light-baground-color-z-index-1;
            }

            display: flex;
            flex-direction: column-reverse;
            justify-content: start;
            position: fixed;
            top: 95px;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            transition: transform .5s;

            &--show {
                transform: unset;
            }
        }
    }
}
</style>