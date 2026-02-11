export default function HoldingAnimation() {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <style>{`
        @keyframes holder-grab {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(30px, 0); }
          30%, 70% { transform: translate(40px, 0); }
          90% { transform: translate(10px, 0); }
        }
        @keyframes victim-struggle {
          0%, 100% { transform: translate(0, 0); }
          30% { transform: translate(0, 0); }
          40% { transform: translate(8px, -3px); }
          50% { transform: translate(-5px, 2px); }
          60% { transform: translate(6px, -2px); }
          70% { transform: translate(0, 0); }
        }
        @keyframes grab-arms {
          0%, 100% { opacity: 0; }
          25% { opacity: 1; }
          85% { opacity: 1; }
          95% { opacity: 0; }
        }
        @keyframes flag-drop {
          0%, 55% { transform: translate(0, -60px); opacity: 0; }
          65% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes flag-wave {
          65%, 100% { transform: rotate(0deg); }
          75% { transform: rotate(8deg); }
          85% { transform: rotate(-5deg); }
          95% { transform: rotate(3deg); }
        }
        .holder { animation: holder-grab 4s ease-in-out infinite; }
        .victim { animation: victim-struggle 4s ease-in-out infinite; }
        .grab-hands { animation: grab-arms 4s ease-in-out infinite; }
        .flag-group { animation: flag-drop 4s ease-in-out infinite; }
        .flag-cloth { animation: flag-wave 4s ease-in-out infinite; transform-origin: 50% 0%; }
      `}</style>

      {/* Field background */}
      <rect width="800" height="450" fill="#4caf50" rx="0" />
      {/* Yard lines */}
      <line x1="200" y1="0" x2="200" y2="450" stroke="#fff" strokeWidth="2" opacity="0.3" />
      <line x1="400" y1="0" x2="400" y2="450" stroke="#fff" strokeWidth="2" opacity="0.3" />
      <line x1="600" y1="0" x2="600" y2="450" stroke="#fff" strokeWidth="2" opacity="0.3" />

      {/* Label */}
      <text x="400" y="40" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" fontFamily="sans-serif" opacity="0.9">
        HOLDING
      </text>

      {/* Holder (blue team) - left player */}
      <g className="holder">
        <g transform="translate(280, 140)">
          {/* Body */}
          <rect x="-18" y="30" width="36" height="60" rx="8" fill="#1565c0" />
          {/* Head */}
          <circle cx="0" cy="12" r="22" fill="#ffcc80" />
          {/* Helmet */}
          <path d="M-22,8 Q-22,-14 0,-16 Q22,-14 22,8" fill="#1565c0" />
          <rect x="-4" y="-2" width="26" height="3" rx="1" fill="#ccc" />
          {/* Legs */}
          <rect x="-14" y="88" width="12" height="40" rx="5" fill="#ffcc80" />
          <rect x="2" y="88" width="12" height="40" rx="5" fill="#ffcc80" />
          {/* Shoes */}
          <rect x="-16" y="124" width="16" height="8" rx="3" fill="#333" />
          <rect x="0" y="124" width="16" height="8" rx="3" fill="#333" />
          {/* Number */}
          <text x="0" y="68" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="sans-serif">72</text>
        </g>
      </g>

      {/* Grab hands (appear when holder reaches victim) */}
      <g className="grab-hands">
        <g className="holder">
          <g transform="translate(280, 140)">
            {/* Extended arms grabbing */}
            <line x1="18" y1="50" x2="60" y2="42" stroke="#ffcc80" strokeWidth="6" strokeLinecap="round" />
            <line x1="18" y1="65" x2="58" y2="58" stroke="#ffcc80" strokeWidth="6" strokeLinecap="round" />
            {/* Fists */}
            <circle cx="60" cy="42" r="6" fill="#ffcc80" />
            <circle cx="58" cy="58" r="6" fill="#ffcc80" />
          </g>
        </g>
      </g>

      {/* Victim (red team) - right player */}
      <g className="victim">
        <g transform="translate(400, 135)">
          {/* Body */}
          <rect x="-18" y="30" width="36" height="60" rx="8" fill="#c62828" />
          {/* Head */}
          <circle cx="0" cy="12" r="22" fill="#ffcc80" />
          {/* Helmet */}
          <path d="M-22,8 Q-22,-14 0,-16 Q22,-14 22,8" fill="#c62828" />
          <rect x="-22" y="-2" width="26" height="3" rx="1" fill="#ccc" />
          {/* Legs (running pose) */}
          <rect x="-14" y="88" width="12" height="40" rx="5" fill="#ffcc80" transform="rotate(10, -8, 88)" />
          <rect x="2" y="88" width="12" height="40" rx="5" fill="#ffcc80" transform="rotate(-10, 8, 88)" />
          {/* Shoes */}
          <rect x="-18" y="124" width="16" height="8" rx="3" fill="#333" transform="rotate(10, -10, 128)" />
          <rect x="2" y="124" width="16" height="8" rx="3" fill="#333" transform="rotate(-10, 10, 128)" />
          {/* Number */}
          <text x="0" y="68" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="sans-serif">88</text>
          {/* Arms reaching forward */}
          <line x1="18" y1="45" x2="50" y2="35" stroke="#ffcc80" strokeWidth="6" strokeLinecap="round" />
          <line x1="18" y1="55" x2="48" y2="50" stroke="#ffcc80" strokeWidth="6" strokeLinecap="round" />
        </g>
      </g>

      {/* Penalty flag */}
      <g className="flag-group" transform="translate(40, 60)">
        <rect x="-2" y="-4" width="4" height="20" fill="#888" rx="1" />
        <g className="flag-cloth">
          <polygon points="2,-4 30,-10 28,8 2,4" fill="#fdd835" />
        </g>
        <text x="14" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" fontFamily="sans-serif" opacity="0.9">
          FLAG!
        </text>
      </g>

      {/* Caption */}
      <rect x="200" y="390" width="400" height="40" rx="10" fill="rgba(0,0,0,0.5)" />
      <text x="400" y="416" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600" fontFamily="sans-serif">
        Grabbing a player to stop them = Holding
      </text>
    </svg>
  );
}
