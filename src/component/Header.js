import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
const Header = () => {
    return (<>
        <header className="header">
            <nav>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div>
                            <Link to='/'>
                                <img src="	https://new.prep.uz/static/media/logo.6fc634c2.svg" alt="logo" />
                            </Link>
                        </div>
                        <div>
                            <Link to='/login'>
                                <button className="kirish" >Kirish </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>);
}
export default Header;