
function storeCredentials(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password === confirmPassword){
        var details = {
            "name": name,
            "password": password
        }
        localStorage.setItem("details", JSON.stringify(details));
    }
    else{
        alert("Password and Confirm Password is not same");
        return false;
    }
}


function checkCredentials(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    var details = JSON.parse(localStorage.getItem("details"));
    console.log(details.name);
    console.log(details.password);
     if(!details)
     {
         alert("User is not registered here ");
        return false;
     }
    if(name == details.name && password == details.password){
        return true;
    }
    else{
        alert("Invalid Name or Password!");
        return false;
    }
}

var myList = document.getElementById("myList");

function addList(){
    var text = document.getElementById("newList").value;
    document.getElementById("newList").value = ""
    var list = document.createElement("li");
    list.innerHTML=text;
    list.className = "l";
    list.addEventListener('click', function(){
        list.classList.toggle('completed');
    })
    myList.appendChild(list);
    
}

function empty(){
    var elements = document.querySelectorAll(".l");
    for(var x of elements){
        x.remove();
    }
}

function clearComplete(){
    var elements = document.querySelectorAll(".completed");
    for(var x of elements){
        x.remove();
    }
}

function save(){
    var saveList = document.getElementById("myList").innerHTML;
    localStorage.setItem("saveList", JSON.stringify(saveList));
}

function showSavedList(){
    var savedList = localStorage.getItem("saveList");
    document.getElementById("myList").innerHTML = JSON.parse(savedList);
}
