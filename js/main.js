/* ============================================================
   EKLEIPSIS FEST 2026 — main.js
   ============================================================ */

// ── ICONOS LUCIDE ─────────────────────────────────────────────
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// ── MENÚ MÓVIL ─────────────────────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const mainNav    = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });
  });
}

// ── ACORDEÓN PROGRAMA ──────────────────────────────────────────
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});


/* ── MAPA INTERACTIVO ───────────────────────────────────── */

const mapPoints = document.querySelectorAll(".map-point");
const mapInfo = document.getElementById("mapInfo");

if (mapPoints.length && mapInfo) {
  mapPoints.forEach((point) => {
    point.addEventListener("click", () => {
      const title = point.getAttribute("data-title");
      const text = point.getAttribute("data-text");
      const img = point.getAttribute("data-img");

      mapPoints.forEach((p) => p.classList.remove("active"));
      point.classList.add("active");

      mapInfo.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
        <img
          src="${img}"
          alt="${title}"
          class="map-info-img"
          loading="lazy"
          decoding="async">
      `;
    });
  });
}

// ── DROPDOWN IDIOMA MÓVIL ──────────────────────────────────────
const langSwitcher = document.querySelector(".language-switcher");

if (langSwitcher) {
  langSwitcher.addEventListener("click", (e) => {
    
    e.stopPropagation();
    const clickedBtn = e.target.closest(".lang-btn");
    if (!clickedBtn) return;
    if (!langSwitcher.classList.contains("open")) {
      langSwitcher.classList.add("open");
    } else {
      langSwitcher.classList.remove("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove("open");
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      langSwitcher.classList.remove("open");
    });
  }
}