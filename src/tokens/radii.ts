// Border-radius tokens.
//
// `pill` is fully rounded; `button` is the standard CTA / Save / destructive
// button radius (paired with `sizes.buttonMinHeight` so the corners read as
// pill-shaped on default-height buttons but stay distinct from full pills on
// taller buttons). Tailwind's default rounded-xl / 2xl / 3xl are available
// in each app's config without needing custom tokens here.

export const radii = {
  pill:   '9999px',
  button: 25,
} as const

export type Radii = typeof radii
