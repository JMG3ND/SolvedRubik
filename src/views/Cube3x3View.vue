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
        link: '/cube-three-by-three/movement-notation',
        articles: null
    },
    {
        name: "Métodos de resolución",
        link: '/cube-three-by-three/resolution-methods',
        articles: [
            {
                name: "Principiante",
                link: '/cube-three-by-three/beginner',
                articles: [
                    {
                        name: 'Cruz',
                        link: '/cube-three-by-three/begginer-cross',
                        articles: null
                    },
                    {
                        name: 'Esquinas inferiores',
                        link: '/cube-three-by-three/bottom-corners',
                        articles: null
                    },
                    {
                        name: 'Segunda capa',
                        link: '/cube-three-by-three/second-layer',
                        articles: null
                    },
                    {
                        name: 'Cruz superior',
                        link: '/cube-three-by-three/upper-cross',
                        articles: null
                    },
                    {
                        name: 'Esquinas superiores',
                        link: '/cube-three-by-three/top-corners',
                        articles: null
                    },
                    {
                        name: 'Orientación de esquinas',
                        link: '/cube-three-by-three/corner-orientation',
                        articles: null
                    },
                    {
                        name: 'Permutación final de las esquinas',
                        link: '/cube-three-by-three/final-permutation-of-the-corners',
                        articles: null
                    },
                ]
            },
            {
                name: "Fridrich",
                link: '/cube-three-by-three/fridrich',
                articles: [
                    {
                        name: 'Cross',
                        link: '/cube-three-by-three/fridrich-cross',
                        articles: null,
                    },
                    {
                        name: 'F2L',
                        link: '/cube-three-by-three/f2l',
                        articles: null,
                    },
                    {
                        name: 'PLL',
                        link: '/cube-three-by-three/pll',
                        articles: null,
                    },
                    {
                        name: 'OLL',
                        link: '/cube-three-by-three/oll',
                        articles: null,
                    }
                ]
            }
        ]
    }
]

</script>

<template>
    <ArticleActions @showSidebar="showSidebar" />
    <div class="justify-elements-in-screen">
        <div class="content-divider justify-elements-in-screen__container">
            <div class="content-divider__sidebar-container" :class="changeShow">
                <div class="content-divider__sidebar-links">
                    <GlobalSidebar title="Cubo 3x3" :data="sidebarData" />
                </div>
                <div @click="changeTocData" class="content-divider__sidebar-toc">
                    <!--<TocSidebar :data="tocSidebar" />-->
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
            position: sticky;
            top: 1000px
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

.main-article {
    min-height: 85vh;
    padding: 0 1rem;

    p {
        line-height: 1.5rem;
        margin: 1rem 0 2rem;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    ol {
        padding: 0 1rem;

        li {
            line-height: 1.5rem;
            margin: 0.5rem 0;
        }
    }
}
</style>