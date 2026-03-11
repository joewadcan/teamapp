# MBA App Starter

This is the base repo for Assignment B. It contains working plumbing —
Express connected to React, PostgreSQL connection ready — but no product
decisions. Your schema, routes, and UI are yours to build.

---

## What's in Here

```
/server
  server.js              ← Express app, health check route
  db/
    pool.js              ← PostgreSQL connection (uses DATABASE_URL)
    SCHEMA_PLACEHOLDER.sql ← ⚠️ Read the warnings — do not build on this

/client
  src/
    App.jsx              ← Health check UI — delete this once it's green
    main.jsx             ← Vite entry point
  vite.config.js         ← Proxies /api to Express — don't change this
  index.html             ← Update the <title>

.env.example             ← Copy to .env, fill in your values
PROMPTS.md               ← Your AI prompt log — update this as you build
```

---

## Setup (Do This Once as a Team)

### 1. Fork this repo

One team member forks this repo into your team's GitHub account.
Everyone else clones the fork — not the original.

### 2. Import into Replit

In Replit: **Create Repl → Import from GitHub** → paste your fork's URL.

### 3. Create a PostgreSQL database

In Replit: open the **Database** tab on the left sidebar → click **Create database**.
Replit will automatically add `DATABASE_URL` to your Replit Secrets.

> If you're running locally instead of Replit, install Postgres, create a
> database, and add `DATABASE_URL` to a `.env` file at the repo root.

### 4. Set up environment variables

**On Replit:** Your `DATABASE_URL` is already in Secrets from step 3.
If you're using Giphy, add `GIPHY_API_KEY` to Secrets as well.

**Locally:** Copy `.env.example` to `.env` and fill in your values.
```
cp .env.example .env
```

Never commit `.env` to GitHub.

### 5. Install dependencies

Open two shell tabs in Replit (or two terminal windows locally).

**Shell 1 — Backend:**
```bash
cd server
npm install
npm run dev
```

**Shell 2 — Frontend:**
```bash
cd client
npm install
npm run dev
```

### 6. Verify the stack is working

Open the Replit preview (or go to `http://localhost:5173` locally).

You should see the starter page with two green checkmarks:
- **Backend: ✓** — Express is running
- **Database: ✓** — PostgreSQL is connected

**If Backend shows ✗:** Make sure the server is running in Shell 1.

**If Database shows ✗:** Check that `DATABASE_URL` is set in your Replit
Secrets (not a `.env` file on Replit). The error message on screen will
tell you what went wrong.

**If you see a blank page:** Check the browser console (F12). A CORS error
means `vite.config.js` isn't proxying correctly — don't change that file,
check that your server is actually running on port 3001.

### 7. Start building

Both green? Good. Now:

1. **File Issue #2** in GitHub — write out your schema before touching the database
2. Delete the contents of `client/src/App.jsx` and start your actual UI
3. Add your schema SQL to `server/db/` (create a new file, not the placeholder)
4. Add your routes to `server/server.js` or in separate files under `server/routes/`

---

## Development Workflow Reminder

- Every feature on its own branch: `feature/issue-[N]-[short-description]`
- No direct commits to `main`
- Every PR references its issue (`closes #N`) and needs a teammate review
- Update `PROMPTS.md` after every AI-assisted session

---

## Questions

File a GitHub Issue in this repo and assign it to the instructor.
That is how real teams communicate.
