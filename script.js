const firebaseConfig = {
    apiKey: "AIzaSyCez8AO3NPFkkCDxYYt-25x5KJai_CMpko",
    authDomain: "lttback.firebaseapp.com",
    databaseURL: "https://lttback-default-rtdb.firebaseio.com",
    projectId: "lttback",
    storageBucket: "lttback.appspot.com",
    messagingSenderId: "982351917212",
    appId: "1:982351917212:web:58edd10852d043854fbd59",
    measurementId: "G-RG0CGS3J8G"
  };
firebase.initalizeApp(firebaseConfig);
var database = firebase.database()
function save(){
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var facility = document.getElementById("facility").value;
    var doctor = document.getElementById("doctor").value;

    database.ref('users/' + username).set({
        first_name : first_name,
        last_name : last_name,
        facility : facility,
        doctor : doctor
    })

    alert("Done");
}