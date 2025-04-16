import React from 'react';
import { Text, Flex, Box, MantineSize } from '@mantine/core';
// import { IconInfoCircle } from '@tabler/icons-react'; // Placeholder if using Tabler icons
import InfoCircleIcon from '../../../assets/icons/Label/info-circle.svg?react'; // Correct relative path

interface LabelProps {
  children: React.ReactNode;
  size?: 'sm' | 'md';
  required?: boolean;
  optionalText?: string;
  withIcon?: boolean; // Control icon visibility
}

const Label: React.FC<LabelProps> = ({
  children,
  size = 'md',
  required = false,
  optionalText,
  withIcon = true, // Default to true now
}) => {
  const mantineSize: MantineSize = size === 'sm' ? 'sm' : 'md';
  const labelColor = 'gray.9'; // Corresponds to #222222
  const optionalColor = 'gray.5'; // Corresponds to #A1A1A1

  // Note: Icon functionality is commented out as the specific icon wasn't found.
  // Replace with actual icon import and rendering when available.
  const IconComponent = InfoCircleIcon; // Or Tabler: IconInfoCircle;

  return (
    <Flex align="center" gap="xs">
      {required && (
        <Text span c={labelColor} size={mantineSize} fw={500}>
          *
        </Text>
      )}
      <Text component="span" c={labelColor} size={mantineSize} fw={500}>
        {children}
      </Text>
      {withIcon && (
        <Box component={IconComponent} style={{ width: '16px', height: '16px', color: labelColor }} ml={4} />
      )}
      {optionalText && (
        <Text component="span" c={optionalColor} size={mantineSize} fw={400} ml={withIcon ? 4 : 8}>
          ({optionalText})
        </Text>
      )}
    </Flex>
  );
};

export default Label; 