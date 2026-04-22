// Type families.
//
// Tailwind's default size/line-height scale is used unmodified across both
// apps; this file only exposes the family tokens that need to be consistent.
// Fredoka = display (headings, kid names, score numbers).
// Nunito  = body (everything else).

export const typography = {
  fonts: {
    display: ['Fredoka', 'system-ui', 'sans-serif'],
    body: ['Nunito', 'system-ui', 'sans-serif'],
  },
} as const

export type Typography = typeof typography
