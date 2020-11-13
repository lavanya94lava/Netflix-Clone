import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';


const config = {
    apiKey: "AIzaSyAOX5GY-UzmIH6uwZ3Sz3IkMPaQgIiTWv4",
    authDomain: "netflix-clone-1d11d.firebaseapp.com",
    databaseURL: "https://netflix-clone-1d11d.firebaseio.com",
    projectId: "netflix-clone-1d11d",
    storageBucket: "netflix-clone-1d11d.appspot.com",
    messagingSenderId: "974115005548",
    appId: "1:974115005548:web:99a0e02104954e637d6449"
};

const firebase = Firebase.initializeApp(config);


export {firebase};