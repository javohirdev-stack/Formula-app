import Header from "./Header";
import '../styles/Subject.css'
import SubjectCard from "./subjectCard/SubjectCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Subject = ({ Left }) => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        SubjectGET()
    }, [])


    const SubjectGET = () => {
        axios.get('http://apiphysics.dilshodbaxriddinov.uz/api/v1/science-list/')
            .then(res => {
                setInfo(res.data)
                console.log(res.data);
                setLoading(false)
            })
            .catch(er => {
                console.log('errror');
            })
        setLoading(true)

    }
    return (<>
        <Header Ball={info} />
        {loading === true
            ? <div className='startBlok'>
                <div className='loading'></div>
                <i className="fas fa-user-graduate"></i>
            </div>
        :<div></div>    
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