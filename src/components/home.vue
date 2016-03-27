<template>
	<!-- 应用主页模板 -->
	<div class="home">
		<!-- 应用页眉 start -->
		<div class="header">
			<top-bar :top-header="topHeader"></top-bar>
		</div>
		<!-- 应用页眉 end -->
		<!-- 应用内容 start -->
		<div class="content">
			<main-menu></main-menu>
		</div>
		<!-- 应用内容 end -->
		<!-- 应用页脚 start -->
		<div class="footer">
			<bottom-bar :is-confirm="isConfirm" :is-cancel="isCancel"></bottom-bar>
		</div>
		<!-- 应用页脚 end -->
	</div>
</template>

<script>
import TopBar from "./topBar.vue";
import MainMenu from "./mainMenu.vue";
import BottomBar from "./bottomBar.vue";

export default {
	data () {
		return {
			topHeader: "Hack",
			isConfirm: true,
			isCancel: true
		};
	},
	components: {
		topBar: TopBar,
		mainMenu: MainMenu,
		bottomBar: BottomBar
	}
}
</script>

<style>
	.home {
		height: 100%;
	}

	.header {
		height: 13%;
		background: yellow;
	}

	.content {
		height: 74%;
		background: blue;
		position: relative;
	}

	
	.footer {
		height: 13%;
		background: green;
	}
</style>