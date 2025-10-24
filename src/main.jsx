import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@mui/material/styles";
import App from './App.jsx'
import {resturantTheme} from './muiTheme.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ThemeProvider theme={resturantTheme}>
        <App />
      </ThemeProvider>
    </StrictMode>
)
