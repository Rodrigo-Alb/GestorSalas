import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import NavBar from './components/NavBar'
import Cadastro from './Pages/Cadastro'
import Alocar from './Pages/Alocar'
import NavBarLogado from './components/NavBarLogado'
import ConfigUsers from './Pages/ConfigUsers'
import CadastroPred from './Pages/CadastroPred'
import CadastroSala from './Pages/CadastroSala'
import CadastroDep from './Pages/CadastroDep'
import SolicitacoesUser from './Pages/SolicitacoesUser'
import SolicitacoesAdm from './Pages/SolicitacoesAdm'
import RecuperarSenha from './Pages/RecuperarSenha'
import RecuperarSenhaEmail from './Pages/RecuperarSenhaEmail'
import MenuCadastro from './Pages/MenuCadastro'
import Calendario from './Pages/User/Calendario'

function App() {
  const location = useLocation();
  const showNavBar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/Cadastro';

  const isLoggedIn = true;  
  const isAdmin = true;    


  return (
    <div>
      {showNavBar ? <NavBar /> : <NavBarLogado />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='Cadastro' element={<Cadastro />} />
        <Route path='RecuperarSenha' element = {<RecuperarSenha/>} />
        <Route path='RecuperarSenhaEmail' element = {<RecuperarSenhaEmail/>} />
        {isLoggedIn && (
          <>
            <Route path='Calendario' element={< Calendario />} />
            <Route path='Alocar' element={<Alocar />} />
            <Route path='ConfigUsers' element={<ConfigUsers />} />
            <Route path = 'SolicitacoesUser' element={<SolicitacoesUser/>}/>
            
            {isAdmin && (
              <>
                <Route path='CadastroPred' element={<CadastroPred />} />
                <Route path='CadastroSala' element={<CadastroSala />} />
                <Route path='CadastroDep' element={<CadastroDep />} />
                <Route path='SolicitacoesAdm' element = {< SolicitacoesAdm />} />
                <Route path = 'MenuCadastro' element = {<MenuCadastro/>} />
              </>
            )}
          </>
        )}

        {/* Redirecionar usuários não autenticados para login */}
        <Route path='*' element={<Navigate to={isLoggedIn ? '/' : '/login'} />} />
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