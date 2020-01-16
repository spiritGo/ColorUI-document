<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">边框</h2>
			<el-card class="mb-20">
				<div class="padding bg-white text-center">
					<div class="padding solids">四周</div>
					<div class="padding margin-top solids-top">上</div>
					<div class="padding margin-top solids-right">右</div>
					<div class="padding margin-top solids-bottom">下</div>
					<div class="padding margin-top solids-left">左</div>
				</div>
				<div class="desc">使用</div>
				<div class="desc">ColorUI 使用 solids 或 solids- + [top,right,bottom,left] 来添加边框</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title">阴影</h2>
			<el-card class="mb-20">
				<div class="padding text-center">
					<div class="padding-xl radius shadow bg-white">默认阴影</div>
					<div class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</div>
					<div class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</div>
					<div class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</div>
					<div class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</div>
					<div
						class="padding-xl radius shadow-blur bg-red margin-top bg-img"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);"
					>
						<div>根据背景图而改变的阴影</div>
					</div>
				</div>
				<div class="desc">使用</div>
				<div class="desc">ColorUI 使用 shadow 和 shadow-blur 来给标签添加阴影</div>
				<div class="desc">ColorUI 使用 shadow-lg 配合 shadow 来加长阴影</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<template v-slot:nav>
				边框阴影
			</template>
			<div class="bg-white p-10">
				<i class="cuIcon-title text-blue"></i>
				<span>边框</span>
			</div>
			<div class="padding bg-white text-center">
				<div class="padding solids">四周</div>
				<div class="padding margin-top solids-top">上</div>
				<div class="padding margin-top solids-right">右</div>
				<div class="padding margin-top solids-bottom">下</div>
				<div class="padding margin-top solids-left">左</div>
			</div>

			<div class="bg-white p-10">
				<i class="cuIcon-title text-blue"></i>
				<span>阴影</span>
			</div>
			<div class="padding text-center">
				<div class="padding-xl radius shadow bg-white">默认阴影</div>
				<div class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</div>
				<div class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</div>
				<div class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</div>
				<div class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</div>
				<div class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<div>根据背景图而改变的阴影</div>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			html: `<view class="padding solids">四周</view>
<view class="padding margin-top solids-top">上</view>
<view class="padding margin-top solids-right">右</view>
<view class="padding margin-top solids-bottom">下</view>
<view class="padding margin-top solids-left">左</view>`,
			html2: `<view class="padding-xl radius shadow bg-white">默认阴影</view>
<view class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</view>
<view class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</view>
<view class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</view>
<view class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</view>
<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
	<view>根据背景图而改变的阴影</view>
</view>`
		};
	}
};
</script>

<style scoped></style>
