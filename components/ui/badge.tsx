import * as React from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = {
  default: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]',
  secondary: 'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]',
  outline: 'border border-[hsl(var(--border))] text-[hsl(var(--foreground))]',
  success: 'bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]',
  warning: 'bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]',
  destructive: 'bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]',
  gradient: 'bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors',
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
