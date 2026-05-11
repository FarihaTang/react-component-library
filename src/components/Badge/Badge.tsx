import React from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /** Semantic colour variant */
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Optional leading dot indicator */
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-brand-50 text-brand-700 ring-brand-100',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  warning: 'bg-amber-50 text-amber-700 ring-amber-100',
  danger: 'bg-red-50 text-red-700 ring-red-100',
  info: 'bg-blue-50 text-blue-700 ring-blue-100',
  neutral: 'bg-slate-100 text-slate-600 ring-slate-200',
};

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-brand-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
  info: 'bg-blue-500',
  neutral: 'bg-slate-400',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-[10px] gap-1',
  md: 'px-2 py-0.5 text-xs gap-1.5',
};

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-full ring-1',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full flex-shrink-0', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';
