var $toggle = document.getElementById('toggle-sidebar');
var $html = document.querySelector('html');

$toggle.onclick = function(e) {
  $html.classList.toggle('open');
};
