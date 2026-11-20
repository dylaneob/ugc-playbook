# Trybe Top 100 trends: 2026-11-19

This report compares six distinct Trybe Top 100 list states over 10 days, from Nov 9 to Nov 19. The latest pull ran Thursday, Nov 19, about 11:23–11:26 PM ET. The list ranks videos by trailing-24h earnings.
- Rank is not proof of profit, spend or performance.
- No dollar amounts are shown or inferred.
- Hooks are never invented. Each one is labeled **fresh** (read from today's thumbnail), **carried over** (read in an earlier snapshot and matched to today's row) or **unverified**.

Companion snapshot: `top100-2026-11-19.md`. Source rows: `top100-2026-11-19-rows.tsv`. Previous benchmark: `TRYBE-TOP100-TRENDS-2026-11-14.md`.

## Scope and confidence

| List state | File | Captured (ET) | Gap from previous |
|---|---|---|---|
| Nov 9 AM | `top100-2026-11-09.md` | ~12:50 AM | n/a |
| Nov 9 PM | `top100-2026-11-09-PM.md` | ~8:35 PM | ~20 h |
| Nov 10 PM | `top100-2026-11-10-PM.md` | ~11:45 PM | ~27 h |
| Nov 12 | `top100-2026-11-12.md` | 11:00–11:25 AM | ~35 h |
| Nov 14 | `top100-2026-11-14-rows.tsv` (realigned, see below) | 10:07–10:12 AM | ~47 h |
| **Nov 19** | `top100-2026-11-19-rows.tsv` | **~11:23–11:26 PM** | **~5 days 13 h** |

**Duplicates re-checked.** Nov 10 noon is identical to Nov 9 PM, and Nov 11 AM is identical to Nov 10 PM: 100/100 creator + brand pairs match by rank, and every UUID recorded in both files matches. Neither is counted as a separate list state.

**Matching.** Videos are matched by creator + brand + nearest length, one-to-one:
- ±2s on Nov 9–12, where submission UUIDs are preferred.
- ±3s on Nov 14 and Nov 19, because today's lengths were computed as elapsed + remaining in an autoplaying player.

One exception: #2 Luxe/@that_mama_life_ is matched by thumbnail. It reads 1:24 today versus 1:30 on Nov 14, but shows the same leek + foundation "I'm so mad" frame. Across all six states this gives **224 distinct videos**.

**Nov 14 row-shift correction (new finding).** In the Nov 14 TSV, rows #23–#33 carry the hook and length of the next row down.
- After a one-row realignment, nine creators' Nov 9–12 histories and their Nov 19 lengths line up:
  - @thegregglife 58s "3 weeks"
  - @sebastianbetancur 121s "Getting The Most Expensive Fragrance"
  - @jsommers 196s "Shocked Esthetician pt. 2"
  - @brady2x 99s
  - @nicolemarso 69s "pov a glp ruined your libdo"
  - @nicollmontoya 59s
  - @harperr 37s
  - @mikemilobsky "Recommendations for kids…"
  - @elijah 24s
- The Nov 14 TSV is missing the creator row for the Hiya Health 37s "ADHD, cortisol…" video, which was really on the list.
- Row #34 (Ultra/@jc_hawkins) is ambiguous.
- This explains most of the "hook misassignment" flagged on Nov 14. It also changes three earlier counts:
  - Nov 12 → Nov 14 carryover is **77**, not 69.
  - **40** videos (not 36) were on all five earlier lists.
  - Hiya did **not** fall to one slot on Nov 14.
- All counts below use the realigned Nov 14 data. The original TSV is unchanged.

**Hook coverage tonight:**

| Source | Rows | Detail |
|---|---:|---|
| Fresh read from the Nov 19 thumbnail (ranks 1–15 grid) | 13 | 10 fully legible, 3 partial (#6, #8, #13) |
| No overlay text visible on the Nov 19 thumbnail | 2 | #1 (also carries a Nov 9 PM read), #14 |
| Carried over from an earlier snapshot (not re-read today) | 36 | Includes #1. Most recent clear agreeing read, labeled by date |
| Unverified | 50 | Ranks 16–100 autoplayed, and these videos have no reliable prior read |

Two read conflicts are flagged and not resolved:
- #12 MaryRuth/@josib shows "3 weeks?!" today, but "3 weeks" was the long-running hook of MaryRuth/@thegregglife (#26).
- Nov 14's "THESE SOCKS ARE" on the Honeylove row is the Hollow Socks hook, so it is not carried.

## 1. Churn and durability

### Carryover by interval

| Interval | Gap | Videos carried | Turnover |
|---|---|---:|---:|
| Nov 9 AM → Nov 9 PM | ~20 h | 47 | 53 |
| Nov 9 PM → Nov 10 PM | ~27 h | 92 | 8 |
| Nov 10 PM → Nov 12 | ~35 h | 91 | 9 |
| Nov 12 → Nov 14 | ~47 h | 77 | 23 |
| **Nov 14 → Nov 19** | **~5.5 days** | **53** | **47** |

**53 of today's 100 videos carried over from Nov 14.** Of the other 47, **4 are returning videos** last seen on Nov 9 AM or Nov 12 (Pepper Pong 2:10, ZipString/@povdadfinds 2:12, Foton Pearled Candle 0:33, Puking Ball 0:18), and **43 are new or unmatched**.
- About half the board turned over in 5.5 days.
- Per day that is slower than the Nov 9 AM → PM reshuffle. It is faster than the Nov 9 PM → Nov 12 plateau, when 90%+ carried over each day.
- With no pulls on Nov 15–18, we can't tell whether this was one late-week reshuffle or a steady drip.

### Evergreens: 26 videos on all six lists

40 videos were on all five lists from Nov 9 AM to Nov 14 (realigned count; the Nov 14 report said 36 before the row-shift fix). **26 of the 40 (65%) are still on tonight's list. These are the six-for-six "all-time evergreens."** The other **14 dropped off.** In the previous interval, none of the five-state survivors dropped.

| Nov 19 | Creator | Brand | Length | Path 9A→9P→10P→12→14→19 |
|---:|---|---|---|---|
| #1 | @farrahfogal | AltRx | 0:38 | #19 → #2 → #2 → #3 → #3 → #1 |
| #5 | @fitmamawellness | Graymatter | 1:08 | #62 → #17 → #13 → #9 → #7 → #5 |
| #6 | @joe | Hume Health | 0:34 | #8 → #9 → #8 → #7 → #5 → #6 |
| #11 | @amandagardellacreatives | AltRx | 1:39 | #4 → #4 → #3 → #2 → #2 → #11 |
| #14 | @saveyourmoneydeals | Hume Health | 0:28 | #36 → #63 → #54 → #42 → #27 → #14 |
| #16 | @trentonfinds | Ridge | 0:39 | #22 → #15 → #16 → #15 → #16 → #16 |
| #19 | @nathan_shops | IM8 | 1:01 | #38 → #10 → #9 → #13 → #11 → #19 |
| #21 | @coolinreich | AG1 | 0:49 | #17 → #28 → #20 → #14 → #8 → #21 |
| #22 | @cameron_says | ZipString | 0:36 | #35 → #65 → #78 → #93 → #83 → #22 |
| #24 | @elijah | BYLT | 0:26 | #10 → #36 → #29 → #24 → #15 → #24 |
| #25 | @sebastianbetancur | ALT. Fragrances | 2:01 | #27 → #16 → #15 → #16 → #24 → #25 |
| #26 | @thegregglife | MaryRuth Organics | 0:58 | #28 → #22 → #18 → #17 → #23 → #26 |
| #28 | @imkemosobie | Chef Preserve | 1:18 | #12 → #21 → #21 → #18 → #19 → #28 |
| #39 | @mosersfinds | NeuroGum | 2:07 | #55 → #23 → #23 → #20 → #21 → #39 |
| #45 | @brady2x | Penrose Skin | 1:39 | #13 → #18 → #19 → #22 → #29 → #45 |
| #47 | @mikebakke | Alphatech Apparel | 0:43 | #86 → #25 → #26 → #32 → #45 → #47 |
| #53 | @isaacmt | Hollow Socks | 0:37 | #57 → #44 → #44 → #44 → #39 → #53 |
| #58 | @kayliejohnson | The Warmy | 0:27 | #21 → #67 → #59 → #56 → #57 → #58 |
| #64 | @adriannaellington | Solawave | 0:40 | #83 → #77 → #72 → #69 → #66 → #64 |
| #67 | @nikogrippo | ALT. Fragrances | 1:37 | #80 → #64 → #61 → #61 → #65 → #67 |
| #70 | @lindseyr | Trinity Meds | 0:33 | #40 → #24 → #25 → #29 → #36 → #70 |
| #71 | @hkapproved | OEAK | 0:50 | #30 → #79 → #80 → #71 → #72 → #71 |
| #77 | @lorilewis | PawkieTalkie | 0:23 | #97 → #87 → #87 → #72 → #68 → #77 |
| #80 | @nicollmontoya | Clean Nutra | 0:59 | #73 → #82 → #56 → #48 → #31 → #80 |
| #91 | @kcessentials | Polar Haircare | 1:39 | #91 → #26 → #34 → #46 → #63 → #91 |
| #94 | @camjones | SIGMAS | 0:30 | #74 → #91 → #81 → #68 → #77 → #94 |

Notes on the evergreens:
- **Hume Health/@joe** "This is how much?? 👀" has been in the top 10 on all six lists (#5–#9). It is the steadiest top-10 video in the window. Its NOBL twin dropped off (see below).
- **Graymatter/@fitmamawellness** "POV: intense Task paralysis" has climbed on every list: #62 → #17 → #13 → #9 → #7 → **#5**.
- **AltRx/@farrahfogal** took **#1** for the first time. Its first-frame hook was last read on Nov 9 PM as "SIX." (syringes laid out). Tonight's thumbnail shows no overlay text.
- **Ridge/@trentonfinds** "2027 vs 2025" is the most stable rank in the dataset: #22, then #15 or #16 on all five later lists.
- **ZipString/@cameron_says** "⚠️ALWAYS READ REVIEWS⚠️" (carried over from Nov 12) jumped **#83 → #22**. That is the biggest climb of any evergreen, and it came in toy/gift season.
- **Hume Health/@saveyourmoneydeals** has risen #63 → #54 → #42 → #27 → **#14** since Nov 9 PM. It has no overlay text: the creator holds the product box to camera.

### Five-state videos that dropped off (14)

| Nov 14 | Creator | Brand | Length | Path 9A→9P→10P→12→14 | Last clear hook |
|---:|---|---|---|---|---|
| #6 | @joshuacampbell1510 | NOBL | 0:33 | #5 → #7 → #5 → #4 → #6 | This is how much?? 👀 |
| #9 | @that_mama_life_ | Smooche | 1:40 | #20 → #1 → #1 → #1 → #9 | CAUGHT HIM.. 🍊 |
| #22 | @thalldealz | NOBL | 0:56 | #16 → #42 → #30 → #21 → #22 | DOES HIS CARRY REALLY HAVE IT (partial) |
| #32 | @harperr | Olivia Jewelry | 0:37 | #14 → #20 → #22 → #23 → #32 | Personalized Slider Name Bracelet |
| #37 | @zentree | Penrose Skin | 0:33 | #29 → #40 → #35 → #34 → #37 | never clearly read (Nov 14 "When your clothes get tight again" is the Trinity Meds hook; treated as misassigned) |
| #38 | @glowupcart | Trinity Meds | 0:42 | #25 → #14 → #14 → #19 → #38 | GLP1 Talk |
| #47 | @zentree | Peachy Men | 0:17 | #100 → #83 → #65 → #58 → #47 | Ladies!! He's not fine He's ignoring the SIGNS / 1.Gut Issues |
| #52 | @bcorkery | The Tallowed Truth | 3:38 | #41 → #19 → #24 → #33 → #52 | Got approached by a 60 year old woman at the grocery store: / I got approached by a 60... |
| #55 | @ckier | SiPhox Health | 0:51 | #79 → #37 → #46 → #52 → #55 | (Which one) is best!? / THESE (partial) |
| #62 | @trippterrier | FitSleeps | 0:33 | #64 → #27 → #28 → #31 → #62 | never clearly read |
| #64 | @michgirlmom | Lola + The Boys | 0:24 | #7 → #100 → #68 → #60 → #64 | never clearly read |
| #75 | @its_mark_yall | VERIA | 1:05 | #60 → #34 → #36 → #38 → #75 | never clearly read |
| #81 | @anisamuel | Tab | 0:28 | #18 → #47 → #50 → #53 → #81 | The date night hack every couple needs (partial) / DATE NIGHT SHOULDN'T |
| #95 | @caysonpfeiffer | Runnr Active | 0:54 | #95 → #85 → #89 → #87 → #95 | 2015 Running C... (partial) |

- **@zentree's run is over.** He had held Penrose Skin and Peachy Men on every list from Nov 9 AM to Nov 14, and Hollow Socks "I Warned Ya‼️" returned on Nov 14 at #78. Tonight he has **no slots** after three on Nov 14, and none of his videos appears under another brand. The rank list can't say why.
  - This lines up with what he said in his own videos (unverified creator claims): he says he now leans on upfront brand retainers plus commission, and produces for brands to run as ads.
  - Treat that only as context. His exit is not evidence that the videos stopped earning anywhere except this trailing-24h list.
- **Smooche/@that_mama_life_ "CAUGHT HIM"** was #1 on three straight lists (Nov 9 PM–Nov 12) and is gone tonight. Smooche still holds #9 and #10, but with two **new creators** (see §3).
- **NOBL "This is how much??"** (@joshuacampbell1510, top 7 on every earlier list) left the list. NOBL's carry-on video (@thalldealz) left too. NOBL still has two slots (#63 @ceo, #81 @thicwhips), both new and unverified.
- Others that dropped off: the long-form Tallowed Truth video (3:38 "Got approached by a 60 year old woman…"), Olivia Jewelry, Trinity Meds/@glowupcart "GLP1 Talk", SiPhox, Tab, Runnr Active, VERIA, FitSleeps/@trippterrier, and Lola + The Boys.

### Biggest climbers among carried videos (Nov 14 → Nov 19)

| Move | Video | Hook (status) |
|---|---|---|
| #83 → #22 (+61) | ZipString/@cameron_says 0:36 | ⚠️ALWAYS READ REVIEWS⚠️ (carried over from Nov 12) |
| #59 → **#4** (+55) | Magic Story/@amandy629 0:38 | "The coolest gift I've seen" (fresh) |
| #94 → #61 (+33) | OluKai/@carterzusi 0:24 | unverified |
| #99 → #66 (+33) | Ravine/@allimae 0:31 | "The gift your hunting husband will actually use" (carried over from Nov 14) |
| #53 → #23 (+30) | Dr.Melaxin/@kajsamihollee 2:55 | "I owe my almost 40 yr old transformation to South Korea" (carried over from Nov 14) |
| #28 → **#7** (+21) | The Tallowed Truth/@jsommers 3:16 | "Shocked Esthetician pt. 2" (fresh) |
| #50 → #31 (+19) | Dr.Melaxin/@kajsamihollee 2:15 | "The mirror & I are finally on good terms again.." (carried over from Nov 14) |
| #79 → #62 (+17) | Physician's Choice/@chantel_t 1:35 | "ARIANA GRANDE IS STEPPING AWAY FROM THE SPOTLIGHT" (carried over from Nov 12) |
| #51 → #36 (+15) | Alphatech/@creatorbrian 1:00 | Ski jacket / Ski hoodie labels (carried over from Nov 14) |
| #73 → #59 (+14) | Wispr Flow/@claytonbirk 0:22 | "PROOF NO ONE SHOULD BE TYPING LISTS IN 2026." (carried over from Nov 14) |
| #27 → #14 (+13) | Hume/@saveyourmoneydeals 0:28 | no overlay text (fresh check) |
| #25 → #12 (+13) | MaryRuth/@josib 0:52 | "3 weeks?!" (fresh, flagged) |

### Biggest drops among carried videos

| Move | Video | Note |
|---|---|---|
| #31 → #80 (−49) | Clean Nutra/@nicollmontoya 0:59 | Six-state evergreen, hook never readable. **Brand sells creatine** |
| #56 → #95 (−39) | Meroda UK/@that_mama_life_ 1:49 | "He said he wanted a MILF" (carried over from Nov 9 AM) |
| #60 → #96 (−36) | Tilt Rips/@tommy 0:20 | "yes it's true" (carried over from Nov 14) |
| #17 → #51 (−34) | **Ultra Pouches/@sallymakescontent 0:12** | "Not hungry. Not bored. Locked in." (carried over from Nov 14) |
| #36 → #70 (−34) | Trinity Meds/@lindseyr 0:33 | "When your clothes get tight again 🫠" (carried over from Nov 12) |
| #14 → #44 (−30) | Primal Queen/@raeliishae 1:26 | "POV: You finally let your hippie friend fix your libdo" (carried over from Nov 14) |
| #63 → #91 (−28) | Polar Haircare/@kcessentials 1:39 | "10 min hair dye shampoo" (carried over from Nov 9 AM) |
| #8 → #21 (−13) | AG1/@coolinreich 0:49 | First real fall after climbing on every list |
| #2 → #11 (−9) | AltRx/@amandagardellacreatives 1:39 | Out of the top 10 for the first time in the window. Hook freshly re-read |

**Top-10 turnover:** 6 of Nov 14's top 10 are still on the list. Five of them are in tonight's top 11, and AG1/@coolinreich fell to #21. The four that left the list entirely were three **@that_mama_life_** videos (Luxe 2:07 and both Smooche videos) and the **NOBL** price-shock video.

## 2. Brand and category shifts

### Board concentration

| State | Unique brands | Unique creators | Brands with 2+ slots | Top brand slot count |
|---|---:|---:|---:|---|
| Nov 9 AM | 77 | 95 | 23 | n/a |
| Nov 9 PM | 74 | 93 | 26 | n/a |
| Nov 10 PM | 72 | 95 | 28 | n/a |
| Nov 12 | 72 | 92 | 28 | n/a |
| Nov 14 (realigned, 101 entries) | 67 | 87 | 33 | Dr.Melaxin 3 |
| **Nov 19** | **72** | **95** | **28** | **28 brands tied at 2. None has 3** |

The board is less concentrated than on Nov 14: more brands, more creators, and no brand or creator with 3+ slots. **31 brands are on all six lists**: AG1, ALT. Fragrances, Alphatech Apparel, AltRx, BYLT, Chef Preserve, Clean Nutra, Dr.Melaxin, FitSleeps, Graymatter, Hollow Socks, Hume Health, IM8, IRAZIA, Luxe Cosmetics, MaryRuth Organics, NOBL, NeuroGum, OEAK, PawkieTalkie, Penrose Skin, Polar Haircare, Ridge, SIGMAS, Smooche, Solawave, The Tallowed Truth, The Warmy, Tilt Rips, Trinity Meds and ZipString.

### Top-20 share

- **Tonight:** AltRx 2, Luxe 2, **Magic Story 2**, Hume 2, Smooche 2, then one each for Graymatter, **The Tallowed Truth**, **Scentiment**, **MaryRuth**, Wispr Flow, AG1, Ridge, **HighTicket**, IM8 and Packed. That is 15 brands.
- **Nov 14:** Luxe 2, AltRx 2, Smooche 2, then one each for Hume, NOBL, Graymatter, AG1, IM8, Wispr Flow, Scentiment, Primal Queen, BYLT, Ridge, Ultra, Packed, Chef Preserve and Rythm. That was 17 brands.
- **Left the top 20:** NOBL, Primal Queen, BYLT, Ultra, Chef Preserve, Rythm.
- **Entered the top 20:** Magic Story, The Tallowed Truth, MaryRuth, HighTicket.

### Brand risers

- **Magic Story** (personalized kids' storybooks, a gift product): **#59 → #4**, and it added a second @amandy629 video at #17 (0:48, unverified). It first appeared on Nov 14. This is the strongest seasonal signal on the board.
- **The Tallowed Truth:** #28 → **#7** with the 3:16 "Shocked Esthetician pt. 2" (fresh). This video was hidden on Nov 14 by the row shift. The brand swapped one long video for another: its 3:38 "60 year old woman" video dropped off.
- **Scentiment** (home fragrance): #13 → **#8**, "…the HVAC guy noticed" (fresh partial).
- **MaryRuth Organics:** keeps two slots. The six-state @thegregglife "3 weeks" video is #26, and @josib climbed #25 → **#12** (52s, "3 weeks?!" fresh, flagged).
- **ZipString:** #83 → #22, plus a returning 2:12 @povdadfinds video at #48 (last seen Nov 9 AM #56).
- **Dr.Melaxin:** both long videos climbed (#53 → #23, #50 → #31). It dropped from 3 slots to 2 because the 27s "Dream Miss One" left.
- **New brands never seen on any earlier list (18):**
  - HighTicket #18 (2:17)
  - Speechify #30 and #55
  - Prime Prometics #37 (over-50 cosmetics)
  - EBY #50 and #78
  - Frøya Organics #54 (2:53)
  - Elliosa #57 (0:09)
  - Beam #60 (0:08)
  - **Mars Men #68** (men's testosterone and focus supplements)
  - Sofia & Spritz #72
  - Shameless Snacks #73
  - Happy Howl #75
  - Saphire Saffron #76
  - Final Boss Sour #83 (sour candy)
  - Clean Skin Club #85
  - arrae #92
  - Sans #97
  
  All hooks are unverified because they sit below rank 15.
- **Returning brands (seen before Nov 14, absent on Nov 14):** Javvy Coffee #34, Pepper Pong #35, Ahead Nutrition UGC #42, CO36 #84, Puking Ball #86, Foton Pearled Candle #89, Sincerely Yours #98.

### Seasonal pattern: gifts, toys and collectibles are rising; Black Friday discounting is not

- **Gift hooks are moving up.** Every readable gift hook on the board climbed or returned:
  - Magic Story "The coolest gift I've seen" #59 → #4
  - Ravine "The gift your hunting husband will actually use" #99 → #66
  - Foton Pearled Candle "The gift for someone who already has everything!" returned at #89 (carried over from Nov 9 AM)
  - The Warmy "the perfect gift for the comfy, casual girlies" held at #58 and added a second creator at #99
  - Sincerely Yours (a stocking-stuffer hook on Nov 12) returned at #98 with a new creator, hook unverified
- **Toys, games and collectibles came back.** Five appear or reappear:
  - ZipString's two videos
  - Pepper Pong 2:10 (returning)
  - Puking Ball "The VIRAL Puking Ball squishy is back!!" (returning; carried over from Nov 9 AM)
  - Tilt Rips, still 2 slots
  - Packed (trading cards), #20
- **Discount and Black Friday hooks are not climbing.**
  - Nothora's 7s Black Friday line dropped off.
  - Polar "50% off Hair dye??" slid #85 → #93.
  - No fresh top-15 hook mentions a sale, a % off or Black Friday.
  - The one value-framed newcomer in the top 15 is **"What do you mean I got it for free"** (#3, Luxe/@gsfavoritefinds, fresh), which points to a free-item offer rather than a percentage.
  - The price-shock family is down to one video: "This is how much??" on Hume #6, after NOBL's version dropped off.
- **Confidence:** medium. The gift and toy signal rests on rank movement plus 5 readable hooks. Most newcomers below rank 15 are unverified, and we have only one late-November list.

### GLP-1 adjacency is spreading to non-GLP brands

- AltRx holds #1 and #11.
- **AG1** added a new video at #15: **"GLP-1 morning routine: the 1 thing to add ☀️"** (fresh; a man holding an injector pen). Its other slot, @coolinreich, was read on Nov 9 PM with a "GLP1" prop.
- The dedicated GLP brands are fading: Trinity Meds fell to one slot (#70), with @glowupcart's "GLP1 Talk" gone, and Primal Queen's GLP/libido skit slid to #44.
- The pattern is "for people already on GLP-1, add X". It sells an add-on to GLP-1 users rather than the GLP-1 drug itself.

### Brand exits and declines

- **18 brands from Nov 14 are off tonight:**
  - Happy Curves, Lola + The Boys, Love Wellness, Nothora, ONDO, Olivia Jewelry, Orion Sleep
  - **Peachy Men** (@zentree)
  - Readability Tutor, Runnr Active, She's Birdie, SiPhox Health, Tab
  - **The Perfect Jean**
  - Triquetra Health, VERIA, Vintage Muscle, Weston Jon Boucher
  
  Seven of them had been on all five earlier lists: Lola + The Boys, Olivia Jewelry, Peachy Men, Runnr Active, SiPhox, Tab and VERIA.
- **Declines among brands still on the list:**
  - NOBL: best rank #6 → #63, with both long-running videos replaced
  - Ultra Pouches: #17 → #51
  - Primal Queen: #14 → #44
  - Trinity Meds: #36 → #70, down to 1 slot
  - Clean Nutra: #31 → #80, down to 1 slot
  - Meroda UK: #56 → #95
  - Polar Haircare: #63 → #91

## 3. Creator concentration and movers

| Creator | Nov 9 AM | Nov 9 PM | Nov 10 PM | Nov 12 | Nov 14 | **Nov 19** |
|---|---|---|---|---|---|---|
| @that_mama_life_ | 3 slots (#15, #20, #32) | 2 (#1, #66) | 2 (#1, #88) | 3 (#1, #5, #6) | **6** (#1, #4, #9, #10, #56, #89) | **2** (#2 Luxe, #95 Meroda UK) |
| @farrahfogal (AltRx) | #19 | #2 | #2 | #3 | #3 | **#1** |
| @fitmamawellness (Graymatter) | #62 | #17, #55 | #13, #62 | #9, #66 | #7, #86 | **#5** (second video gone) |
| @coolinreich (AG1) | #17 | #28 | #20 | #14 | #8 | **#21** |
| @elijah (BYLT) | #10 | #36 | #29 | #24, #37 | #15, #33* | **#24, #40** |
| @joshuatrudel (Rythm) | n/a | #31 | #31 | #28 | #20 | **#27** |
| @sallymakescontent (Ultra) | n/a | #13 | #17 | #25 | #17 | **#51** |
| @zentree | #29, #53, #100 | #40, #83 | #35, #65 | #34, #58 | #37, #47, #78 | **none** |
| @kajsamihollee (Dr.Melaxin) | #92 | #68 | #84 | #65, #70 | #49, #50, #53 | **#23, #31** |
| @amandy629 (Magic Story) | n/a | n/a | n/a | n/a | #59 | **#4, #17** |
| @trentonfinds (Ridge) | #22 | #15 | #16 | #15 | #16 | **#16, #41** (new 0:45 video) |

\*Realigned: the Nov 14 @elijah #33 row is the 24s video, not a new 37s one.

- **@that_mama_life_** fell from 6 slots (4 of the top 10) to **2**. Her Luxe "I'm so mad" held at **#2**, which also confirms the hook fresh. Both Smooche videos and the second Luxe video (2:07) dropped off, and Meroda UK "He said he wanted a MILF" slid to #95.
- **Smooche** kept #9 and #10 with **two new creators**:
  - @hannahvbuck: "His ex wife is here..." (51s, fresh; a car-selfie drama skit)
  - @jennsfavefinds: "some of these brands must be color blind" (65s, fresh; a call-out at other brands)
  
  The brand's top slots no longer depend on @that_mama_life_.
- **@farrahfogal** reached #1 on a 38–39s AltRx video that has been on every list. **@fitmamawellness** is #5 on the same 68s Graymatter video. Graymatter also added a second creator, @tsfinds1, at #79 (1:14).
- **@coolinreich** dropped out of the top 20 for the first time since Nov 12. **@joshuatrudel** slid #20 → #27. **@sallymakescontent** fell #17 → #51.
- **The 29 creators on all six lists** are the most durable accounts. Twelve creators who were on all five earlier lists are gone tonight, including @zentree, @joshuacampbell1510 (NOBL price-shock), @thalldealz, @glowupcart, @bcorkery, @ckier, @harperr and @caysonpfeiffer.
- **Two lengths of the same brand.** Five creators hold 2 slots each: @that_mama_life_, @amandy629, @trentonfinds, @kajsamihollee and @elijah. Three of them run two lengths of one brand: Magic Story 0:38 and 0:48, Ridge 0:39 and 0:45, and BYLT 0:26 and 0:24.

## 4. Length and format trends

| State | Median length | Top-10 median | <12s | 12–35s | 36–89s | 90–179s | 180s+ |
|---|---:|---:|---:|---:|---:|---:|---:|
| Nov 9 AM | 37.5s | 36.5s | 5 | 42 | 39 | 13 | 1 |
| Nov 9 PM | 42.5s | 47.0s | 0 | 36 | 47 | 14 | 3 |
| Nov 10 PM | 42.5s | 40.5s | 1 | 36 | 45 | 15 | 3 |
| Nov 12 | 43.5s | 62.0s | 1 | 35 | 43 | 18 | 3 |
| Nov 14 (realigned) | 40.0s | 74.5s | 1 | 38 | 45 | 14 | 3 |
| **Nov 19** | **40.5s** | **57.5s** | **3** | **37** | **44** | **15** | **1** |

**What the length data shows:**
- **Overall mix:** stable all window. About 37% are short (12–35s), 44% mid (36–89s), 15% long (90–179s), with a median near 40s.
- **Top 10:** two lengths still win.
  - Four videos run 34–38s: AltRx #1, Luxe #3, Magic Story #4 and Hume #6.
  - Five run 51–84s: Luxe #2, Graymatter #5, Scentiment #8 and Smooche #9 and #10.
  - One is a 3-minute-plus outlier: **Tallowed Truth #7 at 3:16**.
  - The top-10 median eased from 74.5s to 57.5s as the 90–127s @that_mama_life_ videos left.
- **3-minute-plus videos:** dropped from 3 to 1. Tallowed "60 year old woman" (3:38) and Triquetra (4:55) left, and the new 3:16 rose to #7. The 2:53–2:55 videos (Dr.Melaxin #23, Frøya #54) sit just under that line.
- **Under 12s:** three new videos, Beam 0:08, Elliosa 0:09 and Tilt Rips/@melissad 0:10. All are unverified and sit in the bottom half.

**Hook and angle patterns** (13 fresh reads plus 36 carried reads; the 50 unverified rows are excluded). *Fresh = read from tonight's thumbnail. Carried = earlier read matched to tonight's row.*

1. **Other people's reactions as the hook (new cluster in the top 10, fresh).** "Shocked Esthetician pt. 2" (#7), "…the HVAC guy noticed" (#8) and "His ex wife is here..." (#9). In each, the hook is a third party noticing or reacting, not the creator praising the product. Three of tonight's top 10 use it. On Nov 14 none of the top 10 did: HVAC was #13 and Shocked Esthetician was #28.
2. **Call-outs at a category or at other brands (fresh, still at the top).** "I'm so mad" (#2), "GLP-1 companies are scamming you" (#11) and "some of these brands must be color blind" (#10, new). "STOP typing out paragraphs…" (#13) is a command-style version. The anger leader changed: "CAUGHT HIM" and "These huge creators are LYING" fell or dropped off, and the format lives on in new videos.
3. **Price or value shock (fresh).** "This is how much??" is down to one video, Hume #6. "What do you mean I got it for free" (#3) is new and frames a free item, not a percentage.
4. **Gift hooks (fresh plus carried).** These are rising (see §2).
5. **Lived-state POV and timeline proof (fresh).** "POV: intense Task paralysis" (#5) and "3 weeks?!" (#12).
6. **Add-on to a routine (fresh).** "GLP-1 morning routine: the 1 thing to add ☀️" (#15). The format names a routine the viewer already has and offers one thing to add to it.
7. **Labeled comparisons and tier lists (carried).** "2027 vs 2025" (#16), "Ski jacket / Ski hoodie" (#36 and #47) and the ALT. Fragrances tier list (#67). All are still on the list but none is in the top 15.
8. **"pt. 2" / series signal (fresh, #7).** A part 2 at 3:16 ranking #7 suggests part 1 built an audience. It is one example, so low confidence as a pattern.


## 5. Evidence confidence and limitations

| Claim | Confidence | Why |
|---|---|---|
| Duplicate states (Nov 10 noon, Nov 11 AM) | High | 100/100 creator + brand match by rank, and all recorded UUIDs match |
| Nov 14 row-shift (#23–#33) and its correction | High for rows #24–#33 (nine independent length and hook matches); medium for the restored Hiya 37s row's rank; low for row #34 | Inferred from consistency, not from a re-pull of Nov 14 |
| 53 carried Nov 14 → Nov 19; 26 six-state evergreens | Medium-high | Computed lengths (±3s); one thumbnail-based match (#2). A few same-creator, same-brand pairs depend on length alone |
| Climbers, drops and exits | Medium-high | Rank is exact. Video identity carries the matching uncertainty above |
| Fresh hooks (#2–#13, #15) | High for the large overlays; medium for small captions (#3, #10, #12) and partials (#6, #8, #13) | Read from a single 1888×1030 screenshot at 4–8x zoom |
| Carried-over hooks (36 rows) | Medium | They describe the video's first frame on an earlier date. Creators can re-thumbnail, and these were not re-read tonight |
| #12 "3 weeks?!" belonging to @josib | Low-medium | Conflicts with @thegregglife's long-running "3 weeks" hook. Either a shared brand template or a TSV row-label error |
| Gift/toy seasonality; discount hooks not climbing | Medium | Based on rank moves plus 5 readable gift hooks. 50 rows unverified and only one late-November list |
| Creatine flag (Clean Nutra) | High for the brand selling creatine (brand site); unknown for the #80 video's product | n/a |
| Why any video or creator dropped off (incl. @zentree) | Unknown | The list only shows trailing-24h earnings rank. It says nothing about ad spend, retainers or performance elsewhere |

**Other limitations:**
- No pulls exist for Nov 15–18, so the 5.5-day gap hides the path between lists.
- This was a late-night pull. The trailing-24h window differs from the morning pulls on Nov 12 and Nov 14, and time of day may affect rank. That is untested.
- No dollar amounts were shown or used.
- Brand revenue is not assessed here.

## Method notes

- Scripts and intermediate data are in `the snapshot folder`:
  - `parse_snaps.py` → `snaps.json` (raw)
  - `snaps_corr.json` (Nov 14 realigned)
  - `match.py` → `videos_fix_3.json`
  - `analyze.py` → `videos_final.json` (includes the #2 manual thumbnail merge)
  - `build_1119.py`
- Matching is one-to-one per state, using the nearest length within tolerance. UUIDs are used where both sides have them (Nov 9–12).
- "Carried over" hooks use the most recent clear read that agrees with earlier reads. Reads contradicted by a long-running hook are not carried, e.g. Nov 14 "GLP1 Talk" on Hollow Socks and "THESE SOCKS ARE" on Honeylove.
