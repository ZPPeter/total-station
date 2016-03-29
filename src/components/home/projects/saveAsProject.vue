<template>
	<div class="new-project">
		<form action="#">
			<div class="form-item">
				<label for="projectName" >名称:</label><input id="projectName" v-model="newProject.name" name="projectName" type="text">
			</div>
			<div class="form-item">
				<label for="projectAuthor">作者:</label><input id="projectAuthor" v-model="newProject.author" name="projectAuthor" type="text">
			</div>
			<div class="form-item">
				<label for="projectNote">注释:</label><input id="projectNote" v-model="newProject.note" name="projectNote" type="text">
			</div>
		</form>
	</div>
</template>

<script>

export default {
	data () {
		return {
			projectsStorageKey: "projects",
			newProject: {
				name: "",
				author: "",
				note: ""
			}
		};
	},
	events: {
		entclick: function() {
			if (this.newProject.name === "") {
				return false;
			}

			this.$dispatch("savelocalstorage", {
				name: this.projectsStorageKey,
				data: this.newProject
			});

			alert(`新建项目: ${ this.newProject.name }成功！`);

			this.newProject.name = "";
			this.newProject.author = "";
			this.newProject.note = "";

		}
	}
};
</script>

<style>
	.new-project {
		background-color: white;
	}

	.new-project .form-item {
		margin: 6% 10%;
	}

	.new-project .form-item input{
		padding: .3em;
		border: 1px solid #ccc;
	}

</style>
