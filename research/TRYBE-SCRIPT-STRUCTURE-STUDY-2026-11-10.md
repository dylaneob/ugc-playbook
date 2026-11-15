# Trybe script-structure study — 2026-11-10 ~11:45 PM ET

Evidence memo for OB UGC Creative and Claude (they write scripts). This is not a production script pack, and it is not performance data.

Rankings are a dated snapshot of Trybe Top 100 by trailing-24h earnings (per OB). They are not proof of CTR, ROAS, spend, or profit. Companion CSV: `TRYBE-SCRIPT-STRUCTURE-STUDY-2026-11-10.csv`.

## 1. Snapshot vs noon (~12:30 PM ET) — about 11 hours later

- Matched all 100 by submission UUID (not creator or hook).
- Carried: **92**. New vs noon: **8** (5 never seen in the Nov 9 AM/PM or noon snapshots; 3 returned from Nov 9 AM). Dropped from noon: **8**.
- Among the 92 carried: 8 same rank, 40 climbed, 44 slid. No brand or creator label changes.
- Biggest climbs: Lola + The Boys #100→#68, Clean Nutra #82→#56, Dr.Melaxin #95→#71, Peachy Men #83→#65, IRAZIA #71→#58.
- Biggest slides: Meroda Cosmetics UK #66→#88, Dr.Melaxin #68→#84, Hollow Socks #75→#91.
- **Ultra Pouches:** @sallymakescontent is the same video, #13→**#17**. Noon’s #32 (@autohub247 fridge demo) **dropped**. New #32 is @jc_hawkins (never in prior snapshots). **Promix is still absent.**
- Unique brands: 72 (74 at noon). Repeat creators: @that_mama_life_ (#1 Smooche, #88 Meroda), @mikemilobsky (Hiya #6 and #7), @fitmamawellness (Graymatter #13 and #62), @zentree (Penrose #35, Peachy Men #65), @ckier (SiPhox #46 and new #98).
- Duration checks: #74 True Nutra is **613.3s** by ffprobe (not a typo). New #100 Cozy Earth is **8.03s** by ffprobe (not a truncated download). Observed range is 8.0–613.3s; median about 42s. With only a few snapshots, this does not mean short or long “wins.”
- Five never-seen videos were downloaded from their catalog brand-path URLs (all HTTP 200). The 21 `/tmp/` URLs in the catalog were unverified guesses; those rows were already downloaded earlier from brand-path URLs, so they were reused and not re-guessed.

New vs noon:
- #32 @jc_hawkins / Ultra Pouches — new_never_in_prior_snapshots — count_stack_value
- #37 @youcan / IM8 — new_never_in_prior_snapshots — curiosity_reframe
- #52 @itsryleexoxo / MaryRuth Organics — new_vs_noon_but_returned_from_am09#78 — callout_command
- #85 @jens / Polar Haircare — new_vs_noon_but_returned_from_am09#65 — count_stack_value
- #93 @daniellescribner / ONDO — new_vs_noon_but_returned_from_am09#44 — pain_confession_then_relief
- #98 @ckier / SiPhox Health — new_never_in_prior_snapshots — demo_or_product_id_first
- #99 @ashleysherm91 / Javvy Coffee — new_never_in_prior_snapshots — curiosity_reframe
- #100 @itslea / Cozy Earth — new_never_in_prior_snapshots — situation_first_product_in_hand

Dropped from noon: #32 @autohub247 / Ultra Pouches; #39 @andrewshields / IM8; #54 @thegregglife / MaryRuth Organics; #78 @jessicamoon / The Loaded Tea Shop; #90 @nikki43 / Fancii & Co.; #96 @reallifewithsarah / Ogee; #98 @thecreatorkristin / Rosabella; #99 @heylateisha / Canva.

## 2. Method and caveats

- Speech: faster-whisper `small.en` int8. Prefer opening (first 12s, no VAD) for hooks when VAD dropped or hallucinated the open (examples: Hume #8, IM8 #9, Graymatter #13 “know know know” loops, BYLT #29 “it looks” loops). Seven videos that VAD called silent or empty were re-transcribed with no VAD and gained usable speech (#11, #30, #49, #53, #62, #76, #94). Original analysis files were not overwritten.
- Silent / text-led videos: structure from OCR and frames (0/1/3s, plus mid/last where available).
- All quotes are unreviewed machine transcripts, capped at 15 words in this memo. ASR mishears brand names (Hume, Luxe, Ultra “upper deckies,” GLP-1, etc.).
- **Observed counts** below describe this snapshot only. They are not causation, and they are not Ads Manager results. Four snapshots exist; noon Nov 10 was identical to Nov 9 PM.
- Smooche is Yana’s brand, not OB’s. It is in the counts because it is on the list.

- Usable speech for beat timing: **88 / 100**. Text-led or too-weak speech: **12** (includes true silent ads plus a few garbled VOs such as BYLT #38 and Peachy Men #65).

## 3. Hook types (observed counts, all 100)

- `callout`: **18** (of which 5 are in the top 20)
- `demo_or_chooser`: **17** (of which 2 are in the top 20)
- `curiosity`: **9** (of which 0 are in the top 20)
- `confession`: **7** (of which 2 are in the top 20)
- `offer_urgency`: **7** (of which 1 are in the top 20)
- `price_shock`: **6** (of which 3 are in the top 20)
- `other`: **6** (of which 0 are in the top 20)
- `question`: **5** (of which 0 are in the top 20)
- `skit_dialogue`: **4** (of which 3 are in the top 20)
- `story_in_progress`: **4** (of which 2 are in the top 20)
- `count_stack`: **4** (of which 0 are in the top 20)
- `text_only_claim`: **4** (of which 0 are in the top 20)
- `comparison`: **3** (of which 1 are in the top 20)
- `review_gate`: **2** (of which 1 are in the top 20)
- `compliment_story`: **2** (of which 0 are in the top 20)
- `bold_claim`: **2** (of which 0 are in the top 20)

## 4. Script skeletons (primary label, one per video)

Labels are a reading of hook + early beats, not a claim that the skeleton “caused” rank. Some ads mix two skeletons (Runnr #89 is a skit *and* a 2015-vs-now comparison; Ultra #32 is a count-stack *and* an offer end card). The primary label is the opening move.

### `callout_command` — 17 videos (5 in top 20)

Opens by telling a specific person to stop, stay away, or notice a problem (“Stop watching beautiful people…”, “If you’re on a GLP-1, stay the hell away from AG1”, “For guys who hate stiff long sleeve polos”). Then reframes to the product as the exception or the proof.

Examples: #3 AltRx, #7 Hiya Health, #11 Wispr Flow, #12 Luxe Cosmetics, #20 AG1, #29 BYLT, #41 CLEARSTEM Skincare, #42 Primal Queen, #50 Tab, #52 MaryRuth Organics…

### `demo_or_product_id_first` — 17 videos (2 in top 20)

Names or handles the product immediately (“This is the personalized slider name bracelet”, chooser “If you want longer hair, this one”, mom ranking three creams, “best at-home blood test”).

Examples: #18 MaryRuth Organics, #19 Penrose Skin, #22 Olivia Jewelry, #27 Packed, #28 FitSleeps, #31 Rythm, #34 Polar Haircare, #40 Orion Sleep, #47 IRAZIA, #59 The Warmy…

### `curiosity_reframe` — 12 videos (0 in top 20)

Opens with “Did you know…”, “Everyone talks about X, but Y”, or a visual shock (“See all those flakes? Those are microplastics.”) then teaches into the product.

Examples: #23 NeuroGum, #36 VERIA, #37 IM8, #45 Pepper Pong, #49 Dose, #51 The Tallowed Truth, #57 Clean Nutra, #80 OEAK, #86 Physician's Choice, #87 PawkieTalkie…

### `pain_confession_then_relief` — 10 videos (4 in top 20)

First person pain or identity (“As a mom of six, I don’t have $300…”, task paralysis, “this close to getting a divorce because I can’t finish a to-do list”, stepping off a GLP-1 because of cost). Product arrives as relief.

Examples: #2 AltRx, #6 Hiya Health, #13 Graymatter, #14 Trinity Meds, #25 Trinity Meds, #62 Graymatter, #84 Dr.Melaxin, #90 Love Wellness, #91 Hollow Socks, #93 ONDO

### `offer_urgency` — 10 videos (1 in top 20)

Opens on a missed-deal or live-sale frame (“I hope you didn’t already buy…”, “last day of the biggest sale”, “stocking stuffer… scoop it up”).

Examples: #10 Luxe Cosmetics, #43 Fatty15, #53 She's Birdie, #54 Hume Health, #63 Earth Breeze, #68 Lola + The Boys, #75 Kept, #82 Triquetra Health, #96 Sincerely Yours, #97 Ravine

### `price_shock_reframe` — 6 videos (2 in top 20)

Opens on price disbelief (often the on-screen line “This is how much??” or “way too expensive”), then names the product, stacks features, and pivots to a sale or “no monthly fee” reframe. Soft CTA at the end.

Examples: #5 NOBL, #8 Hume Health, #44 Hollow Socks, #48 Tilt Rips, #55 AG1, #83 KittySpout

### `other_or_unclear` — 6 videos (0 in top 20)

ASR too weak, mixed, or no clean opening move in what we could read. Do not over-interpret these rows; see the CSV notes.

Examples: #33 Primal Queen, #39 Ahead Nutrition UGC, #56 Clean Nutra, #60 Vintage Muscle, #61 ALT. Fragrances, #66 Physician's Choice

### `skit_or_dialogue` — 5 videos (3 in top 20)

A second person, a catch line, or a acted scene starts the ad (“CAUGHT HIM..”, “Hey do you work here?”, “What the heck are you wearing though?”). Product is the punchline or the prop.

Examples: #1 Smooche, #4 Smooche, #15 ALT. Fragrances, #67 Craft Story, #89 Runnr Active

### `comparison_demo` — 4 videos (1 in top 20)

Two objects or two years on screen immediately (Ridge 2027/2025, Runnr 2015 gear, Alphatech jacket vs hoodie as a support visual, SiPhox two at-home tests). Voice walks feature-by-feature, then sale/stock CTA.

Examples: #16 Ridge, #30 NOBL, #46 SiPhox Health, #92 Readability Tutor

### `situation_first_product_in_hand` — 4 videos (1 in top 20)

Opens on the buyer’s moment, usually as on-screen text. The product is already visible (tin in hand, garment on body). Speech may be absent. No hard spoken CTA in the Ultra #17 frames sampled.

Examples: #17 Ultra Pouches, #21 Chef Preserve, #38 BYLT, #100 Cozy Earth

### `count_stack_value` — 4 videos (0 in top 20)

Opens by counting units (“Not one, not two… but N”) or flashing colors/tins, then justifies the stack (flavors, features, “three pairs for the price of one”). Ultra #32 also ends on an on-screen “TAKE 45% OFF” card.

Examples: #26 Alphatech Apparel, #32 Ultra Pouches, #81 SIGMAS, #85 Polar Haircare

### `compliment_interruption` — 3 videos (0 in top 20)

A stranger’s compliment or approach is the hook (“I can’t believe I got stopped for this”, grocery-store approach, “random women coming up”). Then the product is named as the reason.

Examples: #24 The Tallowed Truth, #35 Penrose Skin, #76 CLEARSTEM Skincare

### `review_gate_or_fake_return` — 2 videos (1 in top 20)

Opens “This is why you always read the reviews…” and often pretends a return or a problem, then flips to praise and a deal-might-be-gone CTA. Repeated by IM8 #9 and ZipString #78.

Examples: #9 IM8, #78 ZipString

## 5. Timing and language (usable-speech videos only — observed, not causal)

- Time to first product-word mention (heuristic on transcript words): n=40, median **5.13s**, mean 28.93s. This is mention time, not first on-screen appearance. Ultra #17 never says the brand; the tin is in her hand at 0s.
- Words per second (over detected speech span, not full runtime, because VAD often drops the open): n=88, median **2.44**, mean 5.32. Average sentence length: median **14.55** words. Treat WPS as rough; hallucinations and dropped words both distort it.
- Pronoun tilt among usable-speech ads: **42** have more you/your than I/me/my; **33** tilt I; **13** tied. Many callouts are “you”-led; pain-confession and compliment stories are “I”-led.
- CTA modes (all 100, observed in speech and a few sampled end cards):
  - none_observed_in_speech: 69
  - spoken: 25
  - none_observed_in_speech_or_sampled_frames: 5
  - spoken_and_onscreen: 1
- Spoken CTAs, when present, are usually late and soft (“leave a link”, “if there’s still a link below”, “before they’re gone”). Several high-rank ads have **no spoken CTA** in the transcript.

## 6. What is distinctive in the top 20 (descriptive only)

- On-screen hooks do a lot of the opening work even when there is VO. #1 “CAUGHT HIM..”, #5/#8 “This is how much??”, #13 “POV: intense Task paralysis”, #16 “2027 / 2025”, #17 the 14-hour sports-mom line.
- Buyer-situation and identity opens are common: mom of six (#2), GLP-1 cost/scam frames (#3, #14, #20), ADHD bedtime (#7), task paralysis (#13), clocking in for 14 hours (#17). The product is the payoff, not the first noun.
- Top-20 skeleton counts: callout_command 5, pain_confession_then_relief 4, skit_or_dialogue 3, price_shock_reframe 2, demo_or_product_id_first 2, review_gate_or_fake_return 1, offer_urgency 1, comparison_demo 1, situation_first_product_in_hand 1.
- Lengths in the top 20 run from 17.5s (Ultra #17) to 121.8s (ALT. Fragrances #15). That spread alone is why we do not say short or long wins.
- Smooche holds #1 and #4 (Yana’s brand). Several top-20 offers are GLP-1-adjacent (AltRx, Trinity, AG1). Those categories are context, not a brief for Ekko.

Top 20 hook + skeleton:

| # | Brand | Primary hook (≤15w) | Hook type | Skeleton | Product mention | CTA |
|---|---|---|---|---|---|---|
| 1 | Smooche | CAUGHT HIM.. | skit_dialogue | skit_or_dialogue | not observed | none_observed_in_speech |
| 2 | AltRx | As a mom of six, I don't have $300 a month to just spend | price_shock | pain_confession_then_relief | not observed | none_observed_in_speech |
| 3 | AltRx | You can't tell me that we're being scammed with GLP ones | callout | callout_command | 1.4 | none_observed_in_speech |
| 4 | Smooche | Don't waste ur coins | skit_dialogue | skit_or_dialogue | not observed | none_observed_in_speech |
| 5 | NOBL | This is how much?? | price_shock | price_shock_reframe | not observed | none_observed_in_speech |
| 6 | Hiya Health | For kids who struggle with worry. | confession | pain_confession_then_relief | not observed | none_observed_in_speech |
| 7 | Hiya Health | If your child with ADHD stays up late | callout | callout_command | 24.92 | spoken |
| 8 | Hume Health | This is how much?? | price_shock | price_shock_reframe | not observed | none_observed_in_speech |
| 9 | IM8 | This is why you always read the reviews before you buy something online | review_gate | review_gate_or_fake_return | 29.98 | none_observed_in_speech |
| 10 | Luxe Cosmetics | I hope you didn't already buy the Luxe Cosmetics Foundation | offer_urgency | offer_urgency | 16.46 | spoken |
| 11 | Wispr Flow | STOP typing out paragraphs for him | callout | callout_command | 2.06 | none_observed_in_speech |
| 12 | Luxe Cosmetics | Stop watching beautiful people with perfect skin put this on | callout | callout_command | not observed | none_observed_in_speech |
| 13 | Graymatter | POV: intense Task paralysis | story_in_progress | pain_confession_then_relief | 2.06 | none_observed_in_speech |
| 14 | Trinity Meds | Being on a GLP-1 does not have to break your bank | confession | pain_confession_then_relief | 32.82 | none_observed_in_speech |
| 15 | ALT. Fragrances | Hey do you work here? | skit_dialogue | skit_or_dialogue | 58.14 | none_observed_in_speech |
| 16 | Ridge | 2027 / 2025 | comparison | comparison_demo | 1.2 | spoken |
| 17 | Ultra Pouches | Clocking in for 14 hours of taking kids to all their fall sports | story_in_progress | situation_first_product_in_hand | visible at 0s, not spoken | none_observed_in_speech_or_sampled_frames |
| 18 | MaryRuth Organics | If you want longer hair, this one. | demo_or_chooser | demo_or_product_id_first | 26.7 | spoken |
| 19 | Penrose Skin | So I'm here with my mom, and we're gonna be ranking | demo_or_chooser | demo_or_product_id_first | 2.56 | spoken |
| 20 | AG1 | If you're on a GLP-1, stay the hell away from AG1. | callout | callout_command | not observed | none_observed_in_speech |

## 7. Transfer notes (inference, not evidence of what will spend well)

These are adaptations for Claude / UGC Creative, labeled as inference. Ekko still has no ad-account history in this workstream, so nothing here is a predicted winner.

### EkkoVision (beater length, visible thickness, loaded straps, jeans for quads, women’s beater)

1. **Situation first, garment already on** — copied as a structure from Ultra #17 and BYLT #29, not as a script. Open on the set, the workday, or the moment the shirt rides up or the strap slips; the beater or jeans should already be on the body in frame 0, the way the Ultra tin is already in her hand. Do not open on the brand name.
2. **Proof in the same beat as the hook** — Ridge and Alphatech put the comparison on screen at 0s. For Ekko, length, thickness, a strap under a real loaded set, or quad room in the jeans should be visible in the first 1–3 seconds, not only described later. This is a gap we have flagged before; this snapshot still under-covers that exact demo (observed in this sample, not a market-wide proof).
3. **Callout to a specific frustration** — BYLT’s “For guys who hate stiff long sleeve polos” and Luxe #12’s “Stop watching beautiful people with perfect skin put this on and see whether or not it works” are transferable *shapes*. Ekko angles: stiff or see-through beaters, straps that slip under load, jeans that fight quads. Women’s beater: use a real-body proof shape, and do not turn Yana’s personal no-bra workwear into a universal guarantee.
4. **Count-stack and price-shock need a real offer.** Ultra’s new #32 (“not 1 / not 3 / but 5”, then “TAKE 45% OFF YOUR ORDER”) and Hume/NOBL “This is how much??” are common, but they depend on a true bundle or markdown. Do not invent an Ekko discount or an exclusive D-ring claim (D-rings are not exclusive).
5. **CTA can be late, soft, or absent.** Ultra #17 never speaks a CTA in sampled frames; #32 speaks “link below / sold out again” and shows a 45% card. Design the hook and the proof to carry the first 3–8 seconds; do not spend the open on “link in bio.”

### Ultra Pouches (OB’s brand — already on the list)

- Two different skeletons are now in the same Top 100: **situation-first silent POV** (#17, carried, slid 13→17) and **count-stack value + offer card** (#32, new, @jc_hawkins). That is observed coexistence, not a verdict on which is better.
- #32 spoken hook: “One, two, not three, but you can get all five of these upper deckies for that price.” (ASR said “upper deckies”; on-screen is “not 1 / not 3 / but 5”. Tins are branded ULTRA.) Mid-card: “FOCUS POUCHES” / “52,032 happy customers” / no nicotine, caffeine, or crash. End card: timer + “TAKE 45% OFF YOUR ORDER.” Flavors and “75 pouches total” are stacked in the middle. CTA is both spoken and on-screen.
- #17: no usable speech. Text hook stays up the entire clip. She opens the tin in the car and holds it to camera at the end. Product entry is natural (already in hand). CTA: none observed in sampled frames.
- The dropped #32 (@autohub247 fridge demo) is no longer on the list. Do not treat drop as a creative failure; it is one snapshot.

### Promix (still absent)

- No Promix video is in this Top 100 (or the earlier Nov 9–10 snapshots). Nearby supplement/daily-use skeletons that *could* be adapted (inference): IM8/ZipString review-gate, AG1 callout-reframe, Javvy #99 “Did you know you can take your regular black coffee…” demo-in-progress, MaryRuth #18 chooser-list (“If you want longer hair, this one.”), curiosity-reframe “everyone talks about energy, but recovery…” (IM8 #37). None of those should be copied as Promix scripts; they are shapes only.

## 8. New-video download and ASR notes

- #32 Ultra Pouches, 19.47s, speech ok (new).
- #37 IM8, 32.90s, speech ok: “Everyone talks about energy, but recovery might be even more important.”
- #98 SiPhox Health, 53.70s, speech ok: second SiPhox from @ckier; opens as a bold product-ID claim vs “that brand you’ve seen hundreds of ads for.”
- #99 Javvy Coffee, 45.47s, speech ok: “Did you know…” while pouring coffee into a novelty mug (on-screen also starts “Protein Iced coffee”).
- #100 Cozy Earth, 8.03s, speech is a song bed (“Ladies and gentlemen, will you please stand?”). The designed hook is on-screen: “Mamas, bamboo pajamas are NOT a splurge. It’s self-care.” Garment already on. Short by design, not a bad rip.
- Returned from Nov 9 AM (already had transcripts): #52 MaryRuth, #85 Polar (“Not one, not two, but three bottles…” — count-stack), #93 ONDO no-show socks.

## 9. Files

- This memo (new file, nothing overwritten).
- `TRYBE-SCRIPT-STRUCTURE-STUDY-2026-11-10.csv` — one row per video.

