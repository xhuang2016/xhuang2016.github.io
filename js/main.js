/**
 * Theme, navigation, dynamic sections, and i18n orchestration.
 */
(function () {
  "use strict";

  var THEME_KEY = "site-theme";

  function prefersDark() {
    return (
      globalThis.matchMedia &&
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(mode) {
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (e) {}
  }

  function applyTheme(mode) {
    var root = document.documentElement;
    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (mode === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    updateThemeButtons(mode);
  }

  function resolveInitialTheme() {
    var stored = getStoredTheme();
    if (stored === "dark" || stored === "light") return stored;
    return prefersDark() ? "dark" : "light";
  }

  function updateThemeButtons(mode) {
    var resolved =
      mode ||
      (document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light");
    document.querySelectorAll('[data-theme-mode="light"]').forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        resolved === "light" ? "true" : "false"
      );
    });
    document.querySelectorAll('[data-theme-mode="dark"]').forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        resolved === "dark" ? "true" : "false"
      );
    });
  }

  function bindTheme() {
    var initial = resolveInitialTheme();
    applyTheme(initial);

    document.querySelectorAll("[data-theme-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var m = btn.getAttribute("data-theme-mode");
        if (m === "light") {
          setStoredTheme("light");
          applyTheme("light");
        } else if (m === "dark") {
          setStoredTheme("dark");
          applyTheme("dark");
        }
      });
    });
  }

  function bindMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var drawer = document.getElementById("nav-mobile");
    if (!toggle || !drawer) return;

    function setOpen(open) {
      drawer.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open
          ? SiteI18n.t(SiteI18n.getLocale(), "ui.menuClose")
          : SiteI18n.t(SiteI18n.getLocale(), "ui.menuOpen")
      );
    }

    toggle.addEventListener("click", function () {
      setOpen(!drawer.classList.contains("is-open"));
    });

    drawer.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function smoothScrollToHash() {
    if (globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", id);
        }
      });
    });
  }

  function clearEl(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  function renderProjects(locale) {
    var container = document.getElementById("projects-grid");
    if (!container) return;
    var data = SiteI18n.getContent(locale).projects;
    clearEl(container);
    var ul = document.createElement("ul");
    ul.className = "project-list";
    data.forEach(function (p) {
      var li = document.createElement("li");
      li.className = "project-list__item";
      if (p.comingSoon) {
        li.classList.add("project-list__item--soon");
        var titleSoon = document.createElement("span");
        titleSoon.className = "project-list__title-soon";
        titleSoon.textContent = p.title;
        li.appendChild(titleSoon);
      } else {
        var link = document.createElement("a");
        link.className = "project-list__link";
        link.href = p.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = p.title;
        li.appendChild(link);
      }
      var summary = p.summary || "";
      if (summary) {
        var summaryEl = document.createElement("p");
        summaryEl.className = "project-list__summary";
        summaryEl.textContent = summary;
        li.appendChild(summaryEl);
      }
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  function renderPublications(locale) {
    var container = document.getElementById("publications-list");
    if (!container) return;
    var data = SiteI18n.getContent(locale).publications;
    clearEl(container);
    data.forEach(function (pub) {
      var div = document.createElement("div");
      div.className = "pub-item";

      var h = document.createElement("h3");
      var titleLink = document.createElement("a");
      titleLink.href = pub.pdfUrl || pub.venueUrl;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
      titleLink.textContent = pub.title;
      h.appendChild(titleLink);

      var meta = document.createElement("p");
      meta.className = "pub-item__meta";
      if (pub.venueUrl) {
        var v = document.createElement("a");
        v.href = pub.venueUrl;
        v.target = "_blank";
        v.rel = "noopener noreferrer";
        v.textContent = pub.venue;
        meta.appendChild(v);
      } else {
        meta.textContent = pub.venue;
      }

      var note = document.createElement("p");
      note.className = "pub-item__note";
      note.textContent = pub.note;

      div.appendChild(h);
      div.appendChild(meta);
      div.appendChild(note);
      container.appendChild(div);
    });
  }

  function renderSkills(locale) {
    var container = document.getElementById("skills-grid");
    if (!container) return;
    var data = SiteI18n.getContent(locale).skills;
    clearEl(container);
    data.forEach(function (group) {
      var section = document.createElement("section");
      section.className = "skill-block";
      var h = document.createElement("h3");
      h.className = "skill-block__title";
      h.textContent = group.name;
      var ul = document.createElement("ul");
      ul.className = "skill-list";
      (group.items || []).forEach(function (item) {
        var li = document.createElement("li");
        li.className = "skill-list__item";
        li.textContent = item;
        ul.appendChild(li);
      });
      section.appendChild(h);
      section.appendChild(ul);
      container.appendChild(section);
    });
  }

  function renderEducation(locale) {
    var container = document.getElementById("education-grid");
    if (!container) return;
    var rows = SiteI18n.getContent(locale).education;
    clearEl(container);
    if (!rows || !rows.length) return;
    var ul = document.createElement("ul");
    ul.className = "education-list";
    rows.forEach(function (row) {
      var li = document.createElement("li");
      li.className = "education-list__item";
      var degree = document.createElement("p");
      degree.className = "education-list__degree";
      degree.textContent = row.degree || "";
      var school = document.createElement("p");
      school.className = "education-list__school";
      school.textContent = row.school || "";
      var period = document.createElement("p");
      period.className = "education-list__period";
      period.textContent = row.period || "";
      li.appendChild(degree);
      li.appendChild(school);
      li.appendChild(period);
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  function renderAllDynamic(locale) {
    renderProjects(locale);
    renderPublications(locale);
    renderSkills(locale);
    renderEducation(locale);
  }

  function prefersReducedMotion() {
    return (
      globalThis.matchMedia &&
      globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  var aboutLedeTypeTimer = null;
  var aboutLedeLoopIntervalId = null;

  var ABOUT_LEDE_LOOP_MS = 10000;

  function restartAboutLedeLoop() {
    if (aboutLedeLoopIntervalId !== null) {
      clearInterval(aboutLedeLoopIntervalId);
      aboutLedeLoopIntervalId = null;
    }
    if (prefersReducedMotion()) return;
    aboutLedeLoopIntervalId = setInterval(function () {
      var loc = SiteI18n.getLocale();
      if (loc === "en" || loc === "zh") {
        renderAboutLedeTypewriter(loc);
      }
    }, ABOUT_LEDE_LOOP_MS);
  }

  function clearAboutLedeTypewriter() {
    if (aboutLedeTypeTimer !== null) {
      clearTimeout(aboutLedeTypeTimer);
      aboutLedeTypeTimer = null;
    }
  }

  function renderAboutLedeTypewriter(locale) {
    var el = document.getElementById("about-lede");
    if (!el) return;
    clearAboutLedeTypewriter();
    var full = SiteI18n.t(locale, "about.text");
    if (full === undefined || full === null) full = "";
    el.classList.remove("lede--typing");
    el.removeAttribute("aria-busy");

    if (prefersReducedMotion()) {
      el.textContent = full;
      return;
    }

    el.textContent = "";
    el.classList.add("lede--typing");
    el.setAttribute("aria-busy", "true");
    var i = 0;
    function tick() {
      if (i >= full.length) {
        el.classList.remove("lede--typing");
        el.removeAttribute("aria-busy");
        aboutLedeTypeTimer = null;
        return;
      }
      el.textContent = full.slice(0, i + 1);
      i += 1;
      var delay = full.charAt(i - 1) === " " ? 18 : 9;
      aboutLedeTypeTimer = setTimeout(tick, delay);
    }
    aboutLedeTypeTimer = setTimeout(tick, 40);
  }

  function renderHeroName(locale) {
    var h = document.getElementById("hero-name");
    if (!h) return;
    var name = SiteI18n.t(locale, "hero.name");
    if (!name) return;
    h.setAttribute("aria-label", name);
    h.textContent = "";
    for (var i = 0; i < name.length; i++) {
      var ch = name.charAt(i);
      var span = document.createElement("span");
      span.className = "hero-name__char";
      if (ch === " ") {
        span.className += " hero-name__char--space";
        span.textContent = "\u00a0";
      } else {
        span.textContent = ch;
      }
      h.appendChild(span);
    }
  }

  function updateLangButtons(lang) {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var l = btn.getAttribute("data-lang");
      btn.setAttribute("aria-pressed", l === lang ? "true" : "false");
    });
  }

  function bindLanguageSwitch() {
    function applyLang(lang) {
      SiteI18n.setLocale(lang);
      SiteI18n.applyStatic(lang);
      renderHeroName(lang);
      renderAboutLedeTypewriter(lang);
      restartAboutLedeLoop();
      renderAllDynamic(lang);
      updateLangButtons(lang);
      var toggle = document.getElementById("nav-toggle");
      if (toggle && document.getElementById("nav-mobile")) {
        toggle.setAttribute(
          "aria-label",
          SiteI18n.t(lang, "ui.menuOpen")
        );
      }
    }
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var l = btn.getAttribute("data-lang");
        if (l === "en" || l === "zh") {
          applyLang(l);
        }
      });
    });
    return applyLang;
  }

  function initJsonLd() {
    var el = document.getElementById("jsonld-person");
    if (!el) return;
    var base =
      globalThis.location && globalThis.location.origin
        ? globalThis.location.origin + globalThis.location.pathname
        : "";
    var imageUrl = "";
    if (base) {
      var last = base.lastIndexOf("/");
      imageUrl = last >= 0 ? base.slice(0, last + 1) + "assets/me.jpg" : "";
    }
    var data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Xin Huang",
      email: "mailto:hxin410@gmail.com",
      url: base,
      sameAs: [
        "https://github.com/xhuang2016",
        "https://www.linkedin.com/in/xin-huang-344398150/",
        "https://scholar.google.com/citations?hl=en&user=WJVxY6gAAAAJ",
      ],
      jobTitle: "Software Engineer",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Texas State University" },
      ],
    };
    if (imageUrl) {
      data.image = imageUrl;
    }
    el.textContent = JSON.stringify(data);
  }

  function setHeaderOffset() {
    var header = document.querySelector(".topbar");
    if (!header) return;
    document.documentElement.style.setProperty(
      "--header-offset",
      header.offsetHeight + "px"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindTheme();
    bindMobileNav();
    smoothScrollToHash();
    initJsonLd();
    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);

    var locale = SiteI18n.getLocale();
    if (locale !== "en" && locale !== "zh") {
      locale = "en";
      SiteI18n.setLocale("en");
    }
    var applyLang = bindLanguageSwitch();
    applyLang(locale);
    requestAnimationFrame(function () {
      setHeaderOffset();
    });
  });
})();
