import Header from "./Header";
import '../styles/Home.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {

    function opacity() {
        document.getElementById('startBlok').style.display='none'
    }
    setTimeout(() => {
        opacity()
    }, 2000)
    return (<>
        <Header />
        {/* Game Strat blok */}
        <div id="startBlok" className='startBlok'>
            <div className='loading'></div>
            <i className="fas fa-user-graduate"></i>
        </div>
        {/* Game Strat blok */}
        <main className="Home">

            <div className="text">
                <h1>To'g'risi, ko'proq qog'oz va daftar olib, keyin boshlang.</h1>
                <Link to='/subject'>
                    <button className={'tayyorman'}>Tayyorman</button>
                </Link>
            </div>

        </main>
    </>);
}
export default Home;