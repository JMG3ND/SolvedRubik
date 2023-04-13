<script setup>
import { ref } from 'vue';
import SubMenuItem from '@/components/SubMenuItem.vue'

//El siguiente código activa y desactiva el menú hamburguesa
let contentItemActive = false;
const contentItemActiveClass = ref('');
const activeItem = () => {
	contentItemActive = !contentItemActive
	contentItemActiveClass.value = contentItemActive ? "main-menu__content-item--active" : "";
}

const subMenuDataCubos = [
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
	}
]
</script>

<template>
	<!--Block-->
	<nav class="main-menu">
		<ul class="main-menu__list">
			<li class="main-menu__content-item main-menu__content-item--hamburguer" :class="contentItemActiveClass">
				<div class="main-menu__content-item-head">
					<a class="main-menu__item" href="#">
						<span class="main-menu__text">CUBOS</span>
					</a>
					<button @click="activeItem" class="main-menu__button"><font-awesome-icon icon="fa-solid fa-caret-down" /></button>
				</div>
				<div class="main-menu__sub-menu-container">
					<ul class="sub-menu">
						<!--Block-->
						<SubMenuItem v-for="element in subMenuDataCubos" 
						:title="element.title" 
						:description="element.description" 
						:color="element.color"/>
					</ul>
				</div>
			</li>
			<li class="main-menu__content-item-head"><a class="main-menu__item" href="#">TIENDA</a></li>
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

		&__content-item:hover &__sub-menu-container {
			display: flex;
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

		&__content-item--active &__content-item-head {
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

		&__content-item--active &__button {
			transform: rotate(0deg);
		}

		&__sub-menu-container {
			position: unset;
			display: flex;
			width: 100%;
			height: 1px;
			overflow: hidden;
		}

		&__content-item--active &__sub-menu-container {
			height: auto;
		}
	}
}
</style>