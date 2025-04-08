import "./cadastrar.css"

function Cadastrar() {
    return (
        <>
            <div id="main">
                <div id="cadastro">
                    <div id="titulo">
                        <h1>FreeLanceX</h1>
                    </div>
                    <div id="nomeCompleto">
                        <div id="primeiroNome">
                            <label htmlFor="">Primeiro Nome</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div id="segundoNome">
                            <label htmlFor="">Segundo Nome</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div id="email">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div id="senha">
                        <label htmlFor="">Senha</label>
                        <input type="password" />
                    </div>
                    <div id="btnCadastrar">
                        <a href="#">Cadastrar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastrar