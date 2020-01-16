<template>
	<div class="flex wrap">
		<document-content>
			<h2 class="title">Flex布局</h2>
			<p class="desc">在 Flex 容器下使用</p>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">固定尺寸(子容器中使用)</div>
				<p class="py-5">
					<el-tag class="mr-20 select-none">xs(20%)</el-tag>
					<span>basis-xs</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">sm(40%)</el-tag>
					<span>basis-sm</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">sub(50%)</el-tag>
					<span>basis-df</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">lg(60%)</el-tag>
					<span>basis-lg</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">xl(80%)</el-tag>
					<span>basis-xl</span>
				</p>
			</el-card>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">比例布局(子容器中使用)</div>
				<p class="py-5">
					<el-tag class="mr-20 select-none">1</el-tag>
					<span>flex-sub</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">2</el-tag>
					<span>flex-twice</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">3</el-tag>
					<span>flex-treble</span>
				</p>
			</el-card>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">水平对齐(justify, 父容器中使用)</div>
				<p class="py-5">
					<el-tag class="mr-20 select-none">start</el-tag>
					<span>justify-start</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">end</el-tag>
					<span>justify-end</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">center</el-tag>
					<span>justify-center</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">between</el-tag>
					<span>justify-between</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">around</el-tag>
					<span>justify-around</span>
				</p>
			</el-card>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">垂直对齐(align, 父容器中使用)</div>
				<p class="py-5">
					<el-tag class="mr-20 select-none">start</el-tag>
					<span>align-start</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">end</el-tag>
					<span>align-end</span>
				</p>
				<p class="py-5">
					<el-tag class="mr-20 select-none">center</el-tag>
					<span>align-center</span>
				</p>
			</el-card>

			<h2 class="title">Grid布局</h2>
			<p class="desc">在 Flex 容器下使用</p>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">等分列</div>
				<div>
					<el-tag class="mr-20 select-none">等分一</el-tag>
					<span>class="grid col-1"</span>
					<my-code>{{ gridHtml }}</my-code>
				</div>
				<div>
					<el-tag class="mr-20 select-none">等分二</el-tag>
					<span>class="grid col-2"</span>
					<my-code>{{ gridHtml2 }}</my-code>
				</div>
				<div>
					<el-tag class="mr-20 select-none">等分三</el-tag>
					<span>class="grid col-3"</span>
					<my-code>{{ gridHtml3 }}</my-code>
				</div>
				<div>
					<el-tag class="mr-20 select-none">等分四</el-tag>
					<span>class="grid col-4"</span>
					<my-code>{{ gridHtml4 }}</my-code>
				</div>
				<div>
					<el-tag class="mr-20 select-none">等分五</el-tag>
					<span>class="grid col-5"</span>
					<my-code>{{ gridHtml5 }}</my-code>
				</div>
			</el-card>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">等高(n 表示 1,2,3,4,5)</div>
				<my-code>{{ gridHtml6 }}</my-code>
			</el-card>

			<h2 class="title">辅助布局</h2>
			<p class="desc">任意布局下使用</p>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">浮动(cf 清除浮动, fl 左浮动, fr 右浮动)</div>
				<my-code>{{ fHtml7 }}</my-code>
			</el-card>
			<el-card class="padding-sm my-20" body-style="padding: 20px;">
				<div slot="header">内外边距</div>
				<div class="desc">{size} 的尺寸有 xs/sm/df/lg/xl</div>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<template v-slot:nav>
				<span class="cu-item" :class="tabIndex == index ? 'text-blue cur' : ''" v-for="(item, index) in tabNav" :key="index" @click="tabIndex = index">{{ item }}</span>
			</template>

			<!-- flex布局 -->
			<div v-show="tabIndex == 0">
				<div class="bg-white p-10">
					<div class="cuIcon-title text-blue solid-bottom p-10 margin-bottom-xs">固定尺寸</div>
					<div class="flex flex-wrap">
						<div class="basis-xs bg-grey margin-bottom-xs padding-sm radius">xs(20%)</div>
						<div class="basis-df"></div>
						<div class="basis-sm bg-grey margin-bottom-xs padding-sm radius">sm(40%)</div>
						<div class="basis-df"></div>
						<div class="basis-df bg-grey margin-bottom-xs padding-sm radius">sub(50%)</div>
						<div class="basis-df"></div>
						<div class="basis-lg bg-grey margin-bottom-xs padding-sm radius">lg(60%)</div>
						<div class="basis-df"></div>
						<div class="basis-xl bg-grey margin-bottom-xs padding-sm radius">xl(80%)</div>
					</div>
				</div>

				<div class="bg-white p-10 margin-top">
					<div class="cuIcon-title text-blue solid-bottom p-10">比例布局</div>
					<div class="flex">
						<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
						<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
					</div>
					<div class="flex">
						<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
						<div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
					</div>
					<div class="flex">
						<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
						<div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
						<div class="flex-treble bg-grey padding-sm margin-xs radius">3</div>
					</div>
				</div>

				<div class="bg-white p-10 margin-top">
					<div class="cuIcon-title text-blue solid-bottom p-10">水平对齐(justify)</div>
					<div class="flex justify-start">
						<div class="bg-grey padding-sm margin-xs radius">start</div>
						<div class="bg-grey padding-sm margin-xs radius">start</div>
					</div>
					<div class="flex justify-end">
						<div class="bg-grey padding-sm margin-xs radius">end</div>
						<div class="bg-grey padding-sm margin-xs radius">end</div>
					</div>
					<div class="flex justify-center">
						<div class="bg-grey padding-sm margin-xs radius">center</div>
						<div class="bg-grey padding-sm margin-xs radius">center</div>
					</div>
					<div class="flex justify-between">
						<div class="bg-grey padding-sm margin-xs radius">between</div>
						<div class="bg-grey padding-sm margin-xs radius">between</div>
					</div>
					<div class="flex justify-around">
						<div class="bg-grey padding-sm margin-xs radius">around</div>
						<div class="bg-grey padding-sm margin-xs radius">around</div>
					</div>
				</div>

				<div class="bg-white p-10 margin-top">
					<div class="cuIcon-title text-blue solid-bottom p-10">垂直对齐</div>
					<div class="flex align-start">
						<div class="bg-grey padding-lg margin-xs radius">start</div>
						<div class="bg-grey padding-sm margin-xs radius">start</div>
					</div>
					<div class="flex align-end">
						<div class="bg-grey padding-lg margin-xs radius">end</div>
						<div class="bg-grey padding-sm margin-xs radius">end</div>
					</div>
					<div class="flex align-center">
						<div class="bg-grey padding-lg margin-xs radius">center</div>
						<div class="bg-grey padding-sm margin-xs radius">center</div>
					</div>
				</div>
			</div>

			<!-- grid布局 -->
			<div v-show="tabIndex == 1">
				<div class="bg-white p-10">
					<div class="cuIcon-title text-blue solid-bottom p-10 margin-bottom-xs">等分列</div>
					<div class="grid margin-bottom text-center" v-for="(item, index) in 5" :key="index" :class="'col-' + (index + 1)">
						<div class="padding" :class="indexs % 2 == 0 ? 'bg-cyan' : 'bg-blue'" v-for="(item, indexs) in (index + 1) * 2" :key="indexs">{{ indexs + 1 }}</div>
					</div>
				</div>
				<div class="bg-white p-10 margin-top">
					<div class="cuIcon-title text-blue solid-bottom p-10 margin-bottom-xs">登高</div>
					<div class="grid col-4 grid-square">
						<div class="bg-img" v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]"></div>
					</div>
				</div>
			</div>

			<!-- 辅助布局 -->
			<div v-show="tabIndex == 2">
				<div class="bg-white p-10">
					<div class="cuIcon-title text-blue solid-bottom p-10 margin-bottom-xs">浮动</div>
					<div class="cf">
						<div class="bg-grey radius fl padding-sm">ColorUi fl</div>
						<div class="bg-grey radius fr padding-sm">ColorUi fr</div>
					</div>
				</div>

				<div class="bg-white p-10 margin-top">
					<div class="cuIcon-title text-blue solid-bottom p-10 margin-bottom-xs">内外边距</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">外边距</div>
						<div class="basis-df padding-bottom-xs">内边距</div>
						<div class="basis-df">.margin-{size}</div>
						<div class="basis-df">.padding-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">水平方向外边距</div>
						<div class="basis-df padding-bottom-xs">水平方向内边距</div>
						<div class="basis-df">.margin-lr-{size}</div>
						<div class="basis-df">.padding-lr-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">垂直方向外边距</div>
						<div class="basis-df padding-bottom-xs">垂直方向内边距</div>
						<div class="basis-df">.margin-tb-{size}</div>
						<div class="basis-df">.padding-tb-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">上外边距</div>
						<div class="basis-df padding-bottom-xs">上内边距</div>
						<div class="basis-df">.margin-top-{size}</div>
						<div class="basis-df">.padding-top-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">右外边距</div>
						<div class="basis-df padding-bottom-xs">右内边距</div>
						<div class="basis-df">.margin-right-{size}</div>
						<div class="basis-df">.padding-right-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">下外边距</div>
						<div class="basis-df padding-bottom-xs">下内边距</div>
						<div class="basis-df">margin-bottom-{size}</div>
						<div class="basis-df">.padding-bottom-{size}</div>
					</div>
					<div class="flex flex-wrap padding solid-top">
						<div class="basis-df padding-bottom-xs">左外边距</div>
						<div class="basis-df padding-bottom-xs">左内边距</div>
						<div class="basis-df">.margin-left-{size}</div>
						<div class="basis-df">.padding-left-{size}</div>
					</div>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabNav: ['Flex布局', 'Grid布局', '辅助布局'],
			tabIndex: 0,
			gridHtml: `<view class='grid col-1'>
  <view></view>
</view>`,
			gridHtml2: `<view class='grid col-2'>
  <view></view>
</view>`,
			gridHtml3: `<view class='grid col-3'>
  <view></view>
</view>`,
			gridHtml4: `<view class='grid col-4'>
  <view></view>
</view>`,
			gridHtml5: `<view class='grid col-5'>
  <view></view>
</view>`,
			gridHtml6: `<view class='grid col-n grid-square'>,
  <view></view>
</view`,
			fHtml7: `<view class='cf'>,
  <view class='fl bg-grey radius'></view>
  <view class='fr bg-grey radius'></view>
</view>`,
			avatar: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
			]
		};
	}
};
</script>

<style scoped>
div {
	box-sizing: border-box;
}
</style>
