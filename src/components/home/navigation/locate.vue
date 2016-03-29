<template>
	<div class="locate">
		<div class="locate-error" v-if="!isGeolocation">
			您的设备不支持导航、或未授权导航<br>
			Code: {{ errorCode }}<br>
			Message: {{ errorMessage }}
		</div>
		<div v-else class="position">
			<div class="locating" v-if="isLocating">
				<p>定位中……</p>
			</div>
			<div v-else class="located">
				<div class="position-list">
					<label>Latitude: </label><span>{{ latitude }}</span>
				</div>
				<div class="position-list">
					<label>Longitude: </label><span>{{ longitude }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			geolocationConf: {
				enableHighAccuracy: false,
				maximumAge: 30000,
				timeout: 300000
			},
			isGeolocation: true,
			isLocating: true,
			latitude: 0,
			longitude: 0,
			timestamp: 0,
			errorCode: "",
			errorMessage: ""
		};
	},
	ready () {
		if (navigator.geolocation) {
			this.isGeolocation = true;
			navigator.geolocation.getCurrentPosition(this.getPositionSuccess, this.getPositionError, this.geolocationConf);

		} else {
			this.isGeolocation = false;
		}
	},
	methods: {
		getPositionSuccess: function(position) {
			this.latitude = position.coords.latitude;
			this.longitude = position.coords.longitude;
			this.isLocating = false;
		},
		getPositionError: function(error) {
			this.isGeolocation = false;
			this.errorCode = error.code;
			this.errorMessage = error.message;
		}
	}
}


</script>

<style>
	.locate {
		background: white;
		height: 100%;
		text-align: center;
	}

	.locate-error {
		margin: 20% auto;
	}

	.position {
		margin: 20% auto;
	}
</style>