<template>
	<div class="top-bar clear-fix">
		<div class="left-top-bar">{{ topHeader }}</div>
		<div class="right-top-bar">
			<a v-link="'/home/navigation/locate'" class="navigation">
				<div>
				</div>
			</a>
		</div>
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

	.navigation {
		width: 15px;
		height: 15px;
		border: 1px solid #646464;
		border-radius: 100%;
		display: inline-block;
		position: absolute;
		top: 3%;
		right: 5%;
		padding: 0;
	}

	.navigation div {
		width: 10px;
		height: 10px;
		background: #646464;
		border-radius: 100%;
		display: inline-block;
		position: absolute;
		left: 2px;
		top: 2px;

	}
</style>