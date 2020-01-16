<template>
	<div v-highlight>
		<pre>
			<code :class="type" class="code hljs"><slot></slot></code>
		</pre>
	</div>
</template>

<script>
export default {
	name: 'MyCode',
	props: {
		type: { default: 'xml' }
	}
};
</script>

<style scoped>
pre {
	margin: 0;
}

.code {
	padding: 20px 10px;
	background-color: #3c3c3c;
	border-radius: 2px;
	cursor: text;
}

.hljs {
	line-height: 1.8;
}
</style>
