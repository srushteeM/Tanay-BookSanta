import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB6nXEiLx2hFs4Q_XD8eBrMEgKk0yae3Y0",
  authDomain: "booksanta-62a1e.firebaseapp.com",
  databaseURL: "https://booksanta-62a1e.firebaseio.com",
  projectId: "booksanta-62a1e",
  storageBucket: "booksanta-62a1e.appspot.com",
  messagingSenderId: "463224067487",
  appId: "1:463224067487:web:123c59250507687ee519aa",
  measurementId: "G-9Q5VDQWVCH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
