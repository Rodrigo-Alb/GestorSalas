import './Login.css'
import Estrela from '../assets/Estrela.png.png'


export default function RecuperarSenha() {

  return (
    <div className="containerLogin">
      
      <div className='pageTitleLogin'>
          <h2>Login</h2>
          <img src={Estrela} alt="" />
      </div>
      <div className="form-containerLogin">
       
        <div className="info">
          <img src="" alt="" />
          <h1>Recuperar</h1>
          <h2 style={{color:'#003366',fontWeight:'bold'}}>Senha</h2>
        </div>

        <form  className='form'>
         <label htmlFor="password">Digite sua nova senha</label>
         <div className='password-container'><input type="password" id="password"  /></div>

         <label htmlFor="password">Digite sua nova senha mais uma vez</label>
         <div className='password-container'><input type="password" id="password"  /></div>

          <button className='btn'>
            Salvar
          </button>
         

        </form>
      </div>

      <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>
  )
}