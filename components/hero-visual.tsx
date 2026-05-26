export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 640 400" role="presentation">
        <defs>
          <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4860b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f0b644" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4860b" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#f0b644" />
            <stop offset="100%" stopColor="#d4860b" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Verbindungslinien */}
        <path
          d="M130 200 L280 200"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
          className="hero-visual__flow"
        />
        <path
          d="M380 200 L500 200"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
          className="hero-visual__flow"
        />

        {/* Pfeilspitzen */}
        <polygon points="275,194 285,200 275,206" fill="#f0b644" opacity="0.7" />
        <polygon points="495,194 505,200 495,206" fill="#f0b644" opacity="0.7" />

        {/* Eingang: Telegram / E-Mail */}
        <rect x="20" y="155" width="110" height="90" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <text x="75" y="192" textAnchor="middle" fill="#e6edf3" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Telegram</text>
        <text x="75" y="210" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="Inter, sans-serif">E-Mail</text>
        <text x="75" y="232" textAnchor="middle" fill="#f0b644" fontSize="9" fontFamily="Inter, sans-serif">Foto / PDF</text>

        {/* Mitte: KI-Verarbeitung */}
        <rect x="280" y="140" width="120" height="120" rx="20" fill="rgba(212,134,11,0.08)" stroke="rgba(240,182,68,0.25)" strokeWidth="1.5" />
        <text x="340" y="190" textAnchor="middle" fill="#f0b644" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">n8n</text>
        <text x="340" y="208" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="Inter, sans-serif">GPT-4o</text>
        <text x="340" y="224" textAnchor="middle" fill="#8b949e" fontSize="9" fontFamily="Inter, sans-serif">Vision + Klassifikation</text>

        {/* Rückfrage-Pfad */}
        <path
          d="M340 260 L340 310 L75 310 L75 245"
          stroke="rgba(240,182,68,0.3)"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
        />
        <text x="210" y="326" textAnchor="middle" fill="#8b949e" fontSize="8" fontFamily="Inter, sans-serif">Bei Unsicherheit: Rückfrage</text>

        {/* Ausgang: Archiv */}
        <rect x="500" y="145" width="120" height="110" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <text x="560" y="185" textAnchor="middle" fill="#e6edf3" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Google Drive</text>
        <text x="560" y="203" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="Inter, sans-serif">Typ / Absender</text>
        <text x="560" y="221" textAnchor="middle" fill="#8b949e" fontSize="10" fontFamily="Inter, sans-serif">/ Vorgang</text>
        <text x="560" y="243" textAnchor="middle" fill="#f0b644" fontSize="9" fontFamily="Inter, sans-serif">+ Sheets Cockpit</text>

        {/* Pulsierender Punkt auf dem KI-Knoten */}
        <circle cx="340" cy="165" r="4" fill="#f0b644" className="hero-visual__pulse" />
      </svg>
    </div>
  );
}
