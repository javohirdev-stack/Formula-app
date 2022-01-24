import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = ({ Ball, game }) => {
    const [logout, setLogOut] = useState(false)
    return (<>
        <header className="header">
            <nav>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div>
                            <Link to='/'>
                                <img style={{width:'60px'}} src="https://i.pinimg.com/originals/92/cb/5c/92cb5cc5b5e1c4aae4c052ed0696dcb2.png" alt="logo" />
                            </Link>
                        </div>
                     
                        {game ?
                            <div className='Ball'>
                                <span className='xato'>{Ball.title}</span>
                                <span className="togri">{Ball.title}</span>
                            </div>
                            : <div></div>}
                        {Ball ?
                        
                            <>
                                <div className='avatar'> <i
                                    onClick={() => setLogOut(!logout)}
                                    className="far fa-user-circle"></i>
                                    {logout === true ?
                                        <span>
                                            <i class="fas fa-sign-out-alt"></i>Log Out
                                        </span>
                                        
                                        : <i></i>
                                    }
                                </div>

                            </>


                            :
                            <div>
                                <Link to='/login'>
                                    <button className="kirish" >Kirish </button>
                                </Link>
                            </div>
                        }

                    </div>
                </div>
            </nav>
        </header>
    </>);
}
export default Header;