// sign up


function  signup(e){

    e.preventDefault();
    let myForm = document.getElementById("myForm")

    let fname = myForm.fname.value; 
    let lname = myForm.lname.value; 
    let email = myForm.email.value;
    let password = myForm.password.value;
   

    if (localStorage.getItem("users")=== null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    //0. grab and prepare user data

    let user = {
        fname,
        lname ,
        email ,
        password
    };

    // 1. get array from local storage 


   let arr = JSON.parse(localStorage.getItem("users"))

   //2. push new user to array

    arr.push(user)// added a new data
    localStorage.setItem("users",JSON.stringify(arr))

}
function success(){
    alert("Account Created")
}









//sign In page

function signin(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
  
    let name = myForm.name.value;
    let email = myForm.email.value;
    let password = myForm.password.value;

    let all_users = JSON.parse(localStorage.getItem("users"));
    
    all_users.forEach(function (user){
        if(email === user.email && password === user.password){
            
            window.location.href = "products.html";
        }
    })
    }

    function success(){
        alert("You have successfully Signed into Walmart")
    }