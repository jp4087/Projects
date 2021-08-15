import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

firebase.initializeApp(
    {
        apiKey: "AIzaSyAuc_BFwWG1GaNZUywL7_ookUsruWobJSU",
        authDomain: "reels-d7439.firebaseapp.com",
        projectId: "reels-d7439",
        storageBucket: "reels-d7439.appspot.com",
        messagingSenderId: "806048680410",
        appId: "1:806048680410:web:720d04354d8b4e4947d8e3"
    }
)

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection('posts'),
    comments: firestore.collection('comments'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();

