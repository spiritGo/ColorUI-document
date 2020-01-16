<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">标签形状</h2>
			<el-card class="mb-20">
				<div class="desc">使用</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title">标签尺寸</h2>
			<el-card class="mb-20">
				<div class="desc">使用</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>

			<h2 class="title">标签颜色</h2>
			<el-card class="mb-20">
				<div class="flex flex-wrap bg-white">
					<div class="padding-xs" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'gray'">
						<div class="cu-tag" :class="'bg-' + item.name">{{ item.name }}</div>
					</div>
					<div class="padding-xs" v-for="(item, index) in colorList" :key="'light' + index" v-if="item.name != 'gray' && item.name != 'black' && item.name != 'white'">
						<div class="cu-tag light" :class="'bg-' + item.name">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用(关键类 .cu-tag)</div>
				<my-code>{{ html3 }}</my-code>
			</el-card>

			<h2 class="title">镂空标签</h2>
			<el-card class="mb-20">
				<div class="padding-sm flex flex-wrap bg-white">
					<div class="padding-xs" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'white'">
						<div class="cu-tag" :class="'line-' + item.name">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用(关键类 .cu-tag, line- + 颜色名)</div>
				<my-code>{{ html4 }}</my-code>
			</el-card>

			<h2 class="title">胶囊样式</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-capsule">
						<div class="cu-tag bg-red"><i class="cuIcon-likefill"></i></div>
						<div class="cu-tag line-red">12</div>
					</div>
					<div class="cu-capsule round">
						<div class="cu-tag bg-blue "><i class="cuIcon-likefill"></i></div>
						<div class="cu-tag line-blue">23</div>
					</div>
					<div class="cu-capsule round">
						<div class="cu-tag bg-blue ">说明</div>
						<div class="cu-tag line-blue">123</div>
					</div>
					<div class="cu-capsule radius">
						<div class="cu-tag bg-grey "><i class="cuIcon-likefill"></i></div>
						<div class="cu-tag line-grey">23</div>
					</div>
					<div class="cu-capsule radius">
						<div class="cu-tag bg-brown sm"><i class="cuIcon-likefill"></i></div>
						<div class="cu-tag line-brown sm">23</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用(关键类 .cu-tag, .cu-capsule)</div>
				<my-code>{{ html5 }}</my-code>
			</el-card>

			<h2 class="title">数字标签</h2>
			<el-card class="mb-20">
				<div class="padding flex align-center bg-white">
					<div class="cu-avatar xl radius mr-20">
						港
						<div class="cu-tag badge">99+</div>
					</div>
					<div class="cu-avatar xl radius mr-20" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
						<div class="cu-tag badge">9</div>
					</div>
					<div class="cu-avatar xl radius mr-20">
						<div class="cu-tag badge">99</div>
						<i class="cuIcon-people"></i>
					</div>
					<div class="cu-avatar xl radius"><div class="cu-tag badge">99+</div></div>
				</div>
				<div class="desc margin-top-sm">使用(关键类 .cu-avatar, badge)</div>
				<my-code>{{ html6 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<div slot="nav">标签</div>
			<div class="bg-white solid-bottom p-10">
				<i class="cuIcon-title text-blue"></i>
				<span>标签形状</span>
			</div>
			<div class="padding bg-white solid-bottom">
				<div class="cu-tag">默认</div>
				<div class="cu-tag round">椭圆</div>
				<div class="cu-tag radius">圆角</div>
			</div>

			<div class="bg-white solid-bottom p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>标签尺寸</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-tag radius sm">小尺寸</div>
				<div class="cu-tag radius">普通尺寸</div>
			</div>

			<div class="bg-white solid-bottom p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>标签颜色</span>
			</div>
			<div class="flex flex-wrap bg-white">
				<div class="padding-xs" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'gray'">
					<div class="cu-tag" :class="'bg-' + item.name">{{ item.title }}</div>
				</div>
				<div class="padding-xs" v-for="(item, index) in colorList" :key="'light' + index" v-if="item.name != 'gray' && item.name != 'black' && item.name != 'white'">
					<div class="cu-tag light" :class="'bg-' + item.name">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white solid-bottom p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>镂空标签</span>
			</div>
			<div class="padding-sm flex flex-wrap bg-white">
				<div class="padding-xs" v-for="(item, index) in colorList" :key="index" v-if="item.name != 'white'">
					<div class="cu-tag" :class="'line-' + item.name">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white solid-bottom p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>胶囊样式</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-capsule">
					<div class="cu-tag bg-red"><i class="cuIcon-likefill"></i></div>
					<div class="cu-tag line-red">12</div>
				</div>
				<div class="cu-capsule round">
					<div class="cu-tag bg-blue "><i class="cuIcon-likefill"></i></div>
					<div class="cu-tag line-blue">23</div>
				</div>
				<div class="cu-capsule round">
					<div class="cu-tag bg-blue ">说明</div>
					<div class="cu-tag line-blue">123</div>
				</div>
				<div class="cu-capsule radius">
					<div class="cu-tag bg-grey "><i class="cuIcon-likefill"></i></div>
					<div class="cu-tag line-grey">23</div>
				</div>
				<div class="cu-capsule radius">
					<div class="cu-tag bg-brown sm"><i class="cuIcon-likefill"></i></div>
					<div class="cu-tag line-brown sm">23</div>
				</div>
			</div>

			<div class="bg-white solid-bottom p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>数字标签</span>
			</div>
			<div class="padding flex justify-between align-center bg-white">
				<div class="cu-avatar xl radius">
					港
					<div class="cu-tag badge">99+</div>
				</div>
				<div class="cu-avatar xl radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
					<div class="cu-tag badge">9</div>
				</div>
				<div class="cu-avatar xl radius">
					<div class="cu-tag badge">99</div>
					<i class="cuIcon-people"></i>
				</div>
				<div class="cu-avatar xl radius"><div class="cu-tag badge">99+</div></div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			html: `<view class="padding bg-white solid-bottom">
	<view class='cu-tag'>默认</view>
	<view class='cu-tag round'>椭圆</view>
	<view class='cu-tag radius'>圆角</view>
</view>`,
			html2: `<view class="padding bg-white">
	<view class='cu-tag radius sm'>小尺寸</view>
	<view class='cu-tag radius'>普通尺寸</view>
</view>`,
			html3: `<view class="cu-tag bg-red light">标签</view>,
<view class="cu-tag bg-red">标签</view>`,
			html4: `<view class="cu-tag" :class="'line-' + name">标签</view>`,
			html5: `<view class="padding">
	<view class="cu-capsule">
		<view class='cu-tag bg-red'>
			<text class='cuIcon-likefill'></text>
		</view>
		<view class="cu-tag line-red">12</view>
	</view>
	<view class="cu-capsule round">
		<view class='cu-tag bg-blue '>
			<text class='cuIcon-likefill'></text>
		</view>
		<view class="cu-tag line-blue">23</view>
	</view>
	<view class="cu-capsule round">
		<view class='cu-tag bg-blue '>
			说明
		</view>
		<view class="cu-tag line-blue">123</view>
	</view>
	<view class="cu-capsule radius">
		<view class='cu-tag bg-grey '>
			<text class='cuIcon-likefill'></text>
		</view>
		<view class="cu-tag line-grey">23</view>
	</view>
	<view class="cu-capsule radius">
		<view class='cu-tag bg-brown sm'>
			<text class='cuIcon-likefill'></text>
		</view>
		<view class="cu-tag line-brown sm">23</view>
	</view>
</view>`,
			html6: `<view class="padding flex justify-between align-center">
	<view class="cu-avatar xl radius">
		港
		<view class="cu-tag badge">99+</view>
	</view>
	<view class="cu-avatar xl radius" 
	style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
		<view class="cu-tag badge">9</view>
	</view>
	<view class="cu-avatar xl radius">
		<view class="cu-tag badge">99</view>
		<text class="cuIcon-people"></text>
	</view>
	<view class="cu-avatar xl radius"><view class="cu-tag badge">99+</view></view>
</view>`
		};
	}
};
</script>

<style scoped></style>
