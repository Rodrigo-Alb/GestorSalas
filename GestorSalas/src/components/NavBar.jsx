import Logo from '../assets/Logo-3.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className="navContainer">
      <nav className='header'>
          <img src={Logo} className='logo' alt="Logo Empresa " />
          <ul className='botoes'>
              <Link to='/login' className='link'>Logar</Link>
              <Link to='/Cadastro' className='link cadastro'>Cadastre-se</Link>
          </ul>
      </nav>
    </div>
  )
}
