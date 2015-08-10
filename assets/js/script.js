var $toggle = document.getElementById('toggle-sidebar');
var $html = document.querySelector('html');

$toggle.onclick = function(e) {
  $html.classList.toggle('open');
};

document.onclick = function(e) {
  $html.classList.contains('open') && e.target.tagName == 'BODY' && $html.classList.remove('open');
};

var situacoes = [];

situacoes.push({
  icon: 'airplane',
  text: 'Viajem longa'
});
situacoes.push({
  icon: 'airplane',
  text: 'Viajem média'
});
situacoes.push({
  icon: 'car',
  text: 'Viajem longa'
});
situacoes.push({
  icon: 'car',
  text: 'Viajem média'
});
situacoes.push({
  icon: 'briefcase',
  text: 'Muito tempo'
});
situacoes.push({
  icon: 'briefcase',
  text: 'Tempo médio'
});

var $situacoes = document.querySelectorAll('.situacoes')[0];
for (var i = 0, len = situacoes.length; i < len; i++) {
  var $li   = document.createElement('li');
  var $i    = document.createElement('i');
  var $span = document.createElement('span');

  var t = situacoes[i];
  $span.innerText = t.text;
  $i.classList.add('mdi');
  $i.classList.add('mdi-' + t.icon);

  $li.appendChild($i);
  $li.appendChild($span);

  $situacoes.appendChild($li);
};
