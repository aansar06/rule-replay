export default function FalseStartAnimation() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <style>{`
        @keyframes flinch-player {
          0%, 30% { transform: translate(0, 0); }
          35% { transform: translate(-15px, -8px); }
          40% { transform: translate(-10px, -3px); }
          45% { transform: translate(-12px, -5px); }
          55%, 100% { transform: translate(0, 0); }
        }
        @keyframes flinch-shock {
          0%, 30% { opacity: 0; }
          35% { opacity: 1; }
          50% { opacity: 1; }
          55% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes fs-flag-drop {
          0%, 45% { transform: translate(0, -50px); opacity: 0; }
          55% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes fs-flag-wave {
          55%, 100% { transform: rotate(0deg); }
          65% { transform: rotate(10deg); }
          75% { transform: rotate(-6deg); }
          85% { transform: rotate(4deg); }
        }
        @keyframes still-label {
          0%, 25% { opacity: 1; }
          30% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes penalty-label {
          0%, 50% { opacity: 0; }
          55% { opacity: 1; }
          100% { opacity: 1; }
        }
        .flinch-player { animation: flinch-player 5s ease-in-out infinite; }
        .flinch-shock { animation: flinch-shock 5s ease-in-out infinite; }
        .fs-flag-group { animation: fs-flag-drop 5s ease-in-out infinite; }
        .fs-flag-cloth { animation: fs-flag-wave 5s ease-in-out infinite; transform-origin: 50% 0%; }
        .still-text { animation: still-label 5s ease-in-out infinite; }
        .penalty-text { animation: penalty-label 5s ease-in-out infinite; }
      `}</style>

      {/* Field */}
      <rect width="800" height="450" fill="#4caf50" />

      {/* Label */}
      <text x="400" y="40" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" fontFamily="sans-serif" opacity="0.9">
        FALSE START
      </text>

      {/* Line of scrimmage */}
      <line x1="400" y1="60" x2="400" y2="380" stroke="#fff" strokeWidth="4" strokeDasharray="12,8" />

      {/* "Stay still" label */}
      <g className="still-text">
        <rect x="180" y="85" width="180" height="28" rx="14" fill="rgba(255,255,255,0.25)" />
        <text x="270" y="104" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">
          Must stay still...
        </text>
      </g>

      {/* "Penalty!" label */}
      <g className="penalty-text">
        <rect x="200" y="85" width="160" height="28" rx="14" fill="rgba(253,216,53,0.4)" />
        <text x="280" y="104" textAnchor="middle" fill="#fdd835" fontSize="13" fontWeight="700" fontFamily="sans-serif">
          FALSE START!
        </text>
      </g>

      {/* Ball at center */}
      <ellipse cx="380" cy="155" rx="10" ry="6" fill="#795548" />

      {/* Offensive line (left side - blue) */}
      {/* Center */}
      <g transform="translate(360, 155)">
        <circle cx="0" cy="0" r="18" fill="#1565c0" />
        <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
        <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
        <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">C</text>
      </g>

      {/* Left Guard - the flincher */}
      <g className="flinch-player">
        <g transform="translate(360, 205)">
          <circle cx="0" cy="0" r="18" fill="#1565c0" stroke="#fdd835" strokeWidth="3" />
          <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
          <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">LG</text>
        </g>
      </g>

      {/* Shock lines around flincher */}
      <g className="flinch-shock">
        <g transform="translate(360, 205)">
          <line x1="-28" y1="-15" x2="-38" y2="-22" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
          <line x1="-26" y1="0" x2="-38" y2="0" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
          <line x1="-28" y1="15" x2="-38" y2="22" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-26" x2="0" y2="-36" stroke="#fdd835" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>

      {/* Right Guard */}
      <g transform="translate(360, 255)">
        <circle cx="0" cy="0" r="18" fill="#1565c0" />
        <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
        <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
        <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">RG</text>
      </g>

      {/* Left Tackle */}
      <g transform="translate(360, 305)">
        <circle cx="0" cy="0" r="18" fill="#1565c0" />
        <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
        <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
        <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">LT</text>
      </g>

      {/* QB behind center */}
      <g transform="translate(300, 155)">
        <circle cx="0" cy="0" r="18" fill="#1565c0" />
        <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
        <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
        <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">QB</text>
      </g>

      {/* Defense (right side - red) */}
      {[155, 225, 295].map((y, i) => (
        <g key={`def-${i}`} transform={`translate(460, ${y})`}>
          <circle cx="0" cy="0" r="18" fill="#c62828" />
          <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
          <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#c62828" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            {['DT', 'DE', 'DE'][i]}
          </text>
        </g>
      ))}

      {/* Penalty flag */}
      <g className="fs-flag-group" transform="translate(540, 330)">
        <rect x="-2" y="-4" width="4" height="20" fill="#888" rx="1" />
        <g className="fs-flag-cloth">
          <polygon points="2,-4 30,-10 28,8 2,4" fill="#fdd835" />
        </g>
        <text x="14" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif" opacity="0.9">
          FLAG!
        </text>
      </g>

      {/* Caption */}
      <rect x="175" y="390" width="450" height="40" rx="10" fill="rgba(0,0,0,0.5)" />
      <text x="400" y="416" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600" fontFamily="sans-serif">
        Offense moves before the snap = False Start
      </text>
    </svg>
  );
}
