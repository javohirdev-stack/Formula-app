import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = ({ Ball, game, prof }) => {
    const [logout, setLogOut] = useState(false)
    return (<>
        <header className="header">
            <nav>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div>
                            <Link to='/'>
                                <img style={{width:'100px'}} src="https://avatars.mds.yandex.net/i?id=b9f54403f379b761cd449fd69675174b-4968891-images-thumbs&n=13" alt="logo" />
                            </Link>
                        </div>
                     
                        {game ?
                            <div className='Ball'>
                                <span className='xato'>{Ball.title}</span>
                                <span className="togri">{Ball.title}</span>
                            </div>
                            : <div></div>}
                        {Ball || prof?
                        
                            <>
                                <div className='avatar'> 
                                <Link to='/profile'>
                                <i className="far fa-user-circle"></i>
                                </Link>
                                   
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