document.addEventListener("DOMContentLoaded", function () {

  // --- Scroll-reveal: fade/slide elements in as they enter the viewport ---
  var revealTargets = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IntersectionObserver support (or nothing to reveal) — just show everything
    revealTargets.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  // --- Click-to-copy on cheat code table cells (cheats.html) ---
  document.querySelectorAll("table td").forEach(function (cell) {
    cell.addEventListener("click", function () {
      var text = cell.textContent.trim();
      if (!text) return;

      var restore = function () {
        cell.classList.remove("copied");
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(function () {});
      }

      cell.classList.add("copied");
      setTimeout(restore, 500);
    });
  });

});
