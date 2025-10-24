import { Typography } from "@mui/material";
import {resturantTheme} from "../muiTheme.js";

export const HeroText = () => {
  return (
      <div style={{ position: "relative", height: "94vh", width: "100vw", overflow: "hidden" }}>
        <img
            src={`${import.meta.env.BASE_URL}front-background.jpg`}
          alt="food image"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
        />

        <div
            style={{
              position: "absolute",
              top: -60,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
        >
          <Typography
              variant="h1"
              sx={{
                color: resturantTheme.palette.text.primary,
                textAlign: "center",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                fontWeight: 900,
              }}
          >
            Welcome to PureLeaf Kitchen
          </Typography>
          <Typography
          variant="h3"
          sx={{
            color: resturantTheme.palette.text.primary,
            textAlign: "center",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            fontWeight: 900,
          }}>
            Where every meal feels like home.
          </Typography>
        </div>
      </div>
  );
};