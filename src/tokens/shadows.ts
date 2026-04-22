// Elevation tokens.
//
// NOTE: Web honors multi-layer shadows; React Native only supports a single
// shadow per View. We ship BOTH forms:
//   - `shadowsCss` for Tailwind theme.extend.boxShadow (web consumers)
//   - `shadowsRn` with single-layer equivalents suitable for RN style props
// Each app picks the one it needs.

export const shadowsCss = {
  card: '0 1px 2px rgba(17, 24, 39, 0.04), 0 2px 6px rgba(17, 24, 39, 0.04)',
  pop: '0 8px 24px rgba(17, 24, 39, 0.08)',
} as const

export const shadowsRn = {
  card: '0 2px 6px rgba(17, 24, 39, 0.04)',
  pop: '0 8px 24px rgba(17, 24, 39, 0.08)',
} as const

export type ShadowsCss = typeof shadowsCss
export type ShadowsRn = typeof shadowsRn
