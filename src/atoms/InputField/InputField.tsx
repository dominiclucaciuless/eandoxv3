import React from 'react';
import { Stack, Text } from '@mantine/core';
import { Field } from '../../../atoms/Field/Field'; // Assuming Field is in src/atoms
import Label from '../Label/Label'; // Assuming Label is in src/components/atoms
import type { FieldProps } from '../../../atoms/Field/Field'; // Import FieldProps type

// Extend FieldProps and add specific props for InputField
interface InputFieldProps extends FieldProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  required?: boolean;
  optionalText?: string;
  withLabelIcon?: boolean; // To control the info icon in the Label
  labelSize?: 'sm' | 'md'; // Propagate size to Label
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  hint,
  required,
  optionalText,
  withLabelIcon = true, // Default based on Label component
  labelSize = 'md', // Default based on Label component
  size = 'lg', // Default size for the Field component ('lg' maps to Mantine 'md')
  error, // Capture error prop to conditionally display hint
  ...fieldProps // Spread the rest of the props to the Field component
}) => {
  // Use theme's gray color for hint text (matches Figma #4C4C4C)
  const hintColor = 'gray.7';
  // Use theme's font size for hint text (matches Figma 12px)
  const hintSize = 'xs';

  return (
    <Stack gap={6}>
      {label && (
        <Label
          size={labelSize}
          required={required}
          optionalText={optionalText}
          withIcon={withLabelIcon}
        >
          {label}
        </Label>
      )}
      {hint && !error && ( // Only show hint if there's no error
        <Text c={hintColor} size={hintSize}>
          {hint}
        </Text>
      )}
      <Field
        size={size} // Pass size to Field
        error={error} // Pass error to Field (TextInput)
        {...fieldProps} // Pass all other TextInput props
      />
      {/* Mantine's TextInput within Field already handles error display */}
    </Stack>
  );
};

export default InputField; 