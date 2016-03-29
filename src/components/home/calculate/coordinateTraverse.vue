<template>
	<div class="coordinate-traverse">
		<div class="data-list">
			<div class="data-item start-point">
				<label>起始点</label><input type="text" :value="startPoint">
			</div>
			<div class="data-item start-angle">
				<label>起始角</label><input type="text" :value="startAngle"><span>dms</span>
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
				<label>N</label><input type="text" :value="resultN"><span>m</span>
			</div>
			<div class="result-item result-e">
				<label>E</label><input type="text" :value="resultE"><span>m</span>
			</div>
			<div class="result-item result-z">
				<label>Z</label><input type="text" :value="resultZ"><span>m</span>
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
			startAngle: 12.2252,
			turnAngle: 23.5635,
			adjustment: 100,
			height: 200,
			resultN: 2835.568,
			resultE: 4731.765,
			resultZ: 500.000
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

	.coordinate-traverse label {
		
	}

	.coordinate-traverse input {
		width: 30%;
		border: 1px solid #ccc;
	}

	.data-item,
	.result-item {
		margin: 3%;
	}

</style>