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
    const [phoneuz, setPhoneuz] = useState('')
    const [phoneuz1, setPhoneuz1] = useState('')
    const [pasword, setPasword] = useState('')
    const [pasword1, setPasword1] = useState('')

    //registrationc
    const [FISH, setFISH] = useState('')
    const [ReturnPas, setReturnPas] = useState('')
    //ERROr 
    const [errorNumber, setErrorNumber] = useState(false)
    const [errorNumber1, setErrorNumber1] = useState(false)
    const [errorFISh, setErrorFISH] = useState(false)
    const [errorpassword, setErrorPassword] = useState(false)
    const [errorpassword1, setErrorPassword1] = useState(false)
    const [errorpassword2, setErrorPassword2] = useState(false)
    const [errorModal, setErrorModal] = useState(false)

    //navigate 
    const Navigate = useNavigate()

    //loader 
    const [loader, setLoader] = useState(false)
    const [loaders, setLoaders] = useState(false)

    console.log(phoneuz)
    const LoginPost = () => {

        let b = true

        if (phoneuz1.length === 0 || phoneuz1.length < 12) {
            b = false
            setErrorNumber1(true)
        }
        if (pasword1.length < 8|| pasword1.length===0) {
            b = false
            setErrorPassword1(true)
        }
        if (b) {
            setLoaders(true)
            axios.post(Url + "login/", {
                phone: phoneuz1,
                password: pasword1
            })

                .then(res => {
                    const token = res.data.token
                    localStorage.setItem("token", token)
                    Navigate('/subject')
                })
                .catch(er => {
                    setErrorModal(true)
                    setLoaders(false)

                })
        }

    }


    //SEND POST 
    const SendPost = () => {
        let b = true
        if (phoneuz.length < 12 || phoneuz.length === 0) {
            b = false
            setErrorNumber(true)
        }
        if (FISH.length < 5) {
            b = false
            setErrorFISH(true)
        }
        if (pasword.length < 8 || pasword.length === 0) {
            b = false
            setErrorPassword(true)
        }
        if (ReturnPas !== pasword) {
            b = false
            setErrorPassword2(true)
        }

        if (b) {
            setLoader(true)

            axios.post(Url + 'api/v1/reg/', {
                fullname: FISH,
                phone: phoneuz,
                password: pasword,
                password2: ReturnPas
            })
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    console.log(res.data);
                    Navigate('/subject')
                })
                .catch(er => {
                    setLoader(false)
                })
        }

    }

    return (<>
        <Header />

        {/* //error modal  */}

        {errorModal === true
            ? <div onClick={() => { setErrorModal(false); }} className="modal">
                <div className="modal_blo">
                <i className="fas fa-exclamation-circle"></i>
                    <h1>Ma'lumot topilmadi qaytadan harakat qiling!</h1>
                </div> </div>
            : <div></div>
        }

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
                                        value={phoneuz1}
                                        onChange={phoneuz1 => {
                                            if (phoneuz1.length > 3) {
                                                setPhoneuz1(phoneuz1);
                                            } else {
                                                if (h == 1) {
                                                    setPhoneuz1('+998');
                                                    setH(2);
                                                } else {
                                                    setPhoneuz1('998');
                                                    setH(1);
                                                }
                                            }
                                            setErrorNumber1(false)
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

                                    {errorNumber1 === true ? <small style={{ color: 'red' }}>tel number yozing!</small> : <small></small>}

                                    <div className='d-flex justify-content-between'>
                                        <span>Parol</span>
                                        <span className='text-secondary '
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setLoginActiv(2)}
                                        >Parolni unutdingizmi?</span>
                                    </div>

                                    <input type="password" onChange={(e) => { setPasword1(e.target.value); setErrorPassword1(false) }} />
                                    {errorpassword1 === true ? <small style={{ color: 'red' }}>To'g'ri kiriting!</small> : <small></small>}

                                    {loaders === true
                                        ? <button className=' sendLogin' onClick={() => setLoginUp(1)}>
                                            <div className='loader'></div>
                                        </button>
                                        : <button
                                            onClick={() => LoginPost()}
                                            className='btn sendLogin'>
                                            Kirish
                                        </button>
                                    }
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
                                            <input type="text" onChange={(e) => { setFISH(e.target.value); setErrorFISH(false) }} />
                                            {errorFISh === true ? <small style={{ color: 'red' }}>Ismingizni Yozing!</small> : <small></small>}

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
                                            <span>Parol (kamida 8 ta belgi)</span>
                                            <input type="password" onChange={(e) => { setPasword(e.target.value); setErrorPassword(false) }} />
                                            {errorpassword === true ? <small style={{ color: 'red' }}>mukammalroq parol kirting!</small> : <small></small>}


                                            <span>Parolni takrorlang</span>
                                            <input type="password" onChange={(e) => { setReturnPas(e.target.value); setErrorPassword2(false) }} />
                                            {errorpassword2 === true ? <small style={{ color: 'red' }}>parolni noto'g'ri kiritdingiz!</small> : <small></small>}


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