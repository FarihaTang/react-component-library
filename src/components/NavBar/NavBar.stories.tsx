import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof NavBar> = {
  title: 'Navigation/NavBar',
  component: NavBar,
  parameters: {
    // Full-width layout so the nav stretches end-to-end
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive, accessible navigation bar with dark and light themes. ' +
          'Supports scroll-triggered background changes, customisable links, and a CTA button. ' +
          'All content is prop-driven — logo, links, and CTA are fully configurable.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description:
        'Visual theme. `light` suits light backgrounds; `dark` suits dark/glass backgrounds.',
      table: { defaultValue: { summary: 'light' } },
    },
    logo: {
      control: 'text',
      description: 'Logo text displayed on the left.',
      table: { defaultValue: { summary: 'Fariha' } },
    },
    logoAccent: {
      control: 'text',
      description: 'Accent character appended to the logo.',
      table: { defaultValue: { summary: '.' } },
    },
    ctaLabel: {
      control: 'text',
      description: 'Label for the call-to-action button.',
      table: { defaultValue: { summary: 'Hire me' } },
    },
    ctaHref: {
      control: 'text',
      description: 'href for the CTA button.',
      table: { defaultValue: { summary: '#contact' } },
    },
    scrollEffect: {
      control: 'boolean',
      description: 'Whether the nav background changes on scroll.',
      table: { defaultValue: { summary: 'true' } },
    },
    scrollThreshold: {
      control: { type: 'number', min: 0, max: 300, step: 10 },
      description: 'Scroll distance in px before the effect triggers.',
      table: { defaultValue: { summary: '50' } },
    },
    links: {
      control: 'object',
      description: 'Array of `{ label, href }` navigation links.',
    },
  },
  // Default args shared across all stories
  args: {
    logo: 'Fariha',
    logoAccent: '.',
    ctaLabel: 'Hire me',
    ctaHref: '#contact',
    scrollEffect: false, // disabled by default in Storybook canvas so state is visible
    links: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default light theme — used in Portfolio B (bright gradient style).
 * White/shadow background appears on scroll.
 */
export const Light: Story = {
  args: {
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light-warm' },
    docs: {
      description: {
        story:
          'Light theme with a soft white scroll effect. Pairs with bright, gradient-heavy layouts.',
      },
    },
  },
};

/**
 * Dark theme — used in Portfolio A (glass / deep space style).
 * Glass blur background appears on scroll.
 */
export const Dark: Story = {
  args: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story:
          'Dark theme with a glass-blur scroll effect. Pairs with deep-colour, dark backgrounds.',
      },
    },
  },
};

/**
 * Scroll effect active — simulates the nav after the user has scrolled past
 * the threshold. Use this to review the scrolled appearance without actually scrolling.
 */
export const ScrolledLight: Story = {
  name: 'Scrolled / Light',
  args: {
    theme: 'light',
    scrollEffect: true,
    scrollThreshold: 0, // triggers immediately so it's visible in canvas
  },
  parameters: {
    backgrounds: { default: 'light-warm' },
    docs: {
      description: {
        story: 'Light nav in its scrolled state — background becomes white with a soft shadow.',
      },
    },
  },
};

export const ScrolledDark: Story = {
  name: 'Scrolled / Dark',
  args: {
    theme: 'dark',
    scrollEffect: true,
    scrollThreshold: 0,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Dark nav in its scrolled state — background becomes a glass blur panel.',
      },
    },
  },
};

/**
 * Custom links and CTA — demonstrates that all content is fully configurable.
 */
export const CustomContent: Story = {
  name: 'Custom links & CTA',
  args: {
    theme: 'light',
    logo: 'ACME',
    logoAccent: '™',
    ctaLabel: 'Get started',
    ctaHref: '#signup',
    links: [
      { label: 'Product', href: '#product' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Blog', href: '#blog' },
      { label: 'About', href: '#about' },
    ],
  },
  parameters: {
    backgrounds: { default: 'light-warm' },
    docs: {
      description: {
        story:
          'All content props overridden — shows the component is not tied to any specific brand or page structure.',
      },
    },
  },
};

/**
 * Minimal — only two links, no scroll effect. Good for landing pages or
 * inner pages where the nav should stay subtle.
 */
export const Minimal: Story = {
  args: {
    theme: 'light',
    logo: 'FH',
    logoAccent: '.',
    ctaLabel: 'Contact',
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    scrollEffect: false,
  },
  parameters: {
    backgrounds: { default: 'light-warm' },
    docs: {
      description: {
        story:
          'Stripped-down variant with just two links — suitable for minimal single-page layouts.',
      },
    },
  },
};
