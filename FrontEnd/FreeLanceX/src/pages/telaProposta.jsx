import './telaProposta.css';
import BarraLateral from '../componentes/barraLateral'

function TelaProposta() {
    return (
        <div id="main">
            <BarraLateral />
            <div id="telaDeProposta">
                <a href='#' id="proposta">
                    <div id="imagemContratante">
                        <img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2014/05/15/mundoexpectativavidagetty02.jpg" alt="" />
                    </div>
                    <div id="informacoes">
                        <div id="descricao">
                            <label htmlFor="">Descrição:</label>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis ducimus voluptas aliquam totam debitis unde, amet quaerat natus nesciunt eveniet esse, alias quo dolor doloribus vero vitae, sint repellendus!
                            </div>
                        </div>
                        <div id="valorStatus">
                            <label htmlFor="">Valor: $500 p/h</label>
                            <label htmlFor="" >Status: Contra Proposta</label>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TelaProposta;