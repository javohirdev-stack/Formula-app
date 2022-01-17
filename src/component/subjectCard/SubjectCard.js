import { Link } from "react-router-dom";
import './SubjectCard.css'
const SubjectCard=({Ball, name, img})=>{
    return(<>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 subCard">
        <div className="Card">
            <img src={img} alt="" />
            <Link className="link" to={`/subject/${name}`} >
                <button>{name}</button>
                </Link>
        </div>
    </div>
    </>);
}
export default SubjectCard;