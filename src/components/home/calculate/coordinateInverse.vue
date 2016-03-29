<template>
	<div class="coordinate-inverse">
		<div class="data-list">
			<div class="data-item start-point">
				<label>起始点</label><input type="text" :value="startPoint">
			</div>
			<div class="data-item end-point">
				<label>结束点</label><input type="text" :value="endPoint">
			</div>
			<div class="data-item turn-angle">
				<label>转角</label><input type="text" :value="turnAngle"><span>dms</span>
			</div>
			<div class="data-item adjustment">
				<label>平差</label><input type="text" :value="adjustment"><span>m</span>
			</div>
			<div class="data-item height">
				<label>高差</label><input type="text" :value="height"><span>m</span>
			</div>
		</div>
		<div class="result-list">
			<p>计算结果</p>
			<div class="result-item result-n">
				<label>坡度</label><input type="text" :value="slope"><span>dms</span>
			</div>
			<div class="result-item result-e">
				<label>角度</label><input type="text" :value="angle"><span>dms</span>
			</div>
			<button type="button">计算</button> 
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			startPoint: 3,
			endPoint: 2,
			turnAngle: 23.5635,
			adjustment: 100,
			height: 200,
			slope: 2835.568,
			angle: 4731.765
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