// Type families.
//
// Tailwind's default size/line-height scale is used unmodified across both
// apps; this file only exposes the family tokens that need to be consistent.
//
// Nunito is the single cross-platform family for display and body text.
// It keeps the rounded, soft tone while staying readable for dense UI.

export const typography = {
  fonts: {
    display: ['Nunito', 'system-ui', 'sans-serif'],
    body: ['Nunito', 'system-ui', 'sans-serif'],
  },
  // Compatibility alias for the earthy direction and existing Tailwind
  // consumers. Keep the array shape stable for tailwind.config.js.
  earthy: {
    display: ['Nunito', 'system-ui', 'sans-serif'],
    body: ['Nunito', 'system-ui', 'sans-serif'],
  },
} as const

export type Typography = typeof typography
