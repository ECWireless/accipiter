import {
  extendTheme,
  theme as defaultTheme,
} from '@chakra-ui/react';

const Text = {
  variants: {
    h1: {
      color: 'grey.400',
      fontSize: {
        base: '36px',
        lg: '48px',
      },
      fontWeight: 600,
    },
  }
}

export const theme = extendTheme({
  config: { initialColorMode: 'light', useSystemColorMode: false },
  colors: {
    grey: {
      100: '#E8E7E7',
      400: '#6E6F72',
      800: '#404041',
      900: '#000000',
    },
    electric: {
      100: '#BBDEE2',
      400: '#00A5C2',
      800: '#445766',
      900: '#2A3E51',
    },
    green: {
      ...defaultTheme.colors.green,
    },
    yellow: {
      ...defaultTheme.colors.yellow,
    },
    red: {
      ...defaultTheme.colors.red,
    },
  },
  components: {
    Text,
  },
});