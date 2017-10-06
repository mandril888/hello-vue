<template>
	<div id="app">

		<div class="container">

			<section class="section">
				<h1>{{ msg }}</h1>

				<message>Hello one</message>
				<message>Hello two</message>
			</section>

			<section class="section">
				<counter></counter>
			</section>

			<section class="section">
				<h3>Make an Ajax petition with Axios</h3>
				<div>
					<button class="button is-primary" @click="getInfo">Get info</button>
					<ul>
						<li v-for="info in infoGet">{{ info.trackId }}</li>
					</ul>
				</div>
			</section>

			<section class="section">
				<div class="field">
					<label class="label">Name</label>
					<div class="control has-icons-left has-icons-right">
						<input class="input" type="text" placeholder="Text input" value="">
						<span class="icon is-small is-left">
							<i class="fa fa-user"></i>
						</span>
						<span class="icon is-small is-right">
							<i class="fa fa-check"></i>
						</span>
					</div>
				</div>
				<div class="field">
					<label class="label">Message</label>
					<div class="control">
						<textarea class="textarea" placeholder="Textarea"></textarea>
					</div>
				</div>
				<div class="field is-grouped">
					<div class="control">
						<button class="button is-primary">Submit</button>
					</div>
				</div>
			</section>

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

<style lang="sass" src="bulma"></style>

<style lang="scss">

</style>
