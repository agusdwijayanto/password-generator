import assert from 'node:assert'
import { generatePassword } from '../src/lib/password.js'
import { generatePassphrase } from '../src/lib/passphrase.js'
import { generatePlusEmail } from '../src/lib/username.js'

for (let i = 0; i < 200; i++) {
  const p = generatePassword({ length: 16, upper: true, lower: true, digits: true, special: true, avoidAmbiguous: false, minDigits: 3, minSpecial: 2 })
  assert.equal(p.length, 16)
  assert.ok((p.match(/[0-9]/g) || []).length >= 3, 'angka minimum')
  assert.ok((p.match(/[!@#$%^&*]/g) || []).length >= 2, 'simbol minimum')

  const a = generatePassword({ length: 40, upper: true, lower: true, digits: true, special: true, avoidAmbiguous: true, minDigits: 1, minSpecial: 1 })
  assert.ok(!/[l1IO0]/.test(a), 'tanpa karakter ambigu')

  const f = generatePassphrase({ wordCount: 4, separator: '-', capitalize: false, includeNumber: true })
  const parts = f.split('-')
  assert.equal(parts.length, 4)
  assert.ok(/[0-9]/.test(f), 'frasa berisi nomor')

  const c = generatePassphrase({ wordCount: 3, separator: ' ', capitalize: true, includeNumber: false })
  assert.ok(c.split(' ').every((w) => /^[A-Z]/.test(w)), 'frasa kapital')
}

assert.equal(generatePassword({ length: 8, upper: false, lower: false, digits: false, special: false, minDigits: 0, minSpecial: 0 }), '')
assert.match(generatePlusEmail('nama@gmail.com'), /^nama\+[a-z0-9]{8}@gmail\.com$/)
assert.equal(generatePlusEmail('bukan-email'), '')
assert.equal(generatePlusEmail(''), '')

console.log('SEMUA TES LOLOS')
