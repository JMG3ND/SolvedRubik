<script setup>
import MainMenuItem from './MainMenuItem.vue';

const mainMenuData = [
	{
		title: 'ALGORITMOS',
		subMenu: [
			{
				title: 'CUBO 2 X 2',
				description: 'Algoritmos del cubo dos por dos',
				color: 'red'
			},
			{
				title: 'CUBO 3 X 3',
				description: 'Algoritmos del cubo tres por tres',
				color: 'green'
			},
			{
				title: 'CUBO 4 X 4',
				description: 'Algoritmos del cubo cuatro por cuatro',
				color: 'orange'
			},
			{
				title: 'CUBO 5 X 5',
				description: 'Algoritmos del cubo cinco por cinco',
				color: 'blue'
			},
		]
	},
	{
		title: 'TIENDA',
		subMenu: null,
	}
]
</script>

<template>
	<!--Block-->
	<nav class="main-menu">
		<ul class="main-menu__list">
			<li v-for="element in mainMenuData" class="main-menu__content-item">
				<!--Block-->
				<MainMenuItem :title="element.title" :subMenu="element.subMenu" />
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
@import '@/assets/_colors-theme.scss';

@media screen and (min-width: 851px) {
	.main-menu {
		display: flex;
		gap: 1rem;

		&__list {
			display: flex;
			text-decoration: none;
			list-style-type: none;
		}
	}
}

@media screen and (max-width: 850px) {
	.main-menu {
		gap: 1rem;

		&__list {
			text-decoration: none;
			list-style-type: none;
		}
	}
}
</style>