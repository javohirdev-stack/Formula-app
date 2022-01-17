import Header from "./Header";
import '../styles/Home.css'
const Home = () => {
    return (<>
        <Header />
        <main className="Home">

         
                 <div className="text">
                     <h1>To'g'risi, ko'proq qog'oz va daftar olib, keyin boshlang.</h1>
                     <button className={'tayyorman'}>Tayyorman</button>
                 </div>
         
        </main>
    </>);
}
export default Home;