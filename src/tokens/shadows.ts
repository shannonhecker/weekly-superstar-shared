// Elevation tokens.
//
// NOTE: Web honors multi-layer shadows; React Native only supports a single
// shadow per View. We ship BOTH forms:
//   - `shadowsCss` for Tailwind theme.extend.boxShadow (web consumers)
//   - `shadowsRn` with single-layer equivalents suitable for RN style props
// Each app picks the one it needs.
//
// EARTHY (Phase 0+): the new direction uses warm-toned shadows tinted with
// the cocoa brand colour rather than neutral grey, which keeps elevations
// inside the same hue family as the surfaces they sit on. Three steps —
// `flat / soft / lifted` — replace the previous binary `card / pop`. The
// legacy keys remain so unmigrated surfaces don't break.

export const shadowsCss = {
  card: '0 1px 2px rgba(17, 24, 39, 0.04), 0 2px 6px rgba(17, 24, 39, 0.04)',
  pop: '0 8px 24px rgba(17, 24, 39, 0.08)',
  // Earthy elevations — cocoa-tinted, three-step
  earthyFlat:   'none',
  earthySoft:   '0 1px 2px rgba(90, 58, 46, 0.06), 0 4px 12px rgba(90, 58, 46, 0.04)',
  earthyLifted: '0 8px 24px rgba(90, 58, 46, 0.10)',
} as const

export const shadowsRn = {
  card: '0 2px 6px rgba(17, 24, 39, 0.04)',
  pop: '0 8px 24px rgba(17, 24, 39, 0.08)',
  earthyFlat: 'none',
  earthySoft: '0 4px 12px rgba(90, 58, 46, 0.06)',
  earthyLifted: '0 8px 24px rgba(90, 58, 46, 0.10)',
} as const

export type ShadowsCss = typeof shadowsCss
export type ShadowsRn = typeof shadowsRn
