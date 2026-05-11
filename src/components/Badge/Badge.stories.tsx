import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Active' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default" dot>
        Active
      </Badge>
      <Badge variant="success" dot>
        Completed
      </Badge>
      <Badge variant="warning" dot>
        Pending
      </Badge>
      <Badge variant="danger" dot>
        Failed
      </Badge>
      <Badge variant="info" dot>
        Processing
      </Badge>
      <Badge variant="neutral" dot>
        Archived
      </Badge>
    </div>
  ),
};

export const TransactionStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Settled</Badge>
      <Badge variant="warning">Authorised</Badge>
      <Badge variant="danger">Declined</Badge>
      <Badge variant="info">In Progress</Badge>
      <Badge variant="neutral">Refunded</Badge>
    </div>
  ),
};
