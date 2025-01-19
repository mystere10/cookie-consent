import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome!',
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex, magni sapiente
        enim, quis quia iusto odit quasi debitis est explicabo facilis delectus, nesciunt
        recusandae. Ipsum doloribus reprehenderit tempora magni.
      </p>
    ),
    isOpen: true,
  },
};
