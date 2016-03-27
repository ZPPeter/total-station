<template>
	<div class="bottom-bar clear-fix">
		<button class="btn" v-if="isConfirm">确认</button>
		<button class="btn" v-if="isCancel">取消</button>
		<time class="bottom-bar-time">{{ localTime }}</time>
	</div>
</template>

<script>
import commonsStyle from "../static/styles/commons.css";

var localTime;

localTime = (() => {
	var time = new Date();
	return time.getHours() + ":" + time.getMinutes();
})();

export default {
	data () {
		return {
			localTime: localTime,
		}
	},
	props: ["isConfirm", "isCancel"],
}
</script>

<style>
	.bottom-bar {
		width: 100%;
		height: 100%;
		background: #DDDDDD;
		border-radius: 3px;
	}

	.btn {

	}

	.bottom-bar-time {
		margin: 0 1em;
		float: right;
	}
</style>