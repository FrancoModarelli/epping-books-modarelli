import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({

    apiKey: "AIzaSyABuL-7eNKklrt8QgWThsfoxxfHlaxczuk",
    authDomain: "epping-books.firebaseapp.com",
    projectId: "epping-books",
    storageBucket: "epping-books.appspot.com",
    messagingSenderId: "1092227722511",
    appId: "1:1092227722511:web:2e8da59842a7e3c37fa27a"
});

export function getFirebase () {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}