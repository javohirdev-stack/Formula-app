
import '../styles/Header.css'

const Header = () => {
    return (<>
        <header className="header">
            <nav>
             <div className="container">
                 <div className="row d-flex justify-content-between">
                     <div>
                         <img src="	https://new.prep.uz/static/media/logo.6fc634c2.svg" alt="logo" />
                     </div>
                     <div>
                         <button className="kirish">Kirish</button>
                     </div>
                 </div>
             </div>
            </nav>
        </header>
    </>);
}
export default Header;