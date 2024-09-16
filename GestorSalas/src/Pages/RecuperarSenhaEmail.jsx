import './Login.css'
import Estrela from '../assets/Estrela.png.png'


export default function RecuperarSenhaEmail() {

  return (
    <div className="containerLogin">
      
      <div className='pageTitleLogin'>
          <h2>Login</h2>
          <img src={Estrela} alt="" />
      </div>
      <div className="form-containerLogin">
       
        <div className="info">
          <img src="" alt="" />
          <h1>Esqueceu sua</h1>
          <h2 style={{color:'#003366',fontWeight:'bold'}}>Senha?</h2>
          <p> Informe seu e-mail cadastrado para nos ajudar na recuperação da sua</p>
        </div>

        <form  className='form'>
          <label htmlFor="email">E-mail para recuperação</label>
          <input type="text" id="email" />

          <button className='btn'>
            Entrar
          </button>
         

        </form>
      </div>

      <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>
  )
}
