export default function Stepper({ label, value, onChange, min = 0, max = 99, disabled }) {
  const btn =
    'flex h-11 w-11 items-center justify-center rounded-full bg-accent text-xl font-bold text-white disabled:opacity-40'
  return (
    <div className={`flex min-h-11 items-center justify-between gap-3 py-1 ${disabled ? 'opacity-40' : ''}`}>
      <span className="text-sm sm:text-base">
        {label} <span className="font-semibold text-accent">{value}</span>
      </span>
      <span className="flex gap-2">
        <button type="button" aria-label={`Kurangi ${label}`} disabled={disabled || value <= min}
          onClick={() => onChange(value - 1)} className={btn}>−</button>
        <button type="button" aria-label={`Tambah ${label}`} disabled={disabled || value >= max}
          onClick={() => onChange(value + 1)} className={btn}>+</button>
      </span>
    </div>
  )
}
