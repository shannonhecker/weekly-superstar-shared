// Type families.
//
// Tailwind's default size/line-height scale is used unmodified across both
// apps; this file only exposes the family tokens that need to be consistent.
//
// LEGACY:
//   display = Fredoka (kid names, board title, score numerals)
//   body    = Nunito  (everything else)
//
// EARTHY (Phase 0 onward): a single Plus Jakarta Sans family covers both
// roles. Geometric sans-serif with strong UI legibility, friendly without
// the playful Fredoka mismatch. Two weights: 700/800 for display, 400-600
// for body. Both apps need to load this from Google Fonts before the
// earthy surfaces start using it (Phase 1+).

export const typography = {
  fonts: {
    display: ['Fredoka', 'system-ui', 'sans-serif'],
    body: ['Nunito', 'system-ui', 'sans-serif'],
  },
  // Plus Jakarta Sans — single family, used as both display and body in
  // the earthy direction. The same array shape is preserved so
  // tailwind.config.js consumes it exactly the same way.
  earthy: {
    display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
    body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  },
} as const

export type Typography = typeof typography
