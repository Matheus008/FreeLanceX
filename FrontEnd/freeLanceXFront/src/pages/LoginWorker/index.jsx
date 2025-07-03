import './loginWorker.css';

import { Link } from 'react-router-dom';

import { useState } from 'react'

import { toast } from 'react-toastify'; 

export default function LoginWorker() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(e) {
        e.preventDefault();

        if(email === '' || password == '') {
            toast.info("Preencha os campos email e senha!!")
            return;
        }
    }

    return(
        <>
        <div className="container-center">
            <div className="login">
                <form onSubmit={handleSignIn}>
                    <h1 className="tituloSignIn">Entrar como Trabalhador</h1>
                    <input type="email" placeholder="Email" value={email}  onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit">Entrar</button>
                    <div className='bottomSignIn'>
                    <Link>Não possui conta?</Link>
                    <Link to="/">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}