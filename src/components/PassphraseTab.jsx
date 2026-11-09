import { useEffect, useState } from 'react'
import { generatePassphrase } from '../lib/passphrase.js'
import ResultBox from './ResultBox.jsx'
import Toggle from './Toggle.jsx'
import Stepper from './Stepper.jsx'

const DEFAULTS = { wordCount: 3, separator: '-', capitalize: false, includeNumber: false }

export default function PassphraseTab() {
  const [o, setO] = useState(DEFAULTS)
  const [result, setResult] = useState('')
  const set = (k) => (v) => setO((p) => ({ ...p, [k]: v }))

  useEffect(() => { setResult(generatePassphrase(o)) }, [o])

  return (
    <div className="space-y-4">
      <ResultBox value={result} onRegenerate={() => setResult(generatePassphrase(o))} />
      <div className="grid gap-x-6 rounded-2xl border border-line bg-card shadow-sm px-4 py-3 sm:grid-cols-2">
        <Stepper label="Jumlah kata" value={o.wordCount} onChange={set('wordCount')} min={3} max={20} />
        <label className="flex min-h-11 items-center justify-between gap-3 py-1">
          <span className="text-sm sm:text-base">Pemisah kata</span>
          <input value={o.separator} maxLength={3} aria-label="Pemisah kata"
            onChange={(e) => set('separator')(e.target.value)}
            className="h-11 w-16 rounded-xl border border-line bg-paper px-3 text-center font-mono text-ink outline-none focus:ring-2 focus:ring-accent" />
        </label>
        <Toggle label="Huruf kapital" checked={o.capitalize} onChange={set('capitalize')} />
        <Toggle label="Sertakan nomor" checked={o.includeNumber} onChange={set('includeNumber')} />
      </div>
    </div>
  )
}
