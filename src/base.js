import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnDOLufyuOeG_UkAQvV0NyY_vsBZMFfQQ",
    authDomain: "eatme-a10f3.firebaseapp.com",
    databaseURL: "https://eatme-a10f3.firebaseio.com",

});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
