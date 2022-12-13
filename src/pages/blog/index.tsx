import React, { useState, useEffect } from "react";
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
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
    <div >


      <div className=" container mt-3" style={{}}>
        <h1 style={{ color: "#2f439a", fontSize: "40pt", textAlign: "right",paddingRight:getWindowDimensions().width > 767 ? "" : "10px", marginTop:getWindowDimensions().width > 767 ? "6rem" : "", marginBottom:getWindowDimensions().width > 767 ? "2rem" : "1rem"  }}>מהתקשורת<span style={{ color: "red" }}>.</span></h1>
      </div>
      <div className="container" style={{paddingLeft:getWindowDimensions().width > 767 ? "" : "1rem"  }}>
        <div className="row" style={getWindowDimensions().width > 767 ? { padding: "none !important", direction: "rtl" } : { paddingLeft: "10px", paddingRight: "10px" }}>

          {arr.map((item, index) => (

            index === 0 ?


              <div className="col-lg-8 col-md-12 col-sm-12" style={{ paddingRight: getWindowDimensions().width < 767 ? "" : "" }}>
                <div className="card" style={{ width: getWindowDimensions().width > 767 ? "102%":"101%", marginTop: "12px" }}>
                  <div className="row g-0" style={{ padding: "none !important" }}>
                    <div className="col-md-6">
                      <img src={blog} style={{ height: "487px", width: getWindowDimensions().width > 767 ? "430px" : "", borderTopLeftRadius: getWindowDimensions().width > 767 ? "" : "0.5rem", borderTopRightRadius: getWindowDimensions().width > 767 ? "" : "0.5rem" }} className="img4-fluid" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body" style={{ textAlign: "right" }}>
                        <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>דווקא עכשיו רוורס פקטורינג</h5>
                        <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.</p>
                        <a href="#" className="btn btn-outline-primary">קראו עוד</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              :
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%":"101%", marginTop: "12px" }}>
                  <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius:  "0.8rem", borderTopRightRadius:  "0.8rem" }} />
                  <div className="card-body p-3" style={{ textAlign: "right" }}>
                    <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>דווקא עכשיו רוורס פקטורינג</h5>
                    <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.</p>
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
