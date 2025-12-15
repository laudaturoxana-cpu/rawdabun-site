interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showText = true, size = 'md', variant = 'light' }: LogoProps) {
  const sizes = {
    sm: { icon: 36, text: 'text-lg' },
    md: { icon: 48, text: 'text-2xl' },
    lg: { icon: 64, text: 'text-3xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="Raw da Bun Logo"
      >
        <defs>
          {/* Premium rose gold gradient */}
          <linearGradient id="roseGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="50%" stopColor="#C9A961" />
            <stop offset="100%" stopColor="#D4A574" />
          </linearGradient>

          {/* Chocolate gradient for depth */}
          <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3E2723" />
            <stop offset="100%" stopColor="#2C1810" />
          </linearGradient>
        </defs>

        {/* Outer decorative circle - premium border */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="url(#roseGoldGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Inner circle - main border */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#roseGoldGradient)"
          strokeWidth="2"
          fill="none"
        />

        {/* Left botanical branch - elegant leaves */}
        <g opacity="0.85">
          {/* Main branch curve */}
          <path
            d="M 20 50 Q 25 40, 30 35"
            stroke="#C9A961"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaves on left */}
          <ellipse cx="22" cy="45" rx="3.5" ry="6" fill="#D4A574" opacity="0.8" transform="rotate(-25 22 45)" />
          <ellipse cx="25" cy="38" rx="3" ry="5" fill="#C9A961" opacity="0.75" transform="rotate(-35 25 38)" />
          <ellipse cx="28" cy="33" rx="2.5" ry="4" fill="#D4A574" opacity="0.7" transform="rotate(-40 28 33)" />
        </g>

        {/* Right botanical branch - elegant leaves */}
        <g opacity="0.85">
          {/* Main branch curve */}
          <path
            d="M 80 50 Q 75 40, 70 35"
            stroke="#C9A961"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaves on right */}
          <ellipse cx="78" cy="45" rx="3.5" ry="6" fill="#D4A574" opacity="0.8" transform="rotate(25 78 45)" />
          <ellipse cx="75" cy="38" rx="3" ry="5" fill="#C9A961" opacity="0.75" transform="rotate(35 75 38)" />
          <ellipse cx="72" cy="33" rx="2.5" ry="4" fill="#D4A574" opacity="0.7" transform="rotate(40 72 33)" />
        </g>

        {/* Premium artisanal cake - centerpiece */}
        <g>
          {/* Cake base layer - bottom tier */}
          <path
            d="M 35 65 L 65 65 L 63 58 L 37 58 Z"
            fill="url(#chocolateGradient)"
          />
          <path
            d="M 35 65 L 65 65 L 63 58 L 37 58 Z"
            fill="url(#roseGoldGradient)"
            opacity="0.3"
          />

          {/* Cake middle layer */}
          <path
            d="M 38 58 L 62 58 L 60 50 L 40 50 Z"
            fill="#3E2723"
          />
          <path
            d="M 38 58 L 62 58 L 60 50 L 40 50 Z"
            fill="url(#roseGoldGradient)"
            opacity="0.25"
          />

          {/* Cake top layer - smallest */}
          <path
            d="M 42 50 L 58 50 L 56 44 L 44 44 Z"
            fill="#2C1810"
          />
          <path
            d="M 42 50 L 58 50 L 56 44 L 44 44 Z"
            fill="url(#roseGoldGradient)"
            opacity="0.35"
          />

          {/* Premium decoration details - horizontal lines */}
          <line x1="37" y1="60" x2="63" y2="60" stroke="#C9A961" strokeWidth="0.5" opacity="0.6" />
          <line x1="40" y1="52" x2="60" y2="52" stroke="#C9A961" strokeWidth="0.5" opacity="0.6" />
          <line x1="44" y1="46" x2="56" y2="46" stroke="#C9A961" strokeWidth="0.5" opacity="0.6" />

          {/* Elegant topper - small leaf/heart */}
          <path
            d="M 50 44 Q 48 40, 50 38 Q 52 40, 50 44"
            fill="#D4A574"
          />
          <path
            d="M 50 44 Q 48 40, 50 38 Q 52 40, 50 44"
            fill="#C9A961"
            opacity="0.5"
          />

          {/* Small decorative dots on cake */}
          <circle cx="50" cy="54" r="1" fill="#D4A574" opacity="0.8" />
          <circle cx="45" cy="62" r="1" fill="#C9A961" opacity="0.7" />
          <circle cx="55" cy="62" r="1" fill="#C9A961" opacity="0.7" />
        </g>

        {/* Bottom botanical accent - small leaves */}
        <g opacity="0.75">
          <ellipse cx="45" cy="72" rx="2.5" ry="4" fill="#C9A961" opacity="0.6" transform="rotate(15 45 72)" />
          <ellipse cx="55" cy="72" rx="2.5" ry="4" fill="#C9A961" opacity="0.6" transform="rotate(-15 55 72)" />
        </g>

        {/* Subtle sparkle/star accents - premium touch */}
        <circle cx="32" cy="30" r="0.8" fill="#D4A574" opacity="0.6" />
        <circle cx="68" cy="30" r="0.8" fill="#D4A574" opacity="0.6" />
        <circle cx="28" cy="55" r="0.6" fill="#C9A961" opacity="0.5" />
        <circle cx="72" cy="55" r="0.6" fill="#C9A961" opacity="0.5" />
      </svg>

      {showText && (
        <span className={`font-heading font-bold tracking-tight ${variant === 'dark' ? 'text-white' : 'text-chocolate'} ${text}`}>
          Raw da <span className={variant === 'dark' ? 'text-rose-gold' : 'text-rose-gold'}>Bun</span>
        </span>
      )}
    </div>
  );
}
