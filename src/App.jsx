import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/home.jsx'
import {Menu} from './pages/menu.jsx'
import {Drinks} from './pages/drinks.jsx'
import {InfoPage} from './pages/info.jsx'

function App() {
  return (
    <selection
      style={{
        width: '100vw',
        padding: '0',
        margin: '0',
      }}
    >
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/drinks" element={<Drinks/>}/>
            <Route path="/info" element={<InfoPage/>}/>
          </>
        </Routes>
      </BrowserRouter>
    </selection>
  )
}

export default App