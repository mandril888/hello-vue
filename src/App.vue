<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<message>Hello one</message>
		<message>Hello two</message>
		<counter></counter>
		<div>
			<button @click="getInfo">Get info</button>
			<ul>
				<li v-for="info in infoGet">{{ info.trackId }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Message from './components/Message.vue'
import Counter from './components/Counter.vue'
import axios from 'axios'

export default {
	name: 'app',
	components: {
		Message, Counter
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			infoGet: ''
		}
	},
	methods: {
		getInfo() {
			axios.get('https://itunes.apple.com/search?term=jack+johnson').then(response => this.infoGet = response.data.results)
		}
	}
}
</script>

<style lang="scss">
	
</style>
