import firebase from 'firebase'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDb8MnCZ6ASHDCZJKPuoPcT9gkcg0thEj4",
	authDomain: "vuejs-9ae6b.firebaseapp.com",
	databaseURL: "https://vuejs-9ae6b.firebaseio.com",
	projectId: "vuejs-9ae6b",
	storageBucket: "vuejs-9ae6b.appspot.com",
	messagingSenderId: "875548280462"
};
firebase.initializeApp(config);

export default {
 database: firebase.database()
}