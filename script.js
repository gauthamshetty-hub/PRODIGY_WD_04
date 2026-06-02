
// Select Navbar

const navbar = document.getElementById("navbar");


// Scroll Effect

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
