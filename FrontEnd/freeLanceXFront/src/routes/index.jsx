import { Route, Routes} from 'react-router-dom';

import PageWorkerOrUser from '../pages/PageWorkerOrUser';
import LoginWorker from '../pages/LoginWorker';

function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <PageWorkerOrUser/> }/>
            <Route path='/loginworker' element={ <LoginWorker/> }/>
        </Routes>
    )
}

export default RoutesApp;