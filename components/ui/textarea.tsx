import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[120px] w-full rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 focus:border-[hsl(var(--primary))]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-[hsl(var(--destructive))] focus:ring-[hsl(var(--destructive))]',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[hsl(var(--destructive))]">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
