// Ported from web app src/lib/themes.js — canonical source of truth.
//
// Soft pastel themes — accent is the main color; deeper is for high-contrast
// text/icons. Pet emoji per kid is independent of theme — see PET_CHAINS below.

// Earthy palette retune (Phase 2 brand sweep). Each kid keeps their chosen
// theme name + emoji + tagline. Accent + deeper hex values pulled toward
// the muted/earthy world so a Board with multiple kids reads as one
// coherent surface family rather than a disco of saturated brand greens
// and purples. Original WCAG ratios preserved on `deeper` (≥4.5:1 on
// cream).
export const THEMES: Record<string, { emoji: string; accent: string; deeper: string; label: string; tagline: string }> = {
  football: { emoji: '⚽', accent: '#B5C99A', deeper: '#6B8060', label: 'Football', tagline: '⚽ 🥅 👟' },
  dinosaur: { emoji: '🦕', accent: '#A8C2A1', deeper: '#5C7A55', label: 'Dinosaur', tagline: '🦕 🌋 🦴' },
  unicorn:  { emoji: '🦄', accent: '#D4B5C4', deeper: '#8B6F87', label: 'Unicorn',  tagline: '🦄 🌈 ✨' },
  animals:  { emoji: '🐾', accent: '#E8B796', deeper: '#C77846', label: 'Animals',  tagline: '🐾 🐶 🐱' },
  rocket:   { emoji: '🚀', accent: '#ABC9D8', deeper: '#4F7A91', label: 'Space',    tagline: '🚀 🪐 🌟' },
  princess: { emoji: '👑', accent: '#E8B5A8', deeper: '#B85450', label: 'Princess', tagline: '👑 💎 🌷' },
  ocean:    { emoji: '🌊', accent: '#A8C5C9', deeper: '#4A7984', label: 'Ocean',    tagline: '🌊 🐚 🐬' },
  garden:   { emoji: '🌼', accent: '#C2D5A0', deeper: '#6B8B4F', label: 'Garden',   tagline: '🌼 🐞 🌿' },
  robot:    { emoji: '🤖', accent: '#C2BBAE', deeper: '#7B6E5D', label: 'Robot',    tagline: '🤖 ⚙️ ⚡' },
  magic:    { emoji: '🌙', accent: '#B4A8C9', deeper: '#6B5C82', label: 'Magic',    tagline: '🌙 ✨ 🔮' },
  rugby:    { emoji: '🏉', accent: '#D4B59E', deeper: '#8B6651', label: 'Rugby',    tagline: '🏉 ⚡ 👟' },
  train:    { emoji: '🚂', accent: '#BCA89A', deeper: '#6E5D4F', label: 'Train',    tagline: '🚂 🚃 🛤️' },
  fairy:    { emoji: '🧚', accent: '#DBC0D4', deeper: '#7A5C82', label: 'Fairy',    tagline: '🧚 🌸 ✨' },
  bear:     { emoji: '🐻', accent: '#C8A98C', deeper: '#6F4E36', label: 'Bear',     tagline: '🐻 🍯 🌲' },
}

export const PET_CHAINS: Record<string, { label: string; stages: string[]; names: string[] }> = {
  cats:      { label: 'Cat family',      stages: ['🐱', '🐈', '🐯', '🦁'], names: ['kitten', 'cat', 'tiger', 'lion'] },
  dogs:      { label: 'Dog family',      stages: ['🐶', '🐕', '🦊', '🐺'], names: ['puppy', 'dog', 'fox', 'wolf'] },
  birds:     { label: 'Bird family',     stages: ['🐥', '🐤', '🦆', '🦢'], names: ['chick', 'fledgling', 'duck', 'swan'] },
  dinos:     { label: 'Dino family',     stages: ['🦎', '🐊', '🦖', '🐉'], names: ['lizard', 'croc', 'T-rex', 'dragon'] },
  sea:       { label: 'Sea family',      stages: ['🐠', '🐬', '🦈', '🐳'], names: ['fish', 'dolphin', 'shark', 'whale'] },
  bugs:      { label: 'Garden family',   stages: ['🐛', '🐌', '🐝', '🦋'], names: ['caterpillar', 'snail', 'bee', 'butterfly'] },
  bears:     { label: 'Bear family',     stages: ['🐨', '🐼', '🐻', '🐻‍❄️'], names: ['koala', 'panda', 'bear', 'polar bear'] },
  royal:     { label: 'Royal family',    stages: ['🐸', '👸', '👑', '🏰'], names: ['frog prince', 'princess', 'crown', 'castle'] },
  space:     { label: 'Space family',    stages: ['👽', '🛸', '🚀', '🌟'], names: ['alien', 'UFO', 'rocket', 'star'] },
  plants:    { label: 'Plant family',    stages: ['🌱', '🌿', '🌸', '🌳'], names: ['seedling', 'herb', 'blossom', 'tree'] },
  sweets:    { label: 'Sweet family',    stages: ['🍪', '🧁', '🎂', '🍰'], names: ['cookie', 'cupcake', 'cake', 'slice'] },
  weather:   { label: 'Weather family',  stages: ['💧', '🌧️', '🌈', '☀️'], names: ['droplet', 'rain cloud', 'rainbow', 'sunshine'] },
  mythic:    { label: 'Mythic family',   stages: ['🪄', '🔮', '🧚', '🧙'], names: ['wand', 'crystal ball', 'fairy', 'wizard'] },
  robots:    { label: 'Robot family',    stages: ['⚙️', '🤖', '🦾', '🛰️'], names: ['gear', 'robot', 'mech', 'satellite'] },
  vehicles:  { label: 'Vehicle family',  stages: ['🛴', '🚲', '🏍️', '🏎️'], names: ['scooter', 'bike', 'motorbike', 'race car'] },
  gems:      { label: 'Treasure family', stages: ['🪨', '💎', '💍', '🏆'], names: ['rock', 'gem', 'ring', 'trophy'] },
  balls:     { label: 'Ball family',     stages: ['⚽', '🏀', '🏈', '🏉'], names: ['soccer ball', 'basketball', 'football', 'rugby'] },
  trains:    { label: 'Train family',    stages: ['🚂', '🚃', '🚆', '🚄'], names: ['steam engine', 'wagon', 'tram', 'bullet train'] },
  planes:    { label: 'Sky family',      stages: ['🪁', '🎈', '✈️', '🚁'], names: ['kite', 'balloon', 'plane', 'helicopter'] },
  moons:     { label: 'Moon family',     stages: ['🌑', '🌒', '🌓', '🌕'], names: ['new moon', 'crescent', 'half moon', 'full moon'] },
  sun:       { label: 'Sunny family',    stages: ['⛅', '🌤️', '🌞', '☀️'], names: ['cloudy', 'partly sunny', 'smiling sun', 'sunshine'] },
  stars:     { label: 'Star family',     stages: ['⭐', '🌟', '✨', '💫'], names: ['star', 'glowing star', 'sparkles', 'dizzy'] },
  phoenix:   { label: 'Phoenix family',  stages: ['🥚', '🔥', '🐦', '🦅'], names: ['egg', 'ember', 'firebird', 'phoenix'] },
  celestial: { label: 'Celestial family',stages: ['🌌', '☄️', '🌠', '🌟'], names: ['galaxy', 'comet', 'shooting star', 'star'] },
  mermaid:   { label: 'Mermaid family',  stages: ['🐚', '🪸', '🧜', '🌊'], names: ['shell', 'coral', 'mermaid', 'ocean'] },
  ninja:     { label: 'Ninja family',    stages: ['🥷', '⚔️', '🏯', '👑'], names: ['ninja', 'swords', 'castle', 'crown'] },
}

export function stageToChainIdx(stage: number, chainLen: number): number {
  if (stage <= 0) return 0
  return Math.min(chainLen - 1, Math.floor((stage - 1) * chainLen / 6))
}

export const HATCH_GOAL = 60

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

export const ACTIVE_CHAIN_KEYS = [
  'cats', 'dogs', 'birds', 'dinos', 'sea', 'bugs', 'bears',
  'royal', 'space', 'plants', 'sweets', 'weather',
  'mythic', 'robots', 'vehicles', 'gems',
  'balls', 'trains', 'planes', 'moons', 'sun', 'stars',
  'phoenix', 'celestial', 'mermaid', 'ninja',
]

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

export function pickFreshChain(recentChainKeys: string[] = []): string {
  const recent = new Set(recentChainKeys.filter(Boolean))
  const pool = ACTIVE_CHAIN_KEYS.filter((k) => PET_CHAINS[k] && !recent.has(k))
  const fallback = ACTIVE_CHAIN_KEYS.filter((k) => PET_CHAINS[k])
  const source = pool.length > 0 ? pool : fallback
  if (source.length === 0) return 'cats'
  return source[Math.floor(Math.random() * source.length)]
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
  '🪄': ['Activities', 'Magic Wand'],
  '🔮': ['Activities', 'Crystal Ball'],
  '🧚': ['People', 'Fairy'],
  '🧙': ['People', 'Mage'],
  '⚙️': ['Objects', 'Gear'],
  '🤖': ['Smilies', 'Robot'],
  '🦾': ['People', 'Mechanical Arm'],
  '🛰️': ['Travel and places', 'Satellite'],
  '🛴': ['Travel and places', 'Kick Scooter'],
  '🚲': ['Travel and places', 'Bicycle'],
  '🏍️': ['Travel and places', 'Motorcycle'],
  '🏎️': ['Travel and places', 'Racing Car'],
  '🪨': ['Travel and places', 'Rock'],
  '💎': ['Objects', 'Gem Stone'],
  '💍': ['Objects', 'Ring'],
  '🏆': ['Activities', 'Trophy'],
  '🏉': ['Activities', 'Rugby Football'],
  '🏀': ['Activities', 'Basketball'],
  '🚂': ['Travel and places', 'Locomotive'],
  '⚽': ['Activities', 'Soccer Ball'],
  '🏈': ['Activities', 'American Football'],
  '🚃': ['Travel and places', 'Railway Car'],
  '🚆': ['Travel and places', 'Train'],
  '🚄': ['Travel and places', 'High-Speed Train'],
  '🪁': ['Activities', 'Kite'],
  '🎈': ['Activities', 'Balloon'],
  '✈️': ['Travel and places', 'Airplane'],
  '🚁': ['Travel and places', 'Helicopter'],
  '🌑': ['Travel and places', 'New Moon'],
  '🌒': ['Travel and places', 'Waxing Crescent Moon'],
  '🌓': ['Travel and places', 'First Quarter Moon'],
  '🌕': ['Travel and places', 'Full Moon'],
  '⛅': ['Travel and places', 'Sun Behind Cloud'],
  '🌤️': ['Travel and places', 'Sun Behind Small Cloud'],
  '🌞': ['Travel and places', 'Sun with Face'],
  '💫': ['Travel and places', 'Dizzy'],
  '🔥': ['Travel and places', 'Fire'],
  '🐦': ['Animals', 'Bird'],
  '🦅': ['Animals', 'Eagle'],
  '🌌': ['Travel and places', 'Milky Way'],
  '☄️': ['Travel and places', 'Comet'],
  '🌠': ['Travel and places', 'Shooting Star'],
  '🐚': ['Animals', 'Spiral Shell'],
  '🪸': ['Animals', 'Coral'],
  '🧜': ['People with professions', 'Merperson'],
  '🌊': ['Travel and places', 'Water Wave'],
  '🥷': ['People with professions', 'Ninja'],
  '⚔️': ['Objects', 'Crossed Swords'],
  '🏯': ['Travel and places', 'Japanese Castle'],
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
  ocean:    'Tide Egg',
  garden:   'Bloom Egg',
  robot:    'Circuit Egg',
  magic:    'Moonlit Egg',
  rugby:    'Scrum Egg',
  train:    'Steam Egg',
  fairy:    'Pixie Egg',
  bear:     'Honey Egg',
}

export const KID_AVATARS: string[] = [
  '🦄', '🐱', '🐶', '🦊', '🐼', '🐨', '🦁', '🐯',
  '🐸', '🐻', '🐰', '🐵', '🦖', '🦋', '🐙', '🦉',
  '🏉', '🏀', '🚂',
]

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

// Picker palette for the parent's per-task colour chip.
// Pulled from the DEFAULT_ACTIVITIES pastels and rounded out with a few brand-safe
// extras so a parent has enough variety for a 10-task board without two activities
// looking identical.
export const ACTIVITY_COLORS: string[] = [
  '#B5A8F2', // lavender
  '#A0E7E5', // mint
  '#A8D8F0', // sky
  '#FFD3A5', // peach
  '#FBA59C', // coral
  '#FFE082', // butter
  '#FFAFA3', // salmon
  '#A8E6C1', // sage
  '#F4B6D9', // bubblegum
  '#C6ACE8', // amethyst
  '#FFD6E8', // blush
  '#D0E8B5', // lime
]

// Kid-friendly emoji picker for activities. Order is rough categories: hygiene,
// meals, sleep, dress, school, reading, exercise, hobbies, chores, special.
export const ACTIVITY_EMOJIS: string[] = [
  '😴', '🛏️', '🛁', '🚿', '🪥', '🧼',
  '🍳', '🥣', '🍎', '🥪', '🥛', '🍱',
  '👕', '👟', '🧥', '🎒',
  '📖', '📚', '✏️', '🎨', '🎵', '🎹',
  '🏃', '⚽', '🚴', '🏊', '🧘', '🚶',
  '🪀', '🧩', '🧱', '🎲',
  '🐶', '🐱', '🌱', '🧹',
  '⭐', '🌟', '✨', '🎉',
]

// Preset task bundles parents can apply with one tap. Applying merges by id —
// existing activities with matching ids get updated, new ones get appended,
// respecting the 10-cap (the UI enforces it; this constant is just the recipe).
export const ACTIVITY_PRESETS: Record<string, { label: string; activities: Array<{ id: string; label: string; emoji: string; color: string }> }> = {
  'morning-routine': {
    label: 'Morning routine',
    activities: [
      { id: 'wake',      label: 'Wake up',  emoji: '⏰', color: '#FFE082' },
      { id: 'breakfast', label: 'Brekkie',  emoji: '🍳', color: '#FFD3A5' },
      { id: 'teeth',     label: 'Teeth',    emoji: '🪥', color: '#A8D8F0' },
      { id: 'dressed',   label: 'Get dressed', emoji: '👕', color: '#F4B6D9' },
      { id: 'shoes',     label: 'Shoes',    emoji: '👟', color: '#FBA59C' },
    ],
  },
  'school-day': {
    label: 'School day',
    activities: [
      { id: 'school-book', label: 'School',   emoji: '📖', color: '#FFE082' },
      { id: 'homework',    label: 'Homework', emoji: '✏️', color: '#A8D8F0' },
      { id: 'fun-book',    label: 'Reading',  emoji: '📚', color: '#FFAFA3' },
      { id: 'pack-bag',    label: 'Pack bag', emoji: '🎒', color: '#C6ACE8' },
    ],
  },
  'toddler-basics': {
    label: 'Toddler basics',
    activities: [
      { id: 'sleep',     label: 'Sleep',    emoji: '😴', color: '#B5A8F2' },
      { id: 'breakfast', label: 'Eat',      emoji: '🥣', color: '#FFD3A5' },
      { id: 'bath',      label: 'Bath',     emoji: '🛁', color: '#A0E7E5' },
      { id: 'play',      label: 'Play',     emoji: '🪀', color: '#A8E6C1' },
      { id: 'teeth',     label: 'Teeth',    emoji: '🪥', color: '#A8D8F0' },
    ],
  },
  'chores': {
    label: 'Chores',
    activities: [
      { id: 'tidy-room',  label: 'Tidy room',  emoji: '🧹', color: '#A8E6C1' },
      { id: 'feed-pet',   label: 'Feed pet',   emoji: '🐶', color: '#FFD3A5' },
      { id: 'make-bed',   label: 'Make bed',   emoji: '🛏️', color: '#B5A8F2' },
      { id: 'clear-plate', label: 'Clear plate', emoji: '🍽️', color: '#FFAFA3' },
    ],
  },
}
