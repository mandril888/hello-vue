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
				<form action="POST" @submit.prevent="onSubmit">
					<div class="field">
						<label class="label">Name</label>
						<div class="control has-icons-left has-icons-right">
							<input class="input" type="text" placeholder="Text input" v-model="name">
							<span class="icon is-small is-left">
								<i class="fa fa-user"></i>
							</span>
							<span class="icon is-small is-right">
								<i class="fa fa-check"></i>
							</span>
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button class="button is-primary">Submit</button>
						</div>
					</div>
				</form>
				<div class="films" v-for="film in filmsSearched">
					<img :src="'http://image.tmdb.org/t/p/w500' + film.poster_path"></img>
					<div>
						<h2>{{ film.title }}</h2>
						<p>{{ film.overview }}</p>
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
			infoGet: '',
			name: '',
			filmsSearched: ''
		}
	},
	methods: {
		getInfo() {
			axios.get('https://itunes.apple.com/search?term=jack+johnson').then(response => this.infoGet = response.data.results)
		},
		onSubmit() {
			axios.get('https://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=' + this.name + '&language=es').then(response => this.filmsSearched = response.data.results)
		}
	}
}
</script>

<style lang="sass" src="bulma"></style>

<style lang="scss">
	.films {
		border: 1px solid grey;
		margin: 15px 0;
		padding: 15px;
		display: flex;
		img {
			width: 100px;
			float: left;
			margin: 0 10px 0 0;
			height: 150px;
		}
		div {
			clear: both;
			h2 {
				font-size: 20px;
				font-weight: bolder;
				color: #00d1b2;
				text-shadow: 0.5px 0.5px black;
			}
		}
	}
</style>
