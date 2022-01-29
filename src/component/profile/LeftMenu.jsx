import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LeftMenu = () => {
    const [menu, setMenu] = useState(false)
    const [modal, setModal] = useState(false)
    const Navigate =useNavigate()

    const setLogOut = () => {
        localStorage.removeItem('token')
        Navigate('/')
    }
    return (<>

        {modal === true
            ? <div  className="modal"> <div className="modal_blo"><h1>Rostdan ham Hisobdan chiqasizmi?</h1>
                <div className="mt-4">
                    <button style={{background:'red', marginRight:'20px'}} onClick={() => { setModal(false); setLogOut() }}>Ha</button>
                    <button onClick={() => setModal(false)}>Yoq</button>
                </div>
            </div> </div>
            : <div></div>
        }

        <div className={menu === true ? "LeftMenu activ" : "LeftMenu"}>
            <div className="buton">
                <button
                    onClick={() => setMenu(!menu)}
                    className={menu === true ? "menu activmenu" : "menu"}>
                    {menu === true ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>
            </div>


            <ul>
                <NavLink exact className={({ isActive }) => (isActive ? 'inactive' : 'link')} to='/profile' >
                    <li className="headernavTsxt"> Profile</li>
                </NavLink>

                <NavLink exact className={({ isActive }) => (isActive ? 'inactive' : 'link')} to='/results' >
                    <li className="headernavTsxt">Natija</li>
                </NavLink>

              <li
                    onClick={() => setModal(true)}
                    style={{ color: 'red',cursor:'pointer' }} className="headernavTsxt">Chiqish</li>
            </ul>
        </div>
    </>);
}
export default LeftMenu;