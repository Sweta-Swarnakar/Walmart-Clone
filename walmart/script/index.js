setInterval(function(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[1].classList.add("active")             //active 2nd div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[2].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }
},3000);

function next(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[1].classList.add("active")             //active 2nd div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[2].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }
}

function prev(){
    if ( document.getElementsByClassName("slider")[0].classList.contains("active")){   // check for active class for the 1st div
        document.getElementsByClassName("slider")[2].classList.add("active")             //active last div 
        document.getElementsByClassName("slider")[0].classList.remove("active")          // remove Ist div from active class
    }else if ( document.getElementsByClassName("slider")[2].classList.contains("active") ){
        document.getElementsByClassName("slider")[1].classList.add("active")       
        document.getElementsByClassName("slider")[2].classList.remove("active") 
    }else if ( document.getElementsByClassName("slider")[1].classList.contains("active") ){
        document.getElementsByClassName("slider")[0].classList.add("active")       
        document.getElementsByClassName("slider")[1].classList.remove("active") 
    }
}