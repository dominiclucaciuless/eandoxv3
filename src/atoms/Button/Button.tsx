import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react'; // Example icon, replace as needed
import cx from 'clsx';
import classes from './Button.module.css';

export interface ButtonProps extends Omit<MantineButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
  state?: 'default' | 'hover' | 'disabled' | 'warning'; // Note: warning only visually implemented for secondary
  leftIcon?: React.ReactNode; // Renamed from leftSection for clarity
  rightIcon?: React.ReactNode; // Renamed from rightSection for clarity
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  state = 'default',
  children,
  leftIcon,
  rightIcon,
  className, // Keep className prop to allow external overrides/additions
  disabled,
  ...rest
}) => {

  // Determine the state class based on variant and state
  const stateClass = (() => {
    if (disabled || state === 'disabled') {
        return variant === 'primary' ? classes.primaryDisabled : classes.secondaryDisabled;
    }
    switch (variant) {
      case 'primary':
        // Hover state is handled by CSS :hover pseudo-class in Button.module.css
        // Warning state is not defined for primary in Figma
        return classes.primaryDefault;
      case 'secondary':
        switch (state) {
          case 'warning':
            return classes.secondaryWarning;
          // Hover state is handled by CSS :hover pseudo-class
          case 'default':
          case 'hover': // Apply default style, CSS handles hover
          default:
            return classes.secondaryDefault;
        }
      default:
        return classes.primaryDefault;
    }
  })();


  return (
    <MantineButton
      classNames={{
          // Apply base, state-specific, and external classes to the root element
          root: cx(classes.buttonBase, stateClass, className),
          // Apply icon class to the left/right section
          section: classes.icon,
          // Apply label class to the children wrapper
          label: classes.label
      }}
      data-variant={variant}
      data-state={state}
      disabled={disabled || state === 'disabled'}
      {...rest} // Pass other MantineButton props
      // Pass icons directly to Mantine's props
      leftSection={leftIcon}
      rightSection={rightIcon}
    >
      {children}
    </MantineButton>
  );
};

// Add a default export for easier importing in some cases
export default Button; 