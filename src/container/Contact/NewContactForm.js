import React, {Component} from 'react'
 import * as firebase from 'firebase'
// require("firebase/auth");
// require("firebase/database");
//  var config = { apiKey: "AIzaSyAabARU-Mmj8N6eE9T10cDSfU-Dp08imrk", authDomain: "contact-form-409e0.firebaseapp.com", databaseURL: "https://contact-form-409e0.firebaseio.com", projectId: "contact-form-409e0", storageBucket: "contact-form-409e0.appspot.com", messagingSenderId: "453817884276" };
//  firebase.initializeApp(config);
//         let db = firebase.database();
//         const ref = database.ref("names");
//         let data = { issue: "none of the above" };
          
export default class NewContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            speed: 10
        }
    }
componentDidMount() {
  const roorRef = firebase.database().ref().child('react');
  const speedRef = rootRef.child('speed');
  speedRef.on('value', snap = {
speed: snap.val()
  });
}
   

    render() {
 
  
        return(
            <div>
               <h4>{this.state.speed}</h4>
            </div>
        )
    }
}