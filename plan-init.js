// ═══════════════════════════════════════════════════════════════════
//  ElectraSuite — Plan Initialiser
//  Runs on the dashboard page BEFORE access-control.js.
//  Fetches the user's purchased plan from Supabase user_plans
//  by their authenticated email, then stores it in sessionStorage.
//  access-control.js reads window.__ES_PLAN which this script sets.
// ═══════════════════════════════════════════════════════════════════

(async function initPlan() {

  const SUPABASE_URL     = 'https://uxpgdaetneoaaevgjoai.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cGdkYWV0bmVvYWFldmdqb2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNDk2ODQsImV4cCI6MjA5NDkyNTY4NH0.srmK2um_dvrSKawcnZa3V1hAlzb1la27J8INUYjJV1Q';

  // ── 1. Get active Supabase session ──────────────────────────────
  const { createClient } = window.supabase;
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data: sessionData } = await sb.auth.getSession();
  const session = sessionData?.session;

  // No session — redirect to login immediately
  if (!session) {
    window.location.href = '/auth/';
    return;
  }

  const email = session.user?.email?.toLowerCase().trim();
  if (!email) {
    window.location.href = '/auth/';
    return;
  }

  // ── 2. Look up plan in user_plans by email ──────────────────────
  let plan = null;

  try {
    const { data, error } = await sb
      .from('user_plans')
      .select('plan')
      .eq('email', email)
      .maybeSingle();

    if (!error && data?.plan) {
      plan = data.plan; // "basic" | "standard" | "pro"
    }
  } catch (e) {
    console.warn('[ElectraSuite] Plan lookup failed:', e);
  }

  // ── 3. Fallback: if no plan found, default to "basic" ───────────
  // This covers users who signed up before purchasing.
  if (!plan) {
    plan = 'basic';
  }

  // ── 4. Expose plan globally so access-control.js can read it ───
  // Using window property (not sessionStorage) so it's synchronous
  // and available the instant access-control.js runs.
  window.__ES_PLAN = plan;
  window.__ES_EMAIL = email;

  // Also cache in sessionStorage for any other scripts that need it
  try {
    sessionStorage.setItem('es_plan', plan);
    sessionStorage.setItem('es_email', email);
  } catch(e) { /* sessionStorage blocked (private browsing) — fine, window var is set */ }

})();
