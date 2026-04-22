// Motion tokens. Web uses the cubic-bezier as transitionTimingFunction; RN uses
// the same curve via Reanimated's withTiming({ easing: Easing.bezier(...) }) —
// both agree on the same four-number tuple.

export const motion = {
  /** Spring easing — playful overshoot for card state changes + hatch reveals. */
  springBezier: [0.175, 0.885, 0.32, 1.275] as const,
  /** CSS-formatted spring for Tailwind theme.extend.transitionTimingFunction. */
  springCss: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const

export type Motion = typeof motion
