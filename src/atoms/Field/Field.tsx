import React from 'react';
import { TextInput, TextInputProps, MantineSize, Box } from '@mantine/core';
import classes from './Field.module.css';

export interface FieldProps extends Omit<TextInputProps, 'size'> {
  size?: MantineSize | 'lg' | 'xs';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Field({ size = 'lg', leftIcon, rightIcon, ...props }: FieldProps) {
  // Determine the actual MantineSize based on custom sizes
  const mantineSize: MantineSize = size === 'lg' ? 'md' : size === 'xs' ? 'xs' : size;

  // Define section widths based on size and Mantine defaults/Figma spacing
  // lg (md size) default section = 36px. xs default = 30px.
  // Our icon (16px) + gap (8px) + base padding = 16 + 8 + (12 or 8) -> suggests ~36/32px
  const sectionWidth = size === 'lg' ? 36 : 30;

  return (
    <Box className={classes.fieldWrapper}>
      <TextInput
        classNames={{
          input: classes.input,
          wrapper: classes.wrapper,
          section: classes.section,
        }}
        size={mantineSize} // Use MantineSize for underlying component
        data-size={size} // Use custom size for CSS targeting
        leftSection={leftIcon}
        rightSection={rightIcon}
        leftSectionWidth={leftIcon ? sectionWidth : 0} // Set width if icon exists
        rightSectionWidth={rightIcon ? sectionWidth : 0} // Set width if icon exists
        {...props}
      />
    </Box>
  );
} 