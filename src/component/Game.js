import '../styles/Game.css'
import Header from './Header';
import '../styles/Subject.css'
import GameCard from './GameCard/GameCard';

const statistica = [
    {
        name: "samar"
    }
]
const formula = [
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    },
    {
        name: "Tezlik"
    }
]
const Game = () => {
    return (<>
        <Header Ball={statistica} game={statistica} />

        <section className="Subject">
            <div className="leftBlok">
                <ul>
                    {formula.map((item, index) => (

                        <li >{item.name}</li>

                    ))}
                </ul>

            </div>

            <div className="rightBlok">
                <div className="row">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    
                </div>
            </div>

        </section>
    </>);
}
export default Game;