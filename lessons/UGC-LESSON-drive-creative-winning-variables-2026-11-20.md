# UGC lesson: creative winning variables (variable breakdown, variable library, one-variable tests) (2026-11-20)

**For UGC only (Trybe, EkkoVision, TikTok Shop ads). Not for OB's organic videos.**

## Source
- Google Drive folder "Extraction Skill (DOWNLOAD ZIP AND DROP IN AI OF CHOICE)", shared by Landon (Ecommerce Scaling Secrets), sent by OB 11-20 ("Yes, study it").
- File: `creative-winning-variables-skill.zip` (8 KB): `creative-winning-variables/SKILL.md` (15 KB) and `references/video-evidence.md` (3 KB). Plain text, no code. Read in full, not installed as a skill.
- Written for brand owners running their own ads (CPA, ROAS, control ads), mostly long-form health advertorials (avatar, authority figure, mechanism of the problem and of the solution).
- His claims, unverified: the F-to-S "tier list", "S-tier creatives scale into seven figures", "swipes traditionally don't beat his controls", "the biggest winners of very successful brand owners usually aren't swipes", and the hook-rate bar "above 50%". No data, ads or spend are given for any of them.

## What it says (summary)
1. **Every ad is a stack of variables.** Footage style, messenger (age, gender, look, energy), setting, props, wardrobe and its color, on-screen text, music bed, cut rate, length. Write specific values ("black desk", "navy tee"), never categories ("furniture").
2. **Four labels only for a variable:** Winner (beat the control when tested alone, or repeats across several winners, marked "not isolated"), Loser (tested and lost), Candidate (in a winner but never isolated, in the control, or from a swipe), Random (an untested throw at the wall). Every variable from a competitor's ad is a Candidate, however long it ran: a long run can come from the offer, not the creative.
3. **A library per brand** that logs losers as well as winners, read before every new breakdown. Columns: category, variable, value, status, source ad, evidence vs the control, hypothesis, date, notes.
4. **One-variable concept tests.** Carry the proven winners in, change one variable, hold the rest. Each test has a falsifiable hypothesis, a win condition and a kill condition.
5. **"The creative rat race":** endless micro-variations of one winner (new hook, slightly different scroll stopper) rarely beat the original; new concepts built from extracted variables scale further. He adds that variations "aren't dead and can still work".
6. **Gather video evidence before judging:** frames at 1 to 2 per second, every 0.2 to 0.3 s in the hook, a cut list checked by eye (scene detectors miss cuts), a transcript with word timings, words spoken in the first 3 s, caption size measured as a share of frame height, caption timing against the voice, and the music bed's loudness against the voice.
7. **Six core elements** for long-form ads: avatar, authority figure and how it is introduced, mechanism of the problem, mechanism of the solution, awareness level, sophistication stage. He says to mark an element as absent when it is missing, since absence is a variable too.
8. **Reverse mode:** for an ad of your own that flopped, name one primary suspect variable and test the smallest fix before blaming the product or the page.

## What OB's own files say (checked 11-20)
Checked against the 384 long-running ad transcripts (`sources/ugc-long-running-transcripts-2026-11-08.json`, ads live 16+ days, median 90 days) and the 214-ad hook bank (`UGC-HOOK-BANK-2026-11-09.csv`).

Method: text lowercased and split into `[a-z0-9']+` tokens. A "near-copy" is a pair of ads with the same slug whose token sets overlap above 0.6 (Jaccard); an ad counts once if it has any partner. A "same opening" family is ads with the same slug and the same first 6 tokens.

| His point | In OB's files | Read |
|---|---|---|
| Micro-variations rarely scale ("rat race") | **71 of 384** long-running ads are near-copies of another ad from the same brand or creator (word overlap over 60%, any opening), 50 of them ran 60+ days, median 92 days vs 89 for the rest. Mostly apparel: HAUS men's 19, Gymreapers 11, CUTS 9, True Classic 6, YoungLA 6. Gymreapers runs 7 ads that open with the same 6 words (92 to 93 days); HAUS runs 5 with the "not good, this is good" opening (four at 160 days). | His claim is not supported for OB's category. Apparel brands keep variation families live for months. These files only hold ads that survived, so they can't show whether new concepts would have done better. Variations stay. |
| Swipe variables are Candidates, never Winners | Same rule already in the skill: "long-running", never "winning", and days live count only with real spend. | Agrees. Adds the label. |
| Words in the first 3 s | Median **10 words** in the first 3 s (middle half 5 to 13, counting letter/digit/apostrophe tokens) across the 214. 150 of the 184 with a speech start time (82%) start speaking by 0.5 s; 30 rows have no start time. | Matches the skill's hook of 9 words or fewer / 3 s. Gives a number to check a cut against. |
| Hook rate above 50% | OB doesn't see hook rate on brand-run ads unless the brand shares it. | His bar only. Use it if a brand shares hook rate. |
| Six core elements | OB's apparel ads are 22 to 53 s talking or worn-fit demos. They have no authority figure or mechanism beats. | Fits supplement brands (fish oil, magnesium, multivitamin) better. For apparel, mark mechanism and authority "absent". |

## What is new for OB
1. **Variable labels on every breakdown.** Each variable in a brand file gets Winner, Loser, Candidate or Random. Everything from a competitor's ad starts as Candidate.
2. **A variable library per brand** at `90-References/ugc-trybe-2026-10/brands/<slug>-variables.md` (created on first use), using his columns. Fill it from what OB actually gets back per submission: approved or rejected, the brand's notes, Trybe GMV or ad spend per video, and any hook rate a brand shares. Log rejected and zero-GMV videos too. Read it before writing the next batch.
3. **Specific values on film sheets:** wardrobe and its color, location, background, props, camera angle, who films. Two cuts that differ only by a tee color are a real test of the color.
4. **One deliberate one-variable test per batch,** on top of the variations (not instead of them). Once a brand reports a top video, film the same script and shot list with one thing changed (location, wardrobe color, who films, first frame) and note the hypothesis, win condition and kill condition on the sheet.
5. **Dense hook evidence when studying a reference ad:** frames every 0.25 s for the first 3 s (the 214 contact sheets are coarser), a cut list checked by eye, words in the first 3 s, caption height as a share of frame height, and whether a music bed sits under the voice.
6. **Reverse mode on a flopped submission:** one primary suspect variable and the smallest fix, before deciding the brand or product is the problem.

## Limits for OB
- The volume of variations is the business (paid per video, % of GMV or % of spend), and long-running apparel ads run variation families, so his "rat race" rule does not cut the hook, body and CTA variations. It adds one test per batch.
- No made-up results, experts or mechanisms in the library or the scripts (same as his rules and the skill's).
- Only real numbers go in the library. A variable with no returned data stays Candidate.
- Tiers, "seven figures" and "above 50%" are his claims only.

## How to use it
- Before a batch: read `90-References/ugc-trybe-2026-10/brands/<slug>-variables.md` and carry in any Winners.
- On the film sheet: specific values for the production variables, plus one line per deliberate test: `Test: <variable> -> <new value> | Hypothesis | Win | Kill`.
- After the brand reports back: update the library rows, losers included.
