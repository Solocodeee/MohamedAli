import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <a className={`btn btn--${variant} ${className}`} {...rest}>
      {children}
    </a>
  );
}
