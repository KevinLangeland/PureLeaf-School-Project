import {resturantTheme} from "../muiTheme.js";
import { Box, Typography } from '@mui/material'

import drink1 from '../assets/drinks/drink1.jpg'
import drink2 from '../assets/drinks/drink2.jpg'
import drink3 from '../assets/drinks/drink3.jpg'
import drink4 from '../assets/drinks/drink4.jpg'
import drink5 from '../assets/drinks/drink5.jpg'
import drink6 from '../assets/drinks/drink6.jpg'
import drink7 from '../assets/drinks/drink7.jpg'
import drink8 from '../assets/drinks/drink8.jpg'

export const Drink = () => {
  const drinksData = [
    { img: drink1, name: "Mojito", description: "Refreshing mint, lime, and soda blend with a hint of rum.", price: "$8" },
    { img: drink2, name: "Iced Latte", description: "Smooth espresso poured over ice and milk for a creamy chill.", price: "$6" },
    { img: drink3, name: "Strawberry Smoothie", description: "Fresh strawberries blended with yogurt and honey.", price: "$7" },
    { img: drink4, name: "Mango Margarita", description: "Tropical mango puree with tequila and lime.", price: "$10" },
    { img: drink5, name: "Lemon Iced Tea", description: "Crisp black tea infused with lemon for a tangy refresh.", price: "$5" },
    { img: drink6, name: "Hot Chocolate", description: "Rich cocoa topped with whipped cream and chocolate drizzle.", price: "$6" },
    { img: drink7, name: "Cold Brew Coffee", description: "Slow-steeped coffee served cold for a smooth, bold flavor.", price: "$5" },
    { img: drink8, name: "Pina Colada", description: "Creamy coconut and pineapple blend with or without rum.", price: "$9" }
  ];
  return (
      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: "wrap",
        gap: 3,
        p: 3,}}>
        {drinksData.map((drinks) => (
            <Box
                key={drinks.id}
                sx={{
                  border: "1px solid",
                  borderColor: resturantTheme.palette.primary.border,
                  borderRadius: 2,
                  padding: 2,
                  width: "33rem",
                  height: "36rem",
                  backgroundColor: resturantTheme.palette.background.elevation2,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "transform 0.5s ease-in"
                  },
                  "&:not(:hover)": {
                    transform: "translateY(0)",
                    transition: "transform 0.3s ease-out"
                  }
                }}>
              <Box
                  component="img"
                  src={drinks.img}
                  alt={drinks.name}
                  sx={{
                    width: "100%",
                    height: '80%',
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
              />
              <Typography variant="h4" sx={{
                color: resturantTheme.palette.text.accent,
              }}>{drinks.name}</Typography>
              <Typography variant="body2" sx={{
                color: resturantTheme.palette.text.secondary,
                fontSize: 20
              }}>{drinks.description}</Typography>
              <Typography sx={{ mt: 1, fontWeight: "bold", color: resturantTheme.palette.text.primary}}>{drinks.price}</Typography>
            </Box>
        ))}
      </Box>
  );
};