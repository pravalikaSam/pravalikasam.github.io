function toggleMenu(){

let menu=document.getElementById("menu");


if(menu.style.display==="flex"){

menu.style.display="none";

}

else{

menu.style.display="flex";

}

}



// Smooth scrolling

document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",function(e){


if(this.hash){

e.preventDefault();


document.querySelector(this.hash)
.scrollIntoView({

behavior:"smooth"

});


}


});


});