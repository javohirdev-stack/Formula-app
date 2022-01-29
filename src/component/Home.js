import Header from "./Header";
import '../styles/Home.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Home = () => {
    const [links, setLinks] = useState('')

    useEffect(() => {
        TokenT()
    }, [])

    const TokenT = () => {
        if (localStorage.getItem('token')) {
            setLinks('/subject')
        } else {
            setLinks('/login')
        }
    }
    function opacity() {
        document.getElementById('startBlok').style.display = 'none'
    }
    setTimeout(() => {
        opacity()
    }, 600)
    return (<>
        <Header />


        {/* Game Strat blok */}
        <div id="startBlok" className='startBlok'>
            <div className='loading'></div>
            <i className="fas fa-user-graduate"></i>
        </div>
        {/* Game Strat blok */}
        <main className="Home">

            <div className="mask">
                <div className="text">
                    <h1>To'g'risi, ko'proq qog'oz va daftar olib, keyin boshlang.</h1>
                    <Link to={links}>
                        <button
                            className={'tayyorman'}>Tayyorman</button>
                    </Link>
                </div>

            </div>

        </main>
    </>);
}
export default Home;