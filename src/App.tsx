
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import OurTeam from './Pages/OurTeam/OurTeam'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/team-work' element={<OurTeam/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App