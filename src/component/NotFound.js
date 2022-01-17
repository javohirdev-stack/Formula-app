import { Link } from 'react-router-dom';
import '../styles/NotFound.css'
const NotFound = () => {
    return (<>
        <section className="NotFound">
              <Link className='Links' to='/'> Orqaga</Link>
            <img src="https://vectorforfree.com/wp-content/uploads/2020/07/Error-404.png" alt="vector" />

        </section>
    </>);
}
export default NotFound