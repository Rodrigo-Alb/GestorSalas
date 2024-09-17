import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
import NavBar from './components/NavBar'
import Cadastro from './Pages/Cadastro/Cadastro'
import Alocar from './Pages/User/Alocar'
import NavBarLogado from './components/NavBarLogado'
import ConfigUsers from './Pages/User/ConfigUsers'
import CadastroPred from './Pages/Adm/CadastroPred'
import CadastroSala from './Pages/Adm/CadastroSala'
import CadastroDep from './Pages/Adm/CadastroDep'
import SolicitacoesUser from './Pages/User/SolicitacoesUser'
import SolicitacoesAdm from './Pages/Adm/SolicitacoesAdm'
import RecuperarSenha from './Pages/User/RecuperarSenha'
import RecuperarSenhaEmail from './Pages/User/RecuperarSenhaEmail'
import MenuCadastro from './Pages/Adm/MenuCadastro'
import Calendario from './Pages/User/Calendario'
import NavBarAdm from './components/NavBarAdm'

function App() {
  const location = useLocation();
  
  // Lógica para decidir qual NavBar mostrar
  const showNavBar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/Cadastro';
  const isLoggedIn = true;  // Simula que o usuário está logado
  const isAdmin = false;     // Simula que o usuário é admin

  // Função que retorna a NavBar correta
  const getNavBar = () => {
    if (showNavBar) {
      return <NavBar />;
    } else if (isLoggedIn && isAdmin) {
      return <NavBarAdm />;
    } else {
      return <NavBarLogado />;
    }
  };

  return (
    <div>
      {getNavBar()}  {/* Aqui chamamos a função para renderizar a NavBar correta */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='Cadastro' element={<Cadastro />} />
        <Route path='RecuperarSenha' element = {<RecuperarSenha/>} />
        <Route path='RecuperarSenhaEmail' element = {<RecuperarSenhaEmail/>} />
        {isLoggedIn && (
          <>
            <Route path='Calendario' element={<Calendario />} />
            <Route path='Alocar' element={<Alocar />} />
            <Route path='ConfigUsers' element={<ConfigUsers />} />
            <Route path = 'SolicitacoesUser' element={<SolicitacoesUser/>} />
            
            {isAdmin && (
              <>
                <Route path='CadastroPred' element={<CadastroPred />} />
                <Route path='CadastroSala' element={<CadastroSala />} />
                <Route path='CadastroDep' element={<CadastroDep />} />
                <Route path='SolicitacoesAdm' element={<SolicitacoesAdm />} />
                <Route path='MenuCadastro' element={<MenuCadastro />} />
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