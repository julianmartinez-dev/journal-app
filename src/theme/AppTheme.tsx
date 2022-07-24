import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import React from 'react'
import { purpleTheme } from './purpleTheme';

interface Props {
    children: React.ReactNode
}

export const AppTheme = ({ children } : Props) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
