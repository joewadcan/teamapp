# Prompt Log

Log every AI-assisted coding session here. One entry per session minimum.
This file is part of your grade — see the assignment doc for what we look for.

**Format:**
- Date
- The prompt (or a close paraphrase — doesn't need to be word-for-word)
- What it produced
- What you had to fix or change, and why

Timestamps on your commits should roughly align with your entries.
Writing this the night before will be obvious.

---

## Entry 1 — [Date]

**Prompt:** "Give me an Express route that returns all rows from a table called ideas"

**Output:** A basic GET route using pool.query(). It worked but had no error handling — if the query failed the server would crash silently.

**What we changed:** Added try/catch around the query. On error, we return a 500 with `res.status(500).json({ error: err.message })`. We also added a console.error so failures show up in the Replit logs.

---

## Entry 2 — [Date]

*(Add your entries below this line)*
