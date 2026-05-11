import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardSection } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader
        title="Current Account"
        description="•••• 4821"
        action={
          <Badge variant="success" dot>
            Active
          </Badge>
        }
      />
      <p className="text-2xl font-mono font-semibold text-ink">£4,823.50</p>
    </Card>
  ),
};

export const Accent: Story = {
  render: () => (
    <Card accent className="max-w-sm">
      <CardHeader title="Savings Goal" description="Emergency Fund" />
      <p className="text-2xl font-mono font-semibold text-ink">£8,200 / £10,000</p>
      <div className="mt-3 h-1.5 rounded-full bg-surface-2">
        <div className="h-full w-[82%] rounded-full bg-brand" />
      </div>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-sm">
      {['Current Account', 'Savings Account', 'ISA'].map(name => (
        <Card key={name} interactive onClick={() => alert(`Selected: ${name}`)}>
          <CardHeader title={name} description="Click to view details" />
        </Card>
      ))}
    </div>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Card className="max-w-sm" noPadding>
      <div className="p-5">
        <CardHeader
          title="Transfer Summary"
          action={
            <Button size="sm" variant="ghost">
              Edit
            </Button>
          }
        />
      </div>
      <CardSection className="px-5">
        <div className="flex justify-between text-sm">
          <span className="text-ink-secondary">From</span>
          <span className="font-medium text-ink">Current •••• 4821</span>
        </div>
      </CardSection>
      <CardSection className="px-5">
        <div className="flex justify-between text-sm">
          <span className="text-ink-secondary">To</span>
          <span className="font-medium text-ink">Savings •••• 9032</span>
        </div>
      </CardSection>
      <CardSection className="px-5">
        <div className="flex justify-between text-sm">
          <span className="text-ink-secondary">Amount</span>
          <span className="font-mono font-semibold text-ink">£500.00</span>
        </div>
      </CardSection>
      <div className="p-5 pt-4">
        <Button fullWidth>Confirm Transfer</Button>
      </div>
    </Card>
  ),
};
