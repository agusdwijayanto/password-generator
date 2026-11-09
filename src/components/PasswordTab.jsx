import { useEffect, useState } from 'react'
import { generatePassword } from '../lib/password.js'
import ResultBox from './ResultBox.jsx'
import Toggle from './Toggle.jsx'
import Stepper from './Stepper.jsx'

const DEFAULTS = {
  length: 16, upper: true, lower: true, digits: true, special: false,
  avoidAmbiguous: false, minDigits: 1, minSpecial: 1,
}

export default function PasswordTab() {
  const [o, setO] = useState(DEFAULTS)
  const [result, setResult] = useState('')
  const set = (k) => (v) => setO((p) => ({ ...p, [k]: v }))

  useEffect(() => { setResult(generatePassword(o)) }, [o])

  return (
    <div className="space-y-4">
      <ResultBox value={result} onRegenerate={() => setResult(generatePassword(o))} />
      <div className="rounded-2xl border border-line bg-card shadow-sm px-4 py-3">
        <label htmlFor="panjang" className="text-sm sm:text-base">
          Panjang <span className="font-semibold text-accent">{o.length}</span>
        </label>
        <input id="panjang" type="range" min="5" max="128" value={o.length}
          onChange={(e) => set('length')(Number(e.target.value))}
          className="mt-2 h-11 w-full" />
      </div>
      <div className="grid gap-x-6 rounded-2xl border border-line bg-card shadow-sm px-4 py-3 sm:grid-cols-2">
        <Toggle label="A–Z" checked={o.upper} onChange={set('upper')} />
        <Toggle label="a–z" checked={o.lower} onChange={set('lower')} />
        <Toggle label="0–9" checked={o.digits} onChange={set('digits')} />
        <Toggle label="!@#$%^&*" checked={o.special} onChange={set('special')} />
        <Toggle label="Hindari karakter ambigu" checked={o.avoidAmbiguous} onChange={set('avoidAmbiguous')} />
      </div>
      <div className="grid gap-x-6 rounded-2xl border border-line bg-card shadow-sm px-4 py-3 sm:grid-cols-2">
        <Stepper label="Angka minimum" value={o.minDigits} onChange={set('minDigits')} max={10} disabled={!o.digits} />
        <Stepper label="Karakter khusus minimum" value={o.minSpecial} onChange={set('minSpecial')} max={10} disabled={!o.special} />
      </div>
    </div>
  )
}
