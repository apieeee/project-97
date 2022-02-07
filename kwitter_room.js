//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDgjgRCDf9Uf6ISSaKDo146KDEi2xeZ-Is",
    authDomain: "chat-chat-b1604.firebaseapp.com",
    databaseURL: "https://chat-chat-b1604.firebaseio.com",
    projectId: "chat-chat-b1604",
    storageBucket: "chat-chat-b1604.appspot.com",
    messagingSenderId: "980076612034",
    appId: "1:980076612034:web:24620ae9fe23f62caaae5b"
  };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    console.log("working")
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update
    ({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";

 document.getElementById("output").innerHTML += row;

});});}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
