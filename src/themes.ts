// Ported from web app src/lib/themes.js — canonical source of truth.
//
// Soft pastel themes — accent is the main color; deeper is for high-contrast
// text/icons. Pet emoji per kid is independent of theme — see PET_CHAINS below.

export const THEMES: Record<string, { emoji: string; accent: string; deeper: string; label: string; tagline: string }> = {
  football: { emoji: '⚽', accent: '#88D9A2', deeper: '#2E9C5E', label: 'Football', tagline: '⚽ 🥅 👟' },
  dinosaur: { emoji: '🦕', accent: '#87D4D0', deeper: '#2D9C97', label: 'Dinosaur', tagline: '🦕 🌋 🦴' },
  unicorn:  { emoji: '🦄', accent: '#D4B0E8', deeper: '#9B59B6', label: 'Unicorn',  tagline: '🦄 🌈 ✨' },
  animals:  { emoji: '🐾', accent: '#F4B583', deeper: '#C77846', label: 'Animals',  tagline: '🐾 🐶 🐱' },
  rocket:   { emoji: '🚀', accent: '#A4B4F0', deeper: '#5468C9', label: 'Space',    tagline: '🚀 🪐 🌟' },
  princess: { emoji: '👑', accent: '#F4A6D9', deeper: '#D14B9C', label: 'Princess', tagline: '👑 💎 🌷' },
}

export const PET_CHAINS: Record<string, { label: string; stages: string[]; names: string[] }> = {
  cats:    { label: 'Cat family',     stages: ['🐱', '🐈', '🐯', '🦁'], names: ['kitten', 'cat', 'tiger', 'lion'] },
  dogs:    { label: 'Dog family',     stages: ['🐶', '🐕', '🦊', '🐺'], names: ['puppy', 'dog', 'fox', 'wolf'] },
  birds:   { label: 'Bird family',    stages: ['🐥', '🐤', '🦆', '🦢'], names: ['chick', 'fledgling', 'duck', 'swan'] },
  dinos:   { label: 'Dino family',    stages: ['🦎', '🐊', '🦖', '🐉'], names: ['lizard', 'croc', 'T-rex', 'dragon'] },
  sea:     { label: 'Sea family',     stages: ['🐠', '🐬', '🦈', '🐳'], names: ['fish', 'dolphin', 'shark', 'whale'] },
  bugs:    { label: 'Garden family',  stages: ['🐛', '🐌', '🐝', '🦋'], names: ['caterpillar', 'snail', 'bee', 'butterfly'] },
  bears:   { label: 'Bear family',    stages: ['🐨', '🐼', '🐻', '🐻‍❄️'], names: ['koala', 'panda', 'bear', 'polar bear'] },
  royal:   { label: 'Royal family',   stages: ['🐸', '👸', '👑', '🏰'], names: ['frog prince', 'princess', 'crown', 'castle'] },
  space:   { label: 'Space family',   stages: ['👽', '🛸', '🚀', '🌟'], names: ['alien', 'UFO', 'rocket', 'star'] },
  plants:  { label: 'Plant family',   stages: ['🌱', '🌿', '🌸', '🌳'], names: ['seedling', 'herb', 'blossom', 'tree'] },
  sweets:  { label: 'Sweet family',   stages: ['🍪', '🧁', '🎂', '🍰'], names: ['cookie', 'cupcake', 'cake', 'slice'] },
  weather: { label: 'Weather family', stages: ['💧', '🌧️', '🌈', '☀️'], names: ['droplet', 'rain cloud', 'rainbow', 'sunshine'] },
}

export function stageToChainIdx(stage: number, chainLen: number): number {
  if (stage <= 0) return 0
  return Math.min(chainLen - 1, Math.floor((stage - 1) * chainLen / 6))
}

export const HATCH_GOAL = 50

export function progressToStage(stars: number, goal: number = HATCH_GOAL): number {
  if (goal <= 0) return 0
  const pct = stars / goal
  if (pct >= 1) return 6
  if (pct >= 5 / 6) return 5
  if (pct >= 4 / 6) return 4
  if (pct >= 3 / 6) return 3
  if (pct >= 2 / 6) return 2
  if (pct >= 1 / 6) return 1
  return 0
}

export function chainFor(kidId: string, weekKey: string): string {
  const keys = Object.keys(PET_CHAINS)
  const s = String(kidId || '') + '|' + String(weekKey || '')
  let h = 0
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return keys[Math.abs(h) % keys.length]
}

function seededShuffle<T>(arr: T[], seedStr: string): T[] {
  const a = [...arr]
  let s = 1
  for (let i = 0; i < seedStr.length; i++) s = ((s << 5) - s + seedStr.charCodeAt(i)) | 0
  s = Math.abs(s) || 1
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7FFFFFFF
    return s / 0x7FFFFFFF
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const ACTIVE_CHAIN_KEYS = ['cats', 'dogs', 'birds', 'dinos', 'sea', 'bugs', 'bears']

export function assignChainsForBoard(kidIds: string[], weekKey: string): Record<string, string> {
  const pool = ACTIVE_CHAIN_KEYS.filter((k) => PET_CHAINS[k])
  const shuffled = seededShuffle(pool, String(weekKey || ''))
  const sortedIds = [...(kidIds || [])].sort()
  const out: Record<string, string> = {}
  sortedIds.forEach((id, i) => {
    out[id] = shuffled[i % shuffled.length]
  })
  return out
}

export function petAtStage(chainKey: string, stage: number) {
  const chain = PET_CHAINS[chainKey] || PET_CHAINS.cats
  const idx = stageToChainIdx(stage, chain.stages.length)
  return { emoji: chain.stages[idx], name: chain.names[idx], chainLabel: chain.label }
}

export function adultPet(chainKey: string) {
  const chain = PET_CHAINS[chainKey] || PET_CHAINS.cats
  const last = chain.stages.length - 1
  return { emoji: chain.stages[last], name: chain.names[last] }
}

export const PET_ASSET: Record<string, [string, string]> = {
  '🐔': ['Animals', 'Chicken'],
  '🦕': ['Animals', 'Sauropod'],
  '🦄': ['Animals', 'Unicorn'],
  '🦁': ['Animals', 'Lion'],
  '🚀': ['Travel and places', 'Rocket'],
  '👑': ['Objects', 'Crown'],
  '🐉': ['Animals', 'Dragon'],
  '🦋': ['Animals', 'Butterfly'],
  '🐕': ['Animals', 'Dog'],
  '🐠': ['Animals', 'Tropical Fish'],
  '🦉': ['Animals', 'Owl'],
  '🐰': ['Animals', 'Rabbit Face'],
  '🐼': ['Animals', 'Panda'],
  '🐨': ['Animals', 'Koala'],
  '🐯': ['Animals', 'Tiger Face'],
  '🐻': ['Animals', 'Bear'],
  '🐸': ['Animals', 'Frog'],
  '🦊': ['Animals', 'Fox'],
  '🐧': ['Animals', 'Penguin'],
  '🐙': ['Animals', 'Octopus'],
  '🦒': ['Animals', 'Giraffe'],
  '🦈': ['Animals', 'Shark'],
  '🦘': ['Animals', 'Kangaroo'],
  '🦥': ['Animals', 'Sloth'],
  '🦆': ['Animals', 'Duck'],
  '🦢': ['Animals', 'Swan'],
  '🦚': ['Animals', 'Peacock'],
  '🦜': ['Animals', 'Parrot'],
  '🐳': ['Animals', 'Spouting Whale'],
  '🦩': ['Animals', 'Flamingo'],
  '🐢': ['Animals', 'Turtle'],
  '🦖': ['Animals', 'T-Rex'],
  '🐵': ['Animals', 'Monkey Face'],
  '🐶': ['Animals', 'Dog Face'],
  '🐱': ['Animals', 'Cat Face'],
  '🐷': ['Animals', 'Pig Face'],
  '🐮': ['Animals', 'Cow Face'],
  '🐴': ['Animals', 'Horse Face'],
  '🐈': ['Animals', 'Cat'],
  '🐤': ['Animals', 'Baby Chick'],
  '🐥': ['Animals', 'Front-Facing Baby Chick'],
  '🐺': ['Animals', 'Wolf'],
  '🦎': ['Animals', 'Lizard'],
  '🐊': ['Animals', 'Crocodile'],
  '🐬': ['Animals', 'Dolphin'],
  '🐛': ['Animals', 'Bug'],
  '🐌': ['Animals', 'Snail'],
  '🐝': ['Animals', 'Honeybee'],
  '🐻‍❄️': ['Animals', 'Polar Bear'],
  '👸': ['People with professions', 'Princess Light Skin Tone'],
  '🏰': ['Travel and places', 'Castle'],
  '👽': ['Smilies', 'Alien'],
  '🛸': ['Travel and places', 'Flying Saucer'],
  '🌟': ['Travel and places', 'Glowing Star'],
  '🌱': ['Animals', 'Seedling'],
  '🌿': ['Animals', 'Herb'],
  '🌸': ['Animals', 'Cherry Blossom'],
  '🌳': ['Animals', 'Deciduous Tree'],
  '🍪': ['Food', 'Cookie'],
  '🧁': ['Food', 'Cupcake'],
  '🎂': ['Food', 'Birthday Cake'],
  '🍰': ['Food', 'Shortcake'],
  '💧': ['Travel and places', 'Droplet'],
  '🌧️': ['Travel and places', 'Cloud with Rain'],
  '🌈': ['Travel and places', 'Rainbow'],
  '☀️': ['Travel and places', 'Sun'],
  '🥚': ['Food', 'Egg'],
}

export function animatedFluentUrl(emoji: string): string | null {
  const asset = PET_ASSET[emoji]
  if (!asset) return null
  return `https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@master/Emojis/${encodeURIComponent(asset[0])}/${encodeURIComponent(asset[1])}.png`
}

export const EGG_NAMES: Record<string, string> = {
  football: 'Pitch Egg',
  dinosaur: 'Mint Egg',
  unicorn:  'Rainbow Egg',
  animals:  'Cozy Egg',
  rocket:   'Cosmic Egg',
  princess: 'Crystal Egg',
}

export const DEFAULT_ACTIVITIES = [
  { id: 'sleep',       label: 'Sleep',    emoji: '😴', color: '#B5A8F2' },
  { id: 'bath',        label: 'Bath',     emoji: '🛁', color: '#A0E7E5' },
  { id: 'teeth',       label: 'Teeth',    emoji: '🪥', color: '#A8D8F0' },
  { id: 'breakfast',   label: 'Brekkie',  emoji: '🍳', color: '#FFD3A5' },
  { id: 'shoes',       label: 'Shoes',    emoji: '👟', color: '#FBA59C' },
  { id: 'school-book', label: 'School',   emoji: '📖', color: '#FFE082' },
  { id: 'fun-book',    label: 'Reading',  emoji: '📚', color: '#FFAFA3' },
  { id: 'mandarin',    label: 'Mandarin', emoji: '🀄', color: '#FFB494' },
  { id: 'walk',        label: 'Walk',     emoji: '🚶', color: '#A8E6C1' },
  { id: 'special',     label: 'Special!', emoji: '⭐', color: '#FFE48F' },
]
