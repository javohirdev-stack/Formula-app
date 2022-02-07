import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { Url, token } from "../../helpers/URL";
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

const TeacherResul = () => {

    const [teacher, setTeacher] = useState([])
    const [loader, setLoader] = useState(false)
    //eror 
    const [eror, setEror] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [science, setScience] = useState()
    const [userbal, setUserbal] = useState()
    //SCinceLust state 
    const [ScienceLists, setScienceLists]=useState([])
    //search 
    const [search, setSearch]=useState()
    
    useEffect(() => {
        Teach()
        ScinceList()
    }, [userbal, science, search])

    
    

    const Teach = () => {
        let p = ''
        setLoader(true)
        if (science) {
            if(science==='no'){
                p += ' '
            }else{
                p += '&science=' + science
            }
            
        }
        if (userbal) {

           p+= "&ordering=" + userbal
        }
        if(search){
            p+='&search='+search
        }
        console.log(Url + 'api/v1/all-results/' + p);
        axios.get(Url + 'api/v1/all-results/?'+p, {
            headers: {
                Authorization: 'Bearer ' + token()
            }
        })
            .then(res => {
                setTeacher(res.data)
                setLoader(false)
                if (res.data.length === 0) {
                    setEmpty(true)
                } else {
                    setEmpty(false)
                }
            })
            .catch(er => {
                setEror(true)
            })

    }

    // SCIENCE LIST 
    const ScinceList=()=>{
        axios.get(Url+'api/v1/science-list/', {
            headers: {
                Authorization: 'Bearer ' + token()
            }
        })
        .then(res=>{
            setScienceLists(res.data)
        })
    }

   

    let prof = 'prof'


    return (<>
        <Header prof={prof} />

        <section className="rightmenu">
            <div className="container">
                <div className="col-lg-7">
                    <div className="result">

                        <nav className="d-flex justify-content-between">
                             
                            <Link to='/results'>
                                <button>
                                    orqaga
                                </button>
                            </Link>
                            {/* ---------max and min ball sort----------- */}
                            <select placeholder="Sort"  name="user" onChange={(e) => setUserbal(e.target.value)}>
                               <option selected>All</option>
                                <option value={'-userball'}>max</option>
                                <option value={'userball'}>min</option>
                            </select>
                            {/* ----------science sort------------ */}
                            <select
                              placeholder="Filtr"
                                onChange={(e) => setScience(e.target.value)}
                                className="but" >
                                 <option selected value='no'> All</option>
                                {ScienceLists.map((item, index) => (
                                    <option
                                        className="but"
                                        value={item.id}
                                    >
                                        {item.name}

                                    </option>
                                ))}
                            </select>


                        </nav>

                        {empty === true
                            ? <div className="d-flex flex-column align-items-center">
                                <h5>Hozircha Natijalaringiz yoq!</h5>
                                <img className="images" src="https://thumbs.dreamstime.com/b/clipboard-checklist-icon-symbol-web-site-app-design-vector-illustration-isolated-background-illstration-180777338.jpg" alt="vector" />

                            </div>
                            : <div></div>}
                        {eror === true
                            ? <div className=" d-flex justify-content-center">
                                <h4>Internetga Ulaning!</h4>
                            </div>

                            : <div>
                                {loader === true

                                    ? <div className=" d-flex justify-content-center">
                                     <div className="spiner"></div>
                                    </div>

                                    : <div>
                                        {teacher.map((item, index) => (
                                            <div className="d-flex justify-content-between text">
                                                <p>{item.user_name}</p>
                                                <p>{item.science_name}</p>
                                                <p>{item.maxball} tadan / {item.userball}</p>
                                                <p style={{ fontSize: '12px', color: 'gray' }}><Moment format="HH:mm">
                                                    {item.created_at}
                                                </Moment>
                                                    <span style={{ marginLeft: '10px' }}>
                                                        <Moment format="MM/DD">
                                                            {item.created_at}
                                                        </Moment>
                                                    </span>

                                                </p>

                                            </div>

                                        ))}
                                    </div>
                                }
                            </div>

                        }


                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default TeacherResul;