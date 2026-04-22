// Ported from web app src/lib/week.js.

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export interface WeekDay {
  label: string
  date: Date
  key: string
}

export interface CurrentWeek {
  monday: Date
  sunday: Date
  days: WeekDay[]
}

export function getCurrentWeek(): CurrentWeek {
  const now = new Date()
  const day = now.getDay() // 0 Sun .. 6 Sat
  const diffToMon = (day === 0 ? -6 : 1 - day)
  const monday = new Date(now)
  monday.setDate(now.getDate() + diffToMon)
  monday.setHours(0, 0, 0, 0)
  const days: WeekDay[] = DAY_LABELS.map((label, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return { label, date: d, key: label }
  })
  const sunday = days[6].date
  return { monday, sunday, days }
}

export function getWeekKey(): string {
  const { monday } = getCurrentWeek()
  const y = monday.getFullYear()
  const m = String(monday.getMonth() + 1).padStart(2, '0')
  const d = String(monday.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatWeekRange(monday: Date, sunday: Date): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const m1 = months[monday.getMonth()]
  const m2 = months[sunday.getMonth()]
  if (m1 === m2) return `${m1} ${monday.getDate()}–${sunday.getDate()}`
  return `${m1} ${monday.getDate()} – ${m2} ${sunday.getDate()}`
}
