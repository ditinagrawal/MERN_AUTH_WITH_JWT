import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Panel from './pages/Panel'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import './App.css'

const App = () => {

  const isUserSignedin = !!localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={isUserSignedin ? <Panel/> : <Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<Contact/>} />
        {isUserSignedin && <Route path='/panel' element={<Panel/>} />}
      </Routes>
    </BrowserRouter>
  )
}

export default App