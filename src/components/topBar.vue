<template>
	<div class="top-bar clear-fix">
		<div class="left-top-bar">{{ topHeader }}</div>
		<div class="right-top-bar"></div>
	</div>
</template>

<script>
import commonsStyle from "../static/styles/commons.css";

export default {
	data () {
		return {}
	},
	props: ["topHeader"],
}
</script>

<style>
	.top-bar {
		width: 100%;
		height: 100%;
		background: #DDDDDD;
		border-radius: 3px;
	}

	.left-top-bar,
	.right-top-bar {
		width: 49%;
		height: 100%;
		float: left;
		text-align: center;
		display: inline-block;
		border-left: 1px solid #707079;
		border-radius: 3px;
	}
</style>