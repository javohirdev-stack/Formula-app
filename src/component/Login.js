import React, { useState } from 'react'
import Header from "./Header";
import '../styles/Login.css'
import ReactPhoneInput from 'react-phone-input-2'

const Login = () => {
    const [phoneuz, setPhoneuz] = useState()
    const [h, setH] = useState()
    const [loginActiv, setLoginActiv] = useState(0)
    const [loginUp, setLoginUp] = useState(0)

    return (<>
        <Header />
        <section className="Login">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 d_None">
                        <img src="	https://new.prep.uz/static/media/login.dced2258.svg" alt="" />
                    </div>

                    <div className="col-lg-6">
                        <div className="login_blok">

                            {loginActiv === 0

                                ?
                                <div className="logins">
                                    <h2>Kirish</h2>

                                    <span>Telefon raqam</span>
                                    <ReactPhoneInput
                                        value={phoneuz}
                                        onChange={phoneuz => {
                                            if (phoneuz.length > 3) {
                                                setPhoneuz(phoneuz);
                                            } else {
                                                if (h == 1) {
                                                    setPhoneuz('+998');
                                                    setH(2);
                                                } else {
                                                    setPhoneuz('998');
                                                    setH(1);
                                                }
                                            }

                                        }}
                                        inputExtraProps={{
                                            name: "Uz phone number",
                                            required: true,
                                            autoFocus: true
                                        }}
                                        country={"uz"}
                                        onlyCountries={["uz"]}
                                        masks={{ uz: ' (..) ...-..-..' }}
                                        placeholder={'+998 (__) ___-__-__'}
                                        autocomplete="off"
                                        name="phone"

                                    />
                                    <div className='d-flex justify-content-between'>
                                        <span>Parol</span>
                                        <span className='text-secondary '
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setLoginActiv(2)}
                                        >Parolni unutdingizmi?</span>
                                    </div>

                                    <input type="password" />
                                    <button className='sendLogin'>
                                        Kirish
                                    </button>
                                    <h5>Ro'yhatdan o'tganmisiz? 
                                        <span
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setLoginActiv(1)}>Ro'yhatdan o'ting </span></h5>
                                </div>

                                : loginActiv === 1
                                    ?
                                    <div>
                                        {loginUp === 0
                                            ?
                                            <div className="logins">
                                                <h2>Ro'yhatdan o'tish</h2>
                                                <h4>Telefon raqamni tastiqlash</h4>
                                                <span>Telefon raqam</span>
                                                <ReactPhoneInput
                                                    value={phoneuz}
                                                    onChange={phoneuz => {
                                                        if (phoneuz.length > 3) {
                                                            setPhoneuz(phoneuz);
                                                        } else {
                                                            if (h == 1) {
                                                                setPhoneuz('+998');
                                                                setH(2);
                                                            } else {
                                                                setPhoneuz('998');
                                                                setH(1);
                                                            }
                                                        }

                                                    }}
                                                    inputExtraProps={{
                                                        name: "Uz phone number",
                                                        required: true,
                                                        autoFocus: true
                                                    }}
                                                    country={"uz"}
                                                    onlyCountries={["uz"]}
                                                    masks={{ uz: ' (..) ...-..-..' }}
                                                    placeholder={'+998 (__) ___-__-__'}
                                                    autocomplete="off"
                                                    name="phone"
                                                />

                                                <button className='sendLogin' onClick={() => setLoginUp(1)}>
                                                    Davom Etqazish
                                                </button>
                                                <h5>Ro'yhatdan o'tganmisz?<span
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setLoginActiv(0)}> Kirish</span> </h5>
                                            </div>

                                            : loginUp === 1
                                                ?
                                                <div className="logins">
                                                    <h2>Ro'yhatdan o'tish</h2>
                                                    <h4>Sms kodini tastiqlash</h4>
                                                    <span>Quyidagi raqamga Sms kod yuborildi</span>
                                                    <input type="number" />

                                                    <button className='sendLogin' onClick={() => setLoginUp(2)}>
                                                        Davomi
                                                    </button>
                                                </div>

                                                : loginUp === 2
                                                    ?
                                                    <div className="logins">
                                                        <h2>Ro'yhatdan o'tish</h2>
                                                        <h4>Sms kodini tastiqlash</h4>
                                                        <span>Quyidagi raqamga Sms kod yuborildi</span>
                                                        <input type="number" />

                                                        <button className='sendLogin' onClick={() => setLoginUp(2)}>
                                                            Davomi
                                                        </button>
                                                    </div>
                                                    : <div></div>}

                                    </div>

                                    : loginActiv == 2 ?
                                        <div className="logins">
                                            <h2>Parolni tiklash</h2>

                                            <span>Telefon raqam</span>
                                            <ReactPhoneInput
                                                value={phoneuz}
                                                onChange={phoneuz => {
                                                    if (phoneuz.length > 3) {
                                                        setPhoneuz(phoneuz);
                                                    } else {
                                                        if (h == 1) {
                                                            setPhoneuz('+998');
                                                            setH(2);
                                                        } else {
                                                            setPhoneuz('998');
                                                            setH(1);
                                                        }
                                                    }

                                                }}
                                                inputExtraProps={{
                                                    name: "Uz phone number",
                                                    required: true,
                                                    autoFocus: true
                                                }}
                                                country={"uz"}
                                                onlyCountries={["uz"]}
                                                masks={{ uz: ' (..) ...-..-..' }}
                                                placeholder={'+998 (__) ___-__-__'}
                                                autocomplete="off"
                                                name="phone"

                                            />

                                            <button className='sendLogin'>
                                                Tasdiqlash
                                            </button>
                                            <h5>Oldinroq ro'yhatdan o'ganmisiz?

                                                <span
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setLoginActiv(0)}>Kirish</span>


                                            </h5>
                                        </div>
                                        : <div></div>}


                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>);
}
export default Login;