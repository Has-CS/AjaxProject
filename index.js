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


//Load JSON Through Api Externally

// var loadBtnUsers = document.getElementById('loadbtnUsers');
// var loadBtnPosts = document.getElementById('loadbtnPosts');
// var loadBtnPhotos = document.getElementById('loadbtnPhotos');
// var loadBtnToDos = document.getElementById('loadbtnToDos');

// var EJContentDiv = document.getElementById('EJContentDiv');

// var usersDiv = document.getElementById('usersDiv');
// var postsDiv = document.getElementById('postsDiv');
// var photosDiv = document.getElementById('photossDiv');
// var todosDiv = document.getElementById('todosDiv');


// // Load Users

// loadBtnUsers.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhr.send();

// })

// // Load Posts

// loadBtnPosts.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhr.send();

// })

// // Load Photos

// loadBtnPhotos.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
//     xhr.send();

// })

// // Load Todos

// loadBtnToDos.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//     xhr.send();

// })



// Load Data From GitHub Api

var loadBtnGH = document.getElementById("loadbtnGH");
var contentDivGH = document.getElementById("contentDivGH");

loadBtnGH.addEventListener("click", function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
            }
        };
        xhr.open("GET", "https://api.github.com/users", true);
        xhr.send();
    })