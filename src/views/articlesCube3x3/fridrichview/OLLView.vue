<template>
    <section class="main-section">
        <header class="main-section__header">
            <h1 class="main-section__title">OLL</h1>
        </header>
        <article class="main-section__article">

        </article>
    </section>
    <section class="main-section">
        <header class="main-section__header">
            <h2 class="main-section__title">Caso Cruz</h2>
        </header>
        <article class="main-section__article">
            <div class="main-section__center-card-container">
                <div class="main-section__card-container">
                    <CardAlgorithm v-for="element in algorithmData" :image="element.image"
                        :description="element.algorithm" />
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import CardAlgorithm from '@/components/CardAlgorithm.vue';
import { useSectionCrossData } from '@/aplicationDatajs/OLLData/sectionCrossData';

const { algorithmData } = useSectionCrossData();
</script>