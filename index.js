const navBar = document.getElementsByTagName("nav")[0];
const homeButton = document.getElementById('home');
const navHome = document.getElementsByClassName("nav-home");
const navScroll = document.getElementsByClassName("nav-scroll");
const linkdin = document.getElementById("linkdin");
const github = document.getElementById("github");



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
    if(pageOffset > 70 && !navSticky){
        navBar.style.boxShadow = "0px 3px 18px 5px rgba(0, 0, 0, 0.15)"
        navSticky = true;
    }
    else if(pageOffset <= 70 && navSticky){
        navBar.style.boxShadow = "none"
        navSticky = false;
    }
}

if(homeButton != null){
  homeButton.onclick = function(){
    goHome();
  };
}

if(linkdin != null){
  linkdin.onclick = function(){
    window.open("https://www.linkedin.com/in/lucas-longarini-96866515b", "_blank")
  }
}

if(github != null){
  github.onclick = function(){
    window.open("https://github.com/LucasLongarini", "_blank")
  }
}


for(let i = 0; i<navHome.length; i++){
  navHome[i].addEventListener("click", function(){
    goHome();
  });
}

function goHome(){
  window.location.href = "index.html";
}

for(let i = 0; i <navScroll.length; i++){
  navScroll[i].addEventListener("click", function(){
    scrollTop();
  });
}

function scrollTop(){
  var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
    } else {
        window.clearInterval( scrollToTop );
    }
  }, 4);
}