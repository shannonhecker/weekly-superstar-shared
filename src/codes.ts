const adjectives = [
  'mighty', 'happy', 'sunny', 'cosmic', 'lucky', 'jolly', 'sparkly', 'gentle',
  'brave', 'silly', 'fluffy', 'dreamy', 'rocket', 'magic', 'cuddly', 'shiny',
]
const animals = [
  'wolf', 'tiger', 'panda', 'koala', 'fox', 'otter', 'narwhal', 'dragon',
  'bunny', 'puppy', 'kitten', 'whale', 'penguin', 'lion', 'sloth', 'unicorn',
]

export function generateShareCode(): string {
  const a = adjectives[Math.floor(Math.random() * adjectives.length)]
  const n = animals[Math.floor(Math.random() * animals.length)]
  const num = Math.floor(Math.random() * 90) + 10
  return `${a}-${n}-${num}`
}
