import React from 'react';
import { cn } from '@/lib/cn';

export interface CardProps {
  children: React.ReactNode;
  /** Remove internal padding */
  noPadding?: boolean;
  /** Interactive hover/focus state */
  interactive?: boolean;
  /** Highlighted with a brand accent top border */
  accent?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface CardHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  noPadding = false,
  interactive = false,
  accent = false,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      className={cn(
        'rounded-xl border border-surface-3 bg-white shadow-card',
        !noPadding && 'p-5',
        interactive && [
          'cursor-pointer transition-all duration-150',
          'hover:shadow-card-hover hover:border-brand-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
        ],
        accent && 'border-t-2 border-t-brand pt-[18px]',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, description, action, className }: CardHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-4', className)}>
      <div>
        {typeof title === 'string' ? (
          <h3 className="text-sm font-semibold text-ink">{title}</h3>
        ) : (
          title
        )}
        {description && <p className="mt-0.5 text-xs text-ink-tertiary">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function CardSection({ children, className }: CardSectionProps) {
  return (
    <div className={cn('-mx-5 px-5 py-4 border-t border-surface-2 first:mt-4', className)}>
      {children}
    </div>
  );
}

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardSection.displayName = 'CardSection';
