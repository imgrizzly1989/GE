/* Garden Expresse — script partagé des pages SEO */
(function () {
  "use strict";
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }
  var burger = document.getElementById("burger");
  if (burger && header) {
    burger.addEventListener("click", function () { header.classList.toggle("menu-open"); });
    document.querySelectorAll(".mm-link").forEach(function (l) { l.addEventListener("click", function () { header.classList.remove("menu-open"); }); });
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else { document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); }); }
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item"); if(!item) return;
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) { if (o !== item) { o.classList.remove("open"); var q=o.querySelector(".faq-q"); if(q) q.setAttribute("aria-expanded", "false"); } });
      item.classList.toggle("open", !isOpen); btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
  var toast = document.getElementById("toast");
  function showToast(msg) { if (!toast) return; var t=toast.querySelector('.toast-msg'); if(t && msg) t.textContent=msg; toast.classList.add("show"); setTimeout(function () { toast.classList.remove("show"); }, 4200); }
  function valuePairs(form) {
    var pairs=[]; form.querySelectorAll('input,select,textarea').forEach(function(f){ if(!f.name) return; var label=(form.querySelector('label[for="'+f.id+'"]')||f.closest('.field-wrap')&&f.closest('.field-wrap').querySelector('label')); pairs.push((label?label.textContent:f.name)+': '+(f.value||'—')); });
    return pairs.join('
');
  }
  document.querySelectorAll("form[data-quote]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.checkValidity && !form.checkValidity()) { form.reportValidity(); return; }
      var msg = encodeURIComponent('Bonjour Garden Expresse, voici ma demande de devis :
' + valuePairs(form));
      showToast('Ouverture de WhatsApp pour envoyer votre demande.');
      window.open('https://wa.me/212650542999?text=' + msg, '_blank', 'noopener');
    });
  });
})();
