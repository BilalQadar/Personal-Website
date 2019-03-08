const readMore = document.getElementById('read');
const aboutMe = document.getElementById('about');

readMore.addEventListener('click',scrollToAbout);

function scrollToAbout(){
  // TODO: Make this factor in current position
  var loc = aboutMe.getBoundingClientRect();
  var top = loc.top;
  var left = loc.left;
  window.scroll({ top: top, left: left, behavior: 'smooth' });
}
