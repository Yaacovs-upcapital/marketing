import MediaControlCard from "../../components/card"
import workingteam from "../../assets/images/working-team.jpg";
import blog from "../../assets/images/Blog.png";

import "./blog.css"
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/footer";
import { flexbox } from "@mui/system";
import Navbar from "../../components/navbar";

const Blog = () => {

    const { t } = useTranslation();
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return (
        <div >
           
           <div className=" container mt-3">
					<h1 style={{color:"#2f439a", fontSize:"40pt",textAlign:"right"}}><span style={{color:"red"}}>.</span>מהתקשורת</h1>
					</div>
           <div className="container">
            <div className="row">
               
                {arr.map((item,index)=>(

                    index===2?

                     <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card mt-2" style={{width: "22rem", textAlign:"right"}}>
                    
                    
                    <img src={blog} style={{height:"400px"}} className="img-fluid" alt="..."/>
                        
                    
                    </div>
                    </div>
                    :
                    <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card mt-2" style={{width: "23rem"}}>
                    <img src={workingteam} className="card-img-top" alt="..."/>
                    <div className="card-body" style={{textAlign:"right"}}>
                        <h5 className="card-title" style={{fontFamily:"Leon",fontSize:"18pt", color:"rgb(47,67,155)", fontWeight:"600"}}>דווקא עכשיו רוורס פקטורינג</h5>
                        <p className="card-text" style={{fontFamily:"Leon",fontSize:"14pt", color:"rgb(47,67,155)", fontWeight:"500"}}>בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.</p>
                        <a href="#" className="btn btn-outline-primary">קראו עוד</a>
                    </div>
                    </div>
                    </div>
                ))}
                
            </div>

           </div>
        </div>
    )
}

export default Blog
