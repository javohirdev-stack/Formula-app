
import axios from "axios";
import { useState, useEffect } from "react";
import { token, Url } from "../../helpers/URL";
import Header from "../Header";
import LeftMenu from "./LeftMenu";
import './Profile.css'
const Profile = () => {
    let prof = 'prof'
    //profile information 
    const [profile, setProfile]=useState([])

    useEffect(()=>{
      Profile()
    }, [])
    const Profile=()=>{
        axios.get(Url+'api/v1/reg/', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(res=>{
            console.log(res);
            console.log('salom');
        })
        
    }
    return (<>
        <Header prof={prof} />

       
        <section className="Profile">

            <LeftMenu />

            <div className="rightmenu">
                <div className="container-fluid mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-sm-9">
                            <div className="card p-3 py-4">
                                <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" /> </div>
                                <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                    <h5 className="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>);
}
export default Profile;