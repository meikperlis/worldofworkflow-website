export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__orb hero-visual__orb--one" />
      <div className="hero-visual__orb hero-visual__orb--two" />
      <svg viewBox="0 0 640 520" role="presentation">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#69a8ff" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#2f65ff" />
            <stop offset="100%" stopColor="#8ef3ff" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        <path
          className="hero-visual__path hero-visual__path--one"
          d="M58 362C150 362 144 264 236 264C320 264 315 172 412 172C501 172 502 95 586 95"
        />
        <path
          className="hero-visual__path hero-visual__path--two"
          d="M64 420C159 420 159 334 256 334C361 334 350 254 447 254C520 254 526 190 585 190"
        />
        <path
          className="hero-visual__path hero-visual__path--three"
          d="M88 134C162 134 178 193 242 193C315 193 327 94 402 94C481 94 490 144 563 144"
        />

        <g className="hero-visual__panel">
          <rect x="112" y="104" width="184" height="126" rx="26" />
          <circle cx="147" cy="141" r="8" />
          <rect x="170" y="134" width="90" height="14" rx="7" />
          <rect x="147" y="170" width="116" height="10" rx="5" />
          <rect x="147" y="194" width="86" height="10" rx="5" />
        </g>

        <g className="hero-visual__panel hero-visual__panel--accent">
          <rect x="348" y="214" width="182" height="132" rx="26" />
          <circle cx="382" cy="252" r="8" />
          <rect x="405" y="245" width="88" height="14" rx="7" />
          <rect x="382" y="284" width="110" height="10" rx="5" />
          <rect x="382" y="308" width="78" height="10" rx="5" />
        </g>

        <g className="hero-visual__node hero-visual__node--one">
          <circle cx="58" cy="362" r="13" />
        </g>
        <g className="hero-visual__node hero-visual__node--two">
          <circle cx="236" cy="264" r="13" />
        </g>
        <g className="hero-visual__node hero-visual__node--three">
          <circle cx="412" cy="172" r="13" />
        </g>
        <g className="hero-visual__node hero-visual__node--four">
          <circle cx="586" cy="95" r="13" />
        </g>
      </svg>
    </div>
  );
}
