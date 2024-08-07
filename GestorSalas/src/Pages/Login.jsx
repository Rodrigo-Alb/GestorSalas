import './Login.css'
import Estrela from '../assets/Estrela.png.png'
import MulherLogin from '../assets/MulherLogin.png'
import {Link} from 'react-router-dom';

export default function Login() {

  const MulherLoginImg ={
    position:'relative',
    top:'5rem',
    height:'30rem'
  }

  return (
    <div className="containerLogin">
      
      <div className='pageTitleLogin'>
          <h2>Login</h2>
          <img src={Estrela} alt="" />
      </div>
      <div className="form-containerLogin">
        <img src={MulherLogin} style={MulherLoginImg} alt="" />
        <div className="info">
          <img src="" alt="" />
          <h2>Seja</h2>
          <h2 style={{color:'#003366',fontWeight:'bold'}}>Bem-Vindo</h2>
        </div>

        <form  className='form'>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <div className='password-container'><input type="password" id="password"  /></div>

          <div className="btn-containerLogin">
            <Link to='/Alocar' className='btn'>Entrar</Link>
            <p>Ainda não possui conta? <span style={{color:'#003366',fontWeight:'bold', cursor:'pointer'}}>Cadastrar</span></p>
          </div>
        </form>
      </div>

      <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>
  )
}
