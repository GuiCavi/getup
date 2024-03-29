function stringToHtml(el) {
  var __ = document.createElement('div');
  __.innerHTML = el;
  el = __.firstChild;
  return el;
};

function toggleSidebarInit() {
  var $toggle = document.getElementById('toggle-sidebar');
  var $html = document.querySelector('html');

  $toggle.onclick = function(e) {
    $html.classList.toggle('open');
  };

  document.onclick = function(e) {
    $html.classList.contains('open') && e.target.tagName == 'BODY' && $html.classList.remove('open');
  };
};

function situacoesInit() {
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
  if (!$situacoes) return;
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
    $li.addEventListener('click', function() {
      window.location.pathname = '/contando.html';
    });

    $situacoes.appendChild($li);
  };
};

function temposInit() {
  var $tempos = document.querySelectorAll('.tempos')[0];
  if (!$tempos) return;
  var $items = $tempos.querySelectorAll('input[name=tempos]');
  onCheck($tempos, $items, 'mdi-radiobox-blank', 'mdi-radiobox-marked', true);
};

function musicasInit() {
  var $musicas = document.querySelectorAll('.musicas-list')[0];
  if (!$musicas) return;

  for (var i = 0, len = musicas.length; i < len; i++) {
    var $li = document.createElement('li');
    var label = '<label for="' + musicas[i].id + '"></label>';
    var $input = document.createElement('input');
    var $i = document.createElement('i');
    var $text = document.createTextNode(musicas[i].name);

    $i.classList.add('mdi');
    $i.classList.add('mdi-checkbox-blank-outline');

    $input.type = 'checkbox';
    $input.id = musicas[i].id;
    $input.name = 'musicas';

    var $label = stringToHtml(label);
    $label.appendChild($input);
    $label.appendChild($i);
    console.log($label);
    $label.appendChild($text);

    $li.appendChild($label);

    $musicas.appendChild($li);
  }

  var $items = $musicas.querySelectorAll('input[name=musicas]');
  onCheck($musicas, $items, 'mdi-checkbox-blank-outline', 'mdi-checkbox-marked', false);
};

function onCheck($lista, $items, from, to, radio) {
  for (var i = 0, len = $items.length; i < len; i++) {
    $items[i].addEventListener('change', function() {
      var $next = this.nextSibling;
      if (radio) {
        var m = $lista.querySelectorAll('.'+to)[0];
        m && m.classList.remove(to) === undefined && m.classList.add(from);
        $next.classList.add(to);
        $next.classList.remove(from);
      }
      else {
        $next.classList.toggle(to);
        $next.classList.toggle(from);
      }
    });
  };
};

(function() {
  toggleSidebarInit();
  situacoesInit();
  temposInit();
  musicasInit();
})();
