// Component sizing tokens (heights, fixed dimensions).
//
// Spacing scale lives in `spacing.ts` (Tailwind 4pt default for most cases).
// This file holds non-rhythmic component-specific dimensions that recur in
// multiple surfaces — e.g. the standard CTA button height shared by Save,
// Start Over, and other modal buttons.

export const sizes = {
  buttonMinHeight: 50,
} as const

export type Sizes = typeof sizes
