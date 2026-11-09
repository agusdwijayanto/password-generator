import { randomInt } from './random.js'
import { WORDS } from './words.js'

export function generatePassphrase(o) {
  const words = Array.from({ length: o.wordCount }, () => {
    const w = WORDS[randomInt(WORDS.length)]
    return o.capitalize ? w[0].toUpperCase() + w.slice(1) : w
  })
  if (o.includeNumber) {
    const i = randomInt(words.length)
    words[i] += randomInt(10)
  }
  return words.join(o.separator)
}
