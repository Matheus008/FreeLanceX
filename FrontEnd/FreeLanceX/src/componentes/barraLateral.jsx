import './barraLateral.css'

function BarraLateral() {
    return (
        <div id="barraLateral">
            <div id="imgNome">
                <img src="https://th.bing.com/th/id/OIP.uUUVbh4KXlPYRGZiXXiTbgHaJF?rs=1&pid=ImgDetMain" alt="" />
                <label htmlFor="">Matheus</label>
            </div>
            <div id="info">
                <a href="">Perfil</a>
                <a href="">Proposta</a>
                <a href="">Histórico</a>
            </div>
            <div id="sair">
                <a href="">Sair</a>
                <label htmlFor="">Saldo: $$$$</label>
            </div>
        </div>
    )
}

export default BarraLateral;