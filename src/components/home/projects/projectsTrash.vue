<template>
	<div class="projects-trash">
		<div class="project-header clearfix">
			<label class="project-name">项目名称</label>
			<label class="project-author">项目作者</label>
			<label class="project-note">项目注释</label>
		</div>
		<div class="project-list" @focusin="changeActiveItem">
			<a href="javascript:;" class="project-item clearfix" v-for="project of projects" :item-index="$index">
				<div class="project-name">{{ project.name }}</div>
				<div class="project-author">{{ project.author }}</div>
				<div class="project-note">{{ project.note }}</div>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			projectsStorageKey: "projects",
			trashStorageKey: "projectsTrash",
			activeItemIndex: -1,
			projects: []
		};
	},
	ready () {
		var data = JSON.parse(localStorage.getItem(this.trashStorageKey));

		if (data == null || data.length < 0) {
			return false;
		}

		this.projects = data;

	},
	methods: {
		changeActiveItem: function (event) {
			var target = event.target,
				index = target.getAttribute("item-index");

			this.activeItemIndex = index;
		}
	},
	events: {
		entclick: function () {
			var restoreItem = [],
				restoreItemName = [],
				projectsData = [];

			if (this.activeItemIndex < 0) {
				return false;
			}

			restoreItem = this.projects.splice(this.activeItemIndex, 1);

			localStorage.setItem(this.trashStorageKey, JSON.stringify(this.projects));

			projectsData = localStorage.getItem(this.projectsStorageKey);

			if (projectsData == null) {
				projectsData = [];
			}

			projectsData.concat(restoreItem);

			localStorage.setItem(this.projectsStorageKey, projectsData);

			for (let i = 0, len = restoreItem.length; i < len; i++) {
				restoreItemName.push(restoreItem[i].name);
			}

			alert(`项目: ${ restoreItemName.join(",") }已还原!`);
		}
	}
};
</script>

<style>
	.clearfix {
		overflow: auto;
		*zoom: 1;
	}

	.projects-trash {
		background-color: white;
	}

	.project-header {
		border: 1px solid #ccc;
	}

	.project-item {
		display: block;
		border: 1px solid #ccc;
	}

	.project-item:focus {
		border: 1px solid #00B9F7;
	}

	.project-name,
	.project-author,
	.project-note {
		display: inline-block;
		float: left;
		text-align: center;
	}

	.project-name {
		width: 30%;
	}

	.project-author {
		width: 30%;
	}

	.project-note {
		width: 40%;
	}

</style>
