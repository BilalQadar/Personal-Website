const readMore = document.getElementById('read');
const aboutMe = document.getElementById('about');

readMore.addEventListener('click',scrollToAbout);

function scrollToAbout(){
  // TODO: Make this factor in current position
  var loc = aboutMe.getBoundingClientRect();
  var offset = window.pageYOffset;
  var top = loc.top + offset;
  var left = loc.left;
  window.scroll({ top: top, left: left, behavior: 'smooth' });
}
