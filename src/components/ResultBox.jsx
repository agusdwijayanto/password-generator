import { useState } from 'react'

export default function ResultBox({ value, onRegenerate }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    if (!value) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  // Hasil diwarnai per jenis karakter: angka biru, simbol oranye, huruf tetap gelap
  const colored = [...value].map((c, i) => {
    if (/[0-9]/.test(c)) return <span key={i} className="font-semibold text-accent">{c}</span>
    if (/[^a-zA-Z\s]/.test(c)) return <span key={i} className="font-semibold text-orange-600">{c}</span>
    return <span key={i}>{c}</span>
  })

  const btn =
    'flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-card text-lg text-ink shadow-sm hover:bg-paper'

  return (
    <div className="flex items-stretch gap-2">
      <div className="min-w-0 flex-1 break-all rounded-2xl border border-line bg-card px-4 py-3 font-mono text-base leading-snug shadow-sm sm:text-lg">
        {value ? colored : <span className="text-slate-400">Pilih minimal satu jenis karakter</span>}
      </div>
      <div className="flex flex-col gap-2">
        <button type="button" onClick={copy} aria-label="Salin hasil" className={btn}>
          {copied ? '✓' : '⧉'}
        </button>
        <button type="button" onClick={onRegenerate} aria-label="Buat ulang" className={btn}>
          ↻
        </button>
      </div>
      {copied && <span className="sr-only">Tersalin</span>}
    </div>
  )
}
