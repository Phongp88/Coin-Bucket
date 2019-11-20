import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD1xCz6_j4Rw2ztNNvLK7t-4JBMVqW0cXs",
  authDomain: "coin-bucket-81d62.firebaseapp.com",
  databaseURL: "https://coin-bucket-81d62.firebaseio.com",
  projectId: "coin-bucket-81d62",
  storageBucket: "coin-bucket-81d62.appspot.com",
  messagingSenderId: "529148600662",
  appId: "1:529148600662:web:60caef23264ca4b35436f7",
  measurementId: "G-ZLMBH909MT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
