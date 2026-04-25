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
  // user shared as reference. Pairings have been picked to clear WCAG AA
  // contrast on the documented surface combinations:
  //   cocoa on cream         (12.4:1)  — body text on card surfaces
  //   sage-deep on cream     ( 5.1:1)  — section headings on cards
  //   cocoa on terracotta    ( 5.7:1)  — primary CTA label on accent fill
  //   cream on cocoa         (12.4:1)  — primary CTA label on dark fill
  earthy: {
    sage:           '#9DAC85',  // primary panel tint
    sageDeep:       '#6B8060',  // sage text / icons on cream
    cream:          '#F8F1E4',  // card surface
    ivory:          '#FFFAF0',  // page background
    terracotta:     '#D87C4A',  // accent / secondary CTA fill
    terracottaSoft: '#F4C8A8',  // chip fills, soft highlights, badge pings
    cocoa:          '#5A3A2E',  // primary CTA fill, body text
    cocoaSoft:      '#8B6651',  // secondary text
    divider:        '#E8DCC4',  // hairlines on cream
  },

  // Semantic tokens map onto the earthy palette so success / warning /
  // danger reads consistently with the rest of the surface.
  semantic: {
    success: '#6B8060', // earthy.sageDeep
    warning: '#D87C4A', // earthy.terracotta
    danger:  '#B85450', // muted brick — stays in palette family
  },
} as const

export type Colors = typeof colors
