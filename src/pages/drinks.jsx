import {Navbar} from "../components/navbar.jsx";
import {Drink} from "../components/drinks.jsx";

export const Drinks = () => {
  return (
      <selection
          style={{
            width: '100vw',
            padding: '0',
            margin: '0',
          }}>
        <Navbar></Navbar>
        <Drink></Drink>
      </selection>
  )
}