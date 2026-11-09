import { useState } from 'react'
import PasswordTab from './components/PasswordTab.jsx'
import PassphraseTab from './components/PassphraseTab.jsx'
import UsernameTab from './components/UsernameTab.jsx'

const TABS = [
  { id: 'password', label: 'Kata Sandi' },
  { id: 'passphrase', label: 'Frasa Sandi' },
  { id: 'username', label: 'Nama Pengguna' },
]

export default function App() {
  const [tab, setTab] = useState('password')

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep to-ink px-4 py-6 sm:py-10">
      <main className="mx-auto w-full max-w-md sm:max-w-2xl">
        <h1 className="text-2xl font-bold sm:text-3xl">Password Generator</h1>
        <p className="mt-1 text-sm text-white/70">Pembuat sandi, frasa sandi, dan nama pengguna.</p>

        <nav className="mt-5 grid grid-cols-3 gap-1 rounded-full bg-ink/60 p-1" aria-label="Jenis generator">
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              className={`min-h-11 rounded-full px-2 text-sm font-medium ${tab === t.id ? 'bg-card text-accent' : 'text-white/75'}`}>
              {t.label}
            </button>
          ))}
        </nav>

        <section className="mt-4">
          {tab === 'password' && <PasswordTab />}
          {tab === 'passphrase' && <PassphraseTab />}
          {tab === 'username' && <UsernameTab />}
        </section>

        <p className="mt-6 text-center text-xs text-white/50">
          Semua proses di browser kamu. Tidak ada yang dikirim atau disimpan di server.
        </p>
      </main>
    </div>
  )
}
