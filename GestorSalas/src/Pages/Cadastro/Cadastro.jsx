import '../Css/Cadastro.css'
import Estrela from '../../assets/Estrela.png.png'
import HomemCadastro from '../../assets/HomemCadastro.png'
import {Link} from 'react-router-dom'

export default function Cadastro() {

    const HomemCadastroImg ={
        position:'relative',
        top:'5rem',
        height:'30rem'
    }

  return (
    <div className="containerCadastro">
        <div className='pageTitleCadastro'>
            <h2>Cadastro</h2>
            <img src={Estrela} alt="" />
        </div>
        <div className="form-containerCadastro">
            <img src={HomemCadastro} style={HomemCadastroImg} alt="" />
            <div className="infoCadastro">    
                <h2>Vamos iniciar uma</h2>
                <h2 style={{color:'#003366',fontWeight:'bold'}}>experiência.</h2>
            </div>
            <form  className='form'>
                <label htmlFor="email">Nome</label>
                <input type="text" id="email" />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" />

                <label htmlFor="password">Senha</label>
                <div className='password-container'><input type="password" id="password"  /></div>

                <label htmlFor="password">Confirme sua senha</label>
                <div className='password-container'><input type="password" id="password"  /></div>

                <div className="btn-containerCadastro">
                    <Link to='/login' className='btn'>Cadastrar-se</Link>
                    <p>Já possui conta? <span style={{color:'#003366',fontWeight:'bold', cursor:'pointer'}}>Entrar</span></p>
                </div>
            </form>
        </div>
        <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>
  )
}
