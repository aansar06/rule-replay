export default function OffsideAnimation() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <style>{`
        @keyframes offside-jump {
          0%, 15% { transform: translate(0, 0); }
          30% { transform: translate(-60px, -10px); }
          45% { transform: translate(-80px, 0); }
          60%, 100% { transform: translate(-80px, 0); }
        }
        @keyframes offside-flag {
          0%, 40% { transform: translate(0, -50px); opacity: 0; }
          55% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes offside-flag-wave {
          55%, 100% { transform: rotate(0deg); }
          65% { transform: rotate(10deg); }
          75% { transform: rotate(-6deg); }
          85% { transform: rotate(4deg); }
        }
        @keyframes snap-text {
          0%, 20% { opacity: 1; }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes whistle-pulse {
          0%, 45% { opacity: 0; }
          50% { opacity: 1; }
          60% { opacity: 0.5; }
          70% { opacity: 1; }
          80% { opacity: 0; }
          100% { opacity: 0; }
        }
        .offside-player { animation: offside-jump 5s ease-in-out infinite; }
        .offside-flag-group { animation: offside-flag 5s ease-in-out infinite; }
        .offside-flag-cloth { animation: offside-flag-wave 5s ease-in-out infinite; transform-origin: 50% 0%; }
        .snap-label { animation: snap-text 5s ease-in-out infinite; }
        .whistle-burst { animation: whistle-pulse 5s ease-in-out infinite; }
      `}</style>

      {/* Field */}
      <rect width="800" height="450" fill="#4caf50" />

      {/* Label */}
      <text x="400" y="40" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" fontFamily="sans-serif" opacity="0.9">
        OFFSIDE
      </text>

      {/* Line of scrimmage */}
      <line x1="400" y1="60" x2="400" y2="380" stroke="#fff" strokeWidth="4" strokeDasharray="12,8" />
      <text x="400" y="78" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600" fontFamily="sans-serif" opacity="0.7">
        LINE OF SCRIMMAGE
      </text>

      {/* "Before the snap" label */}
      <g className="snap-label">
        <rect x="280" y="85" width="240" height="28" rx="14" fill="rgba(255,255,255,0.25)" />
        <text x="400" y="104" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif">
          Waiting for the snap...
        </text>
      </g>

      {/* Whistle burst */}
      <g className="whistle-burst" transform="translate(400, 200)">
        <text x="0" y="0" textAnchor="middle" fill="#fdd835" fontSize="28" fontWeight="700" fontFamily="sans-serif">
          TWEET!
        </text>
      </g>

      {/* Offensive players (left side - blue) */}
      {[130, 190, 250, 310].map((y, i) => (
        <g key={`off-${i}`} transform={`translate(360, ${y})`}>
          <circle cx="0" cy="0" r="18" fill="#1565c0" />
          <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
          <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#1565c0" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            {['C', 'G', 'G', 'T'][i]}
          </text>
        </g>
      ))}

      {/* Ball at center */}
      <ellipse cx="380" cy="130" rx="10" ry="6" fill="#795548" />

      {/* Defensive players (right side - red) - stationary */}
      {[190, 250, 310].map((y, i) => (
        <g key={`def-${i}`} transform={`translate(460, ${y})`}>
          <circle cx="0" cy="0" r="18" fill="#c62828" />
          <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
          <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#c62828" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            {['DE', 'DT', 'DE'][i]}
          </text>
        </g>
      ))}

      {/* Offside player (jumps across) */}
      <g className="offside-player">
        <g transform="translate(460, 130)">
          <circle cx="0" cy="0" r="18" fill="#c62828" stroke="#fdd835" strokeWidth="3" />
          <circle cx="0" cy="-4" r="10" fill="#ffcc80" />
          <path d="M-10,-6 Q-10,-14 0,-15 Q10,-14 10,-6" fill="#c62828" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            DT
          </text>
        </g>
      </g>

      {/* Penalty flag */}
      <g className="offside-flag-group" transform="translate(500, 340)">
        <rect x="-2" y="-4" width="4" height="20" fill="#888" rx="1" />
        <g className="offside-flag-cloth">
          <polygon points="2,-4 30,-10 28,8 2,4" fill="#fdd835" />
        </g>
        <text x="14" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif" opacity="0.9">
          FLAG!
        </text>
      </g>

      {/* Caption */}
      <rect x="175" y="390" width="450" height="40" rx="10" fill="rgba(0,0,0,0.5)" />
      <text x="400" y="416" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600" fontFamily="sans-serif">
        Defense crosses the line before the snap = Offside
      </text>
    </svg>
  );
}
