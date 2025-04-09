import './telaPerfil.css'
import BarraLateral from '../componentes/barraLateral'

function TelaPerfil() {
    return (
        <>
            <div id="main">
                <BarraLateral/>
                <div id="telaDeInformacao">
                    <div id='informacoes'>
                        <div id='nomeCompleto'>
                            <div id='primeiroNome'>
                                <label htmlFor="">Primeiro Nome: </label>
                                <input type="text" name="" id="" />
                            </div>
                            <div id='segundoNome'>
                                <label htmlFor="">Segundo Nome: </label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <label htmlFor="">Email: </label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Senha: </label>
                        <input type="text" name="" id="" />
                        <button>Alterar</button>
                    </div>
                    <div id="imagem">
                        <img src="https://th.bing.com/th/id/OIP.uUUVbh4KXlPYRGZiXXiTbgHaJF?rs=1&pid=ImgDetMain" alt="" />
                        <button>Alterar imagen</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TelaPerfil