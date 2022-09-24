export const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    greys: '#282A36',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  spacing: value => `${4 * value}px`,
  // padding: ${props => props.theme.spacing(4)};
  // 4x4
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    btn: 'system-ui, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeight: {
    normal: 400,
    bolt: 700,
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50px',
  },
};
