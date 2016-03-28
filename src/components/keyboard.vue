<template>
	<div id='keyboard' @focusin="keepFocusConstant" @click="dealWithClicked">
		<div class='key-row' v-for='row of keys'>
			<button class="key" type="button" v-for='key of row' :key-type="key.slice(0, 3)" :value="key.slice(4)" :style="buttonStyle" track-by='$index'>{{ key.slice(4) }}</button>
		</div>
	</div>
</template>

<script>
var numKeys,
	characterKeys;

//  数字键盘
numKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'],
	['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'],
	['NUM_7', 'NUM_8', 'NUM_9', 'FUN_Tab'],
	['NUM_4', 'NUM_5', 'NUM_6', 'FUN_B.S'],
	['NUM_1', 'NUM_2', 'NUM_3', 'FUN_Shift'],
	['NUM_0', 'CHA_Dot', 'CHA_-', 'CHA_S.P'],
	['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'],
	['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];

//  字母键盘
characterKeys = [['FUN_Alpha', 'FUN_React', 'FUN_Start', 'FUN_Power'],
	['FUN_Func', 'FUN_Ctrl', 'FUN_Alt', 'FUN_Del'],
	['CHA_abc', 'CHA_def', 'CHA_ghi', 'FUN_Tab'],
	['CHA_jkl', 'CHA_mno', 'CHA_pqr', 'FUN_B.S'],
	['CHA_stu', 'CHA_vwx', 'CHA_yz_', 'FUN_Shift'],
	['CHA_#$%', 'CHA_!&@', 'CHA_+*/', 'CHA_S.P'],
	['FUN_NULL', 'FUN_Up', 'FUN_NULL', 'FUN_ESC'],
	['FUN_Left', 'FUN_Down', 'FUN_Right', 'FUN_ENT']];


/**
 * keyborad点击事件处理函数，通过对点击对象的信息的获取与处理，触发自定义事件，向父组件传递信息。
 * @param  {Event} event 事件对象
 * @return {Undefined | false} 返回值为false时、点击事件被组件内部处理，为undefined时、触发自定义事件，向父组件传递信息       
 */
function dealWithClicked (event) {
	var target = event.target,
		//  点击按钮的类型
		keyType = target.getAttribute("key-type"),
		//  点击按钮的值
		keyValue = target.value,
		//  是否取代上一次输出的值
		isReplace = false,
		sourceTarget = "keyboard-component";

	if (keyType == null || keyValue == null) {
		return false;
	}

	//  检查函数是否有lastClick对象，该对象包含上次点击事件发生时的一些信息
	if (dealWithClicked.lastClick == null) {
		dealWithClicked.lastClick = {
			//  上次事件发生的target对象
			target: target,
			//  点击同一按钮的次数
			count: 0,
			//  上次事件发生的事件
			time: Date.now()
		}
	} else {
		//  若点击事件的target对象不变则计算两次点击事件的发生的间隔，小于1000ms 则视为连续点击，点击次数加一
		if (target === dealWithClicked.lastClick.target) {
			//  点击事件的时间间隔
			let timeInterval = Date.now() - dealWithClicked.lastClick.time;

			if (timeInterval <= 1000) {
				dealWithClicked.lastClick.count++;
			} else {
				dealWithClicked.lastClick.count = 0;
			}

			//  更新点击时间发生的时间
			dealWithClicked.lastClick.time = Date.now();
		} else {
			//  两次点击的target对象不同，则更新lastClick对象

			dealWithClicked.lastClick.target = target;
			dealWithClicked.lastClick.count = 0;
			dealWithClicked.lastClick.time = Date.now();
		}
	}

	if (keyType === "FUN") {	
		//  类型为FUN
		
		switch (keyValue) {
			case "Alpha": 
				//  大小写切换，并且立即返回false，不触发自定义事件
				this.isUpper = !this.isUpper;
				return false;
				break;
			case "Shift":
				//  切换字母数字键盘，并且立即返回false，不触发自定义事件
				this.isNumberKey = !this.isNumberKey;
				return false;
				break;
			case "NULL":
				//  空按钮 立即返回false,不处罚自定义事件
				return false;
				break;
			default:
				//  其他FUN类型按钮,向父组件传递按键值
				break;
		}
	} else if (keyType === "CHA") {
		//  类型为CHA

		let charCode = 0;

		switch (keyValue) {
			case "S.P":
				//  键值为S.P 即为空格
				keyValue = " ";
				break;
			default: 
				//  其他按键经过字符按键处理函数处理
				({keyValue, isReplace} = dealWithCharacter(keyValue, dealWithClicked.lastClick.count));
		}

		//  若按键值为 a-zA-Z 则判断大小写并转换
		charCode = keyValue.charCodeAt(0);
		if (charCode >= 65 && charCode < 91 || charCode >= 97 && charCode < 123) {
			keyValue = this.isUpper ? keyValue.toUpperCase() : keyValue.toLowerCase();
		}
	} else if (keyType === "NUM") {
		//  类型为NUM
		//  不做任何处理、直接返回按键类型和按键值
	}

	/** click事件完成，保存事件信息 */
	this.clickInfo = ({keyType, keyValue, isReplace, sourceTarget});
	this.isClickEventComplate = true;

	this.dispatchkeyboardClickEvent();
}

/**
 * 处理按键类型为CHA的按键信息，通过对点击次数的判断，决定字母键盘所要返回具体值且判断是否取代上次的信息
 * @param  {String} keyValue     按键的值
 * @param  {Number} clickedCount 点击次数
 * @return {Object}              此次按键所产生的按键值与是否要取代上次信息
 */
function dealWithCharacter(keyValue, clickedCount) {
	var isReplace = false,
		len = keyValue.length;

	//  按键值长度大于1、判断是否取代上次的信息
	if (len > 1) {
		if (clickedCount > 0) {
			isReplace = true;
		}
		clickedCount = clickedCount % len;
		keyValue = keyValue[clickedCount];
	}

	return ({keyValue, isReplace});
}

/**
 * 当点击键盘时、若页面有其他元素获得交点，则键盘不获得焦点,函数执行完毕、触发自定义事件
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
function keepFocusConstant(event) {
	var relatedTarget = event.relatedTarget,
		target = event.target,
		currentTarget = event.currentTarget;
	
	//  有其他元素获得焦点
	if (relatedTarget) {
		//  上一次获得焦点的元素不为键盘本身或键盘子元素
		if (target !== currentTarget && !isContainsElement(currentTarget, relatedTarget)) {
			//  其他元素继续保持焦点
			event.relatedTarget.focus();
		}
	}

	/** 焦点处理事件完成 */
	this.isFocusEventComplate = true;

	this.dispatchkeyboardClickEvent();
}

/**
 * 判断child元素是否为parent元素的子元素
 * @param  {HTMLElement}  parent 要判断是否包含的父元素
 * @param  {HTMLElement}  child  要判断是否被包含的子元素
 * @return {Boolean}        若包含返回true,不包含返回false
 */
function isContainsElement(parent, child) {
	//  若父元素为document或HTML元素，则一定包含子元素
	if (parent === document.documentElement || parent.nodeName.toUpperCase() === "HTML") {
		return true;
	}

	//  子元素循环向上判断父元素是否等于parent元素
	while (child.parentNode) {
		if (child.parentNode === parent) {
			return true;
		}
		child = child.parentNode;
	}

	return false;
}

/**
 * 判断所有事件是否完成，触发自定义事件，传递信息
 */
function dispatchkeyboardClickEvent() {
	if (this.isClickEventComplate && this.isFocusEventComplate) {
		this.$dispatch("keyboardclick", this.clickInfo);
		this.isClickEventComplate = false;
		this.isFocusEventComplate = false;
	}
		
}

export default {
	data () {
		return {
			//  字母键盘 || 数字键盘
			isNumberKey: true,
			//  是否大小写
			isUpper: false,
			//  点击事件是否处理完成
			isClickEventComplate: false,
			//  点击按钮的信息
			clickInfo: {},
			//  焦点处理事件是否完成
			isFocusEventComplate: false,
			//  键盘布局的行数
			row: 8,
			//  键盘布局的列数
			col: 4
		}
	},
	props: ['warpStyle'],
	computed: {
		buttonStyle: function () {
			var warpStyle = this.warpStyle,
				width = parseInt(warpStyle.width) / this.col,
				height = parseInt(warpStyle.height) /this.row;

			return {
				width: width + "px",
				height: height + "px"
			}
		},
		keys: function () {
			return this.isNumberKey ? numKeys : characterKeys;
		}
	},
	methods: {
		dealWithClicked: dealWithClicked,
		keepFocusConstant: keepFocusConstant,
		dispatchkeyboardClickEvent: dispatchkeyboardClickEvent
	}
};
</script>

<style>
	.key {
		margin: 0;
		padding: 0;
		opacity: 0;
		background: rgba(0, 0, 0, 0);
		border: 0;
	}
</style>