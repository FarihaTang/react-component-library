import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size preset */
    size?: ButtonSize;
    /** Show loading spinner and disable interaction */
    loading?: boolean;
    /** Icon rendered before label */
    leadingIcon?: React.ReactNode;
    /** Icon rendered after label */
    trailingIcon?: React.ReactNode;
    /** Stretch to fill container width */
    fullWidth?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface NavLink {
    label: string;
    href: string;
}
interface NavBarProps {
    /** Visual theme. "dark" = glass/blur on dark bg. "light" = white/shadow on light bg. */
    theme?: 'dark' | 'light';
    /** Logo text displayed on the left. */
    logo?: string;
    /** Accent character appended to the logo (e.g. "."). */
    logoAccent?: string;
    /** Navigation links rendered in the centre. */
    links?: NavLink[];
    /** Label for the CTA button on the right. */
    ctaLabel?: string;
    /** href for the CTA button. */
    ctaHref?: string;
    /** Whether the nav background changes on scroll. */
    scrollEffect?: boolean;
    /** Scroll threshold in px before the effect triggers. Default 50. */
    scrollThreshold?: number;
}
declare function NavBar({ theme, logo, logoAccent, links, ctaLabel, ctaHref, scrollEffect, scrollThreshold, }: NavBarProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Button, type ButtonProps, type ButtonSize, type ButtonVariant, NavBar, type NavBarProps, type NavLink, cn };
