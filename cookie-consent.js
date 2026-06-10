(function () {
  'use strict';

  var STORAGE_KEY = 'wundertuete_consent';
  var CONSENT_VERSION = 1;
  var MAP_EMBED_URL = 'https://www.openstreetmap.org/export/embed.html?bbox=11.275%2C49.508%2C11.288%2C49.514&layer=mapnik&marker=49.5113%2C11.2812';
  var MAP_TITLE = 'Karte: Wundertüte, Marktplatz 4, 91207 Lauf an der Pegnitz';

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.version !== CONSENT_VERSION) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(choices) {
    var data = {
      version: CONSENT_VERSION,
      necessary: true,
      externalMedia: Boolean(choices.externalMedia),
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  }

  function hasConsent(category) {
    var consent = getConsent();
    if (!consent) return false;
    if (category === 'necessary') return true;
    return Boolean(consent[category]);
  }

  function unloadMap() {
    var container = document.getElementById('mapContainer');
    var placeholder = document.getElementById('mapConsent');
    if (!container) return;
    container.innerHTML = '';
    container.dataset.loaded = 'false';
    container.hidden = true;
    if (placeholder) placeholder.hidden = false;
  }

  function loadMap() {
    var container = document.getElementById('mapContainer');
    var placeholder = document.getElementById('mapConsent');
    if (!container || container.dataset.loaded === 'true') return;

    if (placeholder) placeholder.hidden = true;
    container.hidden = false;

    var iframe = document.createElement('iframe');
    iframe.src = MAP_EMBED_URL;
    iframe.title = MAP_TITLE;
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.setAttribute('allowfullscreen', '');
    iframe.loading = 'eager';

    container.innerHTML = '';
    container.appendChild(iframe);
    container.dataset.loaded = 'true';
  }

  function initMap() {
    if (!document.getElementById('mapFrame')) return;

    if (hasConsent('externalMedia')) {
      loadMap();
      return;
    }

    var loadBtn = document.getElementById('mapLoadBtn');
    if (loadBtn) {
      loadBtn.addEventListener('click', function () {
        saveConsent({ externalMedia: true });
        loadMap();
        hideBanner();
        syncPanelCheckboxes();
      });
    }
  }

  var bannerEl;
  var panelEl;
  var externalCheckbox;

  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove('is-visible');
    bannerEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cookie-banner-open');
  }

  function showBanner() {
    if (!bannerEl) return;
    bannerEl.classList.add('is-visible');
    bannerEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cookie-banner-open');
  }

  function syncPanelCheckboxes() {
    if (externalCheckbox) {
      externalCheckbox.checked = hasConsent('externalMedia');
    }
  }

  function buildBanner() {
    bannerEl = document.createElement('div');
    bannerEl.id = 'cookieBanner';
    bannerEl.className = 'cookie-banner';
    bannerEl.setAttribute('role', 'dialog');
    bannerEl.setAttribute('aria-labelledby', 'cookieBannerTitle');
    bannerEl.setAttribute('aria-hidden', 'true');
    bannerEl.innerHTML =
      '<div class="cookie-banner__inner">' +
        '<h2 id="cookieBannerTitle">Cookie-Einstellungen</h2>' +
        '<p>Wir setzen technisch notwendige Speicherung für Ihre Einwilligung ein. ' +
        'Optionale externe Inhalte (z.&nbsp;B. die OpenStreetMap-Karte) laden wir erst, ' +
        'wenn Sie zustimmen. Details in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
        '<div class="cookie-banner__actions">' +
          '<button type="button" class="cookie-btn--reject" id="cookieReject">Nur notwendige</button>' +
          '<button type="button" class="cookie-btn--settings" id="cookieSettingsToggle">Einstellungen</button>' +
          '<button type="button" class="cookie-btn--accept" id="cookieAccept">Alle akzeptieren</button>' +
        '</div>' +
        '<div class="cookie-panel" id="cookiePanel" hidden>' +
          '<label class="cookie-option">' +
            '<input type="checkbox" checked disabled>' +
            '<span><strong>Notwendig</strong>Speichert Ihre Cookie-Einstellungen (localStorage).</span>' +
          '</label>' +
          '<label class="cookie-option">' +
            '<input type="checkbox" id="cookieExternalMedia">' +
            '<span><strong>Externe Medien</strong>OpenStreetMap-Karte im Kontaktbereich. Beim Laden werden Daten an OpenStreetMap übermittelt.</span>' +
          '</label>' +
          '<button type="button" class="cookie-btn--save" id="cookieSave">Auswahl speichern</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(bannerEl);

    panelEl = document.getElementById('cookiePanel');
    externalCheckbox = document.getElementById('cookieExternalMedia');

    document.getElementById('cookieReject').addEventListener('click', function () {
      saveConsent({ externalMedia: false });
      unloadMap();
      hideBanner();
      syncPanelCheckboxes();
    });

    document.getElementById('cookieAccept').addEventListener('click', function () {
      saveConsent({ externalMedia: true });
      hideBanner();
      loadMap();
      syncPanelCheckboxes();
    });

    document.getElementById('cookieSettingsToggle').addEventListener('click', function () {
      panelEl.hidden = !panelEl.hidden;
      syncPanelCheckboxes();
    });

    document.getElementById('cookieSave').addEventListener('click', function () {
      var allowExternal = externalCheckbox.checked;
      saveConsent({ externalMedia: allowExternal });
      hideBanner();
      if (allowExternal) loadMap();
      else unloadMap();
      syncPanelCheckboxes();
    });
  }

  function bindSettingsLinks() {
    document.querySelectorAll('[data-cookie-settings]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        syncPanelCheckboxes();
        if (panelEl) panelEl.hidden = false;
        showBanner();
      });
    });
  }

  function init() {
    buildBanner();
    bindSettingsLinks();

    if (!getConsent()) {
      showBanner();
    }

    initMap();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
