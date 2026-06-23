// ═══════════════════════════════════════════════════════════════════
//  ElectraSuite — Access Control Layer
//  Version: 3.0 | Plan: DYNAMIC
//
//  Plan is set at runtime by dashboard/index.html before this file
//  loads. window.__ES_PLAN is populated from Supabase user_plans
//  by the logged-in user's email.
//
//  Works across all editions: Basic, Standard, Pro.
// ═══════════════════════════════════════════════════════════════════

// Read plan set by plan-init.js — fall back to "basic" if somehow missing
const CURRENT_PLAN = (window.__ES_PLAN || sessionStorage.getItem('es_plan') || 'basic');

// ── PLAN ACCESS CONFIGURATION ─────────────────────────────────────
// All three tiers defined here so any plan value works correctly
const PLAN_ACCESS = {
  basic: {
    allowed: [
      "projects",      // Tab 0
      "load",          // Tab 1
      "demand",        // Tab 2
      "current",       // Tab 3
    ],
    locked: [
      "cable",         // Tab 4
      "voltageDrop",   // Tab 5
      "breaker",       // Tab 6
      "generator",     // Tab 7
      "inverter",      // Tab 8
      "transformer",   // Tab 9
      "bom",           // Tab 10
      "phaseBalance",  // Tab 11
      "carbon",        // Tab 12
      "utilityCost",   // Tab 13
      "report",        // Tab 14
    ]
  },
  standard: {
    allowed: [
      "projects",      // Tab 0
      "load",          // Tab 1
      "demand",        // Tab 2
      "current",       // Tab 3
      "cable",         // Tab 4
      "voltageDrop",   // Tab 5
      "breaker",       // Tab 6
      "generator",     // Tab 7
      "inverter",      // Tab 8
      "transformer",   // Tab 9
      "report",        // Tab 14
    ],
    locked: [
      "bom",           // Tab 10
      "phaseBalance",  // Tab 11
      "carbon",        // Tab 12
      "utilityCost",   // Tab 13
    ]
  },
  pro: {
    allowed: [
      "projects",      // Tab 0
      "load",          // Tab 1
      "demand",        // Tab 2
      "current",       // Tab 3
      "cable",         // Tab 4
      "voltageDrop",   // Tab 5
      "breaker",       // Tab 6
      "generator",     // Tab 7
      "inverter",      // Tab 8
      "transformer",   // Tab 9
      "bom",           // Tab 10
      "phaseBalance",  // Tab 11
      "carbon",        // Tab 12
      "utilityCost",   // Tab 13
      "report",        // Tab 14
    ],
    locked: []
  }
};

// Module index → key mapping (immutable — never changed at runtime)
const MODULE_MAP = Object.freeze({
  0:  "projects",
  1:  "load",
  2:  "demand",
  3:  "current",
  4:  "cable",
  5:  "voltageDrop",
  6:  "breaker",
  7:  "generator",
  8:  "inverter",
  9:  "transformer",
  10: "bom",
  11: "phaseBalance",
  12: "carbon",
  13: "utilityCost",
  14: "report"
});

/**
 * canAccess(tabIndex)
 * Hard permission check — the single source of truth.
 * Call before ANY module renders.
 */
function canAccess(tabIndex) {
  const key = MODULE_MAP[tabIndex];
  if (!key) return false;
  const plan = PLAN_ACCESS[CURRENT_PLAN];
  if (!plan) return false;
  return plan.allowed.includes(key);
}

/**
 * isLocked(tabIndex)
 * Returns true when the module is visible but gated.
 */
function isLocked(tabIndex) {
  const key = MODULE_MAP[tabIndex];
  if (!key) return false;
  const plan = PLAN_ACCESS[CURRENT_PLAN];
  if (!plan) return true;
  return plan.locked.includes(key);
}

// ── UPGRADE MODAL ──────────────────────────────────────────────────

function showUpgradeModal(moduleName) {
  const existing = document.getElementById('upgradeModal');
  if (existing) existing.remove();

  // Tailor the modal message based on current plan
  const isBasic = CURRENT_PLAN === 'basic';
  const badgeText   = isBasic ? 'STANDARD / PRO FEATURE' : 'PRO FEATURE';
  const titleText   = isBasic ? 'Premium Feature'        : 'Advanced Feature';
  const upgradeText = isBasic
    ? 'This feature is available in <strong>ElectraSuite Standard</strong> or <strong>Pro</strong>. Upgrade to unlock more modules.'
    : 'This feature is available in <strong>ElectraSuite Pro</strong>. Upgrade to unlock advanced project planning, analytics, optimization, and reporting tools.';

  const overlay = document.createElement('div');
  overlay.id = 'upgradeModal';
  overlay.className = 'upgrade-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'upgradeModalTitle');
  overlay.innerHTML = `
    <div class="upgrade-card" id="upgradeCard">
      <div class="upgrade-icon-wrap">
        <div class="upgrade-icon">🔒</div>
      </div>
      <div class="upgrade-badge">${badgeText}</div>
      <h2 class="upgrade-title" id="upgradeModalTitle">${titleText}</h2>
      <p class="upgrade-module-name">${moduleName}</p>
      <p class="upgrade-body">${upgradeText}</p>
      <div class="upgrade-feature-list">
        ${isBasic ? `
        <div class="ufl-item">✦ Cable Selection &amp; Voltage Drop Analysis</div>
        <div class="ufl-item">✦ Breaker, Generator &amp; Inverter Sizing</div>
        <div class="ufl-item">✦ Transformer Sizing &amp; Report Generation</div>
        <div class="ufl-item">✦ Bill of Materials, Phase Balancing &amp; more (Pro)</div>
        ` : `
        <div class="ufl-item">✦ Bill of Materials auto-generation &amp; CSV export</div>
        <div class="ufl-item">✦ Phase Balancing Optimizer</div>
        <div class="ufl-item">✦ Carbon Footprint &amp; Sustainability Reporting</div>
        <div class="ufl-item">✦ Utility Cost Estimation with tariff presets</div>
        `}
      </div>
      <div class="upgrade-actions">
        <button class="upgrade-btn-pro" onclick="handleUpgradeClick()">
          ⚡ Upgrade Now
        </button>
        <button class="upgrade-btn-close" onclick="closeUpgradeModal()">
          Close
        </button>
      </div>
    </div>`;

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeUpgradeModal();
  });

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    const card = document.getElementById('upgradeCard');
    if (card) card.focus();
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity .2s';
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });
  });
}

function closeUpgradeModal() {
  const modal = document.getElementById('upgradeModal');
  if (!modal) return;
  modal.style.opacity = '0';
  modal.style.transition = 'opacity .2s';
  setTimeout(() => modal.remove(), 200);
}

function handleUpgradeClick() {
  // Update this URL to your actual WordPress store product page
  window.location.href = 'https://electrasuite.com/upgrade';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeUpgradeModal();
});

// ── SECURE TAB SWITCHER ────────────────────────────────────────────

const LOCKED_MODULE_NAMES = {
  4:  "📐 Cable Selection",
  5:  "⚡ Voltage Drop Analysis",
  6:  "🔌 Breaker Sizing",
  7:  "🔋 Generator Sizing",
  8:  "🔆 Inverter Sizing",
  9:  "🔧 Transformer Sizing",
  10: "📦 Bill of Materials (BOM)",
  11: "⚖ Phase Balancing",
  12: "🌍 Carbon Footprint Analysis",
  13: "💰 Utility Cost Estimation",
  14: "📄 Report Generation",
};

/**
 * safeT(tabIndex, ...extraFns)
 * Replaces the original T() for all tab clicks.
 * Performs the access check BEFORE showing any content.
 */
function safeT(n, ...extraFns) {
  const key     = MODULE_MAP[n];
  const plan    = PLAN_ACCESS[CURRENT_PLAN];
  const allowed = plan ? plan.allowed : [];

  if (!key || !allowed.includes(key)) {
    const name = LOCKED_MODULE_NAMES[n] || 'This Feature';
    showUpgradeModal(name);
    return; // Hard stop
  }

  T(n);
  extraFns.forEach(fn => { if (typeof fn === 'function') fn(); });
}

// ── HASH / URL NAVIGATION GUARD ────────────────────────────────────

(function installNavigationGuard() {
  function checkHash() {
    const hash  = window.location.hash;
    const match = hash.match(/^#tab(\d+)$/);
    if (match) {
      const idx = parseInt(match[1]);
      if (!canAccess(idx)) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        const name = LOCKED_MODULE_NAMES[idx] || 'This Feature';
        showUpgradeModal(name);
      }
    }
  }
  window.addEventListener('hashchange', checkHash);
  window.addEventListener('load', checkHash);
})();

// ── RUNTIME TAMPER DETECTION ───────────────────────────────────────

(function sealPlanAccess() {
  try {
    Object.keys(PLAN_ACCESS).forEach(tier => {
      Object.freeze(PLAN_ACCESS[tier].allowed);
      Object.freeze(PLAN_ACCESS[tier].locked);
      Object.freeze(PLAN_ACCESS[tier]);
    });
    Object.freeze(PLAN_ACCESS);
  } catch(e) { /* already frozen */ }
})();
