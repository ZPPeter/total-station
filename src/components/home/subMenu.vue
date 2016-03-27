<template>
	<div>
		<div class="sub-menu-item-warp" v-for="menu of subMenu">
			<a v-link="subPathPrefix + menu.name" :name="menu.name" :index="$index" class="sub-menu-item">{{ $index }} {{ menu.tag }}</a>
		</div>
		<router-view class="component-content"></router-view>
	<div>
</template>

<script>

export default {
	data () {
		return {		}
	},
	computed: {
		subMenu: function () {
			if (this.activeMenu){
				return this.activeMenu.subMenu;
			} else {
				return [];
			}
		},
		subPathPrefix: function () {
			if (this.mainPathPrefix) {
				return `${ this.mainPathPrefix }${ this.activeMenu.name}/`;
			} else {
				return "";
			}
		}
	},
	props: ["activeMenu", "mainPathPrefix"],
	methods: {

	}
}
</script>

<style>
	.sub-menu-item-warp {
		height: 20%;
		width: 100%;
	}
	
	.sub-menu-item-warp:hover {
		background-color: #B1D6EB;
	}

	.sub-menu-item {
		width: 100%;
		height: 100%;
		display: inline-block;
	}

	.component-content {
		width: 100%;
		height: 100%;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
	}
</style>