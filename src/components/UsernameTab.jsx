import { useState } from 'react'
import { generatePlusEmail } from '../lib/username.js'
import ResultBox from './ResultBox.jsx'

export default function UsernameTab() {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  function generate() {
    const r = generatePlusEmail(email)
    setError(r ? '' : 'Isi email yang benar dulu, contoh: nama@gmail.com')
    setResult(r)
  }

  return (
    <div className="space-y-4">
      <ResultBox value={result} onRegenerate={generate} />
      <div className="space-y-3 rounded-2xl border border-line bg-card px-4 py-4 shadow-sm">
        <p className="text-sm text-muted">
          Jenis nama pengguna: <span className="font-semibold text-ink">Alamat email plus</span>
        </p>
        <p className="text-sm text-muted">
          Fitur sub-alamat dari penyedia email: surat ke alamat plus tetap masuk ke kotak masuk email asal.
        </p>
        <label className="block">
          <span className="text-sm sm:text-base">Email (wajib)</span>
          <input type="email" value={email} placeholder="nama@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
            className="mt-2 h-12 w-full rounded-xl border border-line bg-paper px-4 font-mono outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-accent" />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="button" onClick={generate}
          className="h-12 w-full rounded-xl bg-accent font-semibold text-white hover:bg-accentDark">
          Buat Nama Pengguna
        </button>
      </div>
    </div>
  )
}
