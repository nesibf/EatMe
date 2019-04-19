import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrJx--TXd_dnahkkp6xnUv8FOgTbBADb0",
    authDomain: "react-7f2af.firebaseapp.com",
    databaseURL: "https://react-7f2af.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
