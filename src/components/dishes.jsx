import {resturantTheme} from "../muiTheme.js";
import { Box, Typography } from '@mui/material'

import dish1 from '../assets/dishes/dish1.jpg'
import dish2 from '../assets/dishes/dish2.jpeg'
import dish3 from '../assets/dishes/dish3.jpg'
import dish4 from '../assets/dishes/dish4.jpg'
import dish5 from '../assets/dishes/dish5.jpg'
import dish6 from '../assets/dishes/dish6.jpg'
import dish7 from '../assets/dishes/dish7.jpg'
import dish8 from '../assets/dishes/dish8.jpeg'
import dish9 from '../assets/dishes/dish9.png'
import dish10 from '../assets/dishes/dish10.png'
import dish11 from '../assets/dishes/dish11.png'
import dish12 from '../assets/dishes/dish12.jpg'

export const Dishes = () => {
  const dishesData = [
    { img:dish1, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil.", price: "$12" },
    { img:dish2, name: "Pepperoni Pizza", description: "Spicy pepperoni with cheese and tomato sauce.", price: "$14" },
    { img:dish3, name: "Caesar Salad", description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing.", price: "$9" },
    { img:dish4, name: "Grilled Chicken Sandwich", description: "Tender chicken with lettuce, tomato, and mayo on a toasted bun.", price: "$11" },
    { img:dish5, name: "Spaghetti Bolognese", description: "Pasta with rich beef and tomato sauce.", price: "$13" },
    { img:dish6, name: "Veggie Burger", description: "Delicious patty with lettuce, tomato, and avocado.", price: "$10" },
    { img:dish7, name: "Mushroom Risotto", description: "Creamy risotto with sautéed mushrooms and parmesan.", price: "$15" },
    { img:dish8, name: "Chicken Tacos", description: "Soft tortillas filled with spiced chicken, lettuce, and cheese.", price: "$12" },
    { img:dish9, name: "Grilled Salmon", description: "Fresh salmon fillet grilled to perfection with herbs.", price: "$18" },
    { img:dish10, name: "Beef Steak", description: "Juicy grilled steak served with mashed potatoes and veggies.", price: "$20" },
    { img:dish11, name: "Tomato Basil Soup", description: "Rich and creamy tomato soup with fresh basil.", price: "$7" },
    { img:dish12, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, served with vanilla ice cream.", price: "$8" },
  ];
  return (
      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: "wrap",
        gap: 3,
        p: 3,}}>
        {dishesData.map((dish) => (
            <Box
                key={dish.id}
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
                  src={dish.img}
                  alt={dish.name}
                  sx={{
                    width: "100%",
                    height: '75%',
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
              />
              <Typography variant="h4" sx={{
                color: resturantTheme.palette.text.accent,
              }}>{dish.name}</Typography>
              <Typography variant="h6" sx={{
                color: resturantTheme.palette.text.secondary,
                fontSize: 20
              }}>{dish.description}</Typography>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold", color: resturantTheme.palette.text.primary}}>{dish.price}</Typography>
            </Box>
        ))}
      </Box>
  );
};