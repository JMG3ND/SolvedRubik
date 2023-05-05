<template>
    <section class="main-section">
        <header class="main-section__header">
            <h1 class="main-section__title">OLL</h1>
        </header>
        <article class="main-section__article">

        </article>
    </section>
    <section v-for="element in sectionArray" :id="element.id" class="main-section">
        <header class="main-section__header">
            <h2 class="main-section__title">{{ element.title }}</h2>
        </header>
        <article class="main-section__article">
            <div class="main-section__center-card-container">
                <div class="main-section__card-container">
                    <CardAlgorithm v-for="element in element.data" :image="element.image"
                        :description="element.algorithm" />
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import { useOLLData } from '@/aplicationDatajs/cube3x3Data/OLLData';
import { useTocSidebarStore } from '../../../stores/tocSidebarStore';
import { onMounted } from 'vue';

const { tocSidebarDataFill } = useTocSidebarStore();
const { sectionArray } = useOLLData();

onMounted(() => tocSidebarDataFill(sectionArray));
</script>