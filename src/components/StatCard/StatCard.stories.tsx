import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

const mockSparkline = [42, 38, 45, 50, 47, 53, 58, 55, 62, 60, 65, 70];

export const Default: Story = {
  args: {
    label: 'Net Worth',
    value: '£100,335',
    change: '+3.2%',
    trend: 'up',
    sparkline: mockSparkline,
  },
};

export const Highlighted: Story = {
  args: {
    label: 'Net Worth',
    value: '£100,335',
    change: '+3.2%',
    trend: 'up',
    sparkline: mockSparkline,
    highlight: true,
  },
};

export const Negative: Story = {
  args: {
    label: 'Monthly Spend',
    value: '£2,805',
    change: '+4.3%',
    trend: 'down',
    sparkline: [30, 35, 32, 38, 40, 45, 43, 48, 50, 52, 55, 58],
    icon: '💸',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Savings Rate',
    value: '33.2%',
    change: '+2.1pp',
    trend: 'up',
    icon: '📈',
    sparkline: [20, 22, 21, 25, 28, 27, 30, 31, 33, 32, 33, 33],
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl lg:grid-cols-4">
      <StatCard
        label="Net Worth"
        value="£100,335"
        change="+3.2%"
        trend="up"
        sparkline={[42, 45, 50, 47, 53, 58, 55, 62, 60, 65, 68, 70]}
        highlight
      />
      <StatCard
        label="Monthly Income"
        value="£4,200"
        change="+0%"
        trend="neutral"
        icon="💼"
        sparkline={[42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]}
      />
      <StatCard
        label="Monthly Spend"
        value="£2,805"
        change="−4.3%"
        trend="up"
        icon="🛒"
        sparkline={[55, 52, 50, 48, 45, 44, 42, 40, 38, 35, 33, 30]}
      />
      <StatCard
        label="Savings Rate"
        value="33.2%"
        change="+2.1pp"
        trend="up"
        icon="📈"
        sparkline={[20, 22, 21, 25, 28, 27, 30, 31, 33, 32, 33, 33]}
      />
    </div>
  ),
};
