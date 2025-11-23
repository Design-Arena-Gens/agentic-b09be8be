const palette = [
  { name: "Void Navy", value: "#020617" },
  { name: "Quantum Teal", value: "#0f766e" },
  { name: "Neon Matrix", value: "#34fbbc" },
  { name: "Iridescent Gold", value: "#facc15" },
  { name: "Ion Azure", value: "#38bdf8" },
];

const IconShowcase = () => {
  return (
    <div className="flex flex-col gap-12">
      <figure className="group relative mx-auto w-full max-w-2xl">
        <div className="pointer-events-none absolute -inset-12 rounded-[48px] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,rgba(14,116,144,0.25),transparent_55%)] opacity-75 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-[46px] border border-cyan-200/20 bg-gradient-to-br from-[#030712] via-[#030711] to-[#040307] p-6 shadow-[0_40px_160px_rgba(15,118,110,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.22),transparent_48%)] mix-blend-screen opacity-70" />
          <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="relative w-full drop-shadow-[0_35px_85px_rgba(8,145,178,0.45)] transition-transform duration-700 group-hover:scale-[1.02]"
          >
            <defs>
              <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#020717" />
                <stop offset="35%" stopColor="#041024" />
                <stop offset="100%" stopColor="#010205" />
              </linearGradient>
              <linearGradient
                id="container-front"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#041022" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#031224" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#02101f" stopOpacity="0.92" />
              </linearGradient>
              <linearGradient
                id="container-side"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#031320" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#01111c" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="container-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#071f36" stopOpacity="0.82" />
                <stop offset="100%" stopColor="#021020" stopOpacity="0.96" />
              </linearGradient>
              <linearGradient id="edge-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4ef6c9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.55" />
              </linearGradient>
              <pattern
                id="corrugation"
                width="22"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="skewY(-18)"
              >
                <rect width="10" height="60" fill="rgba(255,255,255,0.08)" />
                <rect x="10" width="12" height="60" fill="rgba(255,255,255,0.02)" />
              </pattern>
              <filter id="outer-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="18" result="blur" />
                <feFlood floodColor="#34fbbc" floodOpacity="0.32" />
                <feComposite in2="blur" operator="in" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="coin" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#fff2a8" />
                <stop offset="34%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#b45309" />
              </radialGradient>
              <radialGradient id="coin-shine" cx="30%" cy="25%" r="40%">
                <stop offset="0%" stopColor="#fffbe6" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            <rect
              x="0"
              y="0"
              width="600"
              height="600"
              rx="64"
              fill="url(#bg-gradient)"
            />

            <g filter="url(#outer-glow)" transform="translate(40, 60)">
              <polygon
                points="210,90 420,140 300,210 90,160"
                fill="url(#container-top)"
                stroke="rgba(56,189,248,0.8)"
                strokeWidth="2"
                opacity="0.95"
              />
              <polygon
                points="90,160 300,210 300,420 90,360"
                fill="url(#container-front)"
                stroke="rgba(14,165,233,0.4)"
                strokeWidth="2"
                opacity="0.96"
              />
              <polygon
                points="300,210 420,140 420,350 300,420"
                fill="url(#container-side)"
                stroke="rgba(125,211,252,0.4)"
                strokeWidth="2"
                opacity="0.98"
              />

              <polygon
                points="90,360 300,420 300,430 90,370"
                fill="#05152c"
                opacity="0.35"
              />
              <polygon
                points="300,420 420,350 420,360 300,430"
                fill="#061226"
                opacity="0.45"
              />

              <polygon
                points="100,175 290,220 290,390 100,340"
                fill="url(#corrugation)"
                opacity="0.32"
              />
              <polygon
                points="295,220 400,155 400,350 295,405"
                fill="url(#corrugation)"
                opacity="0.25"
              />
              <line
                x1="210"
                y1="90"
                x2="420"
                y2="140"
                stroke="rgba(79,209,197,0.65)"
                strokeWidth="3"
              />
              <line
                x1="210"
                y1="90"
                x2="90"
                y2="160"
                stroke="rgba(79,209,197,0.55)"
                strokeWidth="3"
              />
            </g>

            <g transform="translate(40, 80)">
              <path
                d="M195 150 C220 120, 280 120, 305 150"
                stroke="rgba(52,251,188,0.55)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                filter="url(#neon)"
              />
              <text
                x="200"
                y="250"
                fill="#34fbbc"
                fontSize="72"
                fontFamily="'Space Grotesk', 'DM Mono', 'Orbitron', sans-serif"
                letterSpacing="18"
                filter="url(#neon)"
              >
                903
              </text>
              <text
                x="220"
                y="320"
                fill="#14f8b5"
                fontSize="48"
                fontFamily="'Space Grotesk', 'DM Mono', 'Orbitron', sans-serif"
                opacity="0.75"
                letterSpacing="24"
                filter="url(#neon)"
              >
                7
              </text>
            </g>

            <g transform="translate(120, 210)">
              <g filter="url(#neon)">
                <circle cx="180" cy="180" r="38" fill="url(#coin)" />
                <circle cx="180" cy="180" r="28" fill="url(#coin-shine)" />
              </g>
              <g transform="translate(160,-60)" filter="url(#neon)">
                <circle cx="140" cy="160" r="24" fill="url(#coin)" />
                <circle cx="140" cy="160" r="18" fill="url(#coin-shine)" />
              </g>
              <g transform="translate(-40,40)" filter="url(#neon)">
                <circle cx="140" cy="160" r="20" fill="url(#coin)" />
                <circle cx="140" cy="160" r="14" fill="url(#coin-shine)" />
              </g>
            </g>

            <g opacity="0.75">
              <path
                d="M150 480 Q300 520 450 420"
                stroke="rgba(56,189,248,0.35)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M180 520 Q300 560 420 460"
                stroke="rgba(20,184,166,0.28)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </g>

            <rect
              x="40"
              y="60"
              width="520"
              height="480"
              rx="58"
              stroke="url(#edge-glow)"
              strokeWidth="3"
              fill="none"
              opacity="0.65"
            />
          </svg>
        </div>
        <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm tracking-wide text-slate-300">
          <span className="uppercase text-emerald-300">
            3D Isometric Render — 8K Ready
          </span>
          <span className="text-slate-400">
            Dark glass container • Neon numerics • Quantum gold
          </span>
        </figcaption>
      </figure>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-100">
            Lighting & Mood
          </h3>
          <p className="text-sm text-slate-300">
            Dramatic vignette lighting pushes focus toward the glowing numerics,
            while rim lights carve sleek silhouettes along the corrugated glass
            shell. Floating particle haze softens the scene and amplifies the
            cyber-futuristic aura.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-100">Palette</h3>
          <ul className="grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {palette.map((color) => (
              <li
                key={color.name}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <span
                  className="h-8 w-8 rounded-xl border border-white/10 shadow-[0_0_18px_rgba(52,251,188,0.35)]"
                  style={{ background: color.value }}
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-medium text-slate-100">
                    {color.name}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    {color.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
