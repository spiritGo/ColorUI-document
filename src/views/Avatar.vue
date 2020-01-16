<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">头像形状</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></div>
					<div class="cu-avatar radius margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html }}</my-code>
			</el-card>

			<h2 class="title">头像尺寸</h2>
			<el-card class="mb-20">
				<div class="bg-white">
					<div class="padding">
						<div class="cu-avatar sm round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></div>
						<div class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></div>
						<div class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></div>
						<div class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></div>
					</div>
					<div class="padding">
						<div class="cu-avatar sm round margin-left bg-red">A</div>
						<div class="cu-avatar round margin-left bg-red">B</div>
						<div class="cu-avatar lg round margin-left bg-red">C</div>
						<div class="cu-avatar xl round margin-left bg-red">D</div>
					</div>
					<div class="padding">
						<div class="cu-avatar sm round margin-left bg-red">蔚</div>
						<div class="cu-avatar round margin-left bg-red">蓝</div>
						<div class="cu-avatar lg round margin-left bg-red"><span>wl</span></div>
						<div class="cu-avatar xl round margin-left bg-red"><span class="avatar-text">网络</span></div>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html2 }}</my-code>
			</el-card>

			<h2 class="title">内嵌文字(图标)</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-avatar radius"><span class="cuIcon-people"></span></div>
					<div class="cu-avatar radius margin-left"><span>港</span></div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html3 }}</my-code>
			</el-card>

			<h2 class="title">头像颜色</h2>
			<el-card class="mb-20">
				<div class="padding-sm bg-white">
					<div class="cu-avatar round lg margin-xs" :class="'bg-' + item.name" v-for="(item, index) in colorList" :key="index">
						<span class="avatar-text">{{ item.name }}</span>
					</div>
				</div>
				<div class="desc">使用(name 是上方颜色名)</div>
				<my-code>{{ html4 }}</my-code>
			</el-card>

			<h2 class="title">头像组</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-avatar-group">
						<div class="cu-avatar round lg" v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]"></div>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html5 }}</my-code>
			</el-card>

			<h2 class="title">头像标签</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="cu-avatar round lg margin-left" v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]">
						<div class="cu-tag badge" :class="index % 2 == 0 ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></div>
					</div>
				</div>
				<div class="desc">使用</div>
				<my-code>{{ html6 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<template v-slot:nav>
				头像
			</template>
			<div class="bg-white p-10 solid-bottom">
				<i class="cuIcon-title text-blue"></i>
				<span>头像形状</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></div>
				<div class="cu-avatar radius margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>头像尺寸</span>
			</div>
			<div class="bg-white">
				<div class="padding">
					<div class="cu-avatar sm round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></div>
					<div class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></div>
					<div class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></div>
					<div class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></div>
				</div>
				<div class="padding">
					<div class="cu-avatar sm round margin-left bg-red">A</div>
					<div class="cu-avatar round margin-left bg-red">B</div>
					<div class="cu-avatar lg round margin-left bg-red">C</div>
					<div class="cu-avatar xl round margin-left bg-red">D</div>
				</div>
				<div class="padding">
					<div class="cu-avatar sm round margin-left bg-red">蔚</div>
					<div class="cu-avatar round margin-left bg-red">蓝</div>
					<div class="cu-avatar lg round margin-left bg-red"><span>wl</span></div>
					<div class="cu-avatar xl round margin-left bg-red"><span class="avatar-text">网络</span></div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>内嵌文字(图标)</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-avatar radius"><span class="cuIcon-people"></span></div>
				<div class="cu-avatar radius margin-left"><span>港</span></div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>头像颜色</span>
			</div>
			<div class="padding-sm bg-white">
				<div class="cu-avatar round lg margin-xs" :class="'bg-' + item.name" v-for="(item, index) in colorList" :key="index">
					<span class="avatar-text">{{ item.name }}</span>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>头像组</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-avatar-group">
					<div class="cu-avatar round lg" v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]"></div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>头像标签</span>
			</div>
			<div class="padding bg-white">
				<div class="cu-avatar round lg margin-left" v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]">
					<div class="cu-tag badge" :class="index % 2 == 0 ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></div>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			avatar: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
			],
			html: `<view class="padding">
	<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
	<view class="cu-avatar radius margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
</view>`,
			html2: `<view class="padding">
	<view class="cu-avatar sm round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
	<view class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
	<view class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
	<view class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
</view>
<view class="padding">
	<view class="cu-avatar sm round margin-left bg-red"> A</view>
	<view class="cu-avatar round margin-left bg-red">B</view>
	<view class="cu-avatar lg round margin-left bg-red">C</view>
	<view class="cu-avatar xl round margin-left bg-red">D</view>
</view>
<view class="padding">
	<view class="cu-avatar sm round margin-left bg-red"> 蔚</view>
	<view class="cu-avatar round margin-left bg-red">蓝</view>
	<view class="cu-avatar lg round margin-left bg-red">
		<text>wl</text>
	</view>
	<view class="cu-avatar xl round margin-left bg-red">
		<text class="avatar-text">网络</text>
	</view>
</view>`,
			html3: `<view class="cu-avatar radius">
	<text class="cuIcon-people"></text>
</view>
<view class="cu-avatar radius margin-left">
	<text>港</text>
</view>`,
			html4: `<view class="cu-avatar round lg margin-xs" :class="'bg-' + name">
	<text class="avatar-text">文字</text>
</view>`,
			html5: `<view class="cu-avatar-group">
	<view class="cu-avatar round lg" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
</view>`,
			html6: `<view class="cu-avatar round lg margin-left"  v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]">
	<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
</view>`
		};
	}
};
</script>

<style scoped></style>
