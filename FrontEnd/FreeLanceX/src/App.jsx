import './App.css'

function App() {

  return (
    <>
      <div id="main">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
