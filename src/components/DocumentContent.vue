<template>
	<div id="document">
		<slot></slot>
		<el-backtop target="#document"></el-backtop>
	</div>
</template>

<script>
export default {
	name: 'documentContent'
};
</script>

<style scoped>
#document {
	padding: 20px;
	flex-grow: 1;
	overflow: auto;
}
</style>
