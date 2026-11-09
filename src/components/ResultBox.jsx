import { useState } from 'react'

export default function ResultBox({ value, onRegenerate }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    if (!value) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-stretch gap-2">
      <div className="min-w-0 flex-1 break-all rounded-2xl bg-deep px-4 py-3 font-mono text-base leading-snug sm:text-lg">
        {value || <span className="text-white/50">Pilih minimal satu jenis karakter</span>}
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={copy}
          aria-label="Salin hasil"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-lg hover:bg-card"
        >
          {copied ? '✓' : '⧉'}
        </button>
        <button
          type="button"
          onClick={onRegenerate}
          aria-label="Buat ulang"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-lg hover:bg-card"
        >
          ↻
        </button>
      </div>
      {copied && <span className="sr-only">Tersalin</span>}
    </div>
  )
}
