---
name: ugc
description: Product UGC department for a creator who makes ads that brands run as paid Meta and TikTok ads (Trybe, direct brand deals, TikTok Shop). Finds the best brands to apply to, mines each brand's long-running ads, writes word-for-word copies plus the creator's own versions, builds a large bank of hook/body/CTA variations, grades scripts before filming, plans the shoot, edits with proven UGC cutting rules, and tracks submissions and earnings. Use when the creator says UGC, Trybe, brand deals, "brands to apply to", "copy this ad", "make variations", "write me hooks", "grade this script", "plan my shoot", TikTok Shop ads, or sends a product ad to copy.
---

# /ugc

Product ads that brands run as paid ads. The creator is paid per video, per sale (% of GMV) or % of ad spend. **Volume of approved, launched videos is the business.** Everything here serves that: pick the right brands, copy what already sells for them, make many versions, submit fast, double down on what gets spend.

All paths below are relative to the root of this repo (two folders up from this file). If this skill was copied to `~/.claude/skills/ugc/`, the repo root is wherever the repo was cloned; ask the creator once and remember it.

## 0. Load first (every session)
- `CREATOR.md`: who the creator is, voice, proof, brands, banned list. If it is empty, fill it in with the creator before writing anything.
- `research/trybe-explained.md`: how Trybe pays, how brands pick creators, Nate West's playbook (the top Trybe creator), guardrails.
- `rules/ad-copy-grader.md` and `rules/editing-rules.md`.
- `research/UGC-PLAYBOOK-CREATOR-CATALOGS-2026-11-06.md`: the HOOK FORMAT LIBRARY (numbered formats). Pick hooks from it before writing.
- `UGC-REGISTRY.csv` in the creator's working folder (create it on the first submission, columns in section 7).

## 1. research: which brands to apply to
**Refresh the Trybe list** (in the creator's logged-in browser at jointrybe.com/creator/discover). Fast path, the JSON API:
- Wrap `window.fetch` and `XMLHttpRequest.setRequestHeader` in the page, scroll once, and keep the app's Authorization header in a window variable. Never print it.
- List: `/backend/api/discovery/brands?limit=75&page=N` (about 106 pages): name, website, categories, `creatorEarningsBucket`, rating, `brandId`, listing `id`.
- Detail: `/backend/api/discovery/brands/{brandId}/profiles/{id}?context=desktop`: `creatorCount`, `submissionCount30d`, `trybeScore.score`, `program.rules` (payout type and value).
- Open a listing at `/creator/discover?brand={brandId}&profile={id}`, then "Request to Join".
- Run long loops as a background async function that writes to window variables; read results in small slices.
Fallback: `skills/ugc/references/trybe-brand-scrape.js` (clicks each card). Save as `trybe-brands-YYYY-MM-DD.tsv` and diff against the last file: new brands and changed payouts are the news.

**The filter.** A brand makes the apply list only if:
1. **Real revenue** (rule of thumb: $3M+ a year; Nate's floor is $100K a month). Evidence with a source and date: press, funding, StoreLeads or Similarweb, TikTok Shop trackers. No evidence = "unclear", never a guess.
2. **Active Meta ads**, ideally some running 60+ days, mostly video. Check the Meta Ad Library. Creator-named pages in their ads = they whitelist creators (good sign).
3. **Pay**: 10%+ of GMV, or % of ad spend on brands that run ads long. Flat per-submission pay ($25 to $150) only for brands with high volume and fast reviews. Avoid $ per order on bundle-heavy brands.
4. **Room**: earnings per creator (creator earnings / total creators) and a Trybe score of 80+. Thousands of creators and low earnings per creator = crowded.
5. **Fit** with the creator's niche and look (`CREATOR.md`).

**Cautions**
- GLP-1 and compounded-drug telehealth brands: no efficacy or weight-loss claims, no before/after implying the drug, Meta's health-ad rules apply. The creator decides per brand.
- Never invent revenue, sales or brand facts. Label every number with its source.

**Output:** a ranked table (brand, payout, earnings per creator, Trybe score, revenue evidence, active ads and longest-running, fit, why), the top 4 to 5 to focus on now (Nate: "focus on four or five brands and put out as much volume as possible"), and 2 to 3 small, fast-reviewing brands to build approval rate first.

## 2. apply: get accepted
- **Claim Guys method** (card `lessons/UGC-LESSON-claim-guys-get-approved-2026-11-06.md`): request message = "I studied your Meta ad library, I understand commission UGC and long-term partnerships, so I filmed a concept for you". Attach a spec ad built on their long-running ads in the request's Upload Preview (buy the product if needed). After submitting: IG DM, email, follow-up, story tag, DM their creators. Every outward message is the creator's own click.
- Big brands reject creators they haven't seen perform. The **5 portfolio videos are the application**: they must be ADS (product, reason to buy, sold), never organic content.
- Order: start with 2 to 3 smaller brands with high Trybe scores, get approvals and a converting month, then apply to the big ones.
- Per brand, write a 3-line request note: who the creator is (with real numbers they can show), why the product fits their audience, what they'll deliver in month one (4+ videos; breakout creators post a median of 4 in month one vs 1).
- Going the extra mile is allowed: DM or email the brand's growth lead (the creator sends it).
- Trybe terms: no going direct to a brand met through Trybe for 12 months.
- Requests are the creator's click. Never press "Request to Join" or send a DM for them.
- **Trybe profile** (card `lessons/UGC-LESSON-whop-ugcclub-course-2026-11-06.md` U6): link Instagram and TikTok in Settings, Social accounts (brands can run ads through the handle). Profile photo shows the creator's unfair advantage. Portfolio is ads only, filled fast by pasting TikTok Shop ad links. Check the New Brands tab; small creator counts first.

## 3. refs: mine what already sells
For each focus brand, build `brands/<slug>.md`:
- **Trybe**: the brand card's Top Formats and Top Products, the Trybe Top 100 videos for that brand or category (link or screenshot; never download a creator's video without the creator's OK).
- **Meta Ad Library**: long-runners (30+ and 60+ days) are the signal; say "long-running", never "winning". For each: hook (first line or first 3 s), angle, proof, offer, format, length, who's on camera.
- **TikTok Shop** (if the brand sells there): top videos by GMV.
- End with the **swipe list**: the 5 to 10 ads to copy, ranked by run length and how well the creator can film them.
- What's on the Trybe Top 100 right now: `research/TRYBE-TOP100-TRENDS-2026-11-14.md`, `research/TRYBE-SCRIPT-STRUCTURE-STUDY-2026-11-10.md`, `research/TRYBE-FORMAT-LIBRARY-2026-11-09.md` (dated snapshots; refresh before relying on them).

## 4. script: copies and the creator's own versions
Two kinds, both written as film sheets (one card per ad: code, hook, body lines, close, props, shots):
- **Copy**: word for word from the reference ad, every line, in the creator's delivery. Only swap what must change (name, proof). Cutting a copy down ruins it.
- **Own version**: same angle and structure, the creator's persona and proof, one new twist (a demo, an honest take, a price comparison, the product in use).
- Every script: hook of 9 words or 3 s, the product on screen by 2 s, one reason to buy, the offer, CTA. Length: long-running apparel ads have a median of 154 words (middle half 120 to 182) and brand medians of 22 to 53 s, so film the whole script and cut shorter versions from it (own versions only; copies stay full length). Their first sentence has a median of 11 words and 47% are 9 or fewer, so 9 is a target, not a gate.
- No "you" statements about the viewer's body on screen. No medical or weight-loss promises for supplements. Every claim from the brand's own site or label, with the link. FTC: #ad or the platform's paid-partnership label.
- **Grade before filming** with the `ugc-ad-grader` agent (`agents/ugc-ad-grader.md`, rulebook `rules/ad-copy-grader.md`). It checks truth and the parts long-running ads have. It never predicts sales: a transcript score separated 90+ day ads from 21 to 45 day ads at 0.37, where a coin flip is 0.50. Ungraded copy is labelled ungraded.

**What 214 long-running competitor ads do** (`research/UGC-214-RANKED-DEEP-STUDY-2026-11-08.md`):
- Days live only counts if the brand spends real money. Check spend first; don't confuse sales with spend. Transcripts alone can't pick winners.
- First frame is the body or outfit in 39% and a face in 19% (more common, not proven better). Product visible by 2 s in 84%. Someone else films in 36%.
- Openers: "if you" (32) and "this is" (19) lead. Structures: worn fit demo 46, talking feature pitch 28, bad vs good 20, stop-them skit 7. Green screen is about 10% of the sample and mostly one creator (Colin Reich), so about one per product.
- **Pick formats from the bank first** (the 214-ad study and the HOOK FORMAT LIBRARY), then write. The sample only has ads live 21+ days; to compare properly, pull stopped ads too.
- **Close placement:** sale language in 63%, about 77% of the way through; size reference in 45%, about 72% through; stock or "your size" in 74%, about 86% through. Only if true.
- **Truth beats word for word.** A copy keeps its words unless a line is untrue for the creator, makes a health or body claim, or names a competitor. Obvious jokes and staged skits are fine. Copies built from machine transcripts: watch the reference, because transcripts garble lines.
- **Comment-style intros:** made-up comments only as questions: no praise, no claim of purchase or result, a made-up handle or none, never a real person's, and never say "I got this comment" over one. Use real comments wherever they exist.
- **Outside AI research:** check what its evidence is before counting it as a second opinion (did it actually watch the videos?).
- **Clear with the brand before filming:** the real offer, lab or third-party claims, use limits on gear, every supplement line. List them as holds on the sheet and film the plain close meanwhile.

**Green screen and overlay backgrounds:** match the reference ad's background, same quality or better. Before building one, list what's behind the person at each moment in the reference, then source that kind of image sharp. Celebrity photos can be style references ("anytime you see a celebrity wear one"), never shown as if they wear or endorse the product. No random stock filler. Technical floor: a real matte (see `rules/editing-rules.md`, Look), the background graded to match the creator.

**Hook and script shapes** (each from a lesson card in `lessons/`; creators' earnings in the cards are their own claims). **Rule for all of them: one variation per format per product per batch, never the whole batch on one format.**
- **Person + private failure hook and favor close** (`UGC-LESSON-tiktok-ZPLbn9jRH-insecurity-favor-2026-11-09.md`, library #43 and #44). "If you're [specific person] who wants [outcome], but [specific small moment of failing], [product]." The failure is about the product's situation, never the viewer's body. Close: "If any of this sounds familiar, I'll do you a favor and leave the link below." Swing the product into frame on the word that names it.
- **Colin's four hooks** (`UGC-LESSON-yt-xlZuQhsaCo8-four-hooks-2026-11-09.md`, library #4, #2, #45, #46). Person + dream outcome + without pain; `If you're [person] struggling with [pain], stay the hell away from [product]. Not because x3. But because [logical consequence]`; `I'm returning [product]. Not because x3. But because [offer]` (desire first, the offer only in the last line); `If you're [person] and you've been [pain], [pain], and [pain], [product]`. Every "not because" is a feature plus an outcome. A pain is what the problem makes them do, not the problem. Don't copy his examples (dad belly, acne, testosterone, GLP): write pains about the product's situation or the buying habit. "Always works" and "Meta listens" are his claims only. Before writing: who is it for, why do they want it, what problem does it solve, what do they secretly wish would happen.
- **"Not because / but because"** (`UGC-SCRIPTING-LESSON-ig-DfSHpxDgCuo-2026-11-03.md`). Beats, 15 to 30 s: (1) "I'm returning [product]" or "Stay away from [product]", product on screen; (2) three lines of "Not because [feature] + [dream outcome or pain]", never a bare feature; (3) "But because [sale / price drop / deal]", or a joke consequence when there is no offer; (4) proof beat, then CTA. Variation axes: the opener, the three outcome lines, offer reveal vs joke reveal. Risk: can read as a bad review, so reveal fast. **Upgrade** (`UGC-LESSON-tiktok-ZPLGUvpjD-stay-away-bought-before-sale-2026-11-10.md`): one not-because line ending "unlike [the rest of the category]", "which is crazy given [top benefit]" right after the price, a real proof number before the CTA, and a variant-pick close (the pack or the size).
- **Authority + dream outcome + DQ** (`UGC-SCRIPTING-LESSON-ig-DfZy_aNgaMc-2026-11-06.md`). (1) Authority: a real proof line with the proof on screen. No proof, no hook. (2) The dream outcome in one line. (3) DQ: "But if you want [cheap version / knockoff / shortcut / magic pill], keep scrolling", aimed at a buying mindset, never the viewer's body. (4) Proof beat, offer, CTA. Variation axes: the authority line, the DQ target.
- **Authority + dream outcome + method** (`UGC-LESSON-ig-DffWVCMFiRQ-three-hooks-2026-11-08.md`, library #39). Same opening as the DQ hook, but the method replaces the DQ. On Meta, never state the viewer's age in a call-out ("in your 40s"): say "as a mom in my 30s" or "for moms in their 30s".
- **The "but" reframe** (`UGC-LESSON-tiktok-ZPLb5fasQ-but-reframe-2026-11-08.md`, library #40). Mid-script: "I'll be honest, [true small negative], but [positive that outweighs it]." Fixes "commission breath". Once per video, twice at most. The negative is never about fit, quality, safety or results; the positive is a brand-page fact or real experience. Film with and without the line.
- **Specific "If you are" hook** (`UGC-LESSON-ig-DfkOpDCg-specific-if-you-are-2026-11-10.md`, library #4 upgrade). "If you are [specific avatar] + [specific pain or dream outcome]", then product. Stack qualifiers (gender, age group, job, lifestyle, habits) until one viewer feels named; take them from reviews, viral comments, the brand's long-running ads and site copy. Qualifiers describe life and habits, never the viewer's body.
- **Viral-trend sweep** (`UGC-LESSON-tiktok-ZPN8G7He2-viral-trend-sweep-2026-11-19.md`, library #47 to #52 plus new wordings on #2 and #7). One product, one set, one body: film the first line of every format going viral in the feed back to back, with a new camera distance on each. The eight: tier-list ranking (#47), count-up stack ending on the real pack deal (#48), two-in-one split (#49), "do not buy the viral [product]" (#7), "the guy who owns the place" (#50), "you just got scammed" with a fast price-drop or joke reveal (#51), "unfortunately I have to return this" (#2), "like this / something like this" with a style-reference picture (#52). The trend is only the shell: the angle still starts from the brand's long-running ads. Skip any the product can't make true. "Viral" only where true; never a named competitor. **Use:** the eight are one product's hook day, one variation each (hooks 4 and 7 are that batch's #7 and #2, not extras). Hook rule unchanged (9 words or 3 s); #48 with its pack offer and #50 run long by design. What stands behind each shell (long-running relatives, ids) is on the card; the source's "210 submissions in 7 days" is his claim only.
- **Hook anatomy: copy, scroll stopper, audio, three levers** (`UGC-LESSON-ig-Df8YYzoEeiu-hook-anatomy-2026-11-20.md`, library #53 and #54). Every hook on a film sheet gets three lines: **Copy**, **Scroll stopper** (the visual behind the words) and **Audio**. Tag its levers: **contrast**, **open loop**, **micro commitment**; rewrite a hook with none. #53 look-closer opener ("Can you see it?" / "Look at that." while the product is in use) and #54 (#53, then an if-you qualifier) are tests: 0 of 384 long-running transcripts open with a look-at-this hook, while question openers (31 of 384) and curse openers (9 of 384) did run long. A bleeped curse is optional, per brand. His "60 / 35 / 5-10%" split, "profitable" and "the formula" are his claims only. Never a made-up sensation or result, never the viewer's body or face.

**Variables and tests:**
- **Creative winning variables** (`UGC-LESSON-drive-creative-winning-variables-2026-11-20.md`). Label every variable in a brand breakdown **Winner / Loser / Candidate / Random**; everything from a competitor's ad starts as Candidate, however long it ran. Keep `brands/<slug>-variables.md` per brand in the working folder (created on first use): category, variable, value, status, source ad, evidence, hypothesis, date, notes. Fill it only from what comes back per submission (approval or rejection, brand notes, GMV or spend per video, any hook rate a brand shares), losers included, and read it before each batch. Film sheets list specific production values (wardrobe and color, location, background, props, angle, who films). **One deliberate one-variable test per batch, on top of the variations, never instead of them:** `Test: <variable> -> <new value> | Hypothesis | Win | Kill`. The source's "rat race" claim (micro-variations don't scale) doesn't hold for apparel in the long-running set: 71 of 384 ads are near-copies of a sibling from the same brand, 50 of them ran 60+ days. When studying a reference hook: frames every 0.25 s for the first 3 s, cuts counted by eye, words in the first 3 s (median 10 across the 214), caption height, music bed. A flopped submission: one primary suspect variable and the smallest fix first.

**Angle steps (run before writing any hook):**
- **Secret want, not the feature** (`UGC-LESSON-ig-DfFwlvYgLtl-2026-11-06.md`). List features and the surface benefit of each; name the private want or pain behind each (what a buyer would not say out loud); write the hook from the private one. Test: if the hook could sit on the spec sheet, rewrite it. **Three-question ladder:** (a) What problem does it solve? (b) Why does that bother them? (c) What do they secretly wish would happen, the thing they think about at night but never say? Only (c) is hook material. Picture the private moment (fitting room, mirror, the photo they untag) and write from it.
- **Three AI prompts: ICP outcome, below the surface, deep pain** (`UGC-LESSON-ig-DeZ8jUxJ6gI-2026-11-06.md`). Name the ICP and tie each feature to a dream outcome; ask the AI to "get below the surface level"; tie each feature to a deep pain; hook from the pain, feature is the proof. Grade the table: AI output is angles, not scripts; facts from the brand page only, strip invented stats. Dictating loosely to the AI works fine (his tip).
- **Five-book copy pass, on every script** (`UGC-SCRIPTING-LESSON-ig-DffQOI5DBDz-five-books-2026-11-09.md`). Three tags at the top of each film card: **Awareness** (Schwartz: unaware, problem, solution, product, most aware; cold traffic is usually problem or solution aware), **Lead** (Great Leads: offer, promise, problem-solution, secret, proclamation, story; more aware = more direct), **Want** (Life Force 8: survive and live longer, food and drink, freedom from fear and pain, companionship, comfort, status and winning, protecting loved ones, approval; name one). Then two line tests: **Overheard** (Collier: could the first line be overheard from the buyer? take it from real buyer language, comments and reviews) and **Specific** (Hopkins: every adjective becomes a true number, spec or something shown). **Batch rule:** one product's batch covers at least 3 lead types and 2 awareness levels, and no two cards share an awareness and lead pair unless they are hook swaps of one body.

**UGC Club course upgrades** (`UGC-LESSON-whop-ugcclub-course-2026-11-06.md`, prompts in the card):
- **Script Writer GPT (U1):** paste the product link, dictate a first-person story brief + "teleprompter style, [N] seconds max, target my past self"; revise in a second message ("more controversial opening"). Output: HOOK / SCRIPT / TEXT ON SCREEN / SHOT IDEAS / CTA. Grade it like any AI draft.
- **Steal winners (U2):** the Trybe brand card's Top Formats let you copy the winning script; paste it with "similar to that but ten seconds shorter and targeting [avatar]". Scroll the Trybe Top 100 daily (app only).
- **Bot-line check (U3), every line:** sounds like a bot? feature or feeling? can they feel the commission? No begging CTA ("buy before it sells out"); detached close ("with or without you, I'm just putting you on"; sell-out only if true); product facts as a lived comparison ("soft enough for a pillowcase"); the creator's own slang.
- **Ad structure (U4, his claimed bar: 47.2% hook rate, 0.91% CTR, 44% average watch on a 48 s ad):** trend green-screen hook, then the problem on camera (problem, dream outcome, problem, solution; never outcome straight to solution), solution, multi-use (2 to 3 ways), offer + size reference, detached close; jokes throughout.

**Shoot method:** batch by location, then outfit. In each block: earbuds with the reference playing, say the card code aloud so takes split, all hooks first, then the body line by line, closes once per outfit, inserts before changing. A clean voiceover pass of the best 5 bodies at the end of the day. Order: what needs the least permission first; anything waiting on the brand last. Script in a doc, double-spaced, one line per row; read it all once out loud; film one line, about 10 s gap, next line.

## 5. variations: make a ton
- **Reply-to-comment intros in every batch,** on top of the normal hooks: a comment sticker or screenshot on screen, then the creator answers it with a prop demo. Written comments only as questions or doubts ("does this go see-through when you sweat?"), never praise or reviews (fake reviews are FTC-banned since 2024). Prefer real public comments from buyer research, no handle shown; screenshots only from the brand's own pages.
- **Props and setting matter more than the hook sentence.** Every intro gets a prop that proves the claim: a spray bottle or water pour on a generic product vs theirs, a kitchen scale, a light behind fabric, a stretch test. Test it off camera first; film it only if the result is true.
- **Setting:** for gym products a private or apartment gym beats home: equipment in the background, no strangers, no filming rules.
- **The unit is the hook.** Per script, film 8 to 12 hooks (different first lines and first frames: product in hand, reaction, problem, price, "I tested this", comparison), 2 to 3 bodies, 2 to 3 CTAs. Cut every hook on the best body first, then body and CTA swaps on the top hooks.
- **Hooks with the product working** (the product in use while talking) are the strongest engagement visual; make those their own ads, many with no montage.
- **Bodies must differ.** A batch where every ad is hook + same montage + same line + CTA reads as one video. Build bodies from modules (full demo, short, 3-step, talking montage, none) with different line sets, and give each ad its own.
- **Cheap hook variants from the same take** (`UGC-EDIT-LESSON-tiktok-ZPLaGnpNe-2026-11-02.md`): a text hook on frame one; a result-first opener (finished payoff, then the process); slow push-ins at cuts on talking heads; show each named feature on its word. Zooms are fine in UGC.
- Volume: month one 10 to 20 submissions per focus brand, then 30 to 50, more on whatever gets spend. Keep approval rate above 60%. One film day covers 3 to 4 brands: same set, wardrobe change per brand.
- **Submission floor** (course claim): no verdict on a brand or the method before 300 submissions; pace 3 to 5 a day; 100 to 200 videos for a brand that never spends is reps, move on.

## 6. edit
Follow `rules/editing-rules.md`. The short version: zero dead space by cuts (never a speed-up), last clean take of each line only, words AND eyes decide the best take, no scraps, bodies differ, copies word for word, B-roll matches the words, captions in one brand font and never over the face, licensed or original audio only on paid ads, releases from anyone else on camera. Check every render against the script before it goes out. A new edit look gets one mock frame sheet for the creator's OK before the whole batch renders. In multi-take shoots creators ad-lib, so pick the best take per line by hand from the transcript, then re-transcribe the cut audio to confirm it.

## 7. submit and track
- The creator submits in the Trybe app or the brand's folder. Never submit for them.
- `UGC-REGISTRY.csv`, one row per video: id | brand | script | hook | type (copy/own) | filmed | submitted | status (pending/approved/revision/rejected) | launched (yes/no) | earnings to date | notes.
- Weekly read: approval rate, which hooks got launched and earned, earnings per brand per video. Double down on the brand and hook that earn; drop brands that approve but never launch (an approved video earns nothing until the brand runs it).

## Self-audit before anything goes to the creator
- [ ] Every brand fact (revenue, payout, ads) has a source and date opened this session
- [ ] Scripts: claims from the brand's own pages, no viewer-body "you" lines, disclosure noted
- [ ] Copies are word for word; own versions say what changed
- [ ] Every hook starts from what already sells for THIS brand (its long-running ads, Trybe Top 100, its winning scripts), with the ad id and days live next to it. Never hooks written from the fact sheet alone
- [ ] Scripts graded by `ugc-ad-grader`; renders checked against the script
- [ ] Nothing was requested, submitted, posted or messaged without the creator's yes
