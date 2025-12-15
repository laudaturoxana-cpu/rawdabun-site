interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showText = true, size = 'md', variant = 'light' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-2xl' },
    lg: { icon: 56, text: 'text-3xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="Raw da Bun Logo"
      >
        {/* Organic heart shape made from two leaves */}
        <g>
          {/* Left leaf - forms left side of heart */}
          <path
            d="M32 52C32 52 16 42 16 28C16 20 20 16 26 16C29 16 31 17 32 19C33 17 35 16 38 16C44 16 48 20 48 28C48 42 32 52 32 52Z"
            fill="#D4A574"
            opacity="0.9"
          />

          {/* Right leaf - forms right side of heart */}
          <path
            d="M32 19C33 17 35 16 38 16C44 16 48 20 48 28C48 36 42 42 36 47C34 48.5 32 50 32 52V19Z"
            fill="#C9A961"
            opacity="0.95"
          />

          {/* Leaf vein detail - left */}
          <path
            d="M26 22C26 22 28 32 32 42"
            stroke="#3E2723"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.25"
          />

          {/* Leaf vein detail - right */}
          <path
            d="M38 22C38 22 36 32 32 42"
            stroke="#3E2723"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.25"
          />

          {/* Small organic accent - top left */}
          <circle
            cx="24"
            cy="20"
            r="2.5"
            fill="#1B4332"
            opacity="0.4"
          />

          {/* Small organic accent - top right */}
          <circle
            cx="40"
            cy="20"
            r="2.5"
            fill="#1B4332"
            opacity="0.4"
          />

          {/* Center highlight - adds depth */}
          <ellipse
            cx="32"
            cy="30"
            rx="6"
            ry="8"
            fill="white"
            opacity="0.15"
          />
        </g>
      </svg>

      {showText && (
        <span className={`font-heading font-bold tracking-tight ${variant === 'dark' ? 'text-white' : 'text-chocolate'} ${text}`}>
          Raw da <span className={variant === 'dark' ? 'text-rose-gold' : 'text-rose-gold'}>Bun</span>
        </span>
      )}
    </div>
  );
}
