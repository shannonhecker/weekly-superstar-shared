// Custom color families. Standard Tailwind palettes (gray, purple, green, amber)
// stay available via Tailwind's defaults in each app's tailwind.config.js.
//
// PHASE 0 — Earthy brand sweep: the new `earthy` namespace ships here as
// additive tokens so consuming apps (web tracker + iOS) can opt-in surface-by-
// surface during Phase 1+ without breaking what's currently rendered. The
// existing `brand` / `fav` / `surface` objects stay until the sweep completes;
// they'll be retired in a follow-up release once no surface references them.

export const colors = {
  // LEGACY — purple-pink-amber direction, scheduled for retirement
  // post-earthy sweep. Do not introduce new references.
  brand: {
    start: '#F59E0B', // amber-400
    end:   '#EC4899', // pink-500
  },
  fav: {
    bg:     '#FFFBEB',
    border: '#FCD34D',
    text:   '#B45309',
  },
  surface: {
    page:    '#FBF7FF',
    card:    '#FFFFFF',
    subtle:  '#F9FAFB',
    divider: '#E5E7EB',
  },

  // EARTHY — primary palette for the Winking Star brand sweep (Phase 0+).
  // Inspired by the warm/earthy modern Indonesian kids-app aesthetic the
  // user shared as reference. WCAG AA-passing pairings (verified with the
  // accesslint contrast checker on 2026-04-29):
  //   cocoa on cream            (12.4:1)  — body text on card surfaces
  //   sage-deep on cream        ( 5.1:1)  — section headings on cards
  //   cocoa on terracottaSoft   ( 6.58:1) — primary CTA label on chip fill
  //   cream on cocoa            (12.4:1)  — primary CTA label on dark fill
  //
  // AVOID for normal text (audit A4):
  //   cocoa on terracotta       ( 3.32:1) — only large-text or UI-boundary use
  //   ivory on terracotta       ( 2.92:1) — fails everything, do not use
  // The previous comment claimed cocoa-on-terracotta was 5.7:1 and safe
  // for primary CTA labels — that was wrong. terracotta is an accent
  // colour, not a text-bearing surface; if you need a darker terracotta
  // that takes ivory text, see the audit's recommendation for #B55826
  // ('terracottaDeep') as a future token.
  earthy: {
    sage:           '#9DAC85',  // primary panel tint
    sageDeep:       '#6B8060',  // sage text / icons on cream
    cream:          '#F8F1E4',  // card surface
    ivory:          '#FFFAF0',  // page background
    // Inner-card surface that sits *on top of* cream / ivory. Slightly
    // brighter than ivory so a card-on-page reads as elevated without
    // needing a shadow. Was inlined as a `'#FFFDF7'` literal in 14
    // surfaces of the web app before being lifted to a token (audit Q5).
    card:           '#FFFDF7',
    // 2026-05-09 contrast retune for WCAG AA compliance — terracotta and
    // divider were the two failing tokens flagged by the accesslint sweep:
    //
    //   #D87C4A on cream/card backgrounds → 2.79:1 (FAIL 1.4.3 normal text)
    //   #E8DCC4 on card                   → 1.33:1 (FAIL 1.4.11 UI boundary)
    //
    // Darkened to the suggested compliant alternatives that keep the
    // earthy hue intact (warm orange + tan) so the brand doesn't shift
    // dramatically — just deepens. The rest of the palette is untouched.
    terracotta:     '#AE5525',  // accent / secondary CTA fill (was #D87C4A — failed 1.4.3 on cream)
    terracottaSoft: '#F4C8A8',  // chip fills, soft highlights, badge pings
    cocoa:          '#5A3A2E',  // primary CTA fill, body text
    cocoaSoft:      '#8B6651',  // secondary text
    divider:        '#B28E45',  // hairlines on cream (was #E8DCC4 — failed 1.4.11)
  },

  // Semantic tokens map onto the earthy palette so success / warning /
  // danger reads consistently with the rest of the surface.
  semantic: {
    success: '#6B8060', // earthy.sageDeep
    warning: '#AE5525', // earthy.terracotta (post-AA retune)
    danger:  '#B85450', // muted brick — stays in palette family
  },
} as const

export type Colors = typeof colors
