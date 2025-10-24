import { createTheme } from '@mui/material'

export const resturantTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#FFFFFF',
      navbarBackground: '#2A503A',   // Softer forest green for header/navbar
      sectionBackground: '#3B6B4F',  // Muted earthy green for main sections
      cardBackground: '#4C7F64',     // Gentle mossy tone for cards
      border: '#5D8F74',             // Subtle green-brown borders
    },

    secondary: {
      main: '#FFFFFF',
      buttonBackground: '#88C088',   // Calm green accent for buttons
      buttonHover: '#9BD39B',        // Slightly lighter green on hover
      link: '#B0E0B0',               // Softer leaf green for links
    },

    background: {
      page: '#213B2B',               // Lighter, soothing dark green background
      overlay: 'rgba(0,0,0,0.5)',
      elevation1: '#274633',         // Slightly lighter darkest layer
      elevation2: '#2F573F',
      elevation3: '#3B6B4F',
      elevation4: '#4C7F64',         // Lightest elevation
    },

    text: {
      primary: '#E6F0E6',            // Soft greenish-cream
      secondary: '#C0D8C0',
      accent: '#B0E0B0',
      disabled: '#8B9B8B',
    },
  },
});