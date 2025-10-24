import {Box, Typography} from '@mui/material'
import {resturantTheme} from "../muiTheme.js";

export const Info = () => {
  return(
      <Box
          sx={{
            backgroundColor: resturantTheme.palette.background.main,
            minHeight: "100vh",
            padding: "0",
          }}
      >
        <Box
            sx={{
              maxWidth: "800px",
              margin: "2rem auto",
              padding: "2rem",
              backgroundColor: resturantTheme.palette.background.elevation2,
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
        >
          <h1 style={{ color: resturantTheme.palette.text.primary, fontWeight: '900', fontSize: 40}}>
            PureLeaf Kitchen
          </h1>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem", color: resturantTheme.palette.text.secondary}}>
            📍 Location: 58 Greenway Avenue, Stockholm, Sweden
            <br />
            🕒 Opening Hours:
            <br />
            • Monday – Friday: 9:00 AM – 9:00 PM
            <br />
            • Saturday: 10:00 AM – 10:00 PM
            <br />
            • Sunday: 10:00 AM – 8:00 PM
            <br /><br />
            ☎️ Phone: +46 8 456 7890
            <br />
            📧 Email: hello@pureleafkitchen.se
            <br /><br />
            At PureLeaf Kitchen, we believe in fresh, plant-based dining that nourishes body and mind.
            Our menu features vibrant salads, warm grain bowls, and smoothies made with locally sourced ingredients.
            Whether you’re grabbing lunch on the go or sitting down for dinner, our cozy space and eco-friendly mission
            make every meal a mindful experience. 🌿
          </Typography>
        </Box>
      </Box>
  )
}