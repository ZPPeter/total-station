<template>
	<div class="menu">
		<div class="main-menu" @click="changeActiveMenu">
			<div class="main-menu-item-warp" v-for="menu of mainMenu">
				<a v-link="mainPathPrefix + menu.name" :index="$index" :name="menu.name" class="main-menu-item">{{ menu.tag }}</a>
			</div>
		</div>
		<router-view class="sub-menu" :active-menu="activeMenu" :main-path-prefix="mainPathPrefix"></router-view>
	</div>
</template>

<script>
import Menu from "../static/data/menu.json";
import example from "../directives/example.vue";

var mainMenu = [],
	subMenu = [],
	activeMenu = {},
	mainPathPrefix = "",
	subPathPrefix = "";

mainMenu = Menu.subMenu;
mainPathPrefix = `/${ Menu.name }/`;

export default {
	data () {
		return {
			mainMenu: mainMenu,
			mainPathPrefix: mainPathPrefix,
			activeMenu: activeMenu
		};
	},
	methods: {
		changeActiveMenu: function (event) {
			var activeMenuIndex = event.target.getAttribute("index");

			if (activeMenuIndex != null) {
				this.activeMenu = this.mainMenu[activeMenuIndex];
			}
		},
	}
}
</script>

<style>
	a:link,
	a:visited,
	a:hover,
	a:active {
		text-decoration: none;
		color: black;
	}

	.menu {
		height: 100%;
	}

	.sub-menu,
	.main-menu {
		width: 50%;
		height: 100%;
		float: left;
		overflow: scroll;
		border-top: 1px solid #707070;
		border-bottom: 1px solid #707070;
	}

	.main-menu {
		background: #DDD;
	}

	.sub-menu {
		background: white;
	}

	.v-link-active {
		background-color: #456;
	}

	.main-menu-item-warp {
		width: 50%;
		height: 20%;
		margin: 0;
		padding: 0;
		display: inline-block;
		border: 0
	}

	.main-menu-item {
		width: 99%;
		height: 100%;
		margin: 0;
		padding: 0;
		display: inline-block;
		border: 1px solid #707070;
		border-top: 0;
		text-align: center;
	}
</style>