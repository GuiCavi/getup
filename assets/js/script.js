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

    $situacoes.appendChild($li);
  };
};

function temposInit() {
  var $tempos = document.querySelectorAll('.tempos')[0];
  if (!$tempos) return;
  var $items = $tempos.querySelectorAll('input[name=tempos]');
  for (var i = 0, len = $items.length; i < len; i++) {
    $items[i].addEventListener('change', function() {
      console.dir(this);
      var m = $tempos.querySelectorAll('.mdi-radiobox-marked')[0];
      var $next = this.nextSibling;
      m && m.classList.remove('mdi-radiobox-marked') === undefined && m.classList.add('mdi-radiobox-blank');

      $next.classList.add('mdi-radiobox-marked');
      $next.classList.remove('mdi-radiobox-blank');
    });
  };
};

(function() {
  toggleSidebarInit();
  situacoesInit();
  temposInit();
})();
