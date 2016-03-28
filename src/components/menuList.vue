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

var homeRouter = {},
	mainMenu = [],
	subMenu = [],
	activeMenu = {},
	mainPathPrefix = "",
	subPathPrefix = "";

/**
 * 在一个包含对象的数组中依据对象某个属性来寻找对象，返回第一个匹配的对象
 * @param  {Array} arr 要寻找对象的数组
 * @param  {String} pro 属性名
 * @param  {Any} val 属性值
 * @return {Object|Null}     寻找到的第一个匹配的对象
 */
function findObjectByProperty (arr, pro, val) {
	var obj = {};

	if (!(arr instanceof Array)) {
		return null;
	} 

	for (let i = 0, len = arr.length; i < len; i++) {
		obj = arr[i];

		if (obj == null || !(obj instanceof Object)) {
			continue;
		}

		if (obj[pro] === val) {
			return obj;
		}
	}

	return null;
}

homeRouter = findObjectByProperty(Menu, "name", "home");
mainMenu = homeRouter.subMenu;
mainPathPrefix = `/${ homeRouter.name }/`;

export default {
	data () {
		return {
			mainMenu: mainMenu,
			mainPathPrefix: mainPathPrefix,
			activeMenu: activeMenu
		};
	},
	ready () {
		var href = location.href.split("/"),
			currentPosition = href.pop();

		this.activeMenu = findObjectByProperty(mainMenu, "name", currentPosition);
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