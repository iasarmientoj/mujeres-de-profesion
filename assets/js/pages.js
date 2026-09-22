/* =========================================================
   MUJERES DE PROFESIÓN — renderizado de cada página
   ========================================================= */
(function () {
  "use strict";
  const A = window.MDPApp;
  const { $, $$, R, IMG, W, esc, I, stepline, folio, Store } = A;
  const rich = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const initials = (w) => w.corto.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  const disc = (id) => MDP.research.disciplinas.find((d) => d.id === id);
  const pct = (v) => String(v).replace(".", ",") + " %";
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  function wireXLinks(root = document) {
    $$("[data-x]", root).forEach((a) => {
      const [k, v] = a.dataset.x.split(":");
      if (k === "research") { a.href = R(`investigacion/#d-${v}`); a.title = "Ver en la investigación"; }
    });
  }

  function womanCard(w, i) {
    return `<a class="wcard rv rv-d${i % 4}" href="${R(`mujeres/${w.slug}/`)}" style="--c:${w.color}" data-slug="${w.slug}" data-disc="${w.disciplina}" data-int="${w.intereses.join(" ")}">
      <div class="inner">
        <div class="face front">
          <img src="${IMG(w.slug, w.card, true)}" alt="${esc(w.nombre)}" loading="lazy" style="object-position:${w.cardPos || "50% 30%"}">
          <span class="no">${w.no}</span>
          <div class="cap"><div class="n">${esc(w.corto)}</div><div class="p">${esc(w.profesion)}</div></div>
        </div>
        <div class="face back">
          <div class="word">${esc(w.palabra)}</div>
          <p class="q">“${esc(w.cita)}”</p>
          <div class="go"><span>Conoce su historia</span>${I.right}</div>
        </div>
      </div>
    </a>`;
  }

  const P = {};

  /* =========================================================
     INICIO
     ========================================================= */
  P.home = function () {
    const hero = $(".hero");
    const stage = $(".hero-photo", hero);
    const hookEl = $(".hero-hook", hero);
    const who = $(".hero-kicker .who", hero);
    const pill = $(".hero-pill", hero);
    const prog = $(".hero-progress", hero);
    const DUR = 6500;

    // Una frase gancho por mujer, en orden aleatorio (distinto en cada visita)
    let seen = {};
    try { seen = JSON.parse(localStorage.getItem("mdp-hooks") || "{}"); } catch (e) {}
    const slides = shuffle(MDP.women).map((w) => {
      const opts = MDP.hooks.filter((h) => h.w === w.slug);
      const fresh = opts.filter((h) => !seen[h.h]);
      const pick = (fresh.length ? fresh : opts)[Math.floor(Math.random() * (fresh.length ? fresh : opts).length)];
      return { w, h: pick.h };
    });
    const first = slides[0];
    try { seen[first.h] = 1; if (Object.keys(seen).length > MDP.hooks.length - 8) seen = {}; localStorage.setItem("mdp-hooks", JSON.stringify(seen)); } catch (e) {}

    stage.innerHTML = slides.map((s) => `<img src="${IMG(s.w.slug, s.w.hero.img)}" alt="${esc(s.w.nombre)}, ${esc(s.w.profesion)}" style="object-position:${s.w.hero.pos}" ${s === first ? "" : 'loading="lazy"'}>`).join("");
    prog.innerHTML = slides.map((s, i) => `<button aria-label="${esc(s.w.corto)}" data-i="${i}"></button>`).join("");
    prog.style.setProperty("--dur", DUR + "ms");
    const imgs = $$("img", stage), bars = $$("button", prog);
    let cur = -1, timer;

    const setHook = (text, instant) => {
      // cada palabra en su máscara; *texto* se muestra en itálica
      const toks = []; let em = false, prevSpace = true;
      text.split(/(\*)/).forEach((part) => {
        if (part === "*") { em = !em; return; }
        if (!part) return;
        const glue = toks.length && !prevSpace && !/^\s/.test(part);
        prevSpace = /\s$/.test(part);
        part.split(/\s+/).filter(Boolean).forEach((word, k) => {
          const piece = `${em ? "<em>" : ""}${esc(word)}${em ? "</em>" : ""}`;
          if (k === 0 && glue) toks[toks.length - 1] += piece; else toks.push(piece);
        });
      });
      hookEl.innerHTML = toks.map((t) => `<span class="w"><span>${t}</span></span>`).join(" ");
      $$(".w > span", hookEl).forEach((s, i) => (s.style.transitionDelay = instant ? "0s" : `${0.04 * i}s`));
      hookEl.classList.remove("hide");
      void hookEl.offsetWidth; // fuerza el reflujo para que la transición arranque
      hookEl.classList.add("show");
    };

    const go = (i) => {
      if (i === cur) return;
      const s = slides[i], prev = cur;
      cur = i;
      imgs.forEach((im, k) => { im.classList.remove("on"); if (k !== prev) im.classList.remove("off"); });
      if (prev > -1) imgs[prev].classList.add("off");
      imgs[i].classList.add("on");
      setTimeout(() => { if (prev > -1 && prev !== cur) imgs[prev].classList.remove("off"); }, 1500);

      bars.forEach((b, k) => { b.classList.toggle("done", k < i); b.classList.remove("active"); });
      void bars[i].offsetWidth; bars[i].classList.add("active");

      const apply = () => {
        who.textContent = `${s.w.no} — ${s.w.nombre}`;
        pill.style.setProperty("--c", s.w.color);
        pill.innerHTML = `
          <div class="side"><span class="dot" style="background:${s.w.color}">${initials(s.w)}</span><span><span class="lbl">Profesión</span><br><span class="val">${esc(s.w.profesion)}</span></span></div>
          <span class="dash"></span>
          <div class="side r"><span class="dot" style="background:var(--ink)">${I.spark.replace('class="spark"', 'style="width:14px;height:14px"')}</span><span><span class="lbl">Su palabra</span><br><span class="val">${esc(s.w.palabra)}</span></span></div>`;
        pill.classList.remove("swap");
        setHook(s.h, prev === -1);
        hookEl.dataset.href = R(`mujeres/${s.w.slug}/`);
      };
      if (prev === -1) apply();
      else { hookEl.classList.remove("show"); hookEl.classList.add("hide"); pill.classList.add("swap"); setTimeout(apply, 520); }

      clearTimeout(timer);
      timer = setTimeout(() => go((cur + 1) % slides.length), DUR);
    };

    bars.forEach((b) => (b.onclick = () => go(+b.dataset.i)));
    const open = () => (location.href = hookEl.dataset.href);
    hookEl.addEventListener("click", open);
    stage.addEventListener("click", open);
    stage.style.cursor = "pointer";
    let remaining = DUR, started = 0;
    hero.addEventListener("mouseenter", () => { hero.classList.add("paused"); clearTimeout(timer); });
    hero.addEventListener("mouseleave", () => { hero.classList.remove("paused"); clearTimeout(timer); timer = setTimeout(() => go((cur + 1) % slides.length), 2500); });
    void remaining; void started;
    go(0);

    // Tarjeta de álbum en el hero
    const mini = $(".tile.cta .mini-album");
    if (mini) mini.innerHTML = MDP.women.map((w) => `<i class="${Store.countFor(w.slug) ? "got" : ""}" title="${esc(w.corto)}"></i>`).join("");
    const ct = $(".tile.cta [data-cta-t]");
    if (ct && Store.count()) ct.textContent = `Llevas ${Store.count()} de ${Store.total()} momentos. Sigue coleccionando.`;

    // Grilla de mujeres
    const grid = $("[data-women-grid]");
    if (grid) grid.innerHTML = MDP.women.map(womanCard).join("");

    // Teaser de la exposición: próximo evento o fechas de la exposición
    const ex = $("[data-expo-teaser]");
    if (ex) {
      const { next } = agendaSplit();
      ex.textContent = next.length ? `Próximo: ${next[0].titulo} · ${next[0].fecha.split("-").reverse().join("/")}` : (MDP.exposicion.fechas || "Fechas próximamente");
    }

    // Teaser del álbum
    const at = $("[data-album-teaser]");
    if (at) {
      at.innerHTML = MDP.women.map((w) => {
        const n = Store.countFor(w.slug), t = MDP.stickers[w.slug].length;
        return `<a href="${R(`mujeres/${w.slug}/`)}" style="--c:${w.color};display:grid;grid-template-columns:120px 1fr 44px;gap:14px;align-items:center;padding:12px 0;border-bottom:1px solid var(--line)">
          <span class="small">${esc(w.corto)}</span>
          <span style="display:grid;grid-template-columns:repeat(${t},1fr);gap:4px">${Array.from({ length: t }, (_, k) => `<i style="height:22px;border:1px ${k < n ? "solid" : "dashed"} ${k < n ? w.color : "var(--line-2)"};background:${k < n ? w.color : "transparent"};display:block"></i>`).join("")}</span>
          <span class="small muted num" style="text-align:right">${n}/${t}</span></a>`;
      }).join("");
    }
  };

  /* =========================================================
     MUJERES (índice)
     ========================================================= */
  P.mujeres = function () {
    const grid = $("[data-women-grid]");
    grid.innerHTML = MDP.women.map(womanCard).join("");
    const cards = $$(".wcard", grid);
    cards.forEach((c) => c.classList.add("flipped"));

    // "Concéntrese": las cartas aparecen boca abajo y se voltean una a una
    let revealed = false;
    const reveal = () => {
      if (revealed) return; revealed = true;
      shuffle(cards).forEach((c, i) => setTimeout(() => c.classList.remove("flipped"), 350 + i * 170));
    };
    $("[data-reveal]").addEventListener("click", (e) => {
      e.preventDefault();
      $("#trayectorias").scrollIntoView({ behavior: "smooth" });
      setTimeout(reveal, 500);
    });
    const io = new IntersectionObserver((en) => { if (en[0].isIntersecting) { setTimeout(reveal, 300); io.disconnect(); } }, { threshold: 0.35 });
    io.observe(grid);

    // Explorar por profesión / intereses
    const bar = $("[data-explore]");
    const chipsEl = $(".chips", bar);
    const modes = {
      prof: [{ id: "*", label: "Todas" }].concat(MDP.women.map((w) => ({ id: w.disciplina, label: disc(w.disciplina).nombre }))),
      int: [{ id: "*", label: "Todos" }].concat(MDP.interests)
    };
    let mode = "prof";
    const drawChips = () => {
      chipsEl.innerHTML = modes[mode].map((c, i) => `<button class="chip${i === 0 ? " on" : ""}" data-id="${c.id}">${esc(c.label)}</button>`).join("");
      $$(".chip", chipsEl).forEach((b) => (b.onclick = () => {
        $$(".chip", chipsEl).forEach((x) => x.classList.remove("on")); b.classList.add("on");
        const id = b.dataset.id;
        cards.forEach((c) => {
          const ok = id === "*" || (mode === "prof" ? c.dataset.disc === id : c.dataset.int.split(" ").includes(id));
          c.classList.toggle("hidden-f", !ok);
          c.classList.remove("flipped");
        });
        revealed = true;
      }));
    };
    $$(".explore-tabs button", bar).forEach((b) => (b.onclick = () => {
      $$(".explore-tabs button", bar).forEach((x) => x.classList.remove("on")); b.classList.add("on");
      mode = b.dataset.mode; drawChips(); cards.forEach((c) => c.classList.remove("hidden-f"));
    }));
    drawChips();

    // La red
    const net = $("[data-network]");
    if (net) {
      const Wd = 1000, H = 560, cx = Wd / 2, cy = H / 2, rx = 400, ry = 210;
      const pos = MDP.women.map((w, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 8; return { w, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) }; });
      const P0 = (s) => pos.find((p) => p.w.slug === s);
      const pairs = [];
      MDP.women.forEach((w) => { const k = [w.slug, w.conexion.con].sort().join("|"); if (!pairs.find((p) => p.k === k)) pairs.push({ k, a: w.slug, b: w.conexion.con, t: w.conexion.texto }); });
      const edge = (p) => { const A1 = P0(p.a), B = P0(p.b); const mx = (A1.x + B.x) / 2, my = (A1.y + B.y) / 2; const qx = mx + (cx - mx) * 0.55, qy = my + (cy - my) * 0.55; return `<path class="edge" data-k="${p.k}" d="M${A1.x} ${A1.y} Q${qx} ${qy} ${B.x} ${B.y}"/>`; };
      // Hilo común tenue: todas se conectan con el centro ("abrir camino")
      const center = `<g class="center"><circle cx="${cx}" cy="${cy}" r="3" fill="var(--cream)"/><text x="${cx}" y="${cy + 26}" text-anchor="middle" style="font-family:var(--ff);font-size:11px;letter-spacing:.3em;fill:var(--cream-2)">ABRIR CAMINO</text></g>`;
      const spokes = pos.map((p) => `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(232,222,196,.08)"/>`).join("");
      const nodes = pos.map((p) => `
        <g class="node" data-s="${p.w.slug}" transform="translate(${p.x} ${p.y})" tabindex="0" role="link" aria-label="${esc(p.w.nombre)}">
          <clipPath id="c-${p.w.slug}"><circle r="34"/></clipPath>
          <image href="${IMG(p.w.slug, p.w.card, true)}" x="-50" y="-50" width="100" height="100" preserveAspectRatio="xMidYMid slice" clip-path="url(#c-${p.w.slug})" style="filter:grayscale(1)"/>
          <circle class="ring" r="42"/>
          <text y="${p.y > cy ? 66 : -54}" text-anchor="middle">${esc(p.w.corto)}</text>
          <text class="w" y="${p.y > cy ? 82 : -72}" text-anchor="middle">${esc(p.w.palabra)}</text>
        </g>`).join("");
      net.innerHTML = `<svg viewBox="-40 -60 ${Wd + 80} ${H + 140}" role="img" aria-label="Red de conexiones entre las ocho mujeres">${spokes}${pairs.map(edge).join("")}${center}${nodes}</svg>`;
      const note = $("[data-network-note]");
      const hot = (slug) => {
        $$(".node", net).forEach((n) => n.classList.remove("hot")); $$(".edge", net).forEach((e) => e.classList.remove("hot"));
        if (!slug) { note.innerHTML = "Pasa el cursor (o toca) sobre una mujer para descubrir con quién se conecta su historia."; return; }
        const w = W(slug), p = pairs.find((x) => x.a === slug || x.b === slug);
        $(`.node[data-s="${slug}"]`, net).classList.add("hot");
        $(`.node[data-s="${w.conexion.con}"]`, net).classList.add("hot");
        $(`.edge[data-k="${p.k}"]`, net).classList.add("hot");
        note.innerHTML = `<strong style="font-style:normal">${esc(w.corto)} ↔ ${esc(W(w.conexion.con).corto)}.</strong> ${esc(w.conexion.texto)}`;
      };
      $$(".node", net).forEach((n) => {
        n.addEventListener("mouseenter", () => hot(n.dataset.s));
        n.addEventListener("focus", () => hot(n.dataset.s));
        n.addEventListener("click", () => { if (n.classList.contains("hot") || matchMedia("(hover:hover)").matches) location.href = R(`mujeres/${n.dataset.s}/`); else hot(n.dataset.s); });
        n.addEventListener("keydown", (e) => { if (e.key === "Enter") location.href = R(`mujeres/${n.dataset.s}/`); });
      });
      net.addEventListener("mouseleave", () => hot(null));
      hot(null);
    }
  };

  /* =========================================================
     PERFIL INDIVIDUAL — cuatro actos
     ========================================================= */
  P.perfil = function () {
    const slug = document.body.dataset.slug;
    const w = W(slug);
    const idx = MDP.women.indexOf(w);
    const prev = MDP.women[(idx + 7) % 8], next = MDP.women[(idx + 1) % 8];
    const st = (MDP.stickers[slug] || []).map((s, i) => Object.assign({ id: `${slug}-${i + 1}` }, s));
    const collects = (act) => { const l = st.filter((s) => s.act === act); return l.length ? `<div class="collect-row">${l.map((s) => A.collectButton(s.id)).join("")}</div>` : ""; };
    const d = disc(w.disciplina);
    document.title = `${w.nombre} · ${w.profesion} — Mujeres de Profesión`;

    const photo = (name, cap, s) => `<figure class="s-${s} rv"><div class="ph rv-img" data-lb="${name}"><img src="${IMG(slug, name)}" alt="${esc(cap || w.corto)}" loading="lazy"></div>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`;
    const blocks = (list) => list.map((b) => {
      if (b.t === "txt") return `<div class="txt${b.r ? " r" : ""} rv">${b.label ? `<span class="label">${esc(b.label)}</span>` : ""}<p>${b.html}</p></div>`;
      if (b.t === "ph") return photo(b.img, b.cap, b.s);
      if (b.t === "pull") return `<p class="pull rv">${esc(b.html)}</p>`;
      return "";
    }).join("");

    const actHead = (n, t, h) => `<div class="act-head rv"><div class="roman">${n}</div><div><div class="t">${t}</div><h2>${esc(h)}</h2></div></div>`;
    const a = w.actos;
    const main = $("#main");
    main.style.setProperty("--c", w.color);
    main.innerHTML = `
      <section class="p-hero" style="--c:${w.color}">
        <div class="ph-img"><img class="rv-img" src="${IMG(slug, w.hero.img)}" alt="${esc(w.nombre)}" style="object-position:${w.hero.pos}"></div>
        <div class="ph-copy">
          ${stepline("draw")}
          <div>
            <div class="no rv">${w.no} / 08 · Mujeres de Profesión</div>
            <h1 class="rv rv-d1">${esc(w.nombre)}</h1>
            <p class="prof rv rv-d2">${esc(w.profesion)} <span class="bracket">${esc(w.profesionEn)}</span></p>
            <div class="word rv rv-d2">${esc(w.palabra)}</div>
            <div class="intro rv rv-d3">${w.intro.map((p) => `<p>${esc(p)}</p>`).join("")}<p><em>${esc(w.cita)}</em></p></div>
          </div>
          <nav class="acts-nav rv rv-d4" aria-label="Actos">
            <a href="#acto-1"><b>I</b>La profesional</a><a href="#acto-2"><b>II</b>La persona</a><a href="#acto-3"><b>III</b>La mujer</a><a href="#acto-4"><b>IV</b>La red</a>
          </nav>
        </div>
      </section>

      <section class="act" id="acto-1"><div class="wrap">
        ${actHead("I", "La profesional · qué hace, cómo llegó", a.I.titulo)}
        <div class="story">${blocks(a.I.bloques)}</div>
        <div class="wrap-narrow" style="margin-top:40px">${collects("I")}</div>
      </div></section>

      <section class="act" id="acto-2" style="background:var(--paper-2)"><div class="wrap">
        ${actHead("II", "La persona · qué existe más allá del trabajo", a.II.titulo)}
        <div class="story">${blocks(a.II.bloques)}</div>
        <div style="margin-top:40px">${collects("II")}</div>
      </div></section>

      <section class="act" id="acto-3"><div class="wrap">
        ${actHead("III", "La mujer · lo que no se ve", a.III.titulo)}
        <div class="grid-2" style="align-items:center">
          <div class="veiled rv">
            <img src="${IMG(slug, "retrato-velado")}" alt="">
            <div class="v-in">${I.lock}
              <div class="v-t">Retrato reservado</div>
              <p class="v-q">El retrato final de ${esc(w.corto)} vive en el fotolibro.</p>
              <a class="btn light sm" href="${R("libro/")}">Pide el libro ${I.arr}</a>
            </div>
          </div>
          <div>
            <span class="eyebrow rv">El descubrimiento</span>
            <p class="quote rv rv-d1" style="margin-top:24px">${esc(a.III.descubrimiento)}</p>
            ${a.III.nota ? `<p class="lead rv rv-d2" style="margin-top:20px">${esc(a.III.nota)}</p>` : ""}
            ${collects("III")}
            <figure class="rv rv-d2" style="margin:34px 0 0;max-width:420px"><div class="ph" data-lb="${a.III.foto}" style="aspect-ratio:3/2;overflow:hidden;cursor:zoom-in"><img src="${IMG(slug, a.III.foto)}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div></figure>
          </div>
        </div>
      </div></section>

      <section class="act thread on-dark" id="acto-4"><div class="wrap">
        ${actHead("IV", "La red · el hilo que comparte con otras", "Su frase")}
        <p class="frase rv">${esc(a.IV.frase)}</p>
        ${collects("IV")}
        <div class="thread-grid">
          <a class="rv" href="${R(`mujeres/${w.conexion.con}/`)}">
            <span class="k">Conecta con otra historia</span>
            <div class="conn-img"><img src="${IMG(w.conexion.con, W(w.conexion.con).card, true)}" alt=""><h4>${esc(W(w.conexion.con).corto)}</h4></div>
            <p>${esc(w.conexion.texto)}</p>
            <span class="go">Ir a su historia ${I.right}</span>
          </a>
          <a class="rv rv-d1" href="${R("podcast/")}">
            <span class="k">Escúchala</span><h4>En su propia voz</h4>
            <p>En el podcast, ${esc(w.corto)} y las demás mujeres hablan de la vida profesional, la familia, la universidad y lo que significa ser mujer en la ingeniería.</p>
            <span class="go">Ir al podcast ${I.right}</span>
          </a>
          <a class="rv rv-d2" href="${R(`investigacion/#d-${w.disciplina}`)}">
            <span class="k">Investigación</span><h4>${esc(d.titulo)}</h4>
            <p>${esc(d.texto.split(". ").slice(0, 2).join(". "))}.</p>
            <span class="go">Ver los datos ${I.right}</span>
          </a>
        </div>
      </div></section>

      <section class="section tight" id="galeria"><div class="wrap">
        <div class="section-head split">
          <div><span class="eyebrow">Galería</span><h2 class="h2" style="margin-top:18px">Fotografías que no entraron al libro</h2></div>
          <p class="muted">Una selección complementaria del contexto laboral y de lo que ${esc(w.corto)} hace más allá del trabajo. Los retratos quedan reservados para el fotolibro.</p>
        </div>
        <div class="gallery-tabs" role="tablist">
          <button class="on" data-g="*">Todas</button><button data-g="contexto">Contexto</button><button data-g="hobby">${esc(w.hobby)}</button>
        </div>
        <div class="gallery" data-gallery></div>
      </div></section>

      <nav class="p-nav" aria-label="Otras mujeres">
        <a href="${R(`mujeres/${prev.slug}/`)}"><span class="k">← Anterior · ${prev.no}</span><span class="n">${esc(prev.corto)}</span></a>
        <a href="${R(`mujeres/${next.slug}/`)}"><span class="k">Siguiente · ${next.no} →</span><span class="n">${esc(next.corto)}</span></a>
      </nav>`;

    // Galería
    const names = [1, 2, 3, 4, 5].map((n) => "contexto-" + n).concat([1, 2, 3, 4, 5].map((n) => "hobby-" + n));
    const capFor = (name) => {
      for (const act of [a.I, a.II]) { const b = act.bloques.find((x) => x.t === "ph" && x.img === name && x.cap); if (b) return b.cap; }
      return name.startsWith("hobby") ? `${w.corto} · ${w.hobby}` : `${w.corto} · ${w.profesion}`;
    };
    const gal = $("[data-gallery]");
    let current = names;
    const drawGal = (f) => {
      current = names.filter((n) => f === "*" || n.startsWith(f));
      gal.innerHTML = current.map((n, i) => `<button data-i="${i}" data-n="${n.replace("-", " ").toUpperCase()}"><img src="${IMG(slug, n, true)}" alt="${esc(capFor(n))}" loading="lazy"></button>`).join("");
      $$("button", gal).forEach((b) => (b.onclick = () => A.LB.open(current.map((n) => ({ src: IMG(slug, n), cap: esc(capFor(n)), note: `${w.nombre} · Mujeres de Profesión` })), +b.dataset.i)));
    };
    $$(".gallery-tabs button").forEach((b) => (b.onclick = () => { $$(".gallery-tabs button").forEach((x) => x.classList.remove("on")); b.classList.add("on"); drawGal(b.dataset.g); }));
    drawGal("*");

    // Fotos de los actos → lightbox
    $$("[data-lb]").forEach((ph) => ph.addEventListener("click", () => {
      const i = names.indexOf(ph.dataset.lb);
      A.LB.open(names.map((n) => ({ src: IMG(slug, n), cap: esc(capFor(n)), note: `${w.nombre} · Mujeres de Profesión` })), Math.max(0, i));
    }));
    wireXLinks(main);
  };

  /* =========================================================
     INVESTIGACIÓN
     ========================================================= */
  P.investigacion = function () {
    const D = MDP.research.disciplinas;

    // Descargas
    $$("[data-pdf]").forEach((a) => {
      const url = MDP.site.researchPdf;
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
      else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.title = "Disponible muy pronto"; a.style.opacity = ".55"; a.style.cursor = "not-allowed"; a.querySelector("[data-soon]") && (a.querySelector("[data-soon]").textContent = " · pronto"); }
    });

    // Gráfico dumbbell
    const box = $("[data-dumbbell]");
    let compactMode = null;
    const render = () => {
    const compact = box.clientWidth < 620;
    if (compact === compactMode) return;
    compactMode = compact;
    // En pantallas angostas: etiquetas arriba y el eje a todo el ancho
    const VW = compact ? 420 : 980, X0 = compact ? 12 : 190, X1 = compact ? 380 : 940, rowH = compact ? 70 : 50, top = 30, max = 55;
    const x = (v) => X0 + (v / max) * (X1 - X0);
    const H = top + D.length * rowH + 30;
    let svg = `<svg class="${compact ? "compact" : ""}" viewBox="0 0 ${VW} ${H}" role="img" aria-label="Participación de mujeres graduadas por especialidad en Colombia">`;
    [0, 10, 20, 30, 40, 50].forEach((t) => { svg += `<line class="grid" x1="${x(t)}" x2="${x(t)}" y1="${top - 10}" y2="${H - 26}"/><text class="axis" x="${x(t)}" y="${H - 8}" text-anchor="middle">${t} %</text>`; });
    svg += `<line class="parity" x1="${x(50)}" x2="${x(50)}" y1="${top - 18}" y2="${H - 26}"/><text class="parity-t" x="${x(50) - 6}" y="${top - 18}" text-anchor="end">PARIDAD</text>`;
    D.forEach((d, i) => {
      const yRow = top + i * rowH + rowH / 2;
      const y = compact ? yRow + 12 : yRow;
      let marks = "";
      if (d.start && d.end) {
        marks += `<line class="conn" x1="${x(d.start[1])}" x2="${x(d.end[1])}" y1="${y}" y2="${y}"/>`;
        if (d.mid) marks += `<circle cx="${x(d.mid[1])}" cy="${y}" r="3" fill="#7d8c84"/>`;
        marks += `<circle class="p-start" cx="${x(d.start[1])}" cy="${y}" r="6"/><circle class="p-end" cx="${x(d.end[1])}" cy="${y}" r="7"/>`;
        const lo = Math.min(d.start[1], d.end[1]), hi = Math.max(d.start[1], d.end[1]);
        marks += `<text class="val" x="${x(lo) - 12}" y="${y + 4}" text-anchor="end">${pct(lo)}</text><text class="val" x="${x(hi) + 12}" y="${y + 4}">${pct(hi)}</text>`;
      } else if (d.end) {
        marks += `<circle class="p-end" cx="${x(d.end[1])}" cy="${y}" r="7"/><text class="val" x="${x(d.end[1]) + 12}" y="${y + 4}">${pct(d.end[1])} (${d.end[0]})</text>`;
      } else if (d.range) {
        marks += `<rect class="rng" x="${x(d.range[0])}" y="${y - 6}" width="${x(d.range[1]) - x(d.range[0])}" height="12" rx="4"/><text class="val" x="${x(d.range[1]) + 12}" y="${y + 4}">${d.range[0]}–${d.range[1]} %</text>`;
      } else if (d.max) {
        marks += `<rect class="rng" x="${x(0)}" y="${y - 6}" width="${x(d.max) - x(0)}" height="12" rx="4"/><text class="val" x="${x(d.max) + 12}" y="${y + 4}">menos del ${d.max} %</text>`;
      } else {
        marks += `<text class="val" x="${x(0) + 4}" y="${y + 4}" style="font-style:italic;fill:var(--muted)">sin cifra en el libro</text>`;
      }
      if (d.extra) marks += `<rect x="${x(d.extra.v) - 5}" y="${y - 5}" width="10" height="10" fill="var(--gold)" stroke="var(--paper)" stroke-width="2" transform="rotate(45 ${x(d.extra.v)} ${y})"/>`;
      const labels = compact
        ? `<text class="lab" x="${X0}" y="${yRow - 14}">${esc(d.nombre)} <tspan class="lab2">· ${esc(W(d.w).corto.toUpperCase())}</tspan></text>`
        : `<text class="lab" x="0" y="${y - 2}">${esc(d.nombre)}</text><text class="lab2" x="0" y="${y + 14}">${esc(W(d.w).corto.toUpperCase())}</text>`;
      svg += `<g class="row" data-id="${d.id}" tabindex="0"><rect class="row-bg" x="0" y="${yRow - rowH / 2}" width="${VW}" height="${rowH}"/>${labels}${marks}</g>`;
    });
    svg += `</svg>`;
    box.innerHTML = svg;
    bindRows();
    if (currentSel) $$(".row", box).forEach((r) => r.classList.toggle("on", r.dataset.id === currentSel));
    };
    let currentSel = null;

    const tip = document.createElement("div"); tip.className = "chart-tip"; document.body.append(tip);
    const tipText = (d) => {
      if (d.start && d.end) return `<b>${esc(d.nombre)}</b><br>${d.start[0]}: ${pct(d.start[1])}${d.mid ? `<br>${d.mid[0]}: ${pct(d.mid[1])}` : ""}<br>${d.end[0]}: ${pct(d.end[1])}${d.extra ? `<br>${d.extra.label}: ${pct(d.extra.v)}` : ""}${d.nota ? `<br><span style="opacity:.7">${esc(d.nota)}</span>` : ""}`;
      if (d.end) return `<b>${esc(d.nombre)}</b><br>${d.end[0]}: ${pct(d.end[1])}`;
      if (d.range) return `<b>${esc(d.nombre)}</b><br>${d.periodo}: osciló entre ${d.range[0]} % y ${d.range[1]} %`;
      if (d.max) return `<b>${esc(d.nombre)}</b><br>${d.periodo}: no alcanzó el ${d.max} %`;
      return `<b>${esc(d.nombre)}</b><br>El libro no reporta una cifra para esta especialidad.`;
    };
    const detail = $("[data-spec-detail]");
    const select = (id, scroll) => {
      const d = D.find((q) => q.id === id); if (!d) return;
      currentSel = id;
      $$(".row", box).forEach((r) => r.classList.toggle("on", r.dataset.id === id));
      const w = W(d.w);
      detail.innerHTML = `<div><span class="eyebrow">Especialidad</span><h4 style="margin-top:12px">${esc(d.titulo)}</h4><p>${esc(d.texto)}</p></div>
        <div class="who"><img src="${IMG(w.slug, w.card, true)}" alt=""><div><p>${esc(d.ella)}</p><a class="link" href="${R(`mujeres/${w.slug}/`)}">Conoce a ${esc(w.corto)} ${I.arr}</a></div></div>`;
      if (scroll) $("#especialidades").scrollIntoView({ behavior: "smooth" });
    };
    function bindRows() {
      $$(".row", box).forEach((r) => {
        const d = D.find((q) => q.id === r.dataset.id);
        r.addEventListener("mousemove", (e) => { tip.innerHTML = tipText(d); tip.classList.add("on"); const tx = Math.min(e.clientX + 16, innerWidth - 280); tip.style.left = tx + "px"; tip.style.top = e.clientY + 16 + "px"; });
        r.addEventListener("mouseleave", () => tip.classList.remove("on"));
        r.addEventListener("click", () => select(d.id));
        r.addEventListener("keydown", (e) => { if (e.key === "Enter") select(d.id); });
      });
    }
    render();
    window.addEventListener("resize", render);
    const fromHash = (location.hash.match(/^#d-(.+)/) || [])[1];
    select(fromHash || "sistemas", !!fromHash);
    window.addEventListener("hashchange", () => { const h = (location.hash.match(/^#d-(.+)/) || [])[1]; if (h) select(h, true); });

    // Tabla accesible
    const tb = $("[data-table]");
    if (tb) tb.innerHTML = `<table class="data-table"><thead><tr><th>Especialidad</th><th>Dato inicial</th><th>Dato final</th><th>Nota</th></tr></thead><tbody>${D.map((d) => `<tr><td>${esc(d.nombre)}</td><td>${d.start ? `${pct(d.start[1])} (${d.start[0]})` : d.range ? `${d.range[0]} %` : "—"}</td><td>${d.end ? `${pct(d.end[1])} (${d.end[0]})` : d.range ? `${d.range[1]} %` : d.max ? `< ${d.max} %` : "—"}</td><td>${d.extra ? `${d.extra.label}: ${pct(d.extra.v)}` : d.periodo || d.nota || (d.sinDato ? "Sin cifra en el libro" : "")}</td></tr>`).join("")}</tbody></table>`;

    // Mecanismos de la brecha
    const icons = {
      caneria: '<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 18h24v10h12V18h20M4 30h20v10h20V30h16"/><path d="M34 40v6"/><path d="M34 50c-2 3-2 5 0 6 2-1 2-3 0-6Z"/><path d="M26 46c-1.5 2-1.5 3.5 0 4 1.5-.5 1.5-2 0-4Z"/></svg>',
      techo: '<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 16h56" stroke-dasharray="3 3"/><path d="M8 12l6 4M28 12l4 4-5 3M46 12l3 4" /><circle cx="32" cy="30" r="4"/><path d="M32 34v14M24 40h16M32 48l-6 10M32 48l6 10"/><path d="M32 22v-4"/></svg>',
      matilda: '<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1"><rect x="8" y="14" width="40" height="30"/><path d="M14 24h22M14 30h28M14 36h16"/><path d="M40 46l12-12 6 6-12 12H40z"/><path d="M48 38l6 6"/></svg>',
      piso: '<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 54h56"/><path d="M8 58l4-4M18 58l4-4M28 58l4-4M38 58l4-4M48 58l4-4"/><circle cx="32" cy="16" r="4"/><path d="M32 20v16M32 36l-6 18M32 36l6 18M24 26l8-4 8 4"/><path d="M40 10l6-4M44 16h6"/></svg>'
    };
    const mg = $("[data-mech]");
    if (mg) mg.innerHTML = MDP.research.mecanismos.map((m, i) => `
      <article class="mech rv rv-d${i}">${icons[m.id]}<h4>“${esc(m.nombre)}”</h4><div class="en">${esc(m.en)}</div><p>${esc(m.texto)}</p>
        <a class="hear" href="${R(`podcast/#ep-${m.ep}`)}">${I.play.replace("<svg", '<svg style="width:12px;height:12px"')} ¿Quieres escuchar cómo lo viven? · Ep. ${m.ep} ${I.right}</a></article>`).join("");
  };

  /* =========================================================
     PODCAST
     ========================================================= */
  P.podcast = function () {
    const intro = $("[data-pod-intro]");
    if (intro) intro.innerHTML = MDP.podcastIntro.map((p, i) => `<p class="${i ? "rv rv-d" + i : "lead rv"}">${esc(p)}</p>`).join("");
    const list = $("[data-episodes]");
    const complete = Store.count() === Store.total();
    const wave = () => Array.from({ length: 70 }, () => `<i style="height:${15 + Math.random() * 85}%"></i>`).join("");
    const voices = MDP.women.map((w) => `<img src="${IMG(w.slug, w.card, true)}" alt="${esc(w.corto)}" title="${esc(w.corto)}" style="object-position:${w.cardPos}">`).join("");
    const player = (url) => url
      ? `<div class="player"><iframe src="${esc(url)}" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Reproductor de Spotify"></iframe></div>`
      : `<div class="player"><div class="soon"><span class="pbtn">${I.play}</span><span class="ws">${wave()}</span><span class="s-t">Próximamente en Spotify</span></div></div>`;
    const ep = (e, locked) => `
      <article class="ep rv${locked ? " locked" : ""}" id="ep-${e.no || "oculto"}">
        <div class="no">${e.no ? String(e.no).padStart(2, "0") : "✦"}</div>
        <div>
          <span class="theme">${esc(e.tema)}</span>
          <h3>${esc(e.titulo)}</h3>
          <p>${esc(e.desc)}</p>
          ${locked ? `<div class="soon" style="margin-top:18px">${I.lock.replace('class="lock"', 'style="width:22px;height:22px;flex:none"')}<span class="s-t" style="white-space:normal">Completa los 40 momentos del álbum para desbloquearlo · llevas ${Store.count()}</span><a class="btn sm" href="${R("album/")}" style="margin-left:auto">Álbum</a></div>` : player(e.spotify)}
          ${!locked && e.tx ? `<details class="transcript"><summary>Transcripción</summary><div class="tx">${esc(e.tx)}</div></details>` : ""}
          ${e.no ? `<div class="voices">${voices}</div>` : ""}
        </div>
        <div class="side small muted" style="text-align:right">Episodio ${e.no || "oculto"}</div>
      </article>`;
    list.innerHTML = MDP.podcast.map((e) => ep(e)).join("") + ep(MDP.podcastBonus, !complete);
    const sp = $("[data-spotify]");
    if (sp) { if (MDP.site.spotifyShow) { sp.href = MDP.site.spotifyShow; } else { sp.removeAttribute("href"); sp.style.opacity = ".55"; sp.title = "Muy pronto"; } }
    const bw = $(".bigwave");
    if (bw) bw.innerHTML = Array.from({ length: 64 }, (_, i) => `<i style="--a:${(0.15 + Math.random() * 0.4).toFixed(2)};--b:${(0.5 + Math.random() * 0.5).toFixed(2)};animation-delay:${(i * -0.09).toFixed(2)}s"></i>`).join("");
  };

  /* =========================================================
     ÁLBUM
     ========================================================= */
  P.album = function () {
    const draw = () => {
      const n = Store.count(), T = Store.total();
      $("[data-count-big]").innerHTML = `${n}<small> / ${T}</small>`;
      $("[data-bar]").style.width = (n / T) * 100 + "%";
      const book = $("[data-album]");
      book.innerHTML = MDP.women.map((w) => {
        const list = MDP.stickers[w.slug], got = Store.countFor(w.slug), done = got === list.length, d = disc(w.disciplina);
        const slots = list.map((s, i) => {
          const id = `${w.slug}-${i + 1}`;
          const actN = { I: 1, II: 2, III: 3, IV: 4 }[s.act];
          return Store.has(id)
            ? `<button class="slot-card got" data-show="${id}" style="--c:${w.color}"><img src="${IMG(w.slug, s.img, true)}" alt=""><span class="no">${w.no}·${i + 1}</span><span class="tt">${esc(s.t)}</span></button>`
            : `<a class="slot-card" href="${R(`mujeres/${w.slug}/#acto-${actN}`)}" title="Búscalo en el acto ${s.act} de su historia"><span class="no">${w.no}·${i + 1}</span><span class="tt">Acto ${s.act}</span></a>`;
        }).join("");
        const reward = done
          ? `<div class="reward open"><h4>Desbloqueado: ${esc(d.titulo)}</h4><p>${esc(d.texto)}</p><p><em>${esc(MDP.unlocks[w.slug])}</em></p><a class="link" href="${R(`investigacion/#d-${d.id}`)}">Ver en la investigación ${I.arr}</a></div>`
          : `<div class="reward locked">${I.lock.replace('class="lock"', "")}Completa los ${list.length} momentos de ${esc(w.corto)} para desbloquear la ficha de su ingeniería y lo que no cabe en el libro.</div>`;
        return `<article class="a-page rv" style="--c:${w.color};--p:${got / list.length}">
          <div class="a-head"><div><h3>${esc(w.corto)}</h3><div class="p">${esc(w.profesion)} · ${esc(w.palabra)}</div></div><div class="c"><b>${got}</b> / ${list.length}</div></div>
          <div class="slots">${slots}</div>${reward}</article>`;
      }).join("");
      $$("[data-show]", book).forEach((b) => (b.onclick = () => A.openCollect(b.dataset.show)));

      // Sellos del libro (solo escaneando los QR del fotolibro)
      const stamps = $("[data-stamps]");
      const qrs = Object.entries(MDP.qr).filter(([k, q]) => +k <= 11);
      stamps.innerHTML = qrs.map(([k, q]) => {
        const label = q.type === "woman" ? W(q.w).corto : q.titulo;
        return `<div class="stamp${Store.hasStamp(k) ? " got" : ""}" title="${esc(q.libro || "")}"><div><b>${String(k).padStart(2, "0")}</b>${Store.hasStamp(k) ? esc(label) : "Sello del libro"}</div></div>`;
      }).join("");

      const fr = $("[data-final]");
      fr.classList.toggle("locked", n < T);
      $("[data-final-lock]").innerHTML = `<div>${I.lock}<p style="margin:12px 0 0">Te faltan <strong>${T - n}</strong> momentos para desbloquear la recompensa final.</p></div>`;
      A.initReveal(book);
    };
    draw();
    document.addEventListener("mdp:collected", () => setTimeout(draw, 400));
    $("[data-reset]").addEventListener("click", () => {
      A.Modal.open(`<span class="eyebrow">Reiniciar álbum</span><h3>¿Empezar de cero?</h3><p class="m-sub">Se borrarán los momentos y sellos guardados en este navegador.</p><div class="actions"><button class="btn solid" data-yes>Sí, reiniciar</button><button class="btn" data-no>Cancelar</button></div>`);
      $("[data-yes]", A.Modal.el).onclick = () => { Store.reset(); A.updateCount(); A.Modal.close(); draw(); };
      $("[data-no]", A.Modal.el).onclick = () => A.Modal.close();
    });
  };

  /* =========================================================
     QR — página puente (mujeresdeprofesion.com/qrN)
     ========================================================= */
  P.qr = function () {
    const n = document.body.dataset.qr;
    const q = MDP.qr[n] || MDP.qr[16];
    const main = $("#main");
    const isNewStamp = +n <= 11 ? Store.stamp(n) : false;
    const stampNote = +n <= 11 ? `<div class="stamp-note">${I.stamp}<span>${isNewStamp ? "¡Ganaste un <strong>sello del libro</strong> para tu álbum! Solo se consigue escaneando el fotolibro." : "Ya tienes el sello de este código en tu álbum."}</span></div>` : "";
    const logo = `<img class="logo" src="${R("assets/brand/logo-dark.png")}" alt="Mujeres de Profesión">`;
    let img, bodyHtml, color = "var(--ink)", bg = "";
    if (q.type === "woman") {
      const w = W(q.w); color = w.color; bg = w.corto;
      img = `<img src="${IMG(w.slug, w.hero.img)}" alt="${esc(w.nombre)}" style="object-position:${w.hero.pos}">`;
      document.title = `${w.corto} — Mujeres de Profesión`;
      bodyHtml = `${logo}<span class="eyebrow">Escaneaste el libro · ${esc(q.libro || "")}</span>
        <h1 style="margin-top:14px">${esc(w.nombre)}</h1>
        <p class="prof">${esc(w.profesion)} <span class="bracket">${esc(w.profesionEn)}</span></p>
        <div class="word">${esc(w.palabra)}</div>
        <p class="sum">${w.resumenQR}</p>
        ${stampNote}
        <div class="actions">
          <a class="btn solid" href="${R(q.to)}">Continuar a su historia ${I.arr}</a>
          <a class="btn" href="${R(q.to + "#galeria")}">Ir directo a su galería ${I.arr}</a>
        </div>`;
    } else {
      const pic = q.type === "podcast" ? IMG("claudia-maria", "hobby-4") : q.type === "research" ? R("assets/img/libro/p44.jpg") : R("assets/img/libro/p01.jpg");
      img = `<img src="${pic}" alt="">`;
      bg = q.type === "podcast" ? "Podcast" : q.type === "research" ? "Datos" : "MdP";
      bodyHtml = `${logo}<span class="eyebrow">${q.libro ? "Escaneaste el libro · " + esc(q.libro) : "Mujeres de Profesión"}</span>
        <h1 style="margin-top:14px">${esc(q.titulo)}</h1>
        <p class="sum">${esc(q.texto)}</p>
        ${stampNote}
        <div class="actions"><a class="btn solid" href="${R(q.to)}">Continuar ${I.arr}</a><a class="btn" href="${R("")}">Ir al inicio</a></div>`;
    }
    main.innerHTML = `<div class="qr-page">
      <div class="qr-bg-word" aria-hidden="true">${esc(bg)}</div>
      <div class="qr-card crop" style="--c:${color}"><span class="crop-b"></span>
        <span class="qr-code-no">QR ${String(n).padStart(2, "0")}</span>
        <div class="qi">${img}</div><div class="qc">${bodyHtml}</div>
      </div></div>`;
    const card = $(".qr-card"); void card.offsetWidth; card.classList.add("in");
    A.updateCount();
  };

  /* =========================================================
     AGENDA (compartida por Exposición e Inicio)
     ========================================================= */
  const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const agendaSplit = () => {
    const ev = (MDP.agenda || []).filter((e) => e.fecha).slice().sort((a, b) => a.fecha.localeCompare(b.fecha));
    return { next: ev.filter((e) => parseDate(e.fecha) >= today()), past: ev.filter((e) => parseDate(e.fecha) < today()).reverse() };
  };
  const eventRow = (e, past) => {
    const d = parseDate(e.fecha);
    return `<article class="event rv${past ? " past" : ""}">
      <div class="ev-date"><b>${d.getDate()}</b><span>${MESES[d.getMonth()]} ${d.getFullYear()}</span></div>
      <div class="ev-body"><span class="ev-type">${esc(e.tipo || "Evento")}${e.hora ? " · " + esc(e.hora) : ""}</span>
        <h3>${esc(e.titulo)}</h3>${e.lugar ? `<p class="ev-place">${esc(e.lugar)}</p>` : ""}${e.desc ? `<p>${esc(e.desc)}</p>` : ""}</div>
      <div class="ev-go">${e.url && !past ? `<a class="btn sm" href="${esc(e.url)}" target="_blank" rel="noopener">Inscribirme ${I.arr}</a>` : ""}</div>
    </article>`;
  };

  /* =========================================================
     EXPOSICIÓN Y CHARLAS
     ========================================================= */
  P.exposicion = function () {
    const X = MDP.exposicion;
    $("[data-expo-text]").innerHTML = X.textos.map((t, i) => `<p class="${i === 0 ? "lead" : ""} rv${i ? " rv-d" + i : ""}">${esc(t)}</p>`).join("");
    const facts = [["Lugar", `${X.lugar}<br><span class="muted">${X.institucion}</span>`], ["Fechas", X.fechas || "Próximamente"], ["Horario", X.horario || "Por confirmar"]];
    $("[data-expo-facts]").innerHTML = facts.map(([k, v]) => `<div><span class="caps muted">${k}</span><p>${v}</p></div>`).join("") +
      (X.mapa ? `<div><a class="link" href="${esc(X.mapa)}" target="_blank" rel="noopener">Cómo llegar ${I.arr}</a></div>` : "");

    // Sala: marcos con las fotografías (los retratos B/N quedan velados, se ven en la sala)
    const wall = $("[data-wall]");
    wall.innerHTML = MDP.women.map((w, i) => {
      const veiled = i % 3 === 1;
      return `<figure class="frame rv rv-d${i % 4}${veiled ? " veil" : ""}" style="--c:${w.color}">
        <div class="fr-img"><img src="${veiled ? IMG(w.slug, "retrato-velado") : IMG(w.slug, w.card, true)}" alt="${veiled ? "Retrato reservado para la sala" : esc(w.nombre)}" loading="lazy" style="object-position:${w.cardPos}">${veiled ? `<span class="fr-lock">${I.lock}<small>Se ve en la sala</small></span>` : ""}</div>
        <figcaption><b>${esc(w.corto)}</b> · ${esc(w.profesion)}</figcaption></figure>`;
    }).join("");

    const { next, past } = agendaSplit();
    $("[data-agenda]").innerHTML = next.length ? next.map((e) => eventRow(e)).join("")
      : `<div class="event empty rv"><div class="ev-date"><b>—</b><span>próximamente</span></div><div class="ev-body"><span class="ev-type">Agenda</span><h3>Pronto anunciaremos fechas de charlas y talleres</h3><p>Mujeres de Profesión visita colegios, universidades y congresos con charlas como <em>Nuevas formas de divulgación en ciencia</em>. Vuelve pronto para ver dónde y cuándo.</p></div><div class="ev-go"></div></div>`;
    const pastEl = $("[data-agenda-past]");
    if (past.length) pastEl.innerHTML = `<h3 class="caps muted" style="margin:50px 0 10px">Eventos anteriores</h3>` + past.map((e) => eventRow(e, true)).join("");
  };

  /* =========================================================
     LIBRO
     ========================================================= */
  P.libro = function () {
    const toc = $("[data-toc]");
    if (toc) {
      const items = MDP.women.slice(0, 4).map((w) => [w.nombre, w.profesion, w.paginasLibro, R(`mujeres/${w.slug}/`)])
        .concat([["Investigación", "Research", "43 – 51", R("investigacion/")]])
        .concat(MDP.women.slice(4).map((w) => [w.nombre, w.profesion, w.paginasLibro, R(`mujeres/${w.slug}/`)]));
      toc.innerHTML = items.map(([n, p, pg, h]) => `<a href="${h}"><span><span class="n">${esc(n)}</span><br><span class="p">${esc(p)}</span></span><span class="dots"></span><span class="pg">${pg}</span></a>`).join("");
    }
    $$("[data-order]").forEach((a) => {
      if (MDP.site.bookOrderUrl) { a.href = MDP.site.bookOrderUrl; a.target = "_blank"; a.rel = "noopener"; }
      else if (MDP.site.contactEmail) a.href = `mailto:${MDP.site.contactEmail}?subject=${encodeURIComponent("Quiero el libro Mujeres de Profesión")}`;
      else { a.removeAttribute("href"); a.title = "El canal de pedidos se habilitará muy pronto"; a.addEventListener("click", () => A.toast("El canal de pedidos se habilitará muy pronto.")); a.style.cursor = "pointer"; }
    });
    $$(".spread img").forEach((im, i, all) => im.parentElement.addEventListener("click", () => A.LB.open(all.map((x) => ({ src: x.src, cap: x.alt, note: "Vista previa · el libro solo existe en papel" })), i)));
  };

  window.MDPPages = P;
})();
