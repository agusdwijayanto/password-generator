export default function Toggle({ label, checked, onChange, disabled }) {
  return (
    <label className={`flex min-h-11 items-center justify-between gap-3 py-1 ${disabled ? 'opacity-40' : ''}`}>
      <span className="text-sm sm:text-base">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${checked ? 'bg-accent' : 'bg-slate-300'}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${checked ? 'left-6' : 'left-1'}`}
        />
      </button>
    </label>
  )
}
