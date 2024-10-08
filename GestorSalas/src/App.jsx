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
import MenuCadastro from './Pages/MenuCadastro';
import RecuperarSenhaEmail from './Pages/RecuperarSenhaEmail';
import RecuperarSenha from './Pages/RecuperarSenha';
import SolicitacoesUser from './Pages/SolicitacoesUser';
import SolicitacoesAdm from './Pages/SolicitacoesAdm';


function App() {
  const location = useLocation();
  const showNavBar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/Cadastro';

  // Supondo que você tenha uma lógica para verificar se o usuário está logado e se é admin
  const isLoggedIn = true;  
  const isAdmin = false;     


  return (
    <div>
      {showNavBar ? <NavBar /> : <NavBarLogado />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='Cadastro' element={<Cadastro />} />
        <Route path='CadastroPred' element={<CadastroPred />} />
        <Route path='MenuCadastro' element={<MenuCadastro />} />
        <Route path='RecuperarSenhaEmail' element={<RecuperarSenhaEmail/>} />
        <Route path='RecuperarSenha' element={<RecuperarSenha/>} />
        <Route path='SolicitacoesUser' element={<SolicitacoesUser/>} />
        <Route path='SolicitacoesAdm' element={<SolicitacoesAdm/>} />



        
        {isLoggedIn && (
          <>
            <Route path='Alocar' element={<Alocar />} />
            <Route path='ConfigUsers' element={<ConfigUsers />} />
            
            {isAdmin && (
              <>
               
                <Route path='CadastroSala' element={<CadastroSala />} />
                <Route path='CadastroDep' element={<CadastroDep />} />
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