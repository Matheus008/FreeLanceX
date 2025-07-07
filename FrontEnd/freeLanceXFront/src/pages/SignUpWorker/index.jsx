import { Link } from "react-router-dom"

import { useState } from "react"
import { toast } from "react-toastify";

export default function SignUp() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister(e) {
        e.preventDefault();
        
        if(nome === '' && email === '' && password === '') {
            toast.info("Preencha os campos para fazer o registro");
            return;
        }
        
    } 

    return(
        <>
        <div className="container-center">
            <div className="login">
                <form onSubmit={handleRegister}>
                    <h1>Registrar Usuários</h1>

                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit">Cadastrar</button>
                    <div className="bottomSignIn">
                        <Link to="/">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
} 