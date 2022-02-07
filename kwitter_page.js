var firebaseConfig = {
    apiKey: "AIzaSyDgjgRCDf9Uf6ISSaKDo146KDEi2xeZ-Is",
    authDomain: "chat-chat-b1604.firebaseapp.com",
    databaseURL: "https://chat-chat-b1604.firebaseio.com",
    projectId: "chat-chat-b1604",
    storageBucket: "chat-chat-b1604.appspot.com",
    messagingSenderId: "980076612034",
    appId: "1:980076612034:web:24620ae9fe23f62caaae5b"
  };
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value = "";
  }
  function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}