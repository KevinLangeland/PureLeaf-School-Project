import {Navbar} from '../components/navbar.jsx'
import {HeroText} from "../components/heroText.jsx";

export const Home = () => {
  return (
      <selection
          style={{
            width: '100vw',
            padding: '0',
            margin: '0',
          }}>
        <Navbar></Navbar>
        <HeroText></HeroText>
      </selection>
    )
}