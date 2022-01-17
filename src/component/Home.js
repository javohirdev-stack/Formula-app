import Header from "./Header";
import '../styles/Home.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (<>
        <Header />
        
        <main className="Home">
         
                 <div className="text">
                     <h1>To'g'risi, ko'proq qog'oz va daftar olib, keyin boshlang.</h1>
                     <Link to='/login'>
                       <button className={'tayyorman'}>Tayyorman</button>
                     </Link>
                 </div>
         
        </main>
    </>);
}
export default Home;