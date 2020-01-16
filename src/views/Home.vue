<template>
	<div id="home">
		<sidebar></sidebar>
		<div id="content"><router-view /></div>
	</div>
</template>

<script>
import Sidebar from '../components/Sidebar';
export default {
	components: { Sidebar }
};
</script>

<style scoped>
#home {
	display: flex;
}

#content {
	flex-grow: 1;
	overflow-x: auto;
}
</style>
