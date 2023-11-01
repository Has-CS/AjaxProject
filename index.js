// Load Data From Text File

// var loadBtn = document.getElementById("loadbtn");
// var contentDiv = document.getElementById("content");

// loadBtn.addEventListener("click", function(){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange=function() {
//     if (this.readyState == 4 && this.status == 211) {

//       console.log(this.responseText);    
//       contentDiv.innerHTML = this.responseText;

//     }
//   };
//   xhttp.open("GET", "sampleText.txt", true);
//   xhttp.send();
// });

//Load JSON Locally

// var loadJLBtn = document.getElementById('loadbtnJL');
// var LJDiv = document.getElementById("LJdiv");

// loadJLBtn.addEventListener('click', function(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange=function() {
//       if (this.readyState == 4 && this.status == 200) {

//         console.log(this.responseText);    
//         var user = JSON.parse(this.responseText);
//         var output = '<h3>Registered Users</h3>';


//         for(var i = 0; i<user.length; i++){
//         output += ' <ul>' +
//           '<li>'+ user[i].name +'</li>'+
//           '<li>'+ user[i].user_id +'</li>'+
//           '<li>'+ user[i].given_name +'</li>'+
//           '<li>'+ user[i].family_name +'</li>'+
//           '<li>'+ user[i].last_ip +'</li>'+
//           '<li>'+ user[i].logins_count +'</li>'+
//           '</ul>';
//         }
//           LJDiv.innerHTML = output;

//       }
//     };
//     xhttp.open("GET", "users.json", true);
//     xhttp.send();
// })


//Load JSON Externally
