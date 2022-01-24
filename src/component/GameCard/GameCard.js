import './GameCard.css'

const GameCard = ({ img, id }) => {


    return (<>
     
            <div className="GameCard">
                <img src={'http://apiphysics.dilshodbaxriddinov.uz/media/'+img} alt="" />
            </div>
      
    </>);
}
export default GameCard;