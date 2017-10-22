import Vue from 'vue'
import App from './App.vue'
import Vuefire from 'vuefire'
import firebase from './service/firebase';

Vue.use(Vuefire);

new Vue({
	el: '#app',
	firebase: {
		task: firebase.database.ref('task').orderByChild('created_at')
	},
	render: h => h(App)
})
