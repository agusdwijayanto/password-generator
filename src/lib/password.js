import { pick, shuffle } from './random.js'

const SETS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  digits: '0123456789',
  special: '!@#$%^&*',
}
// Karakter yang gampang tertukar dibuang saat opsi hindari ambigu aktif
const AMBIGUOUS = /[l1IO0]/g

export function generatePassword(o) {
  const sets = []
  if (o.upper) sets.push(SETS.upper)
  if (o.lower) sets.push(SETS.lower)
  if (o.digits) sets.push(SETS.digits)
  if (o.special) sets.push(SETS.special)
  if (!sets.length) return ''

  const clean = (s) => (o.avoidAmbiguous ? s.replace(AMBIGUOUS, '') : s)
  const pool = clean(sets.join(''))
  const chars = []

  // Jaminan minimum diacak posisinya, bukan selalu di depan
  const minDigits = o.digits ? Math.min(o.minDigits, o.length) : 0
  const minSpecial = o.special ? Math.min(o.minSpecial, o.length - minDigits) : 0
  for (let i = 0; i < minDigits; i++) chars.push(pick(clean(SETS.digits)))
  for (let i = 0; i < minSpecial; i++) chars.push(pick(clean(SETS.special)))
  while (chars.length < o.length) chars.push(pick(pool))

  return shuffle(chars).join('')
}
