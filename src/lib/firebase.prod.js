import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

//wee need to somehow seed the database

const config = {
	apiKey: "AIzaSyDYT9bDreJtYit7lZ8wc4XtY8oGLajHpSU",
    authDomain: "netflix-clone-25c95.firebaseapp.com",
    projectId: "netflix-clone-25c95",
    storageBucket: "netflix-clone-25c95.appspot.com",
    messagingSenderId: "939176460251",
	appId: "1:939176460251:web:9eef624ca31516d249b1fe"
};

const firebase = Firebase.initializeApp(config);

//VERY DANGEROUS, ONLY SAVE FILE ONCE!!!! AND THEN COMMENT OUT OR IT WILL SEED DATABASE ON FIRESTORE MULTIPLE TIMES
// seedDatabase(firebase);

export { firebase };
