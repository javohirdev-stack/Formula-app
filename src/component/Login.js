import React, { useState } from 'react'
import Header from "./Header";
import '../styles/Login.css'
import ReactPhoneInput from 'react-phone-input-2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Url } from '../helpers/URL';
const Login = () => {

    const [h, setH] = useState()
    const [loginActiv, setLoginActiv] = useState(0)
    const [loginUp, setLoginUp] = useState(0)

    //login state 
    const [phoneuz, setPhoneuz] = useState()
    const [pasword, setPasword] = useState()

    //ERROr 
    const [errorNumber, setErrorNumber] = useState(false)
    //navigate 
    const Navigate = useNavigate()

    //loader 
    const [loader, setLoader] = useState(false)

    const LoginPost = () => {

        axios.post("http://apiphysics.dilshodbaxriddinov.uz/login", {
            phone: phoneuz,
            password: pasword
        })

            .then(res => {
                const token = res.data.token
                localStorage.setItem("token", token)
                Navigate('/subject')
            })
    }

    //SEND POST 
    const SendPost = () => {
        let b = true

        if (phoneuz.length < 12) {
            b = false
            setErrorNumber(true)
        }
    }
    return (<>
        <Header />
        <section className="Login">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 d_None">
                        <img style={{ objectFit: 'cover' }} src="https://www.pngitem.com/pimgs/m/623-6230347_registration-online-vector-png-transparent-png.png" alt="" />
                    </div>

                    <div className="col-lg-6 col-md-12 d_None2">
                        <div className="login_blok">

                            {loginActiv === 0

                                ?
                                <div className="logins">
                                    <h2>Kirish</h2>
                                    <span>Phone number</span>


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

                                    <input type="password" onChange={(e) => setPasword(e.target.value)} />

                                    <button
                                        onClick={() => LoginPost()}
                                        className='btn sendLogin'>
                                        Kirish
                                    </button>
                                    <h5>Ro'yhatdan o'tganmisiz?
                                        <span
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => { setLoginActiv(1); }}>Ro'yhatdan o'ting </span>
                                    </h5>

                                </div>

                                : loginActiv === 1
                                    ?
                                    <div>

                                        <div className="logins">
                                            <h2>Ro'yhatdan o'tish</h2>
                                            <h4>Telefon raqamni tastiqlash</h4>
                                            <span>FISH</span>
                                            <input type="text" />
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
                                                    };
                                                    setErrorNumber(false)
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
                                            {errorNumber === true ? <small style={{ color: 'red' }}>tel number yozing!</small> : <small></small>}
                                            <span>Password</span>
                                            <input type="password" />
                                            <span>Return password</span>
                                            <input type="password" />
                                            {loader === true ?
                                                <button className=' sendLogin' onClick={() => setLoginUp(1)}>
                                                    <div className='loader'></div>
                                                </button>

                                                : <button className='btn sendLogin' onClick={() => SendPost()}>
                                                    Yuborish
                                                </button>
                                            }


                                            <h5>Ro'yhatdan o'tganmisz?<span
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setLoginActiv(0)}> Kirish</span> </h5>
                                        </div>


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