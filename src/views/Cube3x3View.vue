<template>
    <ArticleActions @showSidebar="showSidebar" />
    <div class="justify-elements-in-screen">
        <div class="content-divider justify-elements-in-screen__container">
            <div class="content-divider__sidebar-container" :class="changeShow">
                <div class="content-divider__sidebar-toc">
                    <div class="content-divider__sticky-content">
                        <TocSidebar :data="tocSidebarData.tocSidebarData" />
                    </div>
                </div>
                <div class="content-divider__sidebar-links">
                    <div class="content-divider__sticky-content">
                        <GlobalSidebar url="/cube-three-by-three" title="Cubo 3 x 3" :data="sidebarData" />
                    </div>
                </div>

                <!-- Panel que se muestra para cerrar el sidebar -->
                <Teleport v-if="sidebarShow" to="body">
                    <div @click="showSidebar" class="content-divider__panel-hidden"></div>
                </Teleport>
            </div>
            <div class="content-divider__main-container">
                <main class="content-divider__main">
                    <RouterView />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import GlobalSidebar from '../components/GlobalSidebar.vue';
import TocSidebar from '../components/TocSidebar.vue';
import ArticleActions from '../components/ArticleActions.vue';
import { RouterView } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { useSidebarData } from '@/aplicationDatajs/sidebarData';
import { useTocSidebarStore } from '../stores/tocSidebarStore';

const tocSidebarData = useTocSidebarStore();
const { sidebarData } = useSidebarData();

//Lógica que muestra y oculta el sidebar cuando la resolución es menor a 850px
const sidebarShow = ref(false);
const showSidebar = () => sidebarShow.value = !sidebarShow.value;
const changeShow = computed(() => sidebarShow.value ? 'content-divider__sidebar-container--show' : '');

//Hace scroll cuando carga el componente
onMounted(() => window.scrollTo({ top: 0 }));
</script>

<style lang="scss">
@import '../assets/colors-theme.scss';
@import '@/assets/main-section.scss';

.content-divider {
    padding-top: 4rem;

    &__main {
        min-height: 85vh;
        padding: 0 1rem;
        margin-bottom: 50vh;
    }

    &__panel-hidden {
        display: none;
    }

    &__sidebar-toc {
        max-width: 250px;
    }
}

@media screen and (min-width: 1200px) {
    .content-divider {
        display: grid;
        grid-template-columns: 0.4fr 1fr 0.4fr;
        gap: 1rem;

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

        &__sidebar-links {
            grid-row: 1;
        }
    }
}

@media screen and (max-width: 1199px) {
    .content-divider {
        display: grid;
        grid-template-columns: 0.6fr 1.4fr;

        //Se alínean los elementos para poder aplicar position sticky al sidebar-linsk
        align-items: start;

        &__sidebar-container {
            display: flex;
            flex-direction: column;
            justify-content: start;
            position: sticky;
            top: 120px;
            overflow: auto;
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

            display: block;
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

        &__sidebar-links {
            height: 100%;
        }

        &__sidebar-toc {
            max-height: 100%;
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
</style>