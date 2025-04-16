// @ts-nocheck 
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField as InputFieldComponent } from './InputField'; // Rename import
import { IconUserCircle, IconEye } from '@tabler/icons-react';

// Define meta separately
const metaConfig: Meta<typeof InputFieldComponent> = {
  title: 'Atoms/InputField',
  component: InputFieldComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    required: { control: 'boolean' },
    error: { control: 'text' },
    leftIcon: { control: false },
    rightIcon: { control: false },
    withLabelIcon: { control: 'boolean' },
    optionalText: { control: 'text' },
  },
};

// Export meta as default
export default metaConfig;

type Story = StoryObj<typeof metaConfig>;

export const Default: Story = {
  args: {
    label: 'Label',
    hint: 'Hint text',
    placeholder: 'Placeholder',
    withLabelIcon: true,
    leftIcon: <IconUserCircle size={16} />,
    rightIcon: <IconEye size={16} />,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    hint: 'This is a helpful hint text.',
    withLabelIcon: false,
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
    rightIcon: <IconEye size={16} />,
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
    leftIcon: <IconUserCircle size={16} />,
  },
};

export const Optional: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '(123) 456-7890',
    optionalText: 'Optional',
    withLabelIcon: false,
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Input with icons',
    leftIcon: <IconUserCircle size={16} />,
    rightIcon: <IconEye size={16} />,
  },
}; 