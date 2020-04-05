

var Account = {
    username:"Phill",
  password:"swappy21"
  };

  var database = [
    {username:"Phill",
  password:"swappy21"}
  ];

var newsfeed = [
    {
      username: "Sandra",
  timeline: "Woke up like this this this..."
    },
  {
       username: "Benatu",
  timeline: "Trio of Essential Oils Buy one get one free"
  },
  {
       username: "Phill",
  timeline: "Its Corona time"
  }
  ];
  
var usernamePrompt = prompt("What is your Username?");
var passwordPrompt = prompt("What is your Password?");

function signIn(user, pass){
    if (user == database[0].username && pass == database[0].password){
        console.log(newsfeed);
    }
    else{
        alert("Wrong username or Password.");
    }
};
signIn(usernamePrompt,passwordPrompt);
