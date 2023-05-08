<template>
    <ArticleActions @showSidebar="showSidebar" />
    <div class="justify-elements-in-screen">
        <div class="content-divider justify-elements-in-screen__container">
            <div class="content-divider__sidebar-container" :class="changeShow">
                <div class="content-divider__sidebar-links">
                    <div class="content-divider__sticky-content">
                        <GlobalSidebar url="/cube-three-by-three" title="Cubo 3 x 3" :data="sidebarData" />
                    </div>
                </div>
                <div @click="changeTocData" class="content-divider__sidebar-toc">
                    <div class="content-divider__sticky-content">
                        <TocSidebar :data="tocSidebarData.tocSidebarData" />
                    </div>
                </div>

                <!-- Panel que se muestra para cerrar el sidebar -->
                <Teleport v-if="sidebarShow" to="body">
                    <div @click="showSidebar" class="content-divider__panel-hidden"></div>
                </Teleport>
            </div>
            <div class="content-divider__main-container">
                <main class="main-article">
                    <RouterView />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, computed } from 'vue';
import GlobalSidebar from '../components/GlobalSidebar.vue';
import TocSidebar from '../components/TocSidebar.vue';
import ArticleActions from '../components/ArticleActions.vue';
import { useSidebarData } from '@/aplicationDatajs/sidebarData';
import { useTocSidebarStore } from '../stores/tocSidebarStore';

const tocSidebarData = useTocSidebarStore();
const { sidebarData } = useSidebarData();

//Lógica que muestra y oculta el sidebar cuando la resolución es menor a 850px
const sidebarShow = ref(false);
const showSidebar = () => sidebarShow.value = !sidebarShow.value;
const changeShow = computed(() => sidebarShow.value ? 'content-divider__sidebar-container--show' : '')
</script>

<style lang="scss">
@import '../assets/colors-theme.scss';
@import '@/assets/main-section.scss';

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

        &__sticky-content {
            position: sticky;
            top: 120px;
        }

        &__panel-hidden {
            display: none;
        }
    }
}

@media screen and (max-width: 1199px) {
    .content-divider {
        display: grid;
        grid-template-columns: 0.6fr 1.4fr;
        padding-top: 4rem;

        //Se alínean los elementos para poder aplicar position sticky al sidebar-linsk
        align-items: start;

        &__sidebar-container {
            display: flex;
            flex-direction: column-reverse;
            justify-content: start;
            position: sticky;
            top: 120px;
        }

        &__panel-hidden {
            display: none;
        }
    }
}

@media screen and (max-width: 850px) {
    .content-divider {
        display: block;

        &__sidebar-links {
            height: 100%;
        }

        &__sidebar-container {
            background-color: $dark-baground-color-z-index-2;
            border: 2px solid $dark-baground-color-z-index-1;

            body.light & {
                background-color: $light-baground-color-z-index-2;
                border: 2px solid $light-baground-color-z-index-1;
            }

            overflow: visible;
            display: flex;
            flex-direction: column-reverse;
            justify-content: start;
            position: fixed;
            top: 90px;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateX(-100%);
            transition: transform .5s;

            &--show {
                transform: unset;
            }
        }

        &__panel-hidden {
            display: block;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
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