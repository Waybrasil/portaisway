/**
 * app.js — Lógica de Renderização e Interatividade
 * Portais Internos — Way Concessões
 */

/* ========================================================
   ESTADO
   ======================================================== */
let activeFilter = 'all';
let searchTerm   = '';

/* ========================================================
   INICIALIZAÇÃO
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  buildFilterButtons();
  renderGrid();

  // Busca
  const input     = document.getElementById('searchInput');
  const clearBtn  = document.getElementById('searchClear');

  input.addEventListener('input', () => {
    searchTerm = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', searchTerm.length > 0);
    renderGrid();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    searchTerm  = '';
    clearBtn.classList.remove('visible');
    renderGrid();
    input.focus();
  });

  // Fechar modal via overlay ou botão
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);

  // Esc fecha modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

/* ========================================================
   FILTER BUTTONS
   ======================================================== */
function buildFilterButtons() {
  const bar = document.getElementById('filterBar').querySelector('.filter-inner');

  BASES.forEach(base => {
    const btn = document.createElement('button');
    btn.className   = 'filter-btn';
    btn.dataset.filter = base.id;
    btn.innerHTML   = `
      <span class="base-dot" style="background:${base.color}"></span>
      ${base.name}
    `;
    btn.addEventListener('click', () => setFilter(base.id));
    bar.appendChild(btn);
  });

  // Vincular o "Todas"
  bar.querySelector('[data-filter="all"]').addEventListener('click', () => setFilter('all'));
}

function setFilter(filterId) {
  activeFilter = filterId;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filterId);
  });
  renderGrid();
}

/* ========================================================
   RENDER GRID
   ======================================================== */
function renderGrid() {
  const grid      = document.getElementById('basesGrid');
  const noResults = document.getElementById('noResults');
  const noTerm    = document.getElementById('noResultsTerm');

  const filtered = BASES
    .filter(base => activeFilter === 'all' || base.id === activeFilter)
    .map(base => {
      if (!searchTerm) return base;
      // Filtrar portais pelo termo
      const matchedPortals = base.portals.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        base.name.toLowerCase().includes(searchTerm) ||
        base.description.toLowerCase().includes(searchTerm)
      );
      if (
        base.name.toLowerCase().includes(searchTerm) ||
        base.description.toLowerCase().includes(searchTerm)
      ) {
        return base; // base inteira combina
      }
      if (matchedPortals.length > 0) {
        return { ...base, portals: matchedPortals };
      }
      return null;
    })
    .filter(Boolean);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    noTerm.textContent = searchTerm;
    return;
  }

  noResults.classList.add('hidden');

  filtered.forEach((base, index) => {
    const card = buildBaseCard(base, index);
    grid.appendChild(card);
  });
}

/* ========================================================
   BUILD BASE CARD
   ======================================================== */
function buildBaseCard(base, index) {
  const card = document.createElement('article');
  card.className = 'base-card';
  card.style.setProperty('--base-color', base.color);
  card.style.animationDelay = `${index * 60}ms`;

  const portalsHTML = base.portals.map(portal => `
    <li class="portal-item">
      <span class="portal-link" role="button" tabindex="0"
        data-name="${escHtml(portal.name)}"
        data-url="${escHtml(portal.url)}"
        data-base="${escHtml(base.name)}"
        data-icon="${escHtml(portal.icon)}"
        title="Acessar ${escHtml(portal.name)}">
        <span class="portal-link-icon">
          <i class="${portal.icon}"></i>
        </span>
        <span class="portal-link-info">
          <span class="portal-link-name">${escHtml(portal.name)}</span>
          <span class="portal-link-url">${formatUrl(portal.url)}</span>
        </span>
        <i class="fa-solid fa-chevron-right portal-arrow"></i>
      </span>
    </li>
  `).join('');

  card.innerHTML = `
    <header class="base-card-header">
      <div class="base-icon">
        <i class="${base.icon}"></i>
      </div>
      <div class="base-info">
        <div class="base-name">${escHtml(base.name)}</div>
        <div class="base-meta">${escHtml(base.description)}</div>
      </div>

    </header>
    <ul class="portals-list">${portalsHTML}</ul>
  `;

  // Eventos nos portais
  card.querySelectorAll('.portal-link').forEach(el => {
    el.addEventListener('click', () => openModal(el));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(el);
      }
    });
  });

  return card;
}

/* ========================================================
   MODAL
   ======================================================== */
function openModal(el) {
  const name    = el.dataset.name;
  const url     = el.dataset.url;
  const base    = el.dataset.base;

  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalBase').textContent  = base;
  document.getElementById('modalLink').href         = url;

  // Desabilita o botão se url for placeholder
  const btn = document.getElementById('modalLink');
  if (!url || url === '#') {
    btn.style.opacity      = '.5';
    btn.style.pointerEvents = 'none';
    btn.title = 'URL não configurada';
  } else {
    btn.style.opacity      = '';
    btn.style.pointerEvents = '';
    btn.title = '';
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('modalClose').focus(), 100);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ========================================================
   UTILS
   ======================================================== */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatUrl(url) {
  if (!url || url === '#') return 'URL não configurada';
  try {
    const u = new URL(url);
    return u.hostname + (u.pathname !== '/' ? u.pathname : '');
  } catch {
    return url;
  }
}
