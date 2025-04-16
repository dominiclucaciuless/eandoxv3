import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Label text content' },
    size: { control: 'radio', options: ['sm', 'md'], description: 'Label size' },
    required: { control: 'boolean', description: 'Display asterisk before label' },
    optionalText: { control: 'text', description: 'Optional text displayed after label' },
    withIcon: { control: 'boolean', description: 'Display info icon' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
  },
};

export const DefaultSmall: Story = {
  args: {
    children: 'Label Small',
    size: 'sm',
  },
};

export const RequiredMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
    required: true,
  },
};

export const RequiredSmall: Story = {
  args: {
    children: 'Label Small',
    size: 'sm',
    required: true,
  },
};

export const OptionalMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
    optionalText: 'optional',
  },
};

export const OptionalSmall: Story = {
  args: {
    children: 'Label Small',
    size: 'sm',
    optionalText: 'optional',
  },
};

// --- Stories with Icon (Currently Disabled) ---

export const WithIconMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
    withIcon: true,
  },
};

export const WithIconSmall: Story = {
  args: {
    children: 'Label Small',
    size: 'sm',
    withIcon: true,
  },
};

export const RequiredWithIconMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
    required: true,
    withIcon: true,
  },
};

export const OptionalWithIconMedium: Story = {
  args: {
    children: 'Label Medium',
    size: 'md',
    optionalText: 'optional',
    withIcon: true,
  },
}; 