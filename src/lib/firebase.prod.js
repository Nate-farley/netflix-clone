
import  Firebase  from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/auth';


// 1) when seeding the database you'll have to uncomment this!
 //import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCwWn10dKNfqG1d3VF6--G5PClLC1daQQk",
    authDomain: "netflix-clone-5234f.firebaseapp.com",
    projectId: "netflix-clone-5234f",
    storageBucket: "netflix-clone-5234f.appspot.com",
    messagingSenderId: "940765069152",
    appId: "1:940765069152:web:d7ccd6bc89266cd09c2805"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
