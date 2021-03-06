import { Link } from "react-router-dom";
import './SubjectCard.css'
const SubjectCard=({id, name, img, slug})=>{
      


    return(<>
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 subCard">
        <div className="Card">
            <img src={img} alt="" />
            <Link to={`/subject/${slug}`} className="link"  >
                <button>{name}</button>
                </Link>
        </div>
    </div>
    </>);
}
export default SubjectCard;