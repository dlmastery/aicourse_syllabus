// Claude-theme sidebar enhancement: make each part-title section toggle
// (click to expand, click again to collapse), with state remembered.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var titles = document.querySelectorAll('#sidebar .part-title');
    titles.forEach(function (t) {
      var key = 'fold:' + (t.textContent || '').trim();
      function items() {
        var out = [], e = t.nextElementSibling;
        while (e && !e.classList.contains('part-title')) {
          if (e.classList.contains('chapter-item')) out.push(e);
          e = e.nextElementSibling;
        }
        return out;
      }
      function apply(collapsed) {
        items().forEach(function (it) { it.style.display = collapsed ? 'none' : ''; });
        t.classList.toggle('collapsed', collapsed);
      }
      t.style.cursor = 'pointer';
      t.setAttribute('title', 'Click to expand / collapse');
      if (localStorage.getItem(key) === '1') apply(true);
      t.addEventListener('click', function () {
        var collapsed = localStorage.getItem(key) === '1';
        collapsed = !collapsed;
        localStorage.setItem(key, collapsed ? '1' : '0');
        apply(collapsed);
      });
    });
  });
})();
