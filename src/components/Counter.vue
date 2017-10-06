<template>
	<div>
		<h2> The Count is : {{ count }}</h2>
		<p>
			<button class="button is-primary" @click="count += 1">Add</button>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 0
			}
		}
	}
</script>