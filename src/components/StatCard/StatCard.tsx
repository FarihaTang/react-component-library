import React from 'react';
import { cn } from '@/lib/cn';

export type StatCardTrend = 'up' | 'down' | 'neutral';

export interface StatCardProps {
  /** KPI label */
  label: string;
  /** Primary displayed value (pre-formatted string, e.g. "£54,320") */
  value: string;
  /** Change description, e.g. "+3.2%" or "−£124" */
  change?: string;
  /** Direction of change — controls colour */
  trend?: StatCardTrend;
  /**
   * Series of numbers for the sparkline (7–30 data points recommended).
   * The line is normalised internally so any scale works.
   */
  sparkline?: number[];
  /** Small icon or emoji rendered top-left */
  icon?: React.ReactNode;
  /** Highlighted card (brand accent bg) */
  highlight?: boolean;
  className?: string;
}

// ─── Sparkline ──────────────────────────────────────────────────────────────

interface SparklineProps {
  data: number[];
  trend: StatCardTrend;
  highlight: boolean;
}

function Sparkline({ data, trend, highlight }: SparklineProps) {
  if (data.length < 2) return null;

  const W = 80;
  const H = 28;
  const pad = 2;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / range) * (H - pad * 2);
    return [x, y] as [number, number];
  });

  // Smooth cubic bezier path
  const path = points.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x} ${y}`;
    const [px, py] = points[i - 1];
    const cpx = (px + x) / 2;
    return `${acc} C ${cpx} ${py}, ${cpx} ${y}, ${x} ${y}`;
  }, '');

  const strokeColor = highlight
    ? '#0f172a'
    : trend === 'up'
      ? '#10b981'
      : trend === 'down'
        ? '#ef4444'
        : '#94a3b8';

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      className="overflow-visible"
    >
      {/* Area fill */}
      <defs>
        <linearGradient id={`sg-${trend}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} stopOpacity={0.15} />
          <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d={`${path} L ${points[points.length - 1][0]} ${H} L ${points[0][0]} ${H} Z`}
        fill={`url(#sg-${trend})`}
      />
      {/* Line */}
      <path d={path} fill="none" stroke={strokeColor} strokeWidth={1.5} strokeLinecap="round" />
      {/* Terminal dot */}
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r={2.5}
        fill={strokeColor}
      />
    </svg>
  );
}

// ─── Trend icon ─────────────────────────────────────────────────────────────

function TrendIcon({ trend }: { trend: StatCardTrend }) {
  if (trend === 'neutral') return null;
  return (
    <svg
      className={cn('h-3 w-3 shrink-0', trend === 'up' ? 'text-emerald-500' : 'text-red-500')}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      {trend === 'up' ? <path d="M8 3l5 6H3z" /> : <path d="M8 13l5-6H3z" />}
    </svg>
  );
}

// ─── StatCard ────────────────────────────────────────────────────────────────

export function StatCard({
  label,
  value,
  change,
  trend = 'neutral',
  sparkline,
  icon,
  highlight = false,
  className,
}: StatCardProps) {
  const changeColor =
    trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-red-500' : 'text-ink-tertiary';

  return (
    <div
      className={cn(
        'relative rounded-xl border p-5 transition-all duration-200',
        highlight
          ? 'bg-brand border-brand-600 text-white'
          : 'bg-white border-surface-3 shadow-card hover:shadow-card-hover',
        className
      )}
    >
      {/* Top row: label + sparkline */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {icon && (
            <span
              className={cn(
                'flex h-7 w-7 items-center justify-center rounded-md text-sm',
                highlight ? 'bg-white/20' : 'bg-surface-2'
              )}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <span
            className={cn(
              'text-xs font-medium uppercase tracking-widest',
              highlight ? 'text-white/70' : 'text-ink-tertiary'
            )}
          >
            {label}
          </span>
        </div>
        {sparkline && sparkline.length >= 2 && (
          <Sparkline data={sparkline} trend={trend} highlight={highlight} />
        )}
      </div>

      {/* Value */}
      <p
        className={cn(
          'mt-3 font-mono text-2xl font-semibold tabular-nums',
          highlight ? 'text-white' : 'text-ink'
        )}
      >
        {value}
      </p>

      {/* Change */}
      {change && (
        <div className="mt-2 flex items-center gap-1">
          {!highlight && <TrendIcon trend={trend} />}
          <span className={cn('text-xs font-medium', highlight ? 'text-white/70' : changeColor)}>
            {change} vs last month
          </span>
        </div>
      )}
    </div>
  );
}

StatCard.displayName = 'StatCard';
