// Rejection sampling supaya hasil acak tidak berat sebelah
export function randomInt(max) {
  const limit = Math.floor(256 / max) * max
  const buf = new Uint8Array(1)
  do {
    crypto.getRandomValues(buf)
  } while (buf[0] >= limit)
  return buf[0] % max
}

export function pick(str) {
  return str[randomInt(str.length)]
}

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
