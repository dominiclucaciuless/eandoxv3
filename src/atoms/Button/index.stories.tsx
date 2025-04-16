import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconHeart } from '@tabler/icons-react';
import { Button, ButtonProps } from './Button'; // Import the custom Button from the same directory
import { MantineProvider, Group, Stack } from '@mantine/core'; // Import Stack for vertical grouping
import { fn } from '@storybook/test'; // Import fn for action args

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  // Update the title to reflect the Atoms category
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry:
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    state: {
        control: 'radio',
        options: ['default', 'hover', 'disabled', 'warning'],
        description: 'Note: state prop primarily drives visual style for non-interactive states (disabled, warning). Hover is handled via CSS :hover.',
    },
    disabled: {
        control: 'boolean',
        description: 'Standard disabled prop. Overrides state=\"disabled\" if both are set.'
    },
    children: {
        control: 'text',
    },
    leftIcon: {
        control: 'boolean',
        mapping: { true: <IconHeart />, false: undefined },
        description: 'Show example heart icon on the left'
    },
    rightIcon: {
        control: 'boolean',
        mapping: { true: <IconHeart />, false: undefined },
        description: 'Show example heart icon on the right'
    },
    onClick: { action: 'clicked' } // Add onClick to argTypes for action tracking
    // We can add other MantineButton props here if needed
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked:
  // https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn(), children: 'Button Text' }, // Assign fn() to onClick here
  // Corrected: onClick is handled via argTypes.action, so we just define default children.
  args: { children: 'Button Text' },
  // Add MantineProvider as a decorator directly in this file
  decorators: [
    (Story) => (
        <MantineProvider>
           <Story />
        </MantineProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  // Even though we have a global decorator, some stories may need their own provider
  // to ensure the provider is properly in the component tree
  render: (args) => (
    <MantineProvider>
      <Button {...args} />
    </MantineProvider>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  render: (args) => (
    <MantineProvider>
      <Button {...args} />
    </MantineProvider>
  ),
};

export const PrimaryWithIcon: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Icon',
        leftIcon: <IconHeart />,
    },
    render: (args) => (
      <MantineProvider>
        <Button {...args} />
      </MantineProvider>
    ),
}

export const SecondaryWithIcon: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Icon',
        leftIcon: <IconHeart />,
    },
    render: (args) => (
      <MantineProvider>
        <Button {...args} />
      </MantineProvider>
    ),
}

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Disabled',
    disabled: true,
  },
  render: (args) => (
    <MantineProvider>
      <Button {...args} />
    </MantineProvider>
  ),
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Disabled',
    disabled: true,
  },
  render: (args) => (
    <MantineProvider>
      <Button {...args} />
    </MantineProvider>
  ),
};

export const SecondaryWarning: Story = {
    args: {
        variant: 'secondary',
        state: 'warning',
        children: 'Secondary Warning',
    },
    render: (args) => (
      <MantineProvider>
        <Button {...args} />
      </MantineProvider>
    ),
}

export const SecondaryWarningDisabled: Story = {
    args: {
        variant: 'secondary',
        state: 'warning',
        children: 'Warning Disabled',
        disabled: true,
    },
    render: (args) => (
      <MantineProvider>
        <Button {...args} />
      </MantineProvider>
    ),
}

// Story to showcase all states side-by-side
export const AllStates: Story = {
    render: (args) => (
      <MantineProvider>
        <Stack gap="md">
            <Group>
                <Button {...args} variant="primary" state="default">Primary Default</Button>
                <Button {...args} variant="primary" state="default">Primary Hover (CSS)</Button>
                <Button {...args} variant="primary" state="disabled">Primary Disabled</Button>
            </Group>
            <Group>
                  <Button {...args} variant="secondary" state="default">Secondary Default</Button>
                  <Button {...args} variant="secondary" state="default">Secondary Hover (CSS)</Button>
                  <Button {...args} variant="secondary" state="disabled">Secondary Disabled</Button>
                  <Button {...args} variant="secondary" state="warning">Secondary Warning</Button>
                  <Button {...args} variant="secondary" state="warning" disabled>Warning Disabled</Button>
            </Group>
              <Group>
                  <Button {...args} variant="primary" leftIcon={<IconHeart/>}>Primary Icon Left</Button>
                  <Button {...args} variant="secondary" rightIcon={<IconHeart/>}>Secondary Icon Right</Button>
            </Group>
        </Stack>
      </MantineProvider>
    ),
    parameters: {
        controls: { include: ['onClick', 'children'] } // Only show relevant controls for this story
    }
  }; 