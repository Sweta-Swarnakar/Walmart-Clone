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