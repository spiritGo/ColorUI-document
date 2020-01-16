<template>
	<div id="sidebar">
		<el-menu :default-active="activeIndex" router background-color="#324157" text-color="#ffffff">
			<div v-for="item in sideList" :key="item.index">
				<template v-if="item.subList.length > 0">
					<el-submenu :index="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{ item.name }}</span>
						</template>
						<el-menu-item v-for="subItem in item.subList" :key="subItem.index" :index="subItem.index">{{ subItem.name }}</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index">
						<i :class="item.icon"></i>
						<span>{{ item.name }}</span>
					</el-menu-item>
				</template>
			</div>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sideList: [
				{
					name: '元素',
					index: '0',
					icon: 'el-icon-help',
					subList: [
						{ name: '布局', index: '/' },
						{ name: '背景', index: '/background' },
						{ name: '文本', index: '/text' },
						{ name: '图标', index: '/icon' },
						{ name: '按钮', index: '/button' },
						{ name: '标签', index: '/tag' },
						{ name: '头像', index: '/avatar' },
						{ name: '进度条', index: '/progress' },
						{ name: '边框阴影', index: '/shadow' },
						{ name: '加载', index: '/loading' }
					]
				},
				{
					name: '组件',
					index: '1',
					icon: 'el-icon-set-up',
					subList: []
				},
				{
					name: '扩展',
					index: '2',
					icon: 'el-icon-link',
					subList: []
				}
			],
			activeIndex:'/'
		};
	},
	created(){
		this.activeIndex = this.$route.path;
	},
};
</script>

<style scoped>
#sidebar {
	width: 230px;
	height: 100%;
	background-color: #324157;
	font-size: 16px;
	box-sizing: border-box;
	flex-shrink: 0;
	user-select: none;
}
</style>
