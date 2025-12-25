'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

function Accordion({
  type = 'single',
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === 'single') {
          return prev.includes(value) ? [] : [value];
        }
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden',
        className
      )}
      data-value={value}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value?: string }>, { value });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
}

function AccordionTrigger({ children, className, value }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionTrigger must be used within Accordion');

  const isOpen = value ? context.openItems.includes(value) : false;

  return (
    <button
      onClick={() => value && context.toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-semibold text-[hsl(var(--card-foreground))] transition-all hover:bg-[hsl(var(--muted))]',
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-5 w-5 text-[hsl(var(--muted-foreground))] transition-transform duration-300',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
}

function AccordionContent({ children, className, value }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within Accordion');

  const isOpen = value ? context.openItems.includes(value) : false;

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('px-4 pb-4 text-[hsl(var(--muted-foreground))]', className)}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
