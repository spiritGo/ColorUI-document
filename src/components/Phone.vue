<template>
	<div id="phone">
		<div class="phone-nav bg-gradual-blue"><slot name="nav"></slot></div>
		<div class="phone-content"><slot></slot></div>
	</div>
</template>

<script>
export default {
	name: 'phone'
};
</script>

<style scoped>
#phone {
	width: 375px;
	height: 667px;
	margin-top: 100px;
	margin-right: 20px;
	border-radius: 20px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	overflow: auto;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
}

.phone-nav {
	height: 40px;
	line-height: 40px;
	text-align: center;
}

.phone-content {
	flex: 1;
	overflow: auto;
}
</style>
