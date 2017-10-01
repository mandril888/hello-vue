<template>
	<div class="box">
		<p><slot></slot></p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.box {
		border-radius: 4px;
		border: 1px solid grey;
		margin: 20px;
		padding: 20px;
		p {
			font-size: 18px;
		}
	}
</style>