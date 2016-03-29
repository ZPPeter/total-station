<template>
	<div class="coordinate-inverse">
		<div class="result-list">
			<div class="result-item HA">
				<label>HA</label><input disabled type="text" :value="HA"><span>dms</span>
			</div>
			<div class="result-item VA">
				<label>VA</label><input disabled type="text" :value="VA"><span>dms</span>
			</div>
			<div class="result-item HD">
				<label>HD</label><input disabled type="text" :value="HD"><span>m</span>
			</div>
			<div class="result-item VD">
				<label>VD</label><input disabled type="text" :value="VD"><span>m</span>
			</div>
			<div class="result-item SD">
				<label>SD</label><input disabled type="text" :value="SD"><span>m</span>
			</div>
		</div>
		<div class="data-list">
			<div class="data-item point">
				<label>点名</label><input disabled type="text" :value="point">
			</div>
			<div class="data-item code">
				<label>编码</label><input disabled type="text" :value="code">
			</div>
			<div class="data-item line">
				<label>连线</label><input disabled type="text" :value="line">
			</div>
			<div class="data-item mirrorHeight">
				<label>镜高</label><input disabled type="text" :value="mirrorHeight"><span>m</span>
			</div>
		</div>
		<button type="button">计算</button> 
	</div>
</template>

<script>

export default {
	data () {
		return {
			HA: 238.3656,
			VA: 14.3914,
			HD: 128.272,
			VD: 33.541,
			SD: 132.584,
			point: "pt1",
			code: "",
			line: "",
			mirrorHeight: 1.75
		};
	}
}
</script>

<style>
	.clearfix {
		overflow: auto;
		*zoom: 1;
	}

	.data-list,
	.result-list {
		width: 50%;
		float: left;
		/*text-align: center;*/
	}

	.coordinate-inverse label {
		
	}

	.coordinate-inverse input {
		width: 30%;
		border: 1px solid #ccc;
	}

	.data-item,
	.result-item {
		margin: 3%;
	}

</style>