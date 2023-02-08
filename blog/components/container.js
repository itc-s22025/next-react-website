import s from 'styles/container.module.css'

export default function Container ({ children, large = false }) {
  return <div className={large ? s.large : s.def}>{children}</div>
}
