import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href: string;
}

const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 border-transparent',
  secondary: 'bg-white text-blue-600 hover:bg-gray-50 border-transparent',
  outline: 'border border-white text-white hover:bg-white hover:text-blue-600',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | LinkButtonProps
>(({ variant = 'primary', size = 'md', className = '', href, children, ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    const { href, ...linkProps } = props as LinkButtonProps;
    return (
      <Link
        href={href}
        className={classes}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
