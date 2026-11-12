import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: corsHeaders });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
  const id = new URL(req.url).searchParams.get('id') || '';
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) return json({ error: 'Not found' }, 404);

  const url = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !serviceKey) return json({ error: 'Public page service is not configured' }, 500);
  // Service-role credentials stay in the Edge Function environment, never in the site bundle.
  const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data: page, error } = await admin.from('created_pages')
    .select('id, owner_id, template_id, title, payload, is_published')
    .eq('id', id).eq('is_published', true).maybeSingle();
  if (error) return json({ error: 'Unable to load page' }, 500);
  if (!page) return json({ error: 'Not found' }, 404);

  const payload = { ...(page.payload || {}) };
  delete payload.photoUrl;
  if (payload.photoPath && payload.photoPath.startsWith(`${page.owner_id}/${page.id}/`)) {
    const { data: signed, error: signError } = await admin.storage.from('littlepages-private').createSignedUrl(payload.photoPath, 300);
    if (!signError && signed?.signedUrl) payload.photoUrl = signed.signedUrl;
  }
  delete payload.photoPath;
  return json({ id: page.id, template_id: page.template_id, title: page.title, payload });
});
