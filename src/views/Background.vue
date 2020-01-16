<template>
	<div class="flex wrap">
		<!-- 文档布局 -->
		<document-content>
			<h2 class="title">深色背景</h2>
			<el-card class="mb-20">
				<div class="grid col-3 padding-sm bg-white">
					<div class="padding-sm" v-for="(item, index) in colorList" :key="index">
						<div class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
							<div class="text-lg">{{ item.title }}</div>
							<div class="margin-top-sm">{{ item.name }}</div>
						</div>
					</div>
				</div>
				<div class="desc">源码展示</div>
				<my-code type="css">{{ bgHtml }}</my-code>
			</el-card>

			<h2 class="title">淡色背景</h2>
			<el-card class="mb-20">
				<div class="grid col-3 bg-white padding-sm">
					<div class="padding-sm" v-for="(item, index) in colorList" :key="index" v-if="index < 12">
						<div class="padding radius text-center light" :class="'bg-' + item.name">
							<div class="text-lg">{{ item.title }}</div>
							<div class="margin-top-sm">{{ item.name }}</div>
						</div>
					</div>
				</div>
				<div class="desc">源码展示</div>
				<my-code type="css">{{ bgHtml2 }}</my-code>
			</el-card>

			<h2 class="title">渐变背景</h2>
			<el-card class="mb-20">
				<div class="grid col-2 padding-sm bg-white">
					<div class="padding-sm">
						<div class="bg-gradual-red padding radius text-center shadow-blur text-df">
							<div class="text-lg">魅红</div>
							<div class="margin-top-sm text-Abc">#f43f3b - #ec008c</div>
						</div>
					</div>
					<div class="padding-sm">
						<div class="bg-gradual-orange padding radius text-center shadow-blur text-df">
							<div class="text-lg">鎏金</div>
							<div class="margin-top-sm text-Abc">#ff9700 - #ed1c24</div>
						</div>
					</div>
					<div class="padding-sm">
						<div class="bg-gradual-green padding radius text-center shadow-blur text-df">
							<div class="text-lg">翠柳</div>
							<div class="margin-top-sm text-Abc">#39b54a - #8dc63f</div>
						</div>
					</div>
					<div class="padding-sm">
						<div class="bg-gradual-blue padding radius text-center shadow-blur text-df">
							<div class="text-lg">靛青</div>
							<div class="margin-top-sm text-Abc">#0081ff - #1cbbb4</div>
						</div>
					</div>
					<div class="padding-sm">
						<div class="bg-gradual-purple padding radius text-center shadow-blur text-df">
							<div class="text-lg">惑紫</div>
							<div class="margin-top-sm text-Abc">#9000ff - #5e00ff</div>
						</div>
					</div>
					<div class="padding-sm">
						<div class="bg-gradual-pink padding radius text-center shadow-blur text-df">
							<div class="text-lg">霞彩</div>
							<div class="margin-top-sm text-Abc">#ec008c - #6739b6</div>
						</div>
					</div>
				</div>
				<div class="desc">源码展示</div>
				<my-code type="css">{{ bgHtml3 }}</my-code>
			</el-card>

			<h2 class="title">图片背景</h2>
			<el-card class="mb-20">
				<div
					class="bg-img bg-mask flex align-center my-20"
					style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 207px;"
				>
					<div class="padding-xl text-white">
						<div class="padding-xs text-xxl text-bold">钢铁之翼</div>
						<div class="padding-xs text-lg">Only the guilty need fear me.</div>
					</div>
				</div>
				<div class="desc">源码展示(必须设置高度)</div>
				<my-code type="css">{{ bgHtml4 }}</my-code>
				
				<div class="py-5">
					<el-tag class="mr-20 select-none">设置背景样式</el-tag>
					<span>.bg-img</span>
				</div>
				<div class="py-5">
					<el-tag class="mr-20 select-none">设置遮罩</el-tag>
					<span>.bg-mask</span>
				</div>
			</el-card>

			<h2 class="title">透明背景(文字层)</h2>
			<el-card class="mb-20">
				<div class="grid col-2 bg-white my-20">
					<div class="bg-img padding-bottom-xl" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 105px;">
						<div class="bg-shadeTop padding padding-bottom-xl">上面开始</div>
					</div>
					<div
						class="bg-img padding-top-xl flex align-end"
						style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 105px;"
					>
						<div class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</div>
					</div>
				</div>
				<div class="desc">源码展示(必须设置高度)</div>
				<my-code type='css'>{{ bgHtml5 }}</my-code>
				
				<div class="py-5">
					<el-tag class="mr-20 select-none">阴影渐变在上方开始</el-tag>
					<span>.bg-shadeTop</span>
				</div>
				<div class="py-5">
					<el-tag class="mr-20 select-none">阴影渐变在下方开始</el-tag>
					<span>.bg-shadeBottom</span>
				</div>
			</el-card>
		</document-content>

		<!-- 手机布局 -->
		<phone>
			<div class="bg-white p-10">
				<i class="cuIcon-title text-blue"></i>
				<span>深色背景</span>
			</div>
			<div class="grid col-3 padding-sm bg-white">
				<div class="padding-sm" v-for="(item, index) in colorList" :key="index">
					<div class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
						<div class="text-lg">{{ item.title }}</div>
						<div class="margin-top-sm text-Abc">{{ item.name }}</div>
					</div>
				</div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>淡色背景</span>
			</div>
			<div class="grid col-3 bg-white padding-sm">
				<div class="padding-sm" v-for="(item, index) in colorList" :key="index" v-if="index < 12">
					<div class="padding radius text-center light" :class="'bg-' + item.name">
						<div class="text-lg">{{ item.title }}</div>
						<div class="margin-top-sm text-Abc">{{ item.name }}</div>
					</div>
				</div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>渐变背景</span>
			</div>
			<div class="grid col-2 padding-sm bg-white">
				<div class="padding-sm">
					<div class="bg-gradual-red padding radius text-center shadow-blur text-df">
						<div class="text-lg">魅红</div>
						<div class="margin-top-sm text-Abc">#f43f3b - #ec008c</div>
					</div>
				</div>
				<div class="padding-sm">
					<div class="bg-gradual-orange padding radius text-center shadow-blur text-df">
						<div class="text-lg">鎏金</div>
						<div class="margin-top-sm text-Abc">#ff9700 - #ed1c24</div>
					</div>
				</div>
				<div class="padding-sm">
					<div class="bg-gradual-green padding radius text-center shadow-blur text-df">
						<div class="text-lg">翠柳</div>
						<div class="margin-top-sm text-Abc">#39b54a - #8dc63f</div>
					</div>
				</div>
				<div class="padding-sm">
					<div class="bg-gradual-blue padding radius text-center shadow-blur text-df">
						<div class="text-lg">靛青</div>
						<div class="margin-top-sm text-Abc">#0081ff - #1cbbb4</div>
					</div>
				</div>
				<div class="padding-sm">
					<div class="bg-gradual-purple padding radius text-center shadow-blur text-df">
						<div class="text-lg">惑紫</div>
						<div class="margin-top-sm text-Abc">#9000ff - #5e00ff</div>
					</div>
				</div>
				<div class="padding-sm">
					<div class="bg-gradual-pink padding radius text-center shadow-blur text-df">
						<div class="text-lg">霞彩</div>
						<div class="margin-top-sm text-Abc">#ec008c - #6739b6</div>
					</div>
				</div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>图片背景</span>
			</div>
			<div class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 207px;">
				<div class="padding-xl text-white">
					<div class="padding-xs text-xxl text-bold">钢铁之翼</div>
					<div class="padding-xs text-lg">Only the guilty need fear me.</div>
				</div>
			</div>

			<div class="bg-white p-10 margin-top">
				<i class="cuIcon-title text-blue"></i>
				<span>透明背景(文字层)</span>
			</div>
			<div class="grid col-2 bg-white">
				<div class="bg-img padding-bottom-xl" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height: 105px;">
					<div class="bg-shadeTop padding padding-bottom-xl">上面开始</div>
				</div>
				<div class="bg-img padding-top-xl flex align-end" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height: 105px;">
					<div class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</div>
				</div>
			</div>
		</phone>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bgHtml: `.bg-red {
  background-color: #e54d42;
  color: #ffffff;
}`,
			bgHtml2: `.bg-red.light {
  color: #e54d42;
  background-color: #fadbd9;
}`,
			bgHtml3: `.bg-gradual-red {
  background-image: linear-gradient(45deg, #f43f3b, #ec008c);
  color: #ffffff;
}`,
			bgHtml4: `.bg-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-mask {
  background-color: #333333;
  position: relative;
}

.bg-mask::after {
  content: "";
  border-radius: inherit;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}`,
			bgHtml5: `.bg-shadeTop {
	background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01));
	color: #ffffff;
}

.bg-shadeBottom {
	background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1));
	color: #ffffff;
}`
		};
	}
};
</script>

<style scoped></style>
