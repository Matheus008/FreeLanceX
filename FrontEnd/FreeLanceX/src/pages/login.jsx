import './login.css';
function Login() {

    return (
        <>
            <div id='main'>
                <div id="login">
                    <div id="titulo"><h1>FreeLanceX</h1>
                    </div>
                    <div id="email">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div id="senha">
                        <label htmlFor="">Senha</label>
                        <input type="password" />
                    </div>
                    <div id="btn">
                        <div id="btnEntrar">
                            <a href="#">Entrar</a>
                        </div>
                        <div id="aCadastrar">
                            Não está cadastrado? <a href="#">Cadastrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login