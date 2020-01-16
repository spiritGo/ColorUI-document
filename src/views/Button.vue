<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title py-5">按钮形状</h2>
			<el-card class="margin-bottom">
				<div class="padding flex flex-wrap align-center bg-white">
					<div class="cu-btn mr-20">默认</div>
					<div class="cu-btn round mr-20">圆角</div>
					<div class="cu-btn cuIcon"><i class="cuIcon-emojifill"></i></div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title py-5">按钮尺寸</h2>
			<el-card class="margin-bottom">
				<div class="padding flex flex-wrap align-center bg-white">
					<div class="cu-btn round sm mr-20">小尺寸</div>
					<div class="cu-btn round mr-20">默认</div>
					<div class="cu-btn round lg">大尺寸</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>

			<h2 class="title py-5">按钮颜色</h2>
			<el-card class="margin-bottom">
				<div class="grid col-5 padding-sm bg-white">
					<div class="margin-tb-sm text-center" v-for="(item, index) in colorList" :key="index">
						<div class="btn round" :class="['bg-' + item.name, 'shadow']">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc">使用(name 是各个按钮的颜色, shadow 决定有没有阴影)</div>
				<my-code>{{ html3 }}</my-code>
			</el-card>

			<h2 class="title py-5">镂空按钮</h2>
			<el-card class="margin-bottom">
				<div class="grid col-5 padding-sm bg-white">
					<div class="margin-tb-sm text-center" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'white'">
						<div class="cu-btn btn round" :class="['line-' + item.name, 'shadow']">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc">使用(name 是各个按钮的颜色, shadow 决定有没有阴影, line- 表示细线框, lines- 表示粗线框)</div>
				<div class="flex margin-tb-sm">
					<div class="cu-btn line-red mr-20">line-red</div>
					<div class="cu-btn lines-red">lines-red</div>
				</div>
				<my-code>{{ html4 }}</my-code>
			</el-card>

			<h2 class="title py-5">块状按钮</h2>
			<el-card class="margin-bottom">
				<div class="padding flex flex-direction bg-white">
					<div class="cu-btn bg-grey lg">玄灰</div>
					<div class="cu-btn bg-red margin-tb-sm lg">嫣红</div>
				</div>
				<div class="desc">使用(块状按钮样式: flex + flex-direction > cu-btn)</div>
				<my-code>{{ html5 }}</my-code>
			</el-card>

			<h2 class="title py-5">无效状态</h2>
			<el-card class="margin-bottom" body-style="background: #cccccc">
				<div class="padding">
					<div class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</div>
					<div class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</div>
				</div>
				<div class="desc">使用(在元素中使用 disabled)</div>
				<my-code>{{ html6 }}</my-code>
			</el-card>

			<h2 class="title py-5">按钮图标</h2>
			<el-card class="margin-bottom">
				<div class="padding-xl bg-white">
					<div class="cu-btn block line-orange lg">
						<i class="cuIcon-upload"></i>
						<span>图标</span>
					</div>
					<div class="cu-btn block bg-blue margin-tb-sm lg">
						<i class="cuIcon-loading2 cuIconfont-spin"></i>
						<span>加载</span>
					</div>
					<div class="cu-btn block bg-black margin-tb-sm lg">
						<i class="el-icon-loading"></i>
						<span>原生加载</span>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html7 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<div slot="nav">按钮</div>
			<div class="bg-white p-10 solid-bottom">
				<i class="cuIcon-title text-blue"></i>
				<span>按钮形状</span>
			</div>
			<div class="padding flex flex-wrap justify-between align-center bg-white">
				<div class="cu-btn">默认</div>
				<div class="cu-btn round">圆角</div>
				<div class="cu-btn cuIcon"><i class="cuIcon-emojifill"></i></div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>按钮尺寸</span>
			</div>
			<div class="padding flex flex-wrap justify-between align-center bg-white">
				<div class="cu-btn round sm">小尺寸</div>
				<div class="cu-btn round">默认</div>
				<div class="cu-btn round lg">大尺寸</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>按钮颜色</span>
			</div>
			<div class="grid col-5 padding-sm bg-white">
				<div class="margin-tb-sm text-center" v-for="(item, index) in colorList" :key="index">
					<div class="cu-btn round" :class="['bg-' + item.name, 'shadow']">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>镂空按钮</span>
			</div>
			<div class="grid col-5 padding-sm bg-white">
				<div class="margin-tb-sm text-center" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'white'">
					<div class="cu-btn round" :class="['line-' + item.name, 'shadow']">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>块状按钮</span>
			</div>
			<div class="padding flex flex-direction bg-white">
				<div class="cu-btn bg-grey lg">玄灰</div>
				<div class="cu-btn bg-red margin-tb-sm lg">嫣红</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>无效按钮</span>
			</div>
			<div class="padding">
				<div class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</div>
				<div class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>按钮加图标</span>
			</div>
			<div class="padding-xl bg-white">
				<div class="cu-btn block line-orange lg">
					<i class="cuIcon-upload"></i>
					<span>图标</span>
				</div>
				<div class="cu-btn block bg-blue margin-tb-sm lg">
					<i class="cuIcon-loading2 cuIconfont-spin"></i>
					<span>加载</span>
				</div>
				<div class="cu-btn block bg-black margin-tb-sm lg">
					<i class="el-icon-loading"></i>
					<span>原生加载</span>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			html: `<view class="padding flex flex-wrap justify-between align-center bg-white">
	<button class="cu-btn">默认</button>
	<button class="cu-btn round">圆角</button>
	<button class="cu-btn cuIcon">
		<text class="cuIcon-emojifill"></text>
	</button>
</view>`,
			html2: `<view class="padding flex flex-wrap justify-between align-center bg-white">
	<button class="cu-btn round sm">小尺寸</button>
	<button class="cu-btn round">默认</button>
	<button class="cu-btn round lg">大尺寸</button>
</view>`,
			html3: `<button class="cu-btn round" :class="['bg-' + name, 'shadow']">按钮</button>`,
			html4: `<button class="cu-btn btn round" :class="['line-' + item.name, 'shadow']">按钮</button>`,
			html5: `<view class="padding flex flex-direction">
	<button class="cu-btn bg-grey lg">玄灰</button>
	<button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
</view>`,
			html6: `<view class="padding">
	<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
	<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
</view>`,
			html7: `<view class="padding-xl">
	<button class="cu-btn block line-orange lg">
		<text class="cuIcon-upload"></text> 图标
	</button>
	<button class="cu-btn block bg-blue margin-tb-sm lg">
		<text class="cuIcon-loading2 cuIconfont-spin"></text> 加载
	</button>
	<button class="cu-btn block bg-black margin-tb-sm lg" loading> 原生加载</button>
</view>`
		};
	}
};
</script>

<style scoped>
.btn {
	width: 80px;
	height: 36px;
	line-height: 36px;
}
</style>
