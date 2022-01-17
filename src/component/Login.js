import React, { useState } from 'react'
import Header from "./Header";
import '../styles/Login.css'
const Login = () => {
    const [phoneuz, setPhoneuz] = useState()
    const [h, setH]=useState()
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
                                <span>Parol</span>
                                <input type="password" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default Login;