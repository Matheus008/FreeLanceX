import { Route, Routes} from 'react-router-dom';

import PageWorkerOrUser from '../pages/PageWorkerOrUser';
import LoginWorker from '../pages/LoginWorker';
import SignUp from '../pages/SignUp';

function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <PageWorkerOrUser/> }/>
            <Route path='/loginworker' element={ <LoginWorker/> }/>
            <Route path='/register' element={ <SignUp/> }/>
        </Routes>
    )
}

export default RoutesApp;