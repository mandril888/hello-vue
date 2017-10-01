<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<message>Hello one</message>
		<message>Hello two</message>
	</div>
</template>

<script>
import Message from './components/Message.vue'

export default {
	name: 'app',
	components: {
		Message
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
