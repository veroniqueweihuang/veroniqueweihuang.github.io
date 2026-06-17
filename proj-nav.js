/* ── Project sequence (single source of truth for Prev/Next nav) ──
   To add a new project to the rotation: add one entry below, in the
   position you want it to appear in the sequence. slug must exactly
   match the project's folder name. Nothing else needs to change —
   every page's Prev/Next links and titles are generated from this list. */
var PROJECT_SEQUENCE = [
  { slug: 'architecture-at-the-intersection', title: 'Architecture at the Intersection of Destination and Transition' },
  { slug: 'a-zenith-factory-showroom',         title: 'A-Zenith Factory Showroom' },
  { slug: 'guangzhou-fashion-headquarters',     title: 'Guangzhou Fashion Headquarters' },
  { slug: 'u-thant-place',                      title: 'U-Thant Place' },
  { slug: 'house-with-two-faces',                title: 'House with Two Faces' },
  { slug: 'a-courtyard-house',                   title: 'A Courtyard House' },
  { slug: 'in-memory-of',                        title: 'In Memory of...' },
  { slug: 'quanzhou',                            title: 'The Imaginary Cultural Landscape of the City and Harbor in Quanzhou' }
];

(function () {
  function currentSlug() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || '';
  }

  function init() {
    var slug = currentSlug();
    var idx = -1;
    for (var i = 0; i < PROJECT_SEQUENCE.length; i++) {
      if (PROJECT_SEQUENCE[i].slug === slug) { idx = i; break; }
    }
    if (idx === -1) return; // current page isn't in the list — leave nav untouched

    var n = PROJECT_SEQUENCE.length;
    var prev = PROJECT_SEQUENCE[(idx - 1 + n) % n];
    var next = PROJECT_SEQUENCE[(idx + 1) % n];

    var prevLink = document.getElementById('proj-nav-prev-link');
    var prevTitle = document.getElementById('proj-nav-prev-title');
    var nextLink = document.getElementById('proj-nav-next-link');
    var nextTitle = document.getElementById('proj-nav-next-title');

    if (prevLink) prevLink.setAttribute('href', '../' + prev.slug + '/');
    if (prevTitle) prevTitle.textContent = prev.title;
    if (nextLink) nextLink.setAttribute('href', '../' + next.slug + '/');
    if (nextTitle) nextTitle.textContent = next.title;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
