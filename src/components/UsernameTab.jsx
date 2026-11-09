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
      <div className="space-y-3 rounded-2xl bg-deep px-4 py-4">
        <p className="text-sm text-white/80">
          Jenis nama pengguna: <span className="font-semibold text-white">Alamat email plus</span>
        </p>
        <p className="text-sm text-white/60">
          Fitur sub-alamat dari penyedia email: surat ke alamat plus tetap masuk ke kotak masuk email asal.
        </p>
        <label className="block">
          <span className="text-sm sm:text-base">Email (wajib)</span>
          <input type="email" value={email} placeholder="nama@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
            className="mt-2 h-12 w-full rounded-xl bg-card px-4 font-mono outline-none placeholder:text-white/40 focus:ring-2 focus:ring-accent" />
        </label>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <button type="button" onClick={generate}
          className="h-12 w-full rounded-xl bg-accent font-semibold text-ink hover:brightness-110">
          Buat Nama Pengguna
        </button>
      </div>
    </div>
  )
}
