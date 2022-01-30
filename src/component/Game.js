import { useState, useEffect } from 'react'
import '../styles/Game.css'
import Header from './Header';
import '../styles/Subject.css'
import GameCard from './GameCard/GameCard';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import _, { set, sortedIndex } from 'lodash';
import { createStandaloneToast } from '@chakra-ui/react'
import '../styles/Game.css'
import { token, Url } from '../helpers/URL';

const statistica = [
    {
        name: "samar"
    }
]
const Game = () => {

    const [quest, setQuest] = useState({})
    const [Post, setPost] = useState([])

    const [ball, setBall] = useState([])
    const [savol, setSavol] = useState('')
    const [javob, setJavob] = useState()
    const [formName, setFormName] = useState('')
    const [indexs, setIndex] = useState()
    //tekshiruv
    const [SavolTrue, setSavolTrue] = useState(false)
    const [JavobTrue, setJavobTrue] = useState(false)

    const [bildirish, setBildirish] = useState(true)

    //error modal
    const [errorModal, setErrorModal] = useState(false)
    //restart state 
    const [rest, setRest] = useState(false)

    // loader
    const [loading, setLoading] = useState(false)
    const [butloading, setbutLoading] = useState(false)
    const { name } = useParams()

    // images length 
    const length = _.get(quest, 'images', []).length

    useEffect(() => {
        QuestGET(name)
    }, [])


    const QuestGET = (name) => {
        axios.get(Url + `api/v1/question-list/${name}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                console.log(res.data);
                setQuest(res.data)
                setLoading(false)
            })
            .catch(er => {
                setErrorModal(true)
                setLoading(false)
                console.log('err');
                setBildirish(false)
            })
        setLoading(true)
    }

    //answer post 
    const AnswerPost = () => {
        if (Post.length === length) {
            setbutLoading(true)
            axios.post(Url + 'api/v1/check-answers/', {
                science: name,
                answers: Post
            }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .then(res => {
                    setbutLoading(false)
                    setBall(res.data)
                    console.log(res);
                    setRest(true)
                })
        } else {

            const toast = createStandaloneToast()

            toast({
                title: "Loqayd bo'lmang!",
                description: "Topshiriqni to'liq bajaring!",
                status: 'info',
                duration: 3000,
            })
        }

    }

    //Ppost backend 
    const Pushs = () => {
        setPost([...Post, { id: javob, slug: savol }])
        setJavobTrue(false)
        setSavolTrue(false)
        document.getElementById(javob + "quest").classList.add('cheked')
        document.getElementById(indexs).innerHTML = formName
        document.getElementById(savol).classList.add('cheked')
    }

    console.log(Post);

    return (<>
        <Header Ball={statistica} ball={ball} game={statistica} />

        {/* //errror modal  */}
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

        {bildirish === true ? <div className='modal'> <div className='modal_blo'>
            <i className="fas fa-clipboard"></i>
            <p>Diqqat bilan o'ylab hohlang birinchi formula nomini hohlang rasmini tanlab unga mosini toping!</p>
            <button onClick={() => setBildirish(false)}>ok</button>
        </div></div> : <div></div>}


        {SavolTrue === true && JavobTrue === true ? <div className='modal'>
            <div className='modal_blo'>
                <i className="fas fa-check-circle"></i>
                <h1>Ammalni tasdiqlang!</h1>
                <button className='l ' onClick={() => Pushs()}>Ok</button>
            </div>
        </div> : <div></div>}

        <section className="Subject">
            <div className="leftBlok">
                {_.get(quest, 'names', []).map((item, index) => (
                    <div
                        style={savol === item.slug ? { transform: 'scale(0.9)', transition: '0.30s ease', borderBottom: '3px solid black' } : {}}
                        className='quest' id={item.slug}>
                        <li
                            className='li'
                            onClick={() => { setSavol(item.slug); setSavolTrue(true); setFormName(item.name) }}>{item.name} </li>
                        <div className='chek'></div>
                    </div>

                ))}
            </div>

            <div className="rightBlok">
                <div className="row">
                    {_.get(quest, 'images', []).map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div id={item.id + "quest"}>
                                <div className='chek'> <small id={index}></small></div>
                                <div
                                    style={javob === item.id ? { transform: 'scale(0.9)', transition: '0.30s ease' } : {}}
                                    onClick={() => { setJavob(item.id); setJavobTrue(true); setIndex(index) }} >
                                    <GameCard
                                        img={item.image}
                                    />
                                </div>
                            </div>

                        </div>

                    ))}
                    <div className="col-lg-12 d-flex">

                        <div>
                            {rest === true ? <button
                                onClick={() => window.location = window.location.href}
                                className='btn btns'><i className="fas fa-undo-alt"></i>
                            </button>

                                : <div>
                                    {butloading === true

                                        ? <button className='btn btns' >
                                            <div className='loader'></div>
                                        </button>
                                        : <button onClick={() => AnswerPost()} className='btn btns'>Yuborish</button>
                                    }
                                </div>}

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>);
}
export default Game;