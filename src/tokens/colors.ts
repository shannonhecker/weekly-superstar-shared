// Custom color families. Standard Tailwind palettes (gray, purple, green, amber)
// stay available via Tailwind's defaults in each app's tailwind.config.js.

export const colors = {
  // Brand gradient — used for title text wash and the primary CTA.
  brand: {
    start: '#F59E0B', // amber-400
    end:   '#EC4899', // pink-500
  },
  // Favorite / starred accent — amber family on a soft background.
  fav: {
    bg:     '#FFFBEB', // amber-50
    border: '#FCD34D', // amber-300 (often used at ~55% alpha in callers)
    text:   '#B45309', // amber-700
  },
  // Surface tokens — card, page, dividers.
  surface: {
    page:    '#FBF7FF',
    card:    '#FFFFFF',
    subtle:  '#F9FAFB', // gray-50
    divider: '#E5E7EB', // gray-200
  },
} as const

export type Colors = typeof colors
