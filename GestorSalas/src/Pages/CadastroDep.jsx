import Estrela from '../assets/Estrela.png.png'

export default function CadastroDep() {
  return (
    <div className="mainContainer">

        <div className='pageTitleForm'>
            <img src={Estrela} alt="" />
        </div>

        <div className="containerForm">   
            <h2>Cadastro de Departamentos</h2>
            <form action="" className='formAlocar'>
            <label htmlFor="Area">Área
                    <input type="text" name="Area"/>
                </label>
                <label htmlFor="Nome">Nome
                    <input type="text" name="nome"/>
                </label>
                <label htmlFor="Universidade">Universidade
                    <input type="text" name="Universidade"/>
                </label>
                <label htmlFor="Nsalas">Número de Salas Disponíveis
                    <input type="Number" name="Nsalas"/>
                </label>
                <label htmlFor="Diretor">Diretor do Departamento
                    <input type="text" name="Diretor"/>
                </label>
                <label htmlFor="Descricao">Descrição do Departamento
                    <input type="text" name="Descricao"/>
                </label>
                
              
            </form>

            <button>Salvar</button>
        </div>
        <h2 style={{color:'#003366',fontWeight:'bold',position:'relative', top:'1.5rem'}}>alocai</h2>
    </div>

  )
}
