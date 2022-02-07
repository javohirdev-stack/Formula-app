
import axios from "axios";
import { useState, useEffect } from "react";
import { token, Url } from "../../helpers/URL";
import Header from "../Header";
import LeftMenu from "./LeftMenu";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import _ from 'lodash'
import './Profile.css'
const Profile = () => {
    let prof = 'prof'
    //profile information 
    const [profile, setProfile] = useState([])

    //error 
    const [eror, seteror] = useState(false)
    //loader 
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        Profile()
    }, [])
    const Profile = () => {
        setLoader(true)
        axios.get(Url + 'api/v1/my-paige/', {
            headers: {
                Authorization: 'Bearer ' + token()
            }
        })
            .then(res => {
                setProfile(res.data)
                setLoader(false)
            })
            .catch(er => {
                seteror(true)
                setLoader(false)

            })
        console.log(profile);
    }
    return (<>
        <Header prof={prof} />


        <section className="Profile">

            <LeftMenu />

            <div className="rightmenu">
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-sm-9">
                            <div className="card p-3 py-4">
                                {eror === true
                                    ? <div className=" d-flex justify-content-center">
                                        <h4>Internetga Ulaning!</h4>
                                    </div>
                                    : <div>
                                        {loader === true

                                            ? <div className=" d-flex justify-content-center">
                                               <div className="spiner"></div>
                                            </div>


                                            : <>
                                                <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" /> </div>
                                                <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                                    <h5 className="mt-2 mb-0">{_.get(profile, '[0]', []).username}</h5> <span>+{_.get(profile, '[0]', []).phone}</span>
                                                    <div className="px-4 mt-1">
                                                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                    </div>
                                                    <ul className="social-list">
                                                        <li><i className="fab fa-facebook"></i></li>
                                                        <li><i className="fab fa-dribbble"></i></li>
                                                        <li><i className="fab fa-instagram"></i></li>
                                                        <li><i className="fab fa-linkedin"></i></li>
                                                        <li><i className="fab fa-google"></i></li>
                                                    </ul>
                                                    <div className="buttons"> <button className="btn btn-outline-primary px-4">Message</button> <button className="btn btn-primary px-4 ms-3">Contact</button> </div>
                                                </div>
                                            </>
                                        }
                                    </div>

                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>);
}
export default Profile;