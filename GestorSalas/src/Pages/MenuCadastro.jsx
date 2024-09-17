import Estrela from '../assets/Estrela.png.png'
import { Link } from 'react-router-dom'
import './MenuCadastro.css';

export default function MenuCadastro() {
  return (
    <div className="mainContainer">

        <div className='pageTitleForm'>
            <img src={Estrela} alt="" />
        </div>

        <div className="containerForm">   
            <h2>O que você deseja cadastrar?</h2>


            <Link to='/CadastroDep' className='menuCadBtn'> Departamento</Link>
            <Link to='/CadastroPred' className='menuCadBtn'> Prédio</Link>
            <Link to='/CadastroSala' className='menuCadBtn'> Sala</Link>
            
        </div>
        <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>
  )
}