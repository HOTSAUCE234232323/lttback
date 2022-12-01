import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCez8AO3NPFkkCDxYYt-25x5KJai_CMpko",
    authDomain: "lttback.firebaseapp.com",
    databaseURL: "https://lttback-default-rtdb.firebaseio.com",
    projectId: "lttback",
    storageBucket: "lttback.appspot.com",
    messagingSenderId: "982351917212",
    appId: "1:982351917212:web:58edd10852d043854fbd59",
    measurementId: "G-RG0CGS3J8G"
});
document.getElementById('submit').onclick = function() {
const db = getDatabase();
var serial_number = document.getElementById("serial_number").value;
var first_name = document.getElementById("first_name").value;
var last_name = document.getElementById("last_name").value;
set(ref(db, 'users/' + serial_number), {
    first_name : first_name,
    last_name : last_name
})
}