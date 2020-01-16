<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">背景</h2>
			<el-card class="mb-20">
				<div class="bg-white">
					<div class="cu-load bg-blue loading"></div>
					<div class="cu-load bg-blue over margin-top-sm"></div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<div class="desc">背景和 ColorUI 提供的背景一致</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title">加载状态</h2>
			<el-card class="mb-20">
				<div class="bg-white py-5">
					<div class="cu-load bg-gray loading"></div>
					<div class="cu-load bg-gray over margin-top-sm"></div>
				</div>
				<div class="desc">使用</div>
				<div class="desc">状态由 loading(加载中) 类和 over(加载完毕) 类控制</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>

			<h2 class="title">加载错误</h2>
			<el-card class="mb-20">
				<div class="cu-load bg-red erro"></div>
				<div class="desc margin-top-sm">使用</div>
				<div class="desc">ColorUI 加载失败由 erro 类来控制</div>
				<my-code>{{ html3 }}</my-code>
			</el-card>

			<h2 class="title">弹框加载</h2>
			<el-card class="mb-20">
				<div class="desc">使用</div>
				<div class="desc"></div>
				<my-code>{{ html4 }}</my-code>
			</el-card>

			<h2 class="title">进度条加载</h2>
			<el-card class="mb-20">
				<div class="desc">使用</div>
				<div class="desc">CustomBar 是手机状态栏高度 uniapp 封装使用</div>
				<my-code>{{ html5 }}</my-code>
				
				<div class="desc">CustomBar</div>
				<my-code type='javascript'>{{ html6 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone style="position: relative;">
			<template v-slot:nav>
				加载
			</template>
			<div class="bg-white p-10">
				<i class="cuIcon-title text-blue"></i>
				<span>背景</span>
			</div>
			<div class="bg-white">
				<div class="cu-load bg-blue loading"></div>
				<div class="cu-load bg-blue over margin-top-sm"></div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>加载状态</span>
			</div>
			<div class="bg-white py-5">
				<div class="cu-load bg-gray loading"></div>
				<div class="cu-load bg-gray over margin-top-sm"></div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>加载错误</span>
			</div>
			<div class="cu-load bg-red erro"></div>

			<div class="bg-white p-10 margin-top flex justify-between align-center">
				<div>
					<i class="cuIcon-title text-blue"></i>
					<span>弹框加载</span>
				</div>
				<div class="action" @click="handleLoading"><span class="cu-btn bg-green shadow">点我</span></div>
			</div>
			<div class="cu-load load-modal" v-if="loadModal">
				<img src="../assets/imgs/logo.png" width="50px" />
				<div class="gray-text">加载中...</div>
			</div>

			<div class="bg-white p-10 margin-top flex justify-between align-center">
				<div>
					<i class="cuIcon-title text-blue"></i>
					<span>进度条加载</span>
				</div>
				<div class="action"><span class="cu-btn bg-green shadow" @click="LoadProgress">点我</span></div>
			</div>
			<div class="load-progress" :class="loadProgress != 0 ? 'show' : 'hide'" style="top: 0;">
				<div class="load-progress-bar bg-green" :style="[{ transform: 'translate3d(-' + (100 - loadProgress) + '%, 0px, 0px)' }]"></div>
				<div class="load-progress-spinner text-green"></div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loadModal: false,
			loadProgress: 0,
			html: `<view class="cu-load bg-blue loading"></view>
<view class="cu-load bg-blue over margin-top-sm"></view>`,
			html2: `<view class="cu-load bg-gray loading"></view>
<view class="cu-load bg-gray over margin-top-sm"></view>`,
			html3: `<view class="cu-load bg-red erro"></view>`,
			html4: `<view class="cu-load load-modal" v-if="loadModal">
	<image src="/static/logo.png" mode="aspectFit"></image>
	<view class="gray-text">加载中...</view>
</view>`,
			html5: `<view class="load-progress" :class="loadProgress!=0?'show':'hide'" :style="[{top:CustomBar+'px'}]">
	<view class="load-progress-bar bg-green" :style="[{transform: 'translate3d(-' + (100-loadProgress) + '%, 0px, 0px)'}]"></view>
	<view class="load-progress-spinner text-green"></view>
</view>`,
			html6: `uni.getSystemInfo({
	success: function(e) {
		// #ifndef MP
		Vue.prototype.StatusBar = e.statusBarHeight;
		if (e.platform == 'android') {
			Vue.prototype.CustomBar = e.statusBarHeight + 50;
		} else {
			Vue.prototype.CustomBar = e.statusBarHeight + 45;
		};
		// #endif

		// #ifdef MP-WEIXIN
		Vue.prototype.StatusBar = e.statusBarHeight;
		let custom = wx.getMenuButtonBoundingClientRect();
		Vue.prototype.Custom = custom;
		Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
		// #endif		

		// #ifdef MP-ALIPAY
		Vue.prototype.StatusBar = e.statusBarHeight;
		Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
		// #endif
	}
})`
		};
	},
	methods: {
		handleLoading() {
			this.loadModal = true;
			setTimeout(() => {
				this.loadModal = false;
			}, 3000);
		},
		LoadProgress(e) {
			this.loadProgress = this.loadProgress + 3;
			if (this.loadProgress < 100) {
				setTimeout(() => {
					this.LoadProgress();
				}, 100);
			} else {
				this.loadProgress = 0;
			}
		}
	}
};
</script>

<style scoped>
.load-modal {
	position: absolute;
}
</style>
