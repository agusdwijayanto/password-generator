import { pick } from './random.js'

const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789'

// Fitur sub-alamat: penyedia email mengantar local+acak@domain ke kotak masuk yang sama
export function generatePlusEmail(email) {
  const [local, domain] = email.trim().split('@')
  if (!local || !domain || !domain.includes('.')) return ''
  const suffix = Array.from({ length: 8 }, () => pick(CHARS)).join('')
  return `${local}+${suffix}@${domain}`
}
