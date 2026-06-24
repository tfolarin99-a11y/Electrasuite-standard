// ═══════════════════════════════════════════════════════════════════
//  ElectraSuite — Access Control Layer (Standard Edition)
//  Version: 2.0 | Plan: STANDARD
// ═══════════════════════════════════════════════════════════════════

const CURRENT_PLAN = "standard";

// Centralised plan access configuration
const PLAN_ACCESS = {
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
      "report"         // Tab 14
    ],
    locked: [
      "bom",           // Tab 10
      "phaseBalance",  // Tab 11
      "carbon",        // Tab 12
      "utilityCost"    // Tab 13
    ]
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
 * Call before ANY module renders. Returns true only when the
 * module key is in the allowed list for CURRENT_PLAN.
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

// ── UPGRADE MODAL ─────────────────────────────────────────────────

function showUpgradeModal(moduleName) {
  // Remove existing modal if present
  const existing = document.getElementById('upgradeModal');
  if (existing) existing.remove();

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
      <div class="upgrade-badge">PRO FEATURE</div>
      <h2 class="upgrade-title" id="upgradeModalTitle">Advanced Feature</h2>
      <p class="upgrade-module-name">${moduleName}</p>
      <p class="upgrade-body">
        This feature is available in <strong>ElectraSuite Pro</strong>.
        Upgrade to unlock advanced project planning, analytics,
        optimization, and reporting tools.
      </p>
      <div class="upgrade-feature-list">
        <div class="ufl-item">✦ Bill of Materials auto-generation &amp; CSV export</div>
        <div class="ufl-item">✦ Phase Balancing Optimizer with AI suggestions</div>
        <div class="ufl-item">✦ Carbon Footprint &amp; Sustainability Reporting</div>
        <div class="ufl-item">✦ Utility Cost Estimation with tariff presets</div>
      </div>
      <div class="upgrade-actions">
        <button class="upgrade-btn-pro" onclick="handleUpgradeClick()">
          ⚡ Upgrade to Pro
        </button>
        <button class="upgrade-btn-close" onclick="closeUpgradeModal()">
          Close
        </button>
      </div>
    </div>`;

  // Close when clicking backdrop
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeUpgradeModal();
  });

  document.body.appendChild(overlay);

  // Trap focus on the card
  requestAnimationFrame(() => {
    const card = document.getElementById('upgradeCard');
    if (card) card.focus();
    // Animate in
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
  // Replace with actual upgrade URL when available
  alert('Contact your ElectraSuite reseller or visit the product page to upgrade to Pro.');
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeUpgradeModal();
});

// ── SECURE TAB SWITCHER ────────────────────────────────────────────

const LOCKED_MODULE_NAMES = {
  10: "📦 Bill of Materials (BOM)",
  11: "⚖ Phase Balancing",
  12: "🌍 Carbon Footprint Analysis",
  13: "💰 Utility Cost Estimation"
};

/**
 * safeT(tabIndex, ...extraFns)
 * Replaces the original T() for all tab clicks.
 * Performs the access check BEFORE showing any content.
 * Even if called via console or URL hash, content is never rendered.
 */
function safeT(n, ...extraFns) {
  // Re-validate every time — cannot be bypassed by patching canAccess
  // because this function reads directly from PLAN_ACCESS.
  const key = MODULE_MAP[n];
  const plan = PLAN_ACCESS[CURRENT_PLAN];
  const allowed = plan ? plan.allowed : [];

  if (!key || !allowed.includes(key)) {
    // Module is locked — show upgrade prompt, do NOT switch panels
    const name = LOCKED_MODULE_NAMES[n] || "This Feature";
    showUpgradeModal(name);
    return; // Hard stop — no content switch
  }

  // Access granted — use original tab switcher
  T(n);
  extraFns.forEach(fn => { if (typeof fn === 'function') fn(); });
}

// ── HASH / URL NAVIGATION GUARD ────────────────────────────────────

(function installNavigationGuard() {
  // Block direct hash navigation to locked modules, e.g. #tab10
  function checkHash() {
    const hash = window.location.hash;
    const match = hash.match(/^#tab(\d+)$/);
    if (match) {
      const idx = parseInt(match[1]);
      if (!canAccess(idx)) {
        // Remove the hash so back-button does not re-trigger
        history.replaceState(null, '', window.location.pathname + window.location.search);
        const name = LOCKED_MODULE_NAMES[idx] || "This Feature";
        showUpgradeModal(name);
      }
    }
  }
  window.addEventListener('hashchange', checkHash);
  window.addEventListener('load', checkHash);
})();

// ── RUNTIME TAMPER DETECTION ───────────────────────────────────────

(function sealPlanAccess() {
  // Freeze the access config so console mutations silently fail in strict mode
  try {
    Object.freeze(PLAN_ACCESS.standard.allowed);
    Object.freeze(PLAN_ACCESS.standard.locked);
    Object.freeze(PLAN_ACCESS.standard);
    Object.freeze(PLAN_ACCESS);
  } catch(e) { /* already frozen or environment doesn't support it */ }
})();
