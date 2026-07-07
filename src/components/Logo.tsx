interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  showSubtitle?: boolean;
}

/**
 * Brand mark supplied by the client (src/assets/H_LOGO.svg), used exactly
 * as designed — original navy (#0c1f39) fill throughout, unchanged. That
 * navy was designed for a light surface, and this site is dark-themed, so
 * the whole lockup (icon + wordmark) sits together on its own light chip
 * wherever it appears, rather than any part of it being recolored.
 */
export function Logo({ size = 36, showWordmark = false, showSubtitle = true }: LogoProps) {
  return (
    <div className={`logo__chip ${showWordmark ? 'logo__chip--wide' : 'logo__chip--icon'}`}>
      <svg
        width={size * 0.68}
        height={(size * 0.68 * 50) / 84}
        viewBox="18 46 84 50"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={showWordmark}
        role={showWordmark ? undefined : 'img'}
        aria-label={showWordmark ? undefined : 'Mohamed Ali'}
      >
        <path
          fill="#0c1f39"
          d="M68.85,61.82l-20.13,21.52-19.5-21.45-.12,29.91-6.82.02.02-41.95h5.13s21.34,23.53,21.34,23.53l16.18-17.25,6.05-6.22c-.62,4.02-1.29,7.86-2.16,11.88Z"
        />
        <path
          fill="#0c1f39"
          d="M90.11,91.86l-4.48-7.02-8.24-12.68-14.2,19.68c-2.69-.02-4.98-.01-7.54-.17l18.11-24.3,3.01-8.88,8.9,14.04,11.73,18.89c-2.26.96-3.96-.12-7.3.43Z"
        />
      </svg>

      {showWordmark && (
        <span className="logo__wordmark-block">
          <span className="logo__wordmark">MOHAMED ALI</span>
          {showSubtitle && <span className="logo__subtitle">Senior Business Developer</span>}
        </span>
      )}
    </div>
  );
}
