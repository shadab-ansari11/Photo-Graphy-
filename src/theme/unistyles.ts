export const theme = {
  colors: {
    primary: '#000',
    border: '#ccc',
    background: '#fff',
    error: '#ff4d4d',
    disabled: '#E6EDF3',
  },
  spacing: (v: number) => v * 4,
  radius: { sm: 4, md: 8, lg: 12 },
};

export const breakpoints = {
  phone: 0,
  tablet: 600,
  desktop: 1024,
};

export type AppTheme = typeof theme;
