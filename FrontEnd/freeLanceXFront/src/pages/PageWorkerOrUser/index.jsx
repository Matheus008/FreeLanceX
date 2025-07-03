import './pageWorkerOrUser.css';

import { Link } from 'react-router-dom';

export default function PageWorkerOrUser() {
    return(
        <>
        <div className="container-center">
            <div className='login'>
                <h1>Bem vindo ao FreelanceX</h1>
                <Link className='btn' to="/loginworker">Sou trabalhador</Link>
                <Link className='btn'>Sou usuário</Link>
            </div>
        </div>
        </>
    )
}