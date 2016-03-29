<template>
	<!-- App 页面基本框架 -->
	<div class="main" :style="mainStyle">
		<!-- App 左方界面区 start -->
		<div class="left-view" :style="leftViewStyle">
			<router-view></router-view>
		</div>
		<!-- App 左方界面区 end -->
		<!-- App 右方按键区 start -->
		<div class="right-view" :style="rightViewStyle">
			<keyboard :warp-style="rightViewStyle"></keyboard>
		</div>
		<!-- App 右方按键区 end -->
	</div>
</template>

<script>
import keyboard from "./components/keyboard.vue";

var	proportion = {},
	mainStyle = {},
	rightViewStyle = {},
	leftViewStyle = {};

//  页面各个区域所占大小比例
proportion = {
	//  页面基本的长宽比 mainWidth / mainHeight
	baseSize: 1.6,
	//  左方界面区所占大小比例
	leftView: {
		width: 0.5,
		height: 0.61
	},
	//  右方按键区所占大小比例
	rightView: {
		width: 0.26,
		height: 0.75
	}
}

// 计算基本页面大小
mainStyle = ((sizeProportion) => {
	var style = {},
		clientWidth = document.documentElement.clientWidth,
		clientHeight = document.documentElement.clientHeight;
	if (clientWidth / sizeProportion <= clientHeight) {
		style = {
			width: clientWidth + "px",
			height: clientWidth / sizeProportion + "px"
		};
	} else {
		style = {
			width: clientHeight * sizeProportion + "px",
			height: clientHeight + "px"
		};
	}

	return style;

})(proportion.baseSize);	

//  计算左方界面去大小
leftViewStyle = ((mainStyle, {width: widthProportion, height: heightProportion}) => {
	return {
		width: parseInt(mainStyle.width) * widthProportion + "px",
		height: parseInt(mainStyle.height) * heightProportion + "px"
	}
})(mainStyle, proportion.leftView);

// 计算右方键盘区大小
rightViewStyle = ((mainStyle, {width: widthProportion, height: heightProportion}) => {
	return {
		width: parseInt(mainStyle.width) * widthProportion + "px",
		height: parseInt(mainStyle.height) * heightProportion + "px"
	}
})(mainStyle, proportion.rightView);

function keyboardclick({keyType, keyValue, isReplace = false, sourceTarget}) {
	var activeElement = document.activeElement,
		nodeName = activeElement.nodeName.toUpperCase(),
		value = activeElement.value;

	// console.log({keyType, keyValue, isReplace, sourceTarget});

	if (keyType === "CHA" || keyType === "NUM"){
		if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
			if (isReplace) {
				value = value.slice(0, value.length - 1) + keyValue;
			} else {
				value += keyValue;
			}

			activeElement.value = value;
		}
	} else if (keyType === "FUN") {
		switch (keyValue) {
			case "Power":
				if (!this.isPower) {
					location.hash = "/home";
					this.isPower = !this.isPower;
				} else {
					location.hash = "/powerOff";
					this.isPower = !this.isPower;
				}
				break;

			case "Del":
				if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
					activeElement.value = "";
				}
				break;

			case "Tab":
				break;

			case "B.S":
				if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
					activeElement.value = value.slice(0, value.length - 1);
				}
				break;
			case "ESC":
				let hash = location.hash.split("/");
				if (hash.length > 2) {
					hash.pop();
				}
				window.location.hash = hash.join("/");
				break;

			case "ENT":
				this.$broadcast("entclick");
				break;

			default:
				break;

		}
	} 
}

function savelocalstorage({name, data}) {
	console.log({name, data});

	// localStorage.removeItem(name);

	var storageData = JSON.parse(localStorage.getItem(name));

	if (storageData == null) {
		storageData = [];
	}

	storageData.push(data);

	localStorage.setItem(name, JSON.stringify(storageData));
}

export default {
	data () {
		return {
			mainStyle: mainStyle,
			leftViewStyle: leftViewStyle,
			rightViewStyle: rightViewStyle,
			isPower: false
		};
	},
	components: {
		keyboard: keyboard
	},
	events: {
		keyboardclick: keyboardclick,
		savelocalstorage: savelocalstorage
	}
}
</script>

<style>
	.main {
		margin: 0 auto;
		padding: 0;
		background: rgba(0, 0, 0, 0) url(./static/images/background.png) no-repeat center;
		background-size: 100%;
		position: relative;
	}

	.left-view {
		position: absolute;
		top: 20%;
		left: 10%;
		border-radius: 1%;
	}

	.right-view {
		position: absolute;
		top: 14%;
		right: 9%;
	}
</style>