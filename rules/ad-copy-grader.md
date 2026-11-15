# UGC ad copy bot (built 2026-11-08)

A product UGC ad grader built from long-running Meta ads. Agent file: `agents/ugc-ad-grader.md`. This file is its rulebook. The creator's own facts (niche, voice, brands, banned words) live in `CREATOR.md` at the repo root.

## What it can and can't do

**It does not predict sales.** I tested that. A score built from the transcripts, trained on some brands and tested on a brand it hadn't seen, separated ads live 90+ days from ads live 21 to 45 days at 0.37 (0.50 is a coin flip). Haus Mens 0.45, Gymreapers 0.29. So there is no score out of 100 and no "this will win."

**It does three things:** catches what would get the ad rejected or make it untrue, checks whether the script has the parts long-running ads have, and finds the one line most worth fixing.

**Limits on the evidence:**
- Days live is a signal, not sales. Spend is not public. Say "long-running", never "winning".
- I only have transcripts for ads live 21+ days. Ads killed in the first weeks aren't in here, so this shows what long-running ads share, not what separates them from failures.
- Haus and Noah Shanahan are most of the sample, and those ads are close to one template. What's common here partly reflects one company's habits.
- A brand with low ad spend says nothing through days live: its ads stay up because nobody turns them off. Check spend before citing a brand's ads as evidence.

**Corpus:** `data/ugc-long-running-transcripts-2026-11-08.json`, 384 transcripts (290 from the ad pulls plus 94 machine transcripts marked `source: grok_asr`) (fields: slug, id, days, ver, t, link). 256 are the brand pulls: Haus, Haus Mens, Cuts, Noah Shanahan, True Classic, YoungLA, Mugsy, Barbell, Gymreapers, Bear KompleX, Versa Gripps, Gorilla Mind, Thorne, Momentous, Transparent Labs. The other 34 are source ads for script cards, from keyword searches and Trybe brands, added so copies can be compared; they aren't in the rates below. Grok's 11-08 transcripts added Colin Reich, Nate West and the rest of the format bank (entries with `source: grok_asr`); those are machine transcripts and aren't in the rates below. `research/UGC-214-RANKED-DEEP-STUDY-2026-11-08.md` ranks the best references by quality, not sales.

## Step 1. Gates: any fail means the card can't be filmed as written

| # | Gate | Fails when |
|---|---|---|
| G1 | True | A claim isn't on the brand's page or label, or isn't the creator's real experience. Invented numbers, reactions, stories, tests or scarcity, **including inside a word-for-word copy**: the copy rule never overrides truth. An obvious joke or a staged skit is not an invented fact. Bracketed fields like [real time] are fine until filmed, then must be real. Fixed times or reactions written as real events need brackets or a true check. |
| G2 | Claims | Any health or body-change claim for a supplement; any promise that clothing changes the body; "patent pending"; gyno-treatment wording. A first-person fit statement that's true and can be shown passes. |
| G3 | Viewer's body | A "you" statement about the viewer's body on screen. |
| G4 | Names and safety | A competitor brand named on camera; anything on the creator's banned list in `CREATOR.md`; a real person's handle on a made-up comment. |
| G5 | Comments | A comment-style intro that isn't a question, praises the product, or claims a purchase or result. "I got this comment" over a made-up one. |
| G6 | Copies | A word-for-word copy changed beyond must-change swaps. Compare against the source transcript. |
| G7 | Meta and paid use | Swearing with no clean take planned, copyrighted music, or a line likely to trip review. |

## Step 2. Parts check: mark each present, missing or doesn't apply

Rates below are from 128 apparel ads live 60+ days (Haus, Haus Mens, Noah Shanahan, Cuts, Barbell, Mugsy) unless noted. A missing part is a prompt to look, not a fail. Plenty of long-running ads skip several.

| Part | What long-running ads do | Check |
|---|---|---|
| Hook paid off | Library #1 to 42 | Does the body deliver what the first line set up? This is the most common real break. |
| Hook shape | Median first sentence 11 words; 47% are 9 or fewer | Name the library format. Over about 12 words, say so. |
| Below the surface | Skill section 4 secret-want test | Could the hook sit on the spec sheet? If yes, flag it. |
| Product early | Skill: on screen by 2 s | Does the first shot show it? |
| One visible reason | Winner spine | One reason, shown on camera, words matching the picture. A list of features is a miss. |
| Fit detail | 37% of ads live 90+ days name two or more body points | Apparel: named body points, felt or shown. |
| Size reference | In 45%, typically about 72% of the way through | Apparel: height, weight, size worn. |
| Offer | Sale language in 63%, typically about 77% through | Is a real offer stated? Use the close bank. |
| Stock or "your size" | In 74%, typically about 86% through | Only if true. Prefer "if you still see your size." Never invent a sell-out. |
| Detached close | In 16% of 90+ day ads vs 5% of 21 to 45 day ads, small numbers | No begging. "I'm just putting you on." |
| Lived proof | Time owned, wash count: 22% of 90+ vs 11% of 21 to 45 | Real time only. |
| Backstory | "I was / I used to / I tried": 29% of 90+ vs 14% of 21 to 45 | Only the creator's real story. |
| Length | Middle half 120 to 182 words, median 154 | Flag under 60 or over 200. Short tests are allowed. |
| One ask | Skill rule | One link or one comment ask, never two. "Comment WORD for the link" is out on cold Meta ads. "Drop your height and I'll help with size" is fine if someone really answers. On a word-for-word copy, flag it and leave it. |
| Awareness and lead | Five-book pass (card 11-09) | Name the awareness level and which of the six leads it uses. Does the first line assume more than that buyer knows? |
| One want | Life Force 8 | Name the one want it sells to. Two or three competing wants is a miss. |
| Overheard first line | Collier, buyer voice | Could a buyer have said it? Point to the comment, review or creator line it came from. |
| Specific beats vague | Hopkins | Any adjective that could be a true number, spec or shown thing. Never suggest an invented one. |
| Bot-line test | Whop U3 | Sounds like a bot? Feature or feeling? Can you feel the commission? Fix the line that fails. |

Sale and sell-out language being more common in older ads may only mean Haus keeps a sale running. It is not proof that urgency causes longevity.

## Step 3. Batch check (only when grading several cards)

- Do cards differ in what Meta treats as different: footage, talent, location, format, first 2 seconds, story shape, reason?
- One variation per format per product per batch. 75% proven shapes, 25% tests.
- At least 3 lead types and 2 awareness levels per product. Flag two cards with the same awareness and lead pair unless they are hook swaps of one body.
- Do two cards crown a different "best" product and contradict each other?

## Step 4. Output, one block per card

```
CARD: code and name
VERDICT: SHOOT | FIX THEN SHOOT | PARK
GATES: all pass, or the gate number with the exact line. G6: "not checked" if the source isn't in the corpus
HOLDS: anything waiting on the owner (sale, certificate of analysis, cable use, supplement or sleep wording), or none
HOOK SHAPE: library number and name, or "none" plus three words describing it
MISSING PARTS: only the ones worth caring about for this card
BEST FIX: "exact old line" -> "exact new line", one reason, one sentence. On a PARK, say what would unpark it
CLOSEST LONG-RUNNING AD: link and days live, if there is a real match
```

- A hold doesn't change the verdict unless the card can't be filmed without it. It's listed so the creator sees it.
- A missing source never fails a card.
- The same clause repeated twice counts as one fix.
- Gates are written for the creator's own scripts. A real competitor ad will fail them (brand name, its own stories), so to test the bot on one, run only the parts check.

- SHOOT: no gate failed and the logic holds. **Missing parts alone never block a card.**
- FIX THEN SHOOT: a gate failed on one line, or a hook isn't paid off.
- PARK: the core claim can't be made true, or the card needs something the creator doesn't have.
- No letter grades, no scores, no predicted performance.
- One best fix per card. Word-for-word copies only get a fix for a must-change item or a real break in logic. If the source ad has the same "flaw," leave it.
- Keep the creator's voice as written in `CREATOR.md`. No em dashes. Avoid "genuinely", "honestly", "straightforward".

## What this draws on

The long-running transcripts above; `skills/ugc/SKILL.md` sections 4 and 5; `research/UGC-PLAYBOOK-CREATOR-CATALOGS-2026-11-06.md` (library #1 to 42, editing and scaling rules, use rules); the lesson cards in `lessons/`.

The creator's own results replace this rulebook as soon as they exist. When Trybe or a brand shows which of the creator's ads got spend, compare those against the parts table and rewrite it.
