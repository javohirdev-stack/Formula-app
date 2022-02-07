
import Header from "./Header";
import '../styles/Subject.css'
import SubjectCard from "./subjectCard/SubjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Url, token } from "../helpers/URL";
import '../styles/Game.css'
const Subject = ({ Left }) => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
    
    //errrorModal 
    const [errorModal, setErrorModal] = useState(false)

    useEffect(() => {
        SubjectGET()
    }, [])


    const SubjectGET = () => {
        axios.get(Url + 'api/v1/science-list/', {
            headers: {
                Authorization: 'Bearer ' + token()
            }
        })
            .then(res => {
                setInfo(res.data)
                console.log(res.data);
                setLoading(false)
            })
            .catch(er => {
                console.log('errror');
                setErrorModal(true)
                setLoading(false)
            })
        setLoading(true)

    }

    return (<>
        <Header Ball={info} />

        {errorModal === true
            ? <div
                onClick={() => { setErrorModal(false); window.location = window.location.href }}
                className="modal">
                <div className="modal_blo">
                    <i className="fas fa-exclamation-triangle"></i>
                    <h1>Internet bilan muommo!</h1>
                </div> </div>
            : <div></div>
        }

        {loading === true
            ? <div className='startBlok'>
                <div className='loading'></div>
                <i className="fas fa-user-graduate"></i>
            </div>
            : <div></div>
        }
        <section className="Subject Subje">

            <div className="rightBlok">
                <div className="row">
                    {info.map((item, index) => (
                        <SubjectCard
                            key={index}
                            Ball={item.id}
                            name={item.name}
                            img={item.image}
                            slug={item.slug}
                        />
                    ))}

                </div>

            </div>

        </section>
    </>);
}
export default Subject;