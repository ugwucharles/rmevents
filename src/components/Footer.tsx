

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="rm-footer" style={{ padding: '2rem 0' }}>
      <div className="rm-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="rm-footer__bottom" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(247, 243, 236, 0.45)' }}>© {year} RM Events Experience</span>
        </div>
      </div>
    </footer>
  )
}
