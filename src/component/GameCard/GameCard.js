import './GameCard.css'
import {Url} from '../../helpers/URL' 
const GameCard = ({ img, id }) => {


    return (<>
     
            <div className="GameCard">
                <img src={Url+'media/'+img} alt="" />
            </div>
      
    </>);
}
export default GameCard;