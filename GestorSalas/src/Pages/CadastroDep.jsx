import '../global.css';
import './CadastroDep.css';
import Estrela from '../assets/Estrela.png.png';

export default function CadastroDep() {
    return (
        <div className="mainContainer">
            <div className="pageTitleForm">
                <img src={Estrela} alt="" />
            </div>
            <div className="containerFormDep">
                <h2>Cadastro de Departamentos</h2>
                <form action="" className="formAlocarDep">
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
                <button className="buttonDep">Salvar</button>
            </div>
            <h2>alocai</h2>
        </div>
    );
}
