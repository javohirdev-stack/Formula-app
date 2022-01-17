import Header from "./Header";
import '../styles/Subject.css'
const Subject = () => {
    const info = {
        title: 0
    }


    return (<>
        <Header Ball={info} />

        <section className="Subject">
            <div className="leftBlok"></div>
            <div className="rightBlok"></div>
        </section>
    </>);
}
export default Subject;