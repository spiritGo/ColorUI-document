<template>
	<div class="flex wrap">
		<!-- 文档 -->
		<document-content>
			<h2 class="title">文字大小</h2>
			<el-card class="mb-20">
				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">60</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-xsl padding"><i class=" cuIcon-roundcheckfill text-green"></i></div>
						<div class="padding">用于图标、数字等特大显示</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">40</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-sl padding"><i class=" cuIcon-roundcheckfill text-green"></i></div>
						<div class="padding">用于图标、数字等较大显示</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html2 }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">22</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-xxl padding"><i class="text-price text-red">80.00</i></div>
						<div class="padding">用于金额数字等信息</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html3 }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">18</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-xl padding"><span class="text-black text-bold">您的订单已提交成功！</span></div>
						<div class="padding">页面大标题，用于结果页等单一信息页</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html4 }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">16</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-lg padding"><span class="text-black">ColorUI组件库</span></div>
						<div class="padding">页面小标题，首要层级显示内容</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html5 }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">14</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-df padding">专注视觉的小程序组件库</div>
						<div class="padding">页面默认字号，用于摘要或阅读文本</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html6 }}</my-code>

				<div class="solids-bottom padding-xs flex align-center bg-white">
					<div class="padding">12</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-sm padding"><span class="text-grey">衬衫的价格是9磅15便士</span></div>
						<div class="padding">页面辅助信息，次级内容等</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html7 }}</my-code>

				<div class="padding-xs flex align-center bg-white">
					<div class="padding">10</div>
					<div class="flex-sub text-center">
						<div class="solid-bottom text-xs padding"><span class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</span></div>
						<div class="padding">说明文本，标签文字等关注度低的文字</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html8 }}</my-code>
			</el-card>

			<h2 class="title">文字颜色和文字阴影</h2>
			<el-card class="mb-20">
				<div class="grid col-5 padding-sm bg-white">
					<div class="padding-sm" v-for="(item, index) in colorList" :key="index">
						<div class="text-center" :class="'text-' + item.name">{{ item.name }}</div>
					</div>
				</div>
				<div class="desc margin-top-sm">颜色</div>
				<div class="desc">name 表示上方颜色名称</div>
				<my-code>{{ html9 }}</my-code>

				<div class="desc margin-top-sm">阴影</div>
				<div class="desc">name 表示上方颜色名称</div>
				<my-code>{{ html10 }}</my-code>
			</el-card>

			<h2 class="title">文字截断</h2>
			<el-card class="mb-20">
				<div class="padding bg-white"><div class="text-cut padding bg-grey radius" style="width:220px">我于杀戮之中绽放 ,亦如黎明中的花朵</div></div>
				<div class="desc margin-top-sm">使用</div>
				<div class="desc">宽度必须设置</div>
				<my-code>{{ html11 }}</my-code>
			</el-card>

			<h2 class="title">文字对齐</h2>
			<el-card class="mb-20">
				<div class="padding bg-white">
					<div class="text-left padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
					<div class="text-center padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
					<div class="text-right padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html12 }}</my-code>
			</el-card>

			<h2 class="title">特殊文字</h2>
			<el-card class="mb-20">
				<div class="padding text-center bg-white">
					<div class="padding-lr bg-white">
						<div class="solid-bottom padding"><span class="text-price">80.00</span></div>
						<div class="padding">价格文本，利用伪元素添加"¥"符号</div>
					</div>
					<div class="padding-lr bg-white margin-top">
						<div class="solid-bottom padding"><span class="text-Abc">color Ui</span></div>
						<div class="padding">英文单词首字母大写</div>
					</div>
					<div class="padding-lr bg-white margin-top">
						<div class="solid-bottom padding"><span class="text-ABC">color Ui</span></div>
						<div class="padding">全部字母大写</div>
					</div>
					<div class="padding-lr bg-white margin-top">
						<div class="solid-bottom padding"><span class="text-abc">color Ui</span></div>
						<div class="padding">全部字母小写</div>
					</div>
				</div>
				<div class="desc margin-top-sm">使用</div>
				<my-code>{{ html13 }}</my-code>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<template v-slot:nav>
				文本
			</template>
			<div class="bg-white p-10 solid-bottom">
				<i class="cuIcon-title text-blue"></i>
				<span>文字大小</span>
			</div>
			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">60</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-xsl padding"><i class=" cuIcon-roundcheckfill text-green"></i></div>
					<div class="padding">用于图标、数字等特大显示</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">40</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-sl padding"><i class=" cuIcon-roundcheckfill text-green"></i></div>
					<div class="padding">用于图标、数字等较大显示</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">22</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-xxl padding"><i class="text-price text-red">80.00</i></div>
					<div class="padding">用于金额数字等信息</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">18</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-xl padding"><span class="text-black text-bold">您的订单已提交成功！</span></div>
					<div class="padding">页面大标题，用于结果页等单一信息页</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">16</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-lg padding"><span class="text-black">ColorUI组件库</span></div>
					<div class="padding">页面小标题，首要层级显示内容</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">14</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-df padding">专注视觉的小程序组件库</div>
					<div class="padding">页面默认字号，用于摘要或阅读文本</div>
				</div>
			</div>

			<div class="solids-bottom padding-xs flex align-center bg-white">
				<div class="padding">12</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-sm padding"><span class="text-grey">衬衫的价格是9磅15便士</span></div>
					<div class="padding">页面辅助信息，次级内容等</div>
				</div>
			</div>

			<div class="padding-xs flex align-center bg-white">
				<div class="padding">10</div>
				<div class="flex-sub text-center">
					<div class="solid-bottom text-xs padding"><span class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</span></div>
					<div class="padding">说明文本，标签文字等关注度低的文字</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>文字颜色</span>
			</div>
			<div class="grid col-5 padding-sm bg-white">
				<div class="padding-sm" v-for="(item, index) in colorList" :key="index">
					<div class="text-center" :class="'text-' + item.name">{{ item.title }}</div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>文字阴影</span>
			</div>
			<div class="grid col-5 padding-sm bg-white">
				<div class="padding-sm" v-for="(item, index) in colorList" :key="index">
					<div class="text-center text-shadow" :class="'text-' + item.name"><div class="cuIcon-ellipse text-xxl"></div></div>
				</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>文字截断</span>
			</div>
			<div class="padding bg-white"><div class="text-cut padding bg-grey radius" style="width:220px">我于杀戮之中绽放 ,亦如黎明中的花朵</div></div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>文字对齐</span>
			</div>
			<div class="padding bg-white">
				<div class="text-left padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
				<div class="text-center padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
				<div class="text-right padding">我于杀戮之中绽放 ,亦如黎明中的花朵</div>
			</div>

			<div class="bg-white p-10 solid-bottom margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>特殊文字</span>
			</div>
			<div class="padding text-center bg-white">
				<div class="padding-lr bg-white">
					<div class="solid-bottom padding"><span class="text-price">80.00</span></div>
					<div class="padding">价格文本，利用伪元素添加"¥"符号</div>
				</div>
				<div class="padding-lr bg-white margin-top">
					<div class="solid-bottom padding"><span class="text-Abc">color Ui</span></div>
					<div class="padding">英文单词首字母大写</div>
				</div>
				<div class="padding-lr bg-white margin-top">
					<div class="solid-bottom padding"><span class="text-ABC">color Ui</span></div>
					<div class="padding">全部字母大写</div>
				</div>
				<div class="padding-lr bg-white margin-top">
					<div class="solid-bottom padding"><span class="text-abc">color Ui</span></div>
					<div class="padding">全部字母小写</div>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			html: `<view class="solid-bottom text-xsl padding">
	<text class=" cuIcon-roundcheckfill text-green"></text>
</view>`,
			html2: `<view class="solid-bottom text-sl padding">
	<text class=" cuIcon-roundcheckfill text-green"></text>
</view>`,
			html3: `<view class="solid-bottom text-xxl padding">
	<text class="text-price text-red">80.00</text>
</view>`,
			html4: `<view class="solid-bottom text-xl padding">
	<text class="text-black text-bold">您的订单已提交成功！</text>
</view>`,
			html5: `<view class="solid-bottom text-lg padding">
	<text class="text-black">ColorUI组件库</text>
</view>`,
			html6: `<view class="solid-bottom text-df padding">专注视觉的小程序组件库</view>`,
			html7: `<view class="solid-bottom text-sm padding">
	<text class="text-grey">衬衫的价格是9磅15便士</text>
</view>`,
			html8: `<view class="solid-bottom text-xs padding">
	<text class="text-gray">我于杀戮之中绽放 亦如黎明中的花朵</text>
</view>`,
			html9: `<view :class="'text-' + name">文字颜色</view>`,
			html10: `<view class="text-center text-shadow" :class="'text-' + name">文字阴影</view>`,
			html11: `<view class="text-cut padding bg-grey radius" style="width:220px">我于杀戮之中绽放 ,亦如黎明中的花朵</view>`,
			html12: `<view class="text-left padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
<view class="text-center padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
<view class="text-right padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>`,
			html13: `<text class="text-price">80.00</text>,
<text class="text-Abc">color Ui</text>
<text class="text-ABC">color Ui</text>
<text class="text-abc">color Ui</text>`
		};
	}
};
</script>

<style scoped></style>
