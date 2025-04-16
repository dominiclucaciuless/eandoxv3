/* eslint-disable @typescript-eslint/no-unused-vars */
import { MantineThemeOverride, createTheme } from '@mantine/core';

// Define your theme overrides here
export const theme: MantineThemeOverride = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'eandoBlue',

  colors: {
    // Existing palettes (kept as 10-shade approximations)
    eandoBlue: [
      '#EAF2FF', // Lightest approx. Blue/600 (#F2F8FF)
      '#C4D9FF',
      '#A2C0FF', // Approx. Blue/450 (#A2CAFF)
      '#7FACFF', // Approx. Blue/400 (#78B1FF)
      '#5C97FF',
      '#3A82FF',
      '#2380FF', // Primary shade (index 6) = Blue/300 / alias/primary/Default
      '#0F70E8',
      '#064CAC', // Approx. Blue/200
      '#002E6E', // Darkest approx. Blue/100
    ],
    gray: [
      '#FAFAFA', // Approx. Grey/900
      '#F7F7F9', // Approx. Grey/800
      '#E8E8E8', // Grey/700
      '#DFDFDF', // Grey/600
      '#CBCBCB', // Grey/500
      '#A1A1A1', // Grey/400
      '#767676', // Grey/300
      '#4C4C4C', // Grey/200
      '#222222', // Grey/100
      '#111111'  // Extrapolated darkest
    ],
    red: [
      '#FFE3E3',
      '#FFC9C9',
      '#FFDEDE', // Red/300
      '#FA8072',
      '#F03E3E',
      '#FF6B6B', // Red/200
      '#E54848',
      '#CE0800', // Red/100
      '#A50700',
      '#7D0500'
    ],
    green: [
      '#E7FFF2', // Green/400
      '#C3FAE8',
      '#96F2D7',
      '#90ECBA', // Green/350
      '#63E6BE',
      '#25DA77', // Green/300
      '#1BB360', // Green/200
      '#0CA678',
      '#038D41', // Green/100
      '#087F7B'
    ],
    yellow: [
      '#FFF8C5', // Yellow/400
      '#FFF3BF',
      '#FDEE99',
      '#FBD90F', // Yellow/300
      '#FCC419',
      '#F59F00',
      '#F3B931', // Yellow/200
      '#E67700',
      '#956900', // Yellow/100
      '#7D0500' // Yellow/500 (#F3C096) seems out of place, using darker extrapolation
    ],
    // Added palettes based on JSON/Screenshot
    eandoPurple: [
      '#F8F0FF', 
      '#EEDFFF',
      '#E5CCFF',
      '#BC79FF', // Purple/200
      '#AC26FF', // Purple/100 
      '#9708E8',
      '#8100C5',
      '#6B00A1',
      '#56007E',
      '#41005C'
    ],
    eandoOrange: [
      '#FFF9E1',
      '#FFF3BF',
      '#FABE8C', // Approx. shade from Figma graph tag
      '#F7AD61',
      '#E99046', // Approx. shade from Figma graph tag
      '#F3B931', // From screenshot & JSON Yellow/200
      '#DC9B00',
      '#C48A01', // From screenshot
      '#AD7A00',
      '#966A00'
    ],
    eandoGreenRed: [
      '#27DA77', // 100
      '#4BD762', // 200
      '#6FD54E', // 300
      '#92D33A', // 400
      '#B6D125', // 500
      '#D9CE10', // 600
      '#F5C607', // 700
      '#EF9443', // 800
      '#EA6F6E', // 900
      '#EA6F6E' // Repeat last shade for index 9 as only 9 were provided
    ],
  },

  fontFamily: 'Inter, sans-serif', 
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px' // Corresponds roughly to h1 font size
  },

  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '24px', fontWeight: '600', lineHeight: '1.33' }, // from JSON h1
      h2: { fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }, // from JSON h2-semibold
      h3: { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' }, // from JSON h3 (using semibold like others)
      // Keeping h4-h6 potentially smaller or inheriting from body text
      h4: { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      h5: { fontSize: '14px', fontWeight: '600', lineHeight: '1.55' },
      h6: { fontSize: '12px', fontWeight: '600', lineHeight: '1.6' },
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px'
  },

  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    pill: '64px', 
  },
  defaultRadius: 'md',

  shadows: {
    // Based on JSON elevation tokens (using rgba for convention)
    xs: '0px 1px 1px 0px rgba(0, 0, 0, 0.05)', // elevation 100
    sm: '0px 2px 2px 0px rgba(0, 0, 0, 0.05)', // elevation 200
    md: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)', // elevation 400
    lg: '0px 8px 8px 0px rgba(0, 0, 0, 0.05)', // elevation 800
    xl: '0px 16px 16px 0px rgba(0, 0, 0, 0.05)', // elevation 1600
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'sm', // Matches 4px from Figma
        loaderProps: {
          type: 'dots',
        },
      },
      styles: (theme, props) => ({
        root: {
          fontWeight: 500, // Default button text weight
          transition: 'background-color 150ms ease, border-color 150ms ease',

          // Primary Button Filled (eandoBlue)
          ...(props.color === 'eandoBlue' && props.variant === 'filled' && {
            backgroundColor: theme.colors.eandoBlue[6], // #2380FF
            color: theme.white,
             '&:hover': {
                backgroundColor: theme.colors.eandoBlue[8], // #064CAC - Darker hover
             },
            '&[data-disabled]': {
              backgroundColor: theme.colors.gray[6], // #767676
              color: theme.colors.gray[4], // #CBCBCB
            },
          }),
          
          // Secondary Button (Outline, default gray)
          ...(props.variant === 'outline' && (!props.color || props.color === 'gray') && {
            borderColor: theme.colors.gray[4], // #CBCBCB
            color: theme.colors.gray[8], // #222222
            '&:hover': {
              backgroundColor: theme.colors.eandoBlue[0], // Lightest blue background
              borderColor: theme.colors.eandoBlue[3], // Light blue border
              color: theme.colors.eandoBlue[6], // Primary blue text
            },
            '&[data-disabled]': {
              backgroundColor: theme.colors.gray[2], // #E8E8E8
              borderColor: theme.colors.gray[2], // #E8E8E8
              color: theme.colors.gray[5], // #A1A1A1
            },
          }),
          
          // Secondary Warning (Outline, Red)
          ...(props.variant === 'outline' && props.color === 'red' && {
             backgroundColor: theme.colors.red[2], // #FFDEDE Error background
             borderColor: theme.colors.red[6], // #FF6B6B Error border
             color: theme.colors.red[7], // #CE0800 Error text
             '&:hover': {
                backgroundColor: theme.colors.red[0], // Use the lightest red shade directly
                borderColor: theme.colors.red[7],
             },
             // Disabled state already handled by general outline disabled
          }),
        },
        label: {
           fontSize: theme.fontSizes.sm, 
        },
      }),
    },
    // Add other component overrides here
  }
}); 