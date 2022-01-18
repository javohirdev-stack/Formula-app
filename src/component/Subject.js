import Header from "./Header";
import '../styles/Subject.css'
import SubjectCard from "./subjectCard/SubjectCard";
const Subject = ({Left}) => {

    const info =[
        {
            id:1,
            name:"Matematika",
            img: "https://img.okezone.com/content/2022/01/07/65/2528786/catat-ini-jurusan-yang-tidak-memiliki-mata-kuliah-matematika-YDZZZEPxM0.jpg"
        },
        {
            id:2,
            name:"Fizika",
            img: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/6ba3fd0369c7c3181d1ba35c74b7ddcc.jpeg"
        },
        {
            id:3,
            name:"Kimyo",
            img: "https://kimyo.uz/front/images/about.png"
        }
    ]
    

    return (<>
        <Header Ball={info} />

        <section className="Subject Subje">
           
            <div className="rightBlok">
                <div className="row">
                 {info.map((item, index)=>(
                     <SubjectCard
                     key={index}
                     Ball={item.id}
                     name={item.name}
                     img={item.img}
                     />
                 ))}
                  
                </div>
            </div>
            
        </section>
    </>);
}
export default Subject;