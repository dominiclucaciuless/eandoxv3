import type { Meta, StoryObj } from '@storybook/react';
import { IconUserCircle, IconEye } from '@tabler/icons-react'; // Example icons
import { Field } from '../../atoms/Field/Field'; // Adjust path as necessary

const meta: Meta<typeof Field> = {
  title: 'Atoms/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'xs'],
    },
    placeholder: {
      control: 'text',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    // Add 'success' if needed and implemented
  },
  args: {
    placeholder: 'Placeholder Text',
    size: 'lg',
    leftIcon: true,
    rightIcon: true,
    disabled: false,
    error: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to get icons based on args
const getIcons = (args: any) => ({
  leftIcon: args.leftIcon ? <IconUserCircle size={16} /> : undefined,
  rightIcon: args.rightIcon ? <IconEye size={16} /> : undefined,
});

export const Large: Story = {
  args: {
    size: 'lg',
    ...getIcons({ leftIcon: true, rightIcon: true }),
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    ...getIcons({ leftIcon: true, rightIcon: true }),
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

export const Error: Story = {
  args: {
    size: 'lg',
    error: 'This field has an error',
    ...getIcons({ leftIcon: true, rightIcon: true }),
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

export const Disabled: Story = {
  args: {
    size: 'lg',
    disabled: true,
    ...getIcons({ leftIcon: true, rightIcon: true }),
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

export const WithoutIcons: Story = {
  args: {
    size: 'lg',
    leftIcon: false,
    rightIcon: false,
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

export const Filled: Story = {
  args: {
    size: 'lg',
    defaultValue: 'Filled Value',
    ...getIcons({ leftIcon: true, rightIcon: true }),
  },
  render: (args) => <Field {...args} {...getIcons(args)} />,
};

// Add stories for Success state if implemented
// Add stories combining different props like Error + xs etc. if needed 