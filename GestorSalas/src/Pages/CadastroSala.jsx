import '../global.css';
import './CadastroSala.css';
import Estrela from '../assets/Estrela.png.png';

export default function CadastroSala() {
    return (
        <div className="mainContainer">
            <div className="pageTitleForm">
                <img src={Estrela} alt="" />
            </div>
            <div className="containerFormSala">
                <h2>Cadastro de Salas</h2>
                <form action="" className="formAlocarSala">
                    <label htmlFor="NomeSala">Nome da Sala
                        <input type="text" name="NomeSala"/>
                    </label>
                    <label htmlFor="NumAssentos">Número de Assentos Disponíveis
                        <input type="number" name="NumAssentos"/>
                    </label>
                    <label htmlFor="IdSala">ID da Sala
                        <input type="text" name="IdSala"/>
                    </label>
                </form>
                <button className="buttonSala">Salvar</button>
            </div>
            <h2>alocai</h2>
        </div>
    );
}
