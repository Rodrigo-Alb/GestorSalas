import HomemPagInicial from '../../assets/HomemPagInicial.png'
import './Welcome.css'

/*
==========================================================
PRIMEIRA SEÇÃO DA PAGINA HOME
==========================================================
*/

export default function Welcome() {
  return (
    <section className='home'>
        <div className='item-container'>
            <h1 className='home-title home-item' >alocai</h1>
            <h2 className='home-item' >Praticidade. Organização</h2>
            <p className='home-item' >Confira, aloque, solicite espaços da sua universidade com apenas alguns cliques.</p>
            <button className='home-btn cadastro home-item'>Minha Universidade</button>
        </div>
        <img src={HomemPagInicial}  />     
    </section>

  
  )
}
