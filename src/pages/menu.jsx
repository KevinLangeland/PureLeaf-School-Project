import {Navbar} from '../components/navbar.jsx'
import {Dishes} from "../components/dishes.jsx";

export const Menu = () => {
    return (
        <selection
          style={{
            width: '100vw',
            padding: '0',
            margin: '0',
          }}
        >
        <Navbar></Navbar>
        <Dishes></Dishes>
        </selection>
    )
}