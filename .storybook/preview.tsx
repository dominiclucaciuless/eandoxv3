import React from 'react';
import type { Preview } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
// Import Mantine core styles
import '@mantine/core/styles.css';

// Import your custom theme if you have one, otherwise Mantine defaults are used
import { theme } from '../src/theme'; // Adjust path if necessary

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" }, // Default from init
  },
  decorators: [
    // Add MantineProvider decorator to wrap all stories
    (Story) => (
      <MantineProvider theme={theme} /* // Uncomment if you have a custom theme */>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview; 