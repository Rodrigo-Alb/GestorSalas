import '../global.css';
import './CadastroPred.css';
import Estrela from '../assets/Estrela.png.png';

export default function CadastroPred() {
    return (
        <div className="mainContainer">
            <div className="pageTitleForm">
                <img src={Estrela} alt="" />
            </div>
            <div className="containerFormPred">
                <h2>Cadastro de Prédios</h2>
                <form action="" className="formAlocarPred">
                    <label htmlFor="Nome">Nome
                        <input type="text" name="nome"/>
                    </label>
                    <label htmlFor="Universidade">Universidade
                        <input type="text" name="Universidade"/>
                    </label>
                    <label htmlFor="Logradouro">Logradouro
                        <input type="text" name="Logradouro"/>
                    </label>
                    <label htmlFor="Cidade">Cidade
                        <input type="text" name="Cidade"/>
                    </label>
                    <label htmlFor="CEP">CEP
                        <input type="text" name="CEP"/>
                    </label>
                    <label htmlFor="Estado">Estado
                        <input type="text" name="Estado"/>
                    </label>
                </form>
                <button className="buttonPred">Salvar</button>
            </div>
            <h2>alocai</h2>
        </div>
    );
}
