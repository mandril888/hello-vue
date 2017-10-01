<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<message>Hello one</message>
		<message>Hello two</message>
		<counter></counter>
	</div>
</template>

<script>
import Message from './components/Message.vue'
import Counter from './components/Counter.vue'

export default {
	name: 'app',
	components: {
		Message, Counter
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style lang="scss">
	
</style>
