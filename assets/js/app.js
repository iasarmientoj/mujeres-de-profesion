/* =========================================================
   MUJERES DE PROFESIÓN — núcleo
   Layout (header/footer), animaciones, lightbox, modal,
   álbum (almacenamiento local) y retos coleccionables.
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const ROOT = document.body.dataset.root || "";
  const R = (p = "") => ROOT + p;
  const IMG = (slug, name, small) => R(`assets/img/${slug}/${name}${small ? "-s" : ""}.jpg`);
  const W = (slug) => MDP.women.find((w) => w.slug === slug);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Iconos ---------- */
  const I = {
    arr: '<svg class="arr" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
    right: '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M2 9h13M10 4l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
    left: '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M16 9H3M8 4 3 9l5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
    close: '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3 3 15" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
    lock: '<svg class="lock" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" fill="none" stroke="currentColor" stroke-width="1"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1"/><path d="M12 14.5v2.5" stroke="currentColor"/></svg>',
    spark: '<svg class="spark" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0c.5 4 3.5 7.5 8 8-4.5.5-7.5 4-8 8-.5-4-3.5-7.5-8-8 4.5-.5 7.5-4 8-8Z" fill="currentColor"/></svg>',
    album: '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" fill="none" stroke="currentColor"/><path d="M10 3.5v13M5 7h3M5 10h3M12 7h3" stroke="currentColor"/></svg>',
    play: '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>',
    stamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-dasharray="2 2"/><path d="M8.5 12.5l2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>'
  };
  const stepline = (cls = "") =>
    `<svg class="stepline ${cls}" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 56 H760 L812 8 H1080 L1140 62 H1440"/></svg>`;
  const folio = (n) =>
    `<span class="folio"><svg viewBox="0 0 9 34" aria-hidden="true"><path d="M8 0v12c0 3-5 3-5 5s5 2 5 5v12"/></svg>${n}</span>`;

  /* =========================================================
     ÁLBUM — almacenamiento local (solo en este navegador)
     ========================================================= */
  const KEY = "mdp-album-v1";
  const Store = {
    data: { got: {}, stamps: {} },
    load() {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) this.data = Object.assign({ got: {}, stamps: {} }, JSON.parse(raw));
      } catch (e) { /* almacenamiento no disponible */ }
      return this;
    },
    save() { try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) {} },
    has(id) { return !!this.data.got[id]; },
    add(id) { if (!this.data.got[id]) { this.data.got[id] = Date.now(); this.save(); } },
    stamp(n) { const k = "qr" + n; const isNew = !this.data.stamps[k]; if (isNew) { this.data.stamps[k] = Date.now(); this.save(); } return isNew; },
    hasStamp(n) { return !!this.data.stamps["qr" + n]; },
    count() { return Object.keys(this.data.got).length; },
    countFor(slug) { return (MDP.stickers[slug] || []).filter((_, i) => this.has(`${slug}-${i + 1}`)).length; },
    total() { return Object.values(MDP.stickers).reduce((a, l) => a + l.length, 0); },
    reset() { this.data = { got: {}, stamps: {} }; this.save(); }
  };
  Store.load();

  const allStickers = () => {
    const out = [];
    MDP.women.forEach((w) => (MDP.stickers[w.slug] || []).forEach((s, i) => out.push(Object.assign({ id: `${w.slug}-${i + 1}`, n: i + 1, w }, s))));
    return out;
  };
  const stickerById = (id) => allStickers().find((s) => s.id === id);

  /* =========================================================
     HEADER / FOOTER
     ========================================================= */
  const NAV = [
    ["investigacion/", "Investigación", "investigacion"],
    ["mujeres/", "Mujeres", "mujeres"],
    ["podcast/", "Podcast", "podcast"],
    ["album/", "Álbum", "album"],
    ["libro/", "Libro", "libro"]
  ];

  function renderHeader() {
    const cur = document.body.dataset.nav;
    const links = NAV.map(([h, l, k]) => `<a href="${R(h)}"${cur === k ? ' aria-current="page"' : ""}>${l}</a>`).join("");
    const header = document.createElement("header");
    const hmode = document.body.dataset.header || (document.body.dataset.page === "perfil" ? "solid" : "");
    header.className = "site-header" + (hmode ? " " + hmode : "");
    header.id = "hdr";
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="${R("")}" aria-label="Mujeres de Profesión — inicio">
          <img class="d" src="${R("assets/brand/logo-dark.png")}" alt="Mujeres de Profesión" width="1000" height="460">
          <img class="w" src="${R("assets/brand/logo-white.png")}" alt="" width="1000" height="460">
        </a>
        <nav class="nav" aria-label="Principal">${links}</nav>
        <div class="header-tools">
          <a class="album-pill" href="${R("album/")}" title="Tu álbum de momentos">${I.album}<span class="lbl">Álbum</span><span data-album-count>0/40</span></a>
          <button class="burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>`;
    document.body.prepend(header);

    const mm = document.createElement("div");
    mm.className = "mobile-menu";
    mm.innerHTML =
      `<a class="mm" href="${R("")}"><small>00</small>Inicio</a>` +
      NAV.map(([h, l], i) => `<a class="mm" href="${R(h)}"><small>0${i + 1}</small>${l}</a>`).join("") +
      `<p class="mm-foot">Ingeniería | Geología · Ocho trayectorias, ocho maneras de abrir camino.</p>`;
    header.after(mm);

    const skip = document.createElement("a");
    skip.className = "skip"; skip.href = "#main"; skip.textContent = "Saltar al contenido";
    document.body.prepend(skip);

    const burger = $(".burger", header);
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 30);
      header.classList.toggle("hide", y > 400 && y > last && !document.body.classList.contains("menu-open"));
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    updateCount();
  }

  function updateCount(bump) {
    $$("[data-album-count]").forEach((e) => (e.textContent = `${Store.count()}/${Store.total()}`));
    if (bump) $$(".album-pill").forEach((p) => { p.classList.remove("bump"); void p.offsetWidth; p.classList.add("bump"); });
  }

  function renderFooter() {
    const f = document.createElement("footer");
    f.className = "site-footer";
    const credits = MDP.credits.map((c) => `<div class="credit"><b>${c.rol}</b>${c.nombres.join("<br>")}${c.org ? `<br><span>${c.org}</span>` : ""}</div>`);
    f.innerHTML = `
      <div class="wrap">
        <div class="f-top">
          <div class="f-logo">
            <img src="${R("assets/brand/logo-dark.png")}" alt="Mujeres de Profesión" width="1000" height="460">
            <p>Un fotolibro, una investigación y un podcast sobre ocho mujeres que trabajan en ingeniería y geociencias en Colombia.</p>
          </div>
          <div>
            <h5>Explora</h5>
            <ul>${NAV.map(([h, l]) => `<li><a href="${R(h)}">${l}</a></li>`).join("")}</ul>
          </div>
          <div><h5>Equipo</h5>${credits.slice(0, 3).join("")}</div>
          <div><h5>&nbsp;</h5>${credits.slice(3).join("")}</div>
        </div>
        <div class="supporters">
          <span class="eyebrow no-rule">Con el apoyo de</span>
          <img src="${R("assets/brand/apoyos.png")}" alt="ACOFI – Asociación Colombiana de Facultades de Ingeniería · Consejo Profesional Nacional de Ingenierías Eléctrica, Mecánica y Profesiones Afines · CPG Consejo Profesional de Geología · Pueblo Villano" loading="lazy">
        </div>
        <div class="f-bottom">
          <span>© ${new Date().getFullYear()} Mujeres de Profesión · ISBN ${MDP.site.isbn}</span>
          <span>${MDP.site.domain}</span>
        </div>
        <p class="f-legal">Queda prohibida la reproducción, distribución, transformación o uso total o parcial de esta obra (fotografías, textos y diseño) por cualquier medio, sin la autorización previa y por escrito del titular de los derechos de autor. Tu álbum de momentos se guarda únicamente en este navegador.</p>
      </div>`;
    document.body.append(f);
  }

  /* =========================================================
     ANIMACIONES AL HACER SCROLL
     ========================================================= */
  function initReveal(root = document) {
    $$("[data-stepline]", root).forEach((el) => { if (!el.dataset.done) { el.insertAdjacentHTML("afterbegin", stepline("draw " + (el.dataset.stepline || ""))); el.dataset.done = 1; } });
    const els = $$(".rv, .rv-img, .stepline.draw, .split-line, [data-count-to]", root).filter((e) => !e.classList.contains("in"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    // Los elementos con clip-path total no "intersectan": se observa su contenedor.
    const map = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        (map.get(en.target) || []).forEach((t) => {
          t.classList.add("in");
          if (t.dataset.countTo) countUp(t);
        });
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => {
      const watch = e.classList.contains("rv-img") ? e.parentElement : e;
      if (!map.has(watch)) map.set(watch, []);
      map.get(watch).push(e);
      io.observe(watch);
    });
  }
  function countUp(el) {
    const to = parseFloat(el.dataset.countTo), dec = +(el.dataset.dec || 0), dur = 1600, t0 = performance.now();
    const fmt = (v) => v.toFixed(dec).replace(".", ",");
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.firstChild.nodeValue = fmt(to * e);
      if (k < 1) requestAnimationFrame(step);
    };
    if (!el.firstChild || el.firstChild.nodeType !== 3) el.prepend(document.createTextNode(""));
    requestAnimationFrame(step);
  }

  /* =========================================================
     LIGHTBOX
     ========================================================= */
  const LB = {
    el: null, list: [], i: 0,
    build() {
      this.el = document.createElement("div");
      this.el.className = "lightbox";
      this.el.setAttribute("role", "dialog");
      this.el.setAttribute("aria-modal", "true");
      this.el.innerHTML = `
        <div class="lb-top"><span class="lb-count"></span><button class="lb-btn lb-close" aria-label="Cerrar">${I.close}</button></div>
        <div class="lb-stage"><button class="lb-btn lb-prev" aria-label="Anterior">${I.left}</button><img alt=""><button class="lb-btn lb-next" aria-label="Siguiente">${I.right}</button></div>
        <div class="lb-cap"></div>`;
      document.body.append(this.el);
      $(".lb-close", this.el).onclick = () => this.close();
      $(".lb-prev", this.el).onclick = () => this.go(-1);
      $(".lb-next", this.el).onclick = () => this.go(1);
      this.el.addEventListener("click", (e) => { if (e.target === this.el || e.target.classList.contains("lb-stage")) this.close(); });
      document.addEventListener("keydown", (e) => {
        if (!this.el.classList.contains("open")) return;
        if (e.key === "Escape") this.close();
        if (e.key === "ArrowLeft") this.go(-1);
        if (e.key === "ArrowRight") this.go(1);
      });
      let sx = 0;
      this.el.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
      this.el.addEventListener("touchend", (e) => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) this.go(d < 0 ? 1 : -1); });
    },
    open(list, i = 0) {
      if (!this.el) this.build();
      this.list = list; this.i = i; this.show(true);
      this.el.classList.add("open"); document.body.style.overflow = "hidden";
      $(".lb-close", this.el).focus();
    },
    close() { this.el.classList.remove("open"); document.body.style.overflow = ""; },
    go(d) { this.i = (this.i + d + this.list.length) % this.list.length; this.show(); },
    show(first) {
      const it = this.list[this.i], img = $(".lb-stage img", this.el);
      const set = () => { img.src = it.src; img.alt = it.alt || ""; img.classList.remove("swap"); };
      if (first) set(); else { img.classList.add("swap"); setTimeout(set, 180); }
      $(".lb-count", this.el).textContent = `${String(this.i + 1).padStart(2, "0")} / ${String(this.list.length).padStart(2, "0")}`;
      $(".lb-cap", this.el).innerHTML = (it.cap || "") + (it.note ? `<span class="lb-note">${it.note}</span>` : "");
    }
  };

  /* =========================================================
     MODAL
     ========================================================= */
  const Modal = {
    el: null, onClose: null,
    build() {
      this.el = document.createElement("div");
      this.el.className = "modal";
      this.el.setAttribute("role", "dialog");
      this.el.setAttribute("aria-modal", "true");
      this.el.innerHTML = `<div class="box"><button class="x" aria-label="Cerrar">${I.close}</button><div class="m-body"></div></div>`;
      document.body.append(this.el);
      $(".x", this.el).onclick = () => this.close();
      this.el.addEventListener("click", (e) => { if (e.target === this.el) this.close(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && this.el.classList.contains("open")) this.close(); });
    },
    open(html, color, onClose) {
      if (!this.el) this.build();
      $(".box", this.el).style.setProperty("--c", color || "var(--ink)");
      this.el.style.setProperty("--c", color || "var(--ink)");
      $(".m-body", this.el).innerHTML = html;
      this.onClose = onClose || null;
      this.el.classList.add("open");
      document.body.style.overflow = "hidden";
      setTimeout(() => { const f = $(".m-body button, .m-body a", this.el); f && f.focus(); }, 60);
      return $(".m-body", this.el);
    },
    close() {
      if (!this.el) return;
      this.el.classList.remove("open"); document.body.style.overflow = "";
      if (this.onClose) { const f = this.onClose; this.onClose = null; f(); }
    }
  };

  /* ---------- Toast ---------- */
  let toastT;
  function toast(html, color) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
    t.innerHTML = `<span class="sw" style="background:${color || "var(--gold)"}"></span><span>${html}</span>`;
    t.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 4200);
  }

  /* ---------- Destello de celebración ---------- */
  function burst(x, y, color) {
    const n = 22;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "burst";
      const a = (Math.PI * 2 * i) / n + Math.random() * 0.4, d = 60 + Math.random() * 90;
      p.style.cssText = `left:${x}px;top:${y}px;background:${i % 3 ? color : "var(--gold-2)"};width:${4 + Math.random() * 6}px;height:${4 + Math.random() * 6}px;`;
      document.body.append(p);
      p.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(${Math.cos(a) * d - 4}px, ${Math.sin(a) * d - 4}px) rotate(${Math.random() * 360}deg) scale(.4)`, opacity: 0 }], { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.7,.1,1)" }).onfinish = () => p.remove();
    }
  }

  /* =========================================================
     COLECCIONABLES
     ========================================================= */
  function stickerCard(s, big) {
    return `<div class="slot-card got" style="--c:${s.w.color};${big ? "width:150px;margin:0 auto;" : ""}">
      <img src="${IMG(s.w.slug, s.img, true)}" alt=""><span class="no">${s.w.no}·${s.n}</span><span class="tt">${esc(s.t)}</span></div>`;
  }

  function collectButton(id) {
    const s = stickerById(id);
    if (!s) return "";
    const got = Store.has(id);
    return `<button class="collect${got ? " got" : ""}" data-sticker="${id}" style="--c:${s.w.color}">${I.spark}<span>${got ? "Coleccionado" : "Momento coleccionable"}</span><span class="st">· ${esc(s.t)}</span></button>`;
  }

  function refreshCollectButtons() {
    $$("[data-sticker]").forEach((b) => {
      const got = Store.has(b.dataset.sticker);
      b.classList.toggle("got", got);
      const l = b.querySelector("span:not(.st)");
      if (l) l.textContent = got ? "Coleccionado" : "Momento coleccionable";
    });
  }

  function openCollect(id) {
    const s = stickerById(id);
    if (!s) return;
    if (Store.has(id)) {
      Modal.open(`<span class="eyebrow">Ya está en tu álbum</span>
        <div class="success">${stickerCard(s, true)}</div>
        <h3 style="text-align:center">${esc(s.t)}</h3>
        <p class="m-sub" style="text-align:center">${s.w.corto} · ${s.w.profesion}</p>
        <div class="actions" style="justify-content:center"><a class="btn sm" href="${R("album/")}">Ver mi álbum ${I.arr}</a></div>`, s.w.color);
      return;
    }
    const kinds = { quiz: "Responde", blank: "Completa la frase", timing: "Pulsa en el momento justo", puzzle: "Arma la imagen" };
    const body = Modal.open(`
      <span class="eyebrow">Momento coleccionable · ${s.w.no}.${s.n}</span>
      <h3>${esc(s.t)}</h3>
      <p class="m-sub">Encontraste un momento de la trayectoria de <strong>${s.w.corto}</strong>. Supera el reto para pegarlo en tu álbum.</p>
      <div class="actions"><button class="btn solid" data-go>${kinds[s.ch.type]} ${I.arr}</button><button class="btn" data-later>Más tarde</button></div>`, s.w.color);
    $("[data-later]", body).onclick = () => Modal.close();
    $("[data-go]", body).onclick = () => runChallenge(s, body);
  }

  function success(s, body) {
    Store.add(s.id);
    updateCount(true);
    refreshCollectButtons();
    document.dispatchEvent(new CustomEvent("mdp:collected", { detail: s }));
    const done = Store.countFor(s.w.slug) === MDP.stickers[s.w.slug].length;
    const all = Store.count() === Store.total();
    body.innerHTML = `
      <div class="success">
        <span class="eyebrow no-rule">¡Momento coleccionado!</span>
        <div style="margin:20px 0">${stickerCard(s, true)}</div>
        <h3>${esc(s.t)}</h3>
        <p class="m-sub">${Store.countFor(s.w.slug)} de ${MDP.stickers[s.w.slug].length} momentos de ${s.w.corto} · ${Store.count()} de ${Store.total()} en total</p>
        ${done ? `<p style="border-top:1px solid var(--line);padding-top:14px"><strong>Completaste a ${s.w.corto}.</strong> Desbloqueaste contenido nuevo en tu álbum.</p>` : ""}
        ${all ? `<p><strong>¡Álbum completo!</strong> Tienes acceso al episodio oculto.</p>` : ""}
        <div class="actions" style="justify-content:center"><button class="btn solid" data-close>Seguir explorando</button><a class="btn" href="${R("album/")}">Ver álbum ${I.arr}</a></div>
      </div>`;
    $("[data-close]", body).onclick = () => Modal.close();
    const r = $(".box", Modal.el).getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + 150, s.w.color);
  }

  function fail(body, s, msg) {
    body.insertAdjacentHTML("beforeend", `<div class="actions"><button class="btn sm" data-retry>Intentar de nuevo</button><button class="btn sm" data-close>Cerrar</button></div>`);
    if (msg) body.insertAdjacentHTML("beforeend", `<p class="m-sub" style="margin-top:14px">${msg}</p>`);
    $("[data-retry]", body).onclick = () => runChallenge(s, body);
    $("[data-close]", body).onclick = () => Modal.close();
  }

  function runChallenge(s, body) {
    const ch = s.ch;
    const head = `<span class="eyebrow">${s.w.corto} · ${esc(s.t)}</span>`;
    if (ch.type === "quiz") {
      const order = ch.o.map((o, i) => i).sort(() => Math.random() - 0.5);
      body.innerHTML = `${head}<h3>${esc(ch.q)}</h3><div class="opts">${order.map((i) => `<button class="opt" data-i="${i}">${esc(ch.o[i])}</button>`).join("")}</div>
        <p class="m-sub small" style="margin-top:14px">Pista: la respuesta está en su historia.</p>`;
      $$(".opt", body).forEach((b) => (b.onclick = () => {
        if (+b.dataset.i === ch.a) { b.classList.add("ok"); setTimeout(() => success(s, body), 550); }
        else { b.classList.add("bad"); b.disabled = true; }
      }));
    }

    if (ch.type === "blank") {
      const parts = ch.s.split("___");
      const opts = ch.o.slice().sort(() => Math.random() - 0.5);
      body.innerHTML = `${head}<h3>Completa la frase</h3>
        <p class="blank-s">${esc(parts[0])}<span class="slot" data-slot>&nbsp;</span>${esc(parts[1] || "")}</p>
        <div class="words">${opts.map((o) => `<span class="word-chip" tabindex="0" role="button" data-w="${esc(o)}">${esc(o)}</span>`).join("")}</div>
        <p class="m-sub small" style="margin-top:14px">Arrastra la palabra al espacio (o tócala).</p>`;
      const slot = $("[data-slot]", body);
      const tryWord = (chip) => {
        if (chip.dataset.w === ch.a) { slot.textContent = ch.a; chip.style.visibility = "hidden"; setTimeout(() => success(s, body), 650); }
        else { chip.classList.remove("bad"); void chip.offsetWidth; chip.classList.add("bad"); }
      };
      $$(".word-chip", body).forEach((chip) => {
        chip.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tryWord(chip); } });
        let ghost = null, moved = false, sx = 0, sy = 0;
        chip.addEventListener("pointerdown", (e) => {
          sx = e.clientX; sy = e.clientY; moved = false; chip.setPointerCapture(e.pointerId);
        });
        chip.addEventListener("pointermove", (e) => {
          if (!chip.hasPointerCapture(e.pointerId)) return;
          const dx = e.clientX - sx, dy = e.clientY - sy;
          if (!moved && Math.hypot(dx, dy) < 6) return;
          moved = true; chip.classList.add("dragging");
          chip.style.transform = `translate(${dx}px, ${dy}px)`;
          const r = slot.getBoundingClientRect();
          slot.classList.toggle("over", e.clientX > r.left - 20 && e.clientX < r.right + 20 && e.clientY > r.top - 24 && e.clientY < r.bottom + 24);
        });
        chip.addEventListener("pointerup", (e) => {
          chip.classList.remove("dragging"); chip.style.transform = "";
          const over = slot.classList.contains("over"); slot.classList.remove("over");
          if (!moved || over) tryWord(chip);
          void ghost;
        });
      });
    }

    if (ch.type === "timing") {
      const zw = 16, zl = 18 + Math.random() * 60;
      let tries = 3, pos = 0, dir = 1, raf, running = true, speed = 0.9;
      body.innerHTML = `${head}<h3>${esc(ch.q)}</h3>
        <div class="timing" data-track><span class="zone" style="left:${zl}%;width:${zw}%"></span><span class="needle"></span></div>
        <div class="timing-tries">Intentos <i></i><i></i><i></i></div>
        <div class="actions"><button class="btn solid" data-hit>¡Ahora! ${I.arr}</button></div>
        <p class="m-sub small" style="margin-top:12px">También puedes tocar la barra o usar la barra espaciadora.</p>`;
      const needle = $(".needle", body), track = $("[data-track]", body);
      const loop = () => { if (!running) return; pos += dir * speed; if (pos >= 100 || pos <= 0) { dir *= -1; pos = Math.max(0, Math.min(100, pos)); } needle.style.left = `calc(${pos}% - 1.5px)`; raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      const hit = () => {
        if (!running) return;
        if (pos >= zl - 1 && pos <= zl + zw + 1) { running = false; cancelAnimationFrame(raf); document.removeEventListener("keydown", key); needle.style.background = s.w.color; setTimeout(() => success(s, body), 450); return; }
        tries--; $$(".timing-tries i", body)[2 - tries].classList.add("used"); speed *= 0.82;
        track.animate([{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "none" }], { duration: 300 });
        if (tries <= 0) { running = false; cancelAnimationFrame(raf); document.removeEventListener("keydown", key); $("[data-hit]", body).remove(); fail(body, s, "Casi. Respira y vuelve a intentarlo."); }
      };
      const key = (e) => { if (e.code === "Space" && Modal.el.classList.contains("open")) { e.preventDefault(); hit(); } };
      document.addEventListener("keydown", key);
      $("[data-hit]", body).onclick = hit; track.onclick = hit;
      const prevClose = Modal.onClose; Modal.onClose = () => { running = false; cancelAnimationFrame(raf); document.removeEventListener("keydown", key); prevClose && prevClose(); };
    }

    if (ch.type === "puzzle") {
      const src = IMG(s.w.slug, ch.img, true);
      body.innerHTML = `${head}<h3>Arma la imagen</h3><div class="puzzle" data-pz></div>
        <p class="m-sub small">Toca dos piezas para intercambiarlas.</p>`;
      const pz = $("[data-pz]", body);
      const im = new Image();
      im.onload = () => {
        const ar = im.naturalWidth / im.naturalHeight;
        pz.style.aspectRatio = `${im.naturalWidth} / ${im.naturalHeight}`;
        pz.style.width = `min(100%, 380px, ${(46 * ar).toFixed(1)}vh)`;
        let order = [...Array(9).keys()];
        do { order.sort(() => Math.random() - 0.5); } while (order.every((v, i) => v === i) || order.filter((v, i) => v === i).length > 3);
        let sel = null;
        const draw = () => {
          pz.innerHTML = order.map((t, i) => `<button data-i="${i}" aria-label="Pieza ${i + 1}" style="background-image:url('${src}');background-position:${(t % 3) * 50}% ${Math.floor(t / 3) * 50}%"></button>`).join("");
          $$("button", pz).forEach((b) => (b.onclick = () => {
            const i = +b.dataset.i;
            if (sel === null) { sel = i; b.classList.add("sel"); return; }
            if (sel !== i) { [order[sel], order[i]] = [order[i], order[sel]]; }
            sel = null; draw();
            if (order.every((v, k) => v === k)) { pz.classList.add("solved"); $$("button", pz).forEach((x) => (x.disabled = true)); setTimeout(() => success(s, body), 700); }
          }));
        };
        draw();
      };
      im.src = src;
    }
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-sticker]");
    if (b) { e.preventDefault(); openCollect(b.dataset.sticker); }
  });

  /* =========================================================
     Exponer utilidades a pages.js
     ========================================================= */
  window.MDPApp = { $, $$, R, IMG, W, esc, I, stepline, folio, Store, allStickers, stickerById, stickerCard, collectButton, openCollect, LB, Modal, toast, burst, initReveal, updateCount, refreshCollectButtons };

  /* ---------- Arranque ---------- */
  const bare = document.body.dataset.bare === "1";
  if (!bare) renderHeader();
  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (window.MDPPages && MDPPages[page]) MDPPages[page]();
    if (!bare) renderFooter();
    initReveal();
  });
})();
