const navBar = document.getElementsByTagName("nav")[0];



var scrolled = false;

window.onscroll = function() {
  scrolled = true;
}

setInterval(function(){
  if (scrolled) {
    scrolled = false;
    scrollFunction(window.pageYOffset);
  }
}, 150);


var navSticky = false;
function scrollFunction(pageOffset){
    console.log(pageYOffset);
    if(pageOffset > 70 && !navSticky){
        navBar.style.boxShadow = "0px 3px 18px 5px rgba(0, 0, 0, 0.15)"
        navSticky = true;
    }
    else if(pageOffset <= 70 && navSticky){
        navBar.style.boxShadow = "none"
        navSticky = false;
    }
}