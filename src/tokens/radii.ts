// Border-radius tokens.
//
// The only CUSTOM radius is `pill` (fully rounded). Tailwind's default
// rounded-xl / 2xl / 3xl are available in each app's config without needing
// custom tokens here.

export const radii = {
  pill: '9999px',
} as const

export type Radii = typeof radii
