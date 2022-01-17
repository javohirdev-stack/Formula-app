
import {Route, Routes} from 'react-router-dom'
import Game from '../component/Game';
import Home from '../component/Home';
import Login from '../component/Login';
import NotFound from '../component/NotFound';
import Subject from '../component/Subject';
const RouterF=()=>{
    return(<>
     <Routes>
     <Route  path={'/'} element={<Home/>} />
     <Route path={'/login'} element={<Login/>} />
     <Route path={'/subject'} element={<Subject/>} />
     <Route path={'/subject/:name'} element={<Game/>} />
     <Route path={'/:name'} element={<NotFound/>} />
     </Routes>
    </>);
}
export default RouterF;