import firebase from 'firebase'

const config = {
  apiKey: "<YOUR API KEY>",
  authDomain: "<YOUR AUTH DOMAIN>",
  databaseURL: "<YOUR URL BASE>",
  projectId: "<YOUR PROJECT ID>",
  storageBucket: "<YOUR STORAGE BUCKET>",
  messagingSenderId: "<MEASSAGING ID>"
};

firebase.initializeApp(config)

export const database = firebase.database().ref().child('posts')