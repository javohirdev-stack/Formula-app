import Header from "../Header";
import LeftMenu from "./LeftMenu";
import './Profile.css'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { useState } from "react";
import axios from "axios";
import Moment from 'react-moment';
import { Url, token } from "../../helpers/URL";
import { useEffect } from "react";
import { result } from "lodash";
const Result = () => {
    let prof = 'prof'
    const [obect, setObect] = useState(true)

    //result 
    const [Result, setResult] = useState([])

    const [id, setId] = useState()

    //loader 
    const [loader, setloader] = useState(false)
    //error 
    const [eror, setEror] = useState(false)
    const [empty, setEmpty] = useState(false)
    const but = [
        {
            id: 1,
            name: 'Hammasi'
        },
        {
            id: 2,
            name: 'Fizika'
        },
        {
            id: 3,
            name: 'Kimyo'
        },
        {
            id: 4,
            name: 'Algebra'
        },
        {
            id: 5,
            name: 'Informatika'
        }
    ]

    useEffect(() => {
        ResultApi()
    }, [])

    const ResultApi = () => {
        setloader(true)
        axios.get(Url + 'api/v1/my-results/', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                setResult(res.data)
                setloader(false)
                if (res.data.length===0) {
                    setEmpty(true)
                } else {
                    setEmpty(false)
                }
            })
            .catch(er => {
                setEror(true)
                setloader(false)
            })
        console.log(Result);

    }

    return (<>
        <Header prof={prof} />
        <section className="Profile">
            <LeftMenu />

            <div className="rightmenu">

                {obect === true
                    ? <div className="container-fluid">
                        <div className="row ">
                            <div className="col-lg-8 mx-auto">
                                <div className="result">
                                    <nav className="d-flex justify-content-between">
                                        {but.map((item, index) => (
                                            <button style={id === item.id ? { background: 'blue' } : {}} onClick={() => setId(item.id)}>
                                                {item.name}
                                            </button>
                                        ))}
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
                                                    <ChakraProvider>
                                                        <Spinner
                                                            thickness='4px'
                                                            speed='0.65s'
                                                            emptyColor='gray.200'
                                                            color='blue'
                                                            size='lg'

                                                        />
                                                    </ChakraProvider>
                                                </div>

                                                : <div>
                                                    {Result.map((item, index) => (
                                                        <div className="d-flex justify-content-between text">
                                                            <p>{item.science_name}</p>
                                                            <p>{item.maxball} tadan / {item.userball}</p>
                                                            <p style={{ fontSize: '12px', color: 'gray' }}><Moment format="HH:mm">
                                                                {item.created_at}
                                                            </Moment>
                                                                <span style={{marginLeft:'10px'}}>
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
                    </div>

                    : <img className="images" src="https://www.clipartkey.com/mpngs/m/73-734036_kind-clipart-graduation-graduate-kids-png.png" alt="vector" />
                }
            </div>


        </section>
    </>);
}
export default Result;