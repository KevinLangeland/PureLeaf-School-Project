import { Box, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { resturantTheme } from '../muiTheme.js'
import { HeroText } from './heroText.jsx';

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation() // get current path

  return (
      <Box
          sx={{
            backgroundColor: resturantTheme.palette.primary.navbarBackground,
            width: "100vw",
            height: "6vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.1

          }}
      >
        <img src="/download.svg" alt="test" style={{
          height: '4rem',
          paddingLeft: 100,
          backgroundColor: resturantTheme.palette.primary.navbarBackground
        }} />

        <h1 style={{ fontSize: 40, paddingLeft: 450 , backgroundColor: resturantTheme.palette.primary.navbarBackground, color: resturantTheme.palette.text.primary}}>PureLeaf Kitchen</h1>

        <Box
            sx={{
                  backgroundColor: resturantTheme.palette.primary.navbarBackground,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                  paddingRight: 13
                  }}>
        <Button
            disableRipple
            variant="text"
            onClick={() => navigate('/')}
            sx={{
              fontSize: 30,
              fontWeight: location.pathname === '/'
              ? '900'
              : '400',
              color: location.pathname === '/'
                  ? resturantTheme.palette.primary.main
                  : resturantTheme.palette.text.secondary, // normal color
              "&:hover": {
                color: resturantTheme.palette.primary.light,
              },
            }}
        >
          Home
        </Button>
        <Button
            disableRipple
            variant="text"
            onClick={() => navigate('/menu')}
            sx={{
              fontSize: 30,
              fontWeight: location.pathname === '/menu'
                  ? '900'
                  : '400',
              color: location.pathname === '/menu'
                  ? resturantTheme.palette.primary.main
                  : resturantTheme.palette.text.secondary,
              "&:hover": {
                color: resturantTheme.palette.primary.light,
              },
            }}
        >
          Menu
        </Button>
        <Button
            disableRipple
            variant="text"
            onClick={() => navigate('/drinks')}
            sx={{
              fontSize: 30,
              fontWeight: location.pathname === '/drinks'
                  ? '900'
                  : '400',
              color: location.pathname === '/drinks'
                  ? resturantTheme.palette.primary.main
                  : resturantTheme.palette.text.secondary, // normal color
              "&:hover": {
                color: resturantTheme.palette.primary.light,
              },
            }}
        >
          Drinks
        </Button>
        <Button
            disableRipple
            variant="text"
            onClick={() => navigate('/info')}
            sx={{
              fontSize: 30,
              fontWeight: location.pathname === '/info'
                  ? '900'
                  : '400',
              color: location.pathname === '/info'
                  ? resturantTheme.palette.primary.main
                  : resturantTheme.palette.text.secondary, // normal color
              "&:hover": {
                color: resturantTheme.palette.primary.light,
              },
            }}
        >
          Info
        </Button>
        </Box>
      </Box>
  )
}