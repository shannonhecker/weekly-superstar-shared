// Ported from web app src/lib/achievements.js.

import type { WeekDay } from './week.js'

interface KidLike {
  checks?: Record<string, boolean>
  activities?: Array<{ id: string }>
}

interface EvalContext {
  totalStars: number
  days: WeekDay[]
}

function allChecksOn(kid: KidLike, dayKey: string): boolean {
  const checks = kid.checks || {}
  const activities = kid.activities || []
  return activities.length > 0 && activities.every((a) => !!checks[`${a.id}-${dayKey}`])
}

function activityOnDays(kid: KidLike, activityId: string, dayKeys: string[]): number {
  const checks = kid.checks || {}
  return dayKeys.filter((k) => checks[`${activityId}-${k}`]).length
}

function currentStreak(kid: KidLike, days: WeekDay[]): number {
  let streak = 0
  const now = new Date()
  for (let i = days.length - 1; i >= 0; i--) {
    const d = days[i]
    if (d.date > now) continue
    if (allChecksOn(kid, d.key)) streak++
    else break
  }
  return streak
}

export const ACHIEVEMENTS = [
  {
    id: 'streak-3',
    emoji: '🔥',
    label: '3-day streak',
    description: 'Complete every task 3 days in a row',
    test: (kid: KidLike, ctx: EvalContext) => currentStreak(kid, ctx.days) >= 3,
  },
  {
    id: 'streak-7',
    emoji: '⚡',
    label: 'Full-week streak',
    description: 'Complete every task every day — a perfect week!',
    test: (kid: KidLike, ctx: EvalContext) => currentStreak(kid, ctx.days) >= 7,
  },
  {
    id: 'bedtime-champion',
    emoji: '😴',
    label: 'Bedtime champion',
    description: 'Check Sleep on all 7 days this week',
    test: (kid: KidLike, ctx: EvalContext) => activityOnDays(kid, 'sleep', ctx.days.map((d) => d.key)) >= 7,
  },
  {
    id: 'clean-sweep',
    emoji: '🌟',
    label: 'Clean sweep day',
    description: 'Finish every activity in a single day',
    test: (kid: KidLike, ctx: EvalContext) => ctx.days.some((d) => allChecksOn(kid, d.key)),
  },
  {
    id: 'perfect-morning',
    emoji: '☀️',
    label: 'Perfect morning',
    description: 'Check Sleep + Bath + Teeth + Brekkie on the same day',
    test: (kid: KidLike, ctx: EvalContext) => {
      const checks = kid.checks || {}
      const routine = ['sleep', 'bath', 'teeth', 'breakfast']
      return ctx.days.some((d) => routine.every((id) => !!checks[`${id}-${d.key}`]))
    },
  },
  {
    id: 'reading-pro',
    emoji: '📚',
    label: 'Reading pro',
    description: 'Check Reading on 5 or more days this week',
    test: (kid: KidLike, ctx: EvalContext) => activityOnDays(kid, 'fun-book', ctx.days.map((d) => d.key)) >= 5,
  },
]

export function evaluateAchievements(kid: KidLike, ctx: EvalContext): string[] {
  return ACHIEVEMENTS.filter((a) => a.test(kid, ctx)).map((a) => a.id)
}
