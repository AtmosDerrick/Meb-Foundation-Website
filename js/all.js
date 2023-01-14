
var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
    loader.style.display = "none";
    
})

const menubar = document.getElementById('menuResponsive').addEventListener('click', responsiveNavbar);
function responsiveNavbar() {
  var topnav = document.getElementById("showtopnav");
  topnav.classList.toggle("responsive");

  
  
}










   document.addEventListener("scroll", function() {
    const top = document.getElementById("top");
    const whitetext = document.getElementsByClassName('whitetext');
    const whitetextdonate = document.getElementById('whitetextdonation');


    
    if (window.pageYOffset > 300) {
      top.classList.add("bg-gray-900");



      whitetextdonate.classList.add("donatewhite");

      whitetextdonate.classList.add("text-yellow-500");


      

      for(let i =0; i < whitetext.length; i++){
        whitetext[i].classList.add("text-white")
        

      }
      
    }

    else if(window.pageYOffset < 300) {
      top.classList.remove("bg-gray-900");
      whitetextdonate.classList.remove("donatewhite");
      whitetextdonate.classList.remove("text-yellow-500");




      for(let i =0; i < whitetext.length; i++){
        whitetext[i].classList.remove("text-white")


      }

    }
  });