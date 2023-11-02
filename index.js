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
// var photosDiv = document.getElementById('photosDiv');
// var todosDiv = document.getElementById('todosDiv');


// Load Users

// loadBtnUsers.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//             var usersEA = JSON.parse(this.responseText);
//             var usersOutput = "<h4> Users</h3> <br>";

//             for(var j=0; j<usersEA.length; j++){
//                 usersOutput += '<ul>' +
//                 '<h6> User ' + [j+1] +'</h6> '+
//                 '<li> Name : '+ usersEA[j].name +'</li>'+
//                 '<li> User Name : '+ usersEA[j].username +'</li>'+
//                 '<li>  Email : '+ usersEA[j].email +'</li>'+
//                 '<li>  Phone : '+ usersEA[j].phone +'</li>'+
//                 '<li>  Website : '+ usersEA[j].website +'</li>'+
//                 '<li>  Phone Number : '+ usersEA[j].phone +'</li>'+
//                 '</ul>'
//             }
//             usersDiv.innerHTML = usersOutput;
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhr.send();

// })

// Load Posts

// loadBtnPosts.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//             var postsEA = JSON.parse(this.responseText);
//             var postsOutput = "<h4> Posts</h3> <br>";

//             for(var j=0; j<postsEA.length; j++){
//                 postsOutput += '<ul>' +
//                 '<h6> Post ' + [j+1] +'</h6> '+
//                 '<li> Post Title : '+ postsEA[j].title +'</li>'+
//                 '<li> Post Body : '+ postsEA[j].body +'</li>'+
//                 '<li> User Id : '+ postsEA[j].userid +'</li>'+
//                 '<li> ID : '+ postsEA[j].id +'</li>'+
//                 '</ul>'
//             }
//             postsDiv.innerHTML = postsOutput;
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhr.send();

// })

// Load Todos

// loadBtnToDos.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//             var toDosEA = JSON.parse(this.responseText);
//             var toDosOutput = "<h4> ToDos </h3> <br>";
//             for(var l=0; l<toDosEA.length; l++){
//                 toDosOutput += '<ul>' +
//                 '<h6> ToDo ' + [l+1] +'</h6> '+
//                 '<li> ToDo Title : '+ toDosEA[l].title +'</li>'+
//                 '<li> Completed : '+ toDosEA[l].completed +'</li>'+
//                 '<li> ID : '+ toDosEA[l].id +'</li>'+
//                 '<li> User ID : '+ toDosEA[l].UserId +'</li>'+
//                 '</ul>'
//             }
//             todosDiv.innerHTML = toDosOutput;
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//     xhr.send();

// })

// Load Photos

// loadBtnPhotos.addEventListener("click", function(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText);
//             var photosEA = JSON.parse(this.responseText);
//             var photosOutput = "<h4> Photos </h3> <br>";
//             for(var k=0; k<photosEA.length; k++){
//                 photosOutput += '<ul>' +
//                 '<h6> Photo ' + [k+1] +'</h6> '+
//                 '<li> Photo Title : '+ photosEA[k].title +'</li>'+
//                 '<li> Photo ID : '+ photosEA[k].id +'</li>'+
//                 '<li> Album ID : '+ photosEA[k].albumId +'</li>'+
//                 '<li> Photo URL : '+ photosEA[k].url +'</li>'+
//                 '<li> Thumbnail URL : '+ photosEA[k].thumbnailUrl +'</li>'+
//                 '</ul>'
//             }
//             photosDiv.innerHTML = photosOutput;
            
//         }
//     };
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
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
                var usersGH = JSON.parse(this.responseText);
                var usersGHOutput = "<h4> GIT HUB Users </h3> <br>";
                for(var k=0; k<usersGH.length; k++){
                    usersGHOutput += '<ul>' +
                    '<h6> User ' + [k+1] +'</h6> '+
                    '<li> User Login : '+ usersGH[k].login +'</li>'+
                    '<li> ID URL : '+ usersGH[k].url +'</li>'+
                    '<li> Type : '+ usersGH[k].type +'</li>'+
                    '<li> Site Admin : '+ usersGH[k].site_admin +'</li>'+
                    '</ul>'
                }
                contentDivGH.innerHTML = usersGHOutput;
                
                }
        };
        xhr.open("GET", "https://api.github.com/users", true);
        xhr.send();
    })