<template>
	<div class="bottom-bar clear-fix" @click="bottomBarButtonClicked">
		<button class="btn" value="confirm" v-if="isConfirm">确认</button>
		<button class="btn" value="cancel" v-if="isCancel">取消</button>
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

function bottomBarButtonClicked(event) {
	var value = event.target.value;

	if (value) {
		value = value === "confirm" ? "ENT" : "ESC";
		this.$dispatch("keyboardclick", {
			keyType: "FUN",
			keyValue: value,
			isReplace: false,
			sourceTarget: "bottom-bar-button"
		});
	}

}

export default {
	data () {
		return {
			localTime: localTime,
		}
	},
	props: ["isConfirm", "isCancel"],
	methods: {
		bottomBarButtonClicked: bottomBarButtonClicked
	}
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