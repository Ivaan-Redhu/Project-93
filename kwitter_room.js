
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdqhBpZDYn9rj_GvtkVwgE9k7ARL1Nc3M",
    authDomain: "kwitter-df13c.firebaseapp.com",
    databaseURL: "https://kwitter-df13c-default-rtdb.firebaseio.com",
    projectId: "kwitter-df13c",
    storageBucket: "kwitter-df13c.appspot.com",
    messagingSenderId: "302185170532",
    appId: "1:302185170532:web:b0c0b0071fd95a25c48171"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
