import React, { useState, useEffect } from "react";
import MediaControlCard from "../../components/card"
import workingteam from "../../assets/images/working-team.jpg";
import blog from "../../assets/images/Blog.png";
import ronChairmain from "../../assets/images/11zon_cropped.jpeg";

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
    <div style={{ marginBottom: "7rem" }} >


      <div className=" container mt-3" style={{}}>
        <h1 style={{ color: "#2f439a", fontSize: "40pt", textAlign: "right", paddingRight: getWindowDimensions().width > 767 ? "" : "10px", marginTop: getWindowDimensions().width > 767 ? "6rem" : "", marginBottom: getWindowDimensions().width > 767 ? "2rem" : "1rem" }}>מהתקשורת<span style={{ color: "red" }}>.</span></h1>
      </div>
      <div className="container" style={{ paddingLeft: getWindowDimensions().width > 767 ? "" : "1rem", marginBottom: 2 }}>
        <div className="row" style={getWindowDimensions().width > 767 ? { padding: "none !important", direction: "rtl" } : { paddingLeft: "10px", paddingRight: "10px" }}>



          {getWindowDimensions().width > 1300 ?
            <div className="col-lg-8 col-md-12 col-sm-12" style={{ paddingRight: getWindowDimensions().width < 767 ? "" : "" }}>
              <div className="card" style={{ width: getWindowDimensions().width > 767 ? "102%" : "101%", marginTop: "12px" }}>
                <div className="row g-0" style={{ padding: "none !important" }}>
                  <div className="col-md-6">
                    <img src={blog} style={{ height: getWindowDimensions().width > 767 ? "592px" : "", width: getWindowDimensions().width > 767 ? "430px" : "", borderTopLeftRadius: getWindowDimensions().width > 767 ? "" : "0.5rem", borderTopRightRadius: getWindowDimensions().width > 767 ? "" : "0.5rem" }} className="img4-fluid" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body" style={{ textAlign: "right" }}>
                      <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>
                        שורת צעדים חדשים לסיוע תזרימי לעסקים ולעצמאיים
                      </h5>
                      <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>
                        ממשיכים לחיות לצד הקורונה: משרד האוצר הודיע על צעדים תזרימיים לסיוע לעסקים ולעצמאים בהתמודדות עם נגיף האומיקרון | במסגרת הצעדים יוענקו הקלות תזרימיות בשווי של למעלה מ-1.3 מיליארד שקל ויינתנו הקלות בהליכים בירוקרטים לעסקים, הקלות בקבלת הלוואות בערבות המדינה וכן הקלות ליצואנים קטנים ובינוניים.
                      </p>
                      <a href="https://bizzness.net/%D7%A9%D7%95%D7%A8%D7%AA-%D7%A6%D7%A2%D7%93%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%A1%D7%99%D7%95%D7%A2-%D7%AA%D7%96%D7%A8%D7%99%D7%9E%D7%99-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-%D7%95/" className="btn btn-outline-primary">קראו עוד</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px" }}>
                <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
                <div className="card-body p-3" style={{}}>
                  <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>שורת צעדים חדשים לסיוע תזרימי לעסקים ולעצמאיים</h5>
                  <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                    ממשיכים לחיות לצד הקורונה: משרד האוצר הודיע על צעדים תזרימיים לסיוע לעסקים ולעצמאים בהתמודדות עם נגיף האומיקרון | במסגרת הצעדים יוענקו הקלות תזרימיות בשווי של למעלה מ-1.3 מיליארד שקל ויינתנו הקלות בהליכים בירוקרטים לעסקים, הקלות בקבלת הלוואות בערבות המדינה וכן הקלות ליצואנים קטנים ובינוניים.
                  </p>
                  <a href="https://bizzness.net/%D7%A9%D7%95%D7%A8%D7%AA-%D7%A6%D7%A2%D7%93%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%A1%D7%99%D7%95%D7%A2-%D7%AA%D7%96%D7%A8%D7%99%D7%9E%D7%99-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-%D7%95/" className="btn btn-outline-primary">קראו עוד</a>
                </div>
              </div>
            </div>
          }

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px" }}>
              <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
              <div className="card-body p-3" style={{}}>
                <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "ltr" }}>The Supply Chain: From Raw Materials to Order Fulfillment</h5>
                <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "ltr" }}>A supply chain is a network of individuals and companies who are involved in creating a product and delivering it to the consumer. Links on the chain begin with the producers of the raw materials and end when the van delivers the finished product to the end user.
                </p>
                <a href="https://www.investopedia.com/terms/s/supplychain.asp" className="btn btn-outline-primary" style={{ direction: "rtl" }}>קראו עוד</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px", height: getWindowDimensions().width > 1300 ? 667 : "fitContent" }}>
              <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
              <div className="card-body p-3" style={{ textAlign: "right" }}>
                <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>חוק שוטף פלוס 30: 33% מהמגזר הממשלתי לא משלמים בזמן לעסקים</h5>
                <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>17% מהעסקים דווחו בשנת 2019 שלקוחות פרטיים מעכבים להם תשלומים מעבר למועד בו הם היו אמורים לשלם לעומת 6% בשנת 2022
                </p>
                <a href="https://www.bizportal.co.il/general/news/article/809483" className="btn btn-outline-primary">קראו עוד</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px", height: getWindowDimensions().width > 1300 ? "100%" : "fitContent" }}>
              <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
              <div className="card-body p-3" style={{ textAlign: "right" }}>
                <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>UP CAPITAL - הפתרון הטכנולוגי לתשלום שוטף לספקים</h5>
                <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>
                  המוטו‭ ‬של‭ ‬חברות‭ ‬פינטק‭ ‬הוא‭ ‬קצב‭ ‬מהיר‭, ‬קצב‭ ‬שמאפשר‭ ‬להאיץ‭ ‬יוזמות‭ ‬כלכליות‭ ‬תוך‭ ‬שמירה‭ ‬על‭ ‬ביטחון‭ ‬תזרימי‭ ‬ועל‭ ‬איכות‭ ‬השירות‭. ‬מעתה‭, ‬חברת‭ ‬UP CAPITAL‭ ‬הישראלית‭ ‬מאפשרת‭ ‬לתאגידים‭ ‬ורשויות‭ ‬להיכנס‭ ‬לקצב‭ ‬של‭ ‬המגזר‭ ‬הפרטי‭ ‬באמצעות‭ ‬מתן‭ ‬פתרונות‭ ‬מימון‭ ‬באשראי‭. ‬בלחיצת‭ ‬כפתור‭, ‬תוכל‭ ‬כל‭ ‬רשות‭ ‬וחברה‭ ‬תאגידית‭ ‬לדלג‭ ‬על‭ ‬הביורוקרטיה‭, ‬לחסוך‭ ‬בעלויות‭ ‬ולשמור‭ ‬על‭ ‬הספקים‭ ‬האיכותיים‭ ‬בשוק

                </p>
                <a href="http://www.rashuiot.co.il/html5/ARCLookup.taf?_function=details&_ID=55766&did=1118&G=1118&SM=" className="btn btn-outline-primary">קראו עוד</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px", height: getWindowDimensions().width > 1300 ? 667 : "fitContent" }}>
              <img src={workingteam} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
              <div className="card-body p-3" style={{ textAlign: "right" }}>
                <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>כשמספרי המאומתים בעלייה: כיצד להכין את העסק לגל האומיקרון?</h5>
                <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>ראש הממשלה לא מתכנן בינתיים לסגור את המשק, אך מנגד באוצר לא ימהרו לפצות בעלי עסקים שנפגעו מגל התחלואה הגובר • החל מחובת גבייה עכשיו גם במחיר של אי נעימות, דרך תשלום במזומן ועד הכשרת עובדים דווקא כעת – 5 טיפים לבעלי עסקים
                </p>
                <a href="https://www.globes.co.il/news/article.aspx?did=1001396799&from=whatsapp" className="btn btn-outline-primary">קראו עוד</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card" style={{ width: getWindowDimensions().width > 767 ? "104%" : "101%", marginTop: "12px", height: getWindowDimensions().width > 1300 ? 667 : "fitContent" }}>
              <img src={ronChairmain} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.8rem", borderTopRightRadius: "0.8rem" }} />
              <div className="card-body p-3" style={{ textAlign: "right" }}>
                <h5 className="card-title" style={{ fontFamily: "Leon", fontSize: "19pt", color: "rgb(47,67,155)", fontWeight: "800" }}>רון כהן מונה ליו"ר חברת הפינטק אפ קפיטל
                </h5>
                <p className="card-text" style={{ fontFamily: "Leon", fontSize: "14pt", color: "rgb(47,67,155)", fontWeight: "500" }}>
                  רון כהן מונה ליו"ר חברת הפינטק אפ קפיטל פיננסים. החברה פיתחה פלטפורמה טכנולוגית ושירות הנותנים מענה לבעיית מימון ימי האשראי מול הלקוחות שלהם. בימים אלה החברה מובילה מהלך של שת"פ וחיבור עם מוסדות מימון בארץ ובחו"ל.
                </p>
                <a href="https://finance.walla.co.il/item/3477693" className="btn btn-outline-primary">קראו עוד</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog
