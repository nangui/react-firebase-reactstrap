import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCHR21m3SHU3J5Hb7Nc4LhXILjoQ6ggT8o",
  authDomain: "myblog-10031994.firebaseapp.com",
  databaseURL: "https://myblog-10031994.firebaseio.com",
  projectId: "myblog-10031994",
  storageBucket: "myblog-10031994.appspot.com",
  messagingSenderId: "771471576468"
};

firebase.initializeApp(config)

export const database = firebase.database().ref('/posts')