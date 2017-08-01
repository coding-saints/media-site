import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAabARU-Mmj8N6eE9T10cDSfU-Dp08imrk",
    authDomain: "contact-form-409e0.firebaseapp.com",
    databaseURL: "https://contact-form-409e0.firebaseio.com",
    projectId: "contact-form-409e0",
    storageBucket: "contact-form-409e0.appspot.com",
    messagingSenderId: "453817884276"
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;