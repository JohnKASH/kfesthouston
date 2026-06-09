import styles from './Lanterns.module.css'

// ─── Swinging lanterns ──────────────────────────────────────────────────────
// Decorative row of Korean paper lanterns that gently sway. Pure CSS, no JS —
// renders as a server component. Drop it inside a `relative` container; it
// hangs from the top edge (position: absolute; top: 0).

type Size = 'lg' | 'md' | 'sm'
type Color = 'pink' | 'yellow' | 'teal' | 'blue' | 'purple'

const LANTERNS: { size: Size; color: Color }[] = [
  { size: 'lg', color: 'pink' },
  { size: 'md', color: 'yellow' },
  { size: 'lg', color: 'teal' },
  { size: 'sm', color: 'purple' },
  { size: 'lg', color: 'blue' },
  { size: 'md', color: 'pink' },
]

export default function Lanterns() {
  return (
    <div className={styles.row} aria-hidden="true">
      {LANTERNS.map((l, i) => (
        <div key={i} className={`${styles.lantern} ${styles[l.size]} ${styles[l.color]}`}>
          <div className={styles.string} />
          <div className={styles.top} />
          <div className={styles.body} />
          <div className={styles.bottom} />
          <div className={styles.tassel} />
        </div>
      ))}
    </div>
  )
}
