import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

//wee need to somehow seed the database

const config = {
	apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
	appId: ""
};

const firebase = Firebase.initializeApp(config);

//VERY DANGEROUS, ONLY SAVE FILE ONCE!!!! AND THEN COMMENT OUT OR IT WILL SEED DATABASE ON FIRESTORE MULTIPLE TIMES
// seedDatabase(firebase);

export { firebase };
