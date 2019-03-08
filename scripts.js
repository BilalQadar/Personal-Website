const readMore = document.getElementById('read');
const aboutMe = document.getElementById('about');
const navBar = document.getElementById('navbar');
var navBarLoc = navBar.offsetTop;

readMore.addEventListener('click',scrollToAbout);

function scrollToAbout(){
  var loc = aboutMe.getBoundingClientRect();
  var offset = window.pageYOffset;
  var top = loc.top + offset;
  var left = loc.left;
  window.scroll({ top: top, left: left, behavior: 'smooth' });
}

window.onscroll = scrollNav;

function scrollNav(){
  // TODO: Make this add a fixed class
  pageOffset = window.pageYOffset;
  if(pageOffset > navBarLoc){
    navBar.classList.add('nav-bar-st');
  } else{
    navBar.classList.remove('nav-bar-st');
  }
}
