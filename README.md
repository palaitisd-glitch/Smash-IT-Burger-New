# Smash IT Burgers — Website

Static website for **Smash IT Burgers**, 6037 Dempster St, Morton Grove, IL.  
Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

---

## 🚀 Deploy to GitHub Pages (free)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click the **+** icon → **New repository**.
3. Name it `smash-it-burgers` (or anything you like).
4. Leave it **Public**. Click **Create repository**.

### Step 2 — Upload the files
**Option A — Drag & drop (easiest)**
1. On your new repo page, click **uploading an existing file**.
2. Drag all four files into the window:
   - `index.html`
   - `style.css`
   - `script.js`
   - `.nojekyll`
3. Click **Commit changes**.

**Option B — GitHub Desktop**
1. Download [GitHub Desktop](https://desktop.github.com/).
2. Clone your new repo to your computer.
3. Copy the four files into that folder.
4. Commit and Push from the Desktop app.

**Option C — Git CLI**
```bash
git clone https://github.com/YOUR_USERNAME/smash-it-burgers.git
cd smash-it-burgers
# copy the 4 files into this folder, then:
git add .
git commit -m "Initial site"
git push
```

### Step 3 — Enable GitHub Pages
1. In your repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Branch**, select `main` and keep the folder as `/ (root)`.
3. Click **Save**.
4. Wait ~60 seconds, then your site is live at:
   ```
   https://YOUR_USERNAME.github.io/smash-it-burgers/
   ```

### Step 4 — (Optional) Custom domain
If you own a domain like `smashitburgers.com`:
1. In **Settings → Pages**, enter it under **Custom domain** and save.
2. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`.
3. Check **Enforce HTTPS** once DNS propagates (~24 hrs).

---

## ✏️ Things to update before going live

| Location | What to change |
|---|---|
| `index.html` line ~55 | Replace the `Order Online` href with your DoorDash/Uber Eats link |
| `index.html` line ~55 | Add your own Google Maps API key to the embed if desired |
| All phone numbers | Already set to (224) 251-7083 — verify this is current |
| `index.html` footer | Update email/social links if you add them |

---

## 📁 File structure

```
smash-it-burgers/
├── index.html      ← All page content and structure
├── style.css       ← All styling and responsive layout
├── script.js       ← Animations, hours highlight, mobile nav
├── .nojekyll       ← Tells GitHub Pages to serve files as-is
└── README.md       ← This file
```

---

## 🗺️ Data sourced from Google Maps
- **Address:** 6037 Dempster St, Morton Grove, IL 60053
- **Phone:** (224) 251-7083
- **Rating:** 4.2 ★ (383+ reviews)
- **Hours:** Mon/Wed/Sun 11:30am–12am · Tue Closed · Thu–Fri 11:30am–2am · Sat 11:30am–10pm
- **Place ID:** `ChIJpdZnh7vJD4gRmnYkzTcbgfI`
