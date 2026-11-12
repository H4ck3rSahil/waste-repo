# LittlePages — personalized mini-site platform

This update keeps the original project files, images, sounds, templates and birthday page code. The previous root landing page has been preserved as `legacy-h4ck3rsahil.html`; the new platform is the root `index.html` and uses `platform.css` + `platform.js`.

## What is implemented

- Responsive landing page and searchable/filterable template gallery.
- Three original, data-driven templates: Petal Note, Sunny Day and Midnight Letter.
- Template preview and live customization (heading, name, message, sign-off, photo, text colour and music choice).
- Email/password sign-up and sign-in through the existing Supabase project.
- Owner-only create, edit, dashboard, publish/unpublish and delete operations.
- Hash routes compatible with GitHub Pages: `#/`, `#/edit/...`, `#/dashboard`, `#/manage/...`, `#/view/<uuid>`.
- Copy link, WhatsApp share, native share when available, QR code and public-page view.
- Private image bucket. Public image delivery is done through a Supabase Edge Function that signs an image URL only when the page is published.
- Background music is a small synthesized instrumental and starts only after the visitor taps Play.

## Supabase setup

The existing project is already configured in `platform.js` using the Supabase project URL and the publishable key found in the supplied project. The publishable key is safe to include in browser code. Never put a service-role key in this repository.

1. Open Supabase → SQL Editor.
2. Review `supabase/migrations/202611120001_create_created_pages.sql`, then run it. It only creates the new `created_pages` table, policies, a new private bucket (`littlepages-private`), and its policies/trigger. It does not modify `birthdays`, the existing `photos` bucket, or existing policies.
3. Install the Supabase CLI on your computer and log in:
   ```sh
   npm install -g supabase
   supabase login
   supabase link --project-ref nznbaqqgkjpmrihhevwa
   ```
4. In Supabase Dashboard → Project Settings → API, copy the service-role key locally. Do not paste it into chat, GitHub, or any frontend file. Set it as an Edge Function secret:
   ```sh
   supabase secrets set SUPABASE_SERVICE_ROLE_KEY='YOUR_SERVICE_ROLE_KEY'
   ```
5. Deploy the public-page function. It intentionally has JWT verification disabled because published pages are public; it only returns rows with `is_published = true`, and it signs private photo URLs for five minutes:
   ```sh
   supabase functions deploy public-page --no-verify-jwt
   ```
6. Authentication → URL Configuration:
   - Site URL: `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/`
   - Add Redirect URL: `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/**`
   - For local testing also add `http://localhost:8000/**`.
   - Keep Email provider enabled. Email confirmation is currently enabled, so new users must verify their email before password sign-in.
7. Do not delete or edit the existing `birthdays` table or `photos` bucket policies for this app. The new platform uses `created_pages` and `littlepages-private`.

## GitHub Pages deployment

1. Commit the contents of this ZIP to the repository root (keep the `templates/`, `images/`, `sounds/`, `css/`, `js/`, `project-site/` and `legacy-h4ck3rsahil.html` files).
2. On GitHub, open Settings → Pages.
3. Select **Deploy from a branch**, choose the branch (usually `main`) and folder `/ (root)`, then Save.
4. Wait for the Pages deployment to finish. The app uses relative asset paths and hash routing, so it works under the repository subpath without a Vite/base-path build step.
5. Set the Supabase Site URL and Redirect URL to the exact GitHub Pages address as described above.

## Local testing

From the project root, run a static server (opening `index.html` as `file://` is not supported for auth/network calls):

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Test checklist

- [ ] Home page loads and all three template cards render.
- [ ] Search and category filters work.
- [ ] Preview opens for each template.
- [ ] Email sign-up, email confirmation and sign-in work.
- [ ] Editor fields update the live preview.
- [ ] Image upload accepts image files up to 5 MB and rejects larger files.
- [ ] Create page saves a private draft owned by the signed-in user.
- [ ] Publish page makes `#/view/<uuid>` available in a separate/incognito browser.
- [ ] Copy, WhatsApp, native share and QR code work on supported devices.
- [ ] Owner can edit the page and changes appear in the public page.
- [ ] Unpublish makes the public page return the unavailable screen.
- [ ] Delete removes the page from the owner's dashboard.
- [ ] An unauthenticated user cannot list, edit or delete owner pages or access private bucket objects.

## Important limitations / notes

- The platform has three original templates as requested. The pre-existing `templates/` directory is preserved, but those legacy HTML pages are not automatically editable through the new data-driven editor; additional templates can be added by registering a template definition and its renderer in `platform.js`.
- The original `birthdays` table has broad public insert/read policies shown in the supplied screenshots. They are deliberately left untouched to avoid breaking the existing birthday feature. The new platform does not use that table.
- The old `photos` bucket is public and its existing policies are left untouched. New page photos use a separate private bucket and signed URLs. Signed photo URLs expire after five minutes; a page reload requests a fresh URL from the Edge Function.
- Browser-level testing against your live Supabase project requires you to run the SQL migration, deploy the Edge Function and configure GitHub Pages/auth redirects. Those account-side actions cannot be completed from this local project workspace.
