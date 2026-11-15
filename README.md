# UGC Playbook

A full product-UGC system, set up so any creator's Claude can run it: how to pick brands on Trybe, how to get approved, how to mine what already sells, the hook formats that long-running ads use, how to write copies and your own versions, how to grade a script before filming, how to plan a shoot, how to edit, and how to track what earns.

Everything here came from real batches and the lessons OB studied from the top UGC creators (UGC Club / Colin Reich, Nate West, Claim Guys and others). Creator earnings quoted in the lesson cards are those creators' own claims.

## Give it to your Claude (2 minutes)

Repo: https://github.com/dylaneob/ugc-playbook (public, no login needed to clone).

**Claude Code (desktop app or terminal):** open a session and paste:

> Clone https://github.com/dylaneob/ugc-playbook into `~/ugc-playbook`, copy `skills/ugc` into `~/.claude/skills/ugc` and `agents/ugc-ad-grader.md` into `~/.claude/agents/`, then read `README.md` and help me fill in `CREATOR.md`. From now on use the /ugc skill for all my UGC work, with `~/ugc-playbook` as the repo root.

Or just open a Claude Code session inside the cloned folder: `CLAUDE.md` tells Claude what to load.

**claude.ai (Projects):** make a project called UGC, upload `skills/ugc/SKILL.md`, `CREATOR.md`, everything in `rules/`, `lessons/` and `research/` as project knowledge, and paste the top of `skills/ugc/SKILL.md` into the project instructions.

Searching the transcript corpus (`data/`) and the Trybe browser scrape only work in Claude Code; on claude.ai skip `data/` and the grader still works from its rulebook.

Then fill in `CREATOR.md` (your niche, voice, proof, brands, never-list). Every rule that says "the creator" means you.

## What's in here

| Folder | What it is |
|---|---|
| `skills/ugc/SKILL.md` | The skill: research, apply, refs, script, variations, edit, submit and track. Start here. |
| `CREATOR.md` | Your profile. Claude reads it before every job. |
| `rules/ad-copy-grader.md` | The script grader's rulebook: 7 gates, the parts long-running ads have, output format. |
| `rules/editing-rules.md` | Every editing note from real batches: dead space, takes, scraps, bodies, color, cutouts. |
| `agents/ugc-ad-grader.md` | The grader as a Claude Code agent ("grade this script"). |
| `lessons/` | One card per lesson: hook formats, script templates, angle methods, the UGC Club course, Claim Guys approval method. |
| `research/` | Hook format library (numbered formats, creator catalogs), 214 long-running ads ranked, Trybe Top 100 trends and script structures, how Trybe works, UGC rates. |
| `data/ugc-long-running-transcripts-2026-11-08.json` | 384 transcripts of long-running Meta UGC ads (slug, ad id, days live, versions, transcript, link). The grader searches it. |
| `skills/ugc/references/trybe-brand-scrape.js` | Pulls Trybe's brand list from the logged-in browser. |
| `UPGRADES.md` | What was added and when. |

## Rules that never bend
- Every claim comes from the brand's own page or label, or your real experience. No invented numbers, reactions, tests or sell-outs.
- No "you" statements about the viewer's body. No health or weight-loss promises for supplements. Disclose (#ad or the paid-partnership label).
- Made-up comment intros are questions only, never praise or reviews.
- Say "long-running", never "winning": days live is a signal, not sales.
- Claude never submits, requests, posts or messages for you.

The lesson cards and research were written during OB's own batches, so their examples use his brands (EkkoVision apparel, Rythm, Promix, Ultra Pouches) and his body stats. Read them as worked examples: Claude swaps in your brands and your proof from `CREATOR.md`.

Pulling Trybe's brand list fast (skill section 1) needs Claude to drive your logged-in browser (Claude in Chrome); without it, browse Trybe yourself and paste what you see.

Snapshots (Trybe Top 100, payouts, ad counts) are dated. Refresh them before relying on them.
