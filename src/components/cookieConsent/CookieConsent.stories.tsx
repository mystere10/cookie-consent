import type { Meta, StoryObj } from '@storybook/react';

import CookieConsent from '.';

const meta = {
  title: 'CookieConsent',
  component: CookieConsent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
