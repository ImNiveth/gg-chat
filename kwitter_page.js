//YOUR FIREBASE LINKS
const firebaseConfig = {

      apiKey: "AIzaSyD-teqcN9Enn8NWq42nPGzQ2dK7GBOfUy0",
    
      authDomain: "gg-chat-3692d.firebaseapp.com",
    
      projectId: "gg-chat-3692d",
    
      storageBucket: "gg-chat-3692d.appspot.com",
    
      messagingSenderId: "4456122137",
    
      appId: "1:4456122137:web:8e039a1ce0c1519e1a6788"
    
    };
    

    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
    }

//End code
      } });  }); }
getData();
