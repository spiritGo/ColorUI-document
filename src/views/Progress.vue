<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">进度条形状</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-progress"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
					<div class="cu-progress radius margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
					<div class="cu-progress round margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
				</div>
				<div class="desc">使用(width 的取值在[0,100%])</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title">进度条尺寸</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-progress"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
					<div class="cu-progress radius margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
					<div class="cu-progress round margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
				</div>
				<div class="desc">使用(width 的取值在[0,100%])</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>

			<h2 class="title">进度条颜色</h2>
			<el-card class="mb-20">
				<div class="flex flex-wrap padding-sm bg-white">
					<div v-for="(item, index) in colorList" :key="index" class="padding-xs" v-if="item.name != 'gray' && item.name != 'white'">
						<div class="cu-tag" :class="'bg-' + item.name">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc">使用(color 是上方颜色名)</div>
				<my-code>{{ html3 }}</my-code>
			</el-card>

			<h2 class="title">进度条条纹</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-progress round sm striped" :class="active ? 'active' : ''"><div class="bg-green" :style="[{ width: loading ? '60%' : '' }]"></div></div>
					<div class="cu-progress round sm margin-top-sm striped" :class="active ? 'active' : ''">
						<div class="bg-black" :style="[{ width: loading ? '40%' : '' }]"></div>
					</div>
				</div>
				<div class="desc">使用(striped 添加条纹背景, active控制是否要条形动画)</div>
				<my-code>{{ html4 }}</my-code>
			</el-card>

			<h2 class="title">进度条比例</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-progress radius striped active">
						<div class="bg-red" :style="[{ width: loading ? '30%' : '' }]">30%</div>
						<div class="bg-olive" :style="[{ width: loading ? '45%' : '' }]">45%</div>
						<div class="bg-cyan" :style="[{ width: loading ? '25%' : '' }]">25%</div>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html5 }}</my-code>
			</el-card>

			<h2 class="title">进度条布局</h2>
			<el-card class="mb-20">
				<div class="padding bg-white ">
					<div class="flex">
						<div class="cu-progress round"><div class="bg-green" :style="[{ width: loading ? '100%' : '' }]"></div></div>
						<span class="cuIcon-roundcheckfill text-green margin-left-sm"></span>
					</div>
					<div class="flex margin-top">
						<div class="cu-progress round"><div class="bg-green" :style="[{ width: loading ? '80%' : '' }]"></div></div>
						<span class="margin-left">80%</span>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html6 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<template v-slot:nav>
				进度条
			</template>
			<div class="bg-white p-10 solid-bottom">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条形状</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-progress"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
				<div class="cu-progress radius margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
				<div class="cu-progress round margin-top"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]">61.8%</div></div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条尺寸</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-progress round"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
				<div class="cu-progress round margin-top sm"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
				<div class="cu-progress round margin-top xs"><div class="bg-red" :style="[{ width: loading ? '61.8%' : '' }]"></div></div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条颜色</span>
			</div>
			<div class="flex flex-wrap padding-sm bg-white">
				<div v-for="(item, index) in colorList" :key="index" class="padding-xs" v-if="item.name != 'gray' && item.name != 'white'">
					<div class="cu-tag" :class="'bg-' + item.name">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条条纹</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-progress round sm striped" :class="active ? 'active' : ''"><div class="bg-green" :style="[{ width: loading ? '60%' : '' }]"></div></div>
				<div class="cu-progress round sm margin-top-sm striped" :class="active ? 'active' : ''">
					<div class="bg-black" :style="[{ width: loading ? '40%' : '' }]"></div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条比例</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-progress radius striped active">
					<div class="bg-red" :style="[{ width: loading ? '30%' : '' }]">30%</div>
					<div class="bg-olive" :style="[{ width: loading ? '45%' : '' }]">45%</div>
					<div class="bg-cyan" :style="[{ width: loading ? '25%' : '' }]">25%</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>进度条布局</span>
			</div>
			<div class="padding bg-white ">
				<div class="flex">
					<div class="cu-progress round"><div class="bg-green" :style="[{ width: loading ? '100%' : '' }]"></div></div>
					<span class="cuIcon-roundcheckfill text-green margin-left-sm"></span>
				</div>
				<div class="flex margin-top">
					<div class="cu-progress round"><div class="bg-green" :style="[{ width: loading ? '80%' : '' }]"></div></div>
					<span class="margin-left">80%</span>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: true,
			active: true,
			html: `<view class="cu-progress">
	<view class="bg-red" style='width: 61.8%'>61.8%</view>
</view>
<view class="cu-progress radius margin-top">
	<view class="bg-red" style='width: 61.8%'>61.8%</view>
</view>
<view class="cu-progress round margin-top">
	<view class="bg-red" style='width: 61.8%'>61.8%</view>
</view>`,
			html2: `<view class="cu-progress">
	<view class="bg-red" style='width: 61.8%'></view>
</view>
<view class="cu-progress radius margin-top">
	<view class="bg-red" style='width: 61.8%'></view>
</view>
<view class="cu-progress round margin-top">
	<view class="bg-red" style='width: 61.8%'></view>
</view>`,
			html3: `<view class="cu-progress round">
	<view :class="'bg-' + color" style='width: 61.8%'"></view>
</view>`,
			html4: `<view class="cu-progress round sm striped active">
	<view class="bg-green" style="width: 60%;"></view>
</view>
<view class="cu-progress round sm margin-top-sm striped active">
	<view class="bg-black" style="width: 40%;"></view>
</view>`,
			html5: `<view class="cu-progress radius striped active">
	<view class="bg-red" style="width: 30%;">30%</view>
	<view class="bg-olive" style="width: 45%;">45%</view>
	<view class="bg-cyan" style="width: 25%;">25%</view>
</view>`,
			html6: `<view class="flex">
	<view class="cu-progress round">
		<view class="bg-green" style="width: 100%;"></view>
	</view>
	<text class="cuIcon-roundcheckfill text-green margin-left-sm"></text>
</view>
<view class="flex margin-top">
	<view class="cu-progress round">
		<view class="bg-green" style="width: 80%;"></view>
	</view>
	<text class="margin-left">80%</text>
</view>`
		};
	}
};
</script>

<style scoped></style>
