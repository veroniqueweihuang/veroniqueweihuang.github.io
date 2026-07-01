/* ── Image protection: deters casual right-click / drag saving ──
   Not foolproof (screenshots, dev tools, and disabling JS still work),
   but stops the "right click → Save As" path for most visitors.       */
(function () {
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
})();
