/* Gedeelde logica voor speler en beheer: welke playlist speelt wanneer. */
(function () {
  const DAGEN = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  const pad = n => String(n).padStart(2, "0");
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const hm = d => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const dag = d => ((d.getDay() + 6) % 7) + 1;           // 1 = maandag … 7 = zondag

  /* Geldt regel r op moment d? Een venster als 19:00–07:00 loopt over middernacht:
     het deel na middernacht hoort bij de dag waarop het venster begon. */
  function regelGeldt(r, d) {
    if (r.aan === false) return false;
    const t = hm(d), van = r.van || "00:00", tot = r.tot || "24:00";
    let startDag = d;
    if (van < tot) {
      if (!(t >= van && t < tot)) return false;
    } else if (van > tot) {
      if (t >= van) startDag = d;
      else if (t < tot) startDag = new Date(d.getTime() - 864e5);
      else return false;
    }                                                     // van === tot: hele dag
    const dagen = r.dagen && r.dagen.length ? r.dagen : [1, 2, 3, 4, 5, 6, 7];
    if (!dagen.includes(dag(startDag))) return false;
    const datum = ymd(startDag);
    if (r.vanaf && datum < r.vanaf) return false;
    if (r.totDatum && datum > r.totDatum) return false;
    return true;
  }

  /* Bovenste regel die geldt, wint. Anders de standaard-playlist. */
  function actievePlaylist(cfg, d, schermId) {
    const sc = schermById(cfg, schermId);
    const r = (sc.schema || []).find(r => regelGeldt(r, d) && playlistById(cfg, r.playlist));
    return { playlist: playlistById(cfg, r ? r.playlist : sc.standaard) || null, regel: r || null, scherm: sc };
  }

  /* Elk scherm heeft een eigen standaardplaylist en schema; slides en playlists zijn gedeeld. */
  function schermById(cfg, id) {
    const l = cfg.schermen || [];
    return l.find(s => s.id === id) || l[0] || { id: "scherm-1", naam: "Scherm", standaard: cfg.standaard, schema: cfg.schema || [] };
  }
  /* Oudere configuratie (één scherm, schema bovenaan) omzetten naar schermen. */
  function migreer(cfg) {
    if (!cfg) return cfg;
    if (!cfg.schermen) { cfg.schermen = [{ id: "scherm-1", naam: "Main screen", standaard: cfg.standaard, schema: cfg.schema || [] }]; }
    delete cfg.standaard; delete cfg.schema;
    cfg.schermen.forEach(s => { if (!s.schema) s.schema = []; });
    if (!cfg.playlists) cfg.playlists = []; if (!cfg.slides) cfg.slides = [];
    // versie 2: elk library-item heeft een soort; de duur staat per item in de playlist
    cfg.slides.forEach(s => { if (!s.type) s.type = "slide"; });
    cfg.playlists.forEach(p => (p.items || []).forEach(i => { if (!i.duur) { const s = slideById(cfg, i.slide); i.duur = Number((s && s.duur) || 15); } }));
    cfg.slides.forEach(s => { if (s.type !== "video") delete s.duur; });
    return cfg;
  }

  const playlistById = (cfg, id) => (cfg.playlists || []).find(p => p.id === id);
  const slideById = (cfg, id) => (cfg.slides || []).find(s => s.id === id);

  /* Duur van een item in een playlist: eigen duur, anders die van het library-item, anders 15 s. */
  const itemDuur = (cfg, it) => { const s = slideById(cfg, it.slide); return Number(it.duur || (s && s.duur) || 15); };

  /* De items die effectief spelen: uitgeschakelde en verwijderde items vallen weg. */
  function speellijst(cfg, pl) {
    if (!pl) return [];
    return (pl.items || []).filter(i => i.aan !== false).map(i => {
      const s = slideById(cfg, i.slide);
      return s ? { ...s, duur: itemDuur(cfg, i) } : null;
    }).filter(Boolean);
  }

  /* Afbeelding en video worden schermvullend getoond via een klein HTML-pagina'tje (srcdoc). */
  function mediaHtml(s) {
    const st = "<style>html,body{margin:0;height:100%;background:#000;overflow:hidden}img,video{width:100%;height:100%;object-fit:contain;display:block}</style>";
    const u = String(s.url).replace(/"/g, "&quot;");
    if (s.type === "image") return st + `<img src="${u}" alt="">`;
    if (s.type === "video") return st + `<video src="${u}" autoplay muted loop playsinline></video>`;
    return null;
  }

  function leesConfigTekst(txt) {
    const a = txt.indexOf("{"), b = txt.lastIndexOf("}");
    return JSON.parse(txt.slice(a, b + 1));
  }
  const schrijfConfigTekst = cfg =>
    "window.SIGNAGE_CONFIG = " + JSON.stringify(cfg, null, 2) + ";\n";

  window.Signage = { itemDuur, mediaHtml, schermById, migreer, DAGEN, pad, ymd, hm, dag, regelGeldt, actievePlaylist, playlistById, slideById,
    speellijst, leesConfigTekst, schrijfConfigTekst };
})();
