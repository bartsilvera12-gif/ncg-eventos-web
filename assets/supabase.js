// Shared Supabase client for NCG Eventos
// Requires @supabase/supabase-js v2 UMD loaded BEFORE this script.
(function () {
  const SUPABASE_URL = 'https://api.neura.com.py';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzc0MTAxNDYxLCJleHAiOjE5MzE3ODE0NjF9.7_wAph8IolPMXtgfpezSwS5XR62IdD__qhqCywLDp3Q';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[NCG] supabase-js no está cargado. Incluí el UMD antes de assets/supabase.js');
    return;
  }

  window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: 'ncg-auth' }
  });

  window.NCG = {
    BUCKET: 'ncg-galeria',
    TABLE: 'ncg_gallery_photos',
    catLabels: { boda: 'Boda', quince: 'Quince', corporativo: 'Corporativo', cumple: 'Cumple', otro: 'Otro' },
    publicUrl(path) {
      return window.sb.storage.from('ncg-galeria').getPublicUrl(path).data.publicUrl;
    }
  };
})();
