var $toggle = document.getElementById('toggle-sidebar');
var $html = document.querySelector('html');

$toggle.onclick = function(e) {
  $html.classList.toggle('open');
};

document.onclick = function(e) {
  $html.classList.contains('open') && e.target.tagName == 'BODY' && $html.classList.remove('open');
};
