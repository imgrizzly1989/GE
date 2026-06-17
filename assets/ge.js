/* Garden Express — script partagé des pages SEO */
(function () {
  "use strict";

  /* Année dynamique */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Header au scroll */
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Menu mobile */
  var burger = document.getElementById("burger");
  if (burger && header) {
    burger.addEventListener("click", function () { header.classList.toggle("menu-open"); });
    document.querySelectorAll(".mm-link").forEach(function (l) {
      l.addEventListener("click", function () { header.classList.remove("menu-open"); });
    });
  }

  /* Révélation au scroll */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* FAQ accordéon */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      // fermer les autres (comportement accordéon)
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        if (o !== item) { o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* Formulaire devis -> toast (capture la soumission, démo front) */
  var toast = document.getElementById("toast");
  function showToast() {
    if (!toast) return;
    toast.classList.add("show");
    setTimeout(function () { toast.classList.remove("show"); }, 4200);
  }
  document.querySelectorAll("form[data-quote]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.reset();
      showToast();
    });
  });
})();
