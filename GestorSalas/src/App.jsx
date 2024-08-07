import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NavBar from './components/NavBar'
import Cadastro from './Pages/Cadastro'
import Alocar from './Pages/Alocar'
import NavBarLogado from './components/NavBarLogado'

function App() {
  const location = useLocation();
  const showNavBar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/Cadastro';

  return (
    <div>
      {showNavBar ? <NavBar />: <NavBarLogado/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='Cadastro' element={<Cadastro />} />
        <Route path='Alocar' element={<Alocar />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default MainApp;