# UGC editing rules

Every rule here came from a real note on a real batch of UGC ads (October to November 2026). Each one cost a re-edit the first time.

## Cutting
- **Zero dead space, by cuts, never by speeding up.** A 1.25x speed-up was rejected ("I meant with cuts"). Cut the instant the sound ends; no 0.1 s tails.
  - Edges come from each line's own loudness: active speech = the line's 90th-percentile level minus 20 dB; cut dead runs of 70 ms or more inside lines; round edges to the nearest frame.
  - Measure dead space on the finished file: runs of 60 ms+ under that threshold. Long-running reference ads sit around 5% dead time, with a median gap of 0.07 to 0.08 s. Aim for the same or less.
  - **Breaths are dead space.** Inhales between lines sit 13 to 30 dB under the voice and survive a -20 dB cut. Cut what is unvoiced and noisy, or silent. Keep about 0.05 s of release and 0.07 s of onset at each cut, and leave vocal fry so the speaker is never cut off.
  - Edges hug the words: use word timestamps plus a level check, so room noise after the last word can't hold a shot.
  - Measure word pace against the reference ads before cutting harder; past a point the remaining gap is just speaking speed.
- **Never cut anyone off mid-word.** Every edge lands between words on a real pause. Check it on the rendered audio.
- **No scraps.** Level-based cuts leave 0.1 to 0.2 s fragments: the tail of a previous try, someone else talking, half a word, a blip. A piece under 0.30 s within 0.25 s of a neighbour gets rejoined; any other piece under 0.30 s gets dropped. A low dead-space number bought by chopping words is the glitch, not a win.

## Takes
- **Last clean take of each line only.** Before any shot list, group repeated tries of the same line and keep the final clean one.
- **Best take = words AND eyes.** A take with the right words but eyes up or away (reading, remembering) is not the best take. Check frames of every candidate.
- If the to-camera take stalls mid-line, cut it at a clean word and put the approved wording on screen as text.
- **Other voices hide in takes.** When the creator plays the reference ad from a phone between lines, or someone off camera reads the line first, that audio ends up in the take. Check every used line: is it the creator's voice (pitch and level) and are they on screen saying it? Never use a transcript segment that shows two speakers without splitting it.
- A line the creator meant but never said on camera goes on screen as a text hook.

## Hooks and bodies
- **The hook is the unit.** Inventory every hook take, scripted and improvised, before choosing. Each usable hook gets its own ad on a proven body.
- **Read every finished script start to finish as a viewer.** Cut any opener that needs missing context. Bridge the hook into the process ("All you have to do is..."). Name the brand in the offer when the CTA says "they". Give every claim its reason, on screen if it wasn't said (from the brand's site).
- **Bodies must differ.** "The body is the same on all of them, every video sounds the same." Build bodies from modules and give each ad its own; re-scan all takes for unused lines before writing.
- **Hooks with the product working** (device on, product in use, while talking) are the engagement visual. Make those their own ads, many with no montage.
- **Continuity:** a product on the body never vanishes and comes back between shots. Tag beats pre / process / on / off and only move forward, except a product-on hook followed by a flashback to applying it.
- Lines of 1.9 s+ can get a punch-in between two words near the middle, with the sound untouched. Keep the offer unzoomed so the product shows.

## Copies
- **Copies are word for word.** A copy keeps every line that was recorded (last takes). Cutting a copy down to 4 lines was "horrible".
- **B-roll must match the words** (fingers on the exact spot when the line names it). Level-match every line so a seated voiceover is as loud as the on-camera takes.

## Look
- **Deal background:** a product grid behind the creator for the first ~3 s with the original price slashed, price text beside the head, no discount code on screen.
- **Twin or split screens:** settled poses only, never setup moments.
- **Color:** phone or camera log footage is flat. Grade toward the reference ads (warm skin, real blacks, saturation around the references' level) by adding saturation, never by crushing blacks or darkening the mids. Compare one raw | graded | reference frame side by side before rendering everything.
- **Never put blur next to the creator.** No blur boxes over things in the frame, no competitor frames with patched boxes. Ask what something on screen is for before removing it (a whiteboard with writing was a deliberate retention hook).
- **Cutouts and green screen:** use a real matting model (BiRefNet or similar), not a person-mask threshold, which leaks the wall and leaves ghost hands. Match the reference's background quality.
- Captions: one brand font, never over the face, clear of the platform's top and bottom bands.

## Before it goes out
- Diff every render against the script (transcribe the render, compare line by line).
- Check the first render of a new look on one frame sheet before rendering the whole batch.
- Licensed or original audio only on paid ads. Signed releases from anyone else on camera.
