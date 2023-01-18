import React, { useState, useEffect } from "react";
import MediaControlCard from "../../components/card"
import workingteam from "../../assets/images/working-team.jpg";
import blog from "../../assets/images/blog.jpg";
import blogV from "../../assets/images/Blog.png";
import supplyChain from "../../assets/images/supplychain.png";
import bizChart from "../../assets/images/biz_chart.png";
import rashuiot from "../../assets/images/rashuiot.png";
import factoring from "../../assets/images/factoring.png";
import ronChairmain from "../../assets/images/11zon_cropped.jpeg";
import goingForward from "../../assets/images/going_forward.png";
import goingForwardVl from "../../assets/images/going_forward_vl.png";

import "./blog.css"
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/footer";
import { flexbox } from "@mui/system";
import Navbar from "../../components/navbar";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import useWindowSize from "../../components/windowSize";

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


const direction=localStorage.getItem('direction')

  return (
    <div style={{ marginBottom: "7rem" }} >


      <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} mt-3`} style={{}}>
        <h1 style={{ color: "#2f439a", fontSize: "40pt", paddingRight: getWindowDimensions().width > 767 ? "" : "10px", marginTop: getWindowDimensions().width > 767 ? "6rem" : "", marginBottom: getWindowDimensions().width > 767 ? "2rem" : "1rem" }}>{t('blog')}<span style={{ color: "red" }}>.</span></h1>
      </div>
      <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`} style={{ paddingLeft: getWindowDimensions().width > 767 ? "" : "1rem", marginBottom: 2 }}>
        <div className="row" style={getWindowDimensions().width > 767 ? { padding: "none !important"} : { paddingLeft: "10px", paddingRight: "10px" }}>



          {getWindowDimensions().width > 1300 ?
            <div className="col-lg-8 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
              <Card
                className="article-card"
                style={{
                  display: "flex",
                  boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)",
                  borderRadius: "20px",
                  border: 1,
                  height: "100%"
                }}
              >
                <CardMedia component="img"
                  style={{  }}
                  image={goingForwardVl}
                  alt="working-team" />
                <Box style={{

                }}>

                  <CardContent>
                    <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800" }}>
                      שורת צעדים חדשים לסיוע תזרימי לעסקים ולעצמאיים
                    </h5>
                    <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500" }}>
                      ממשיכים לחיות לצד הקורונה: משרד האוצר הודיע על צעדים תזרימיים לסיוע לעסקים ולעצמאים בהתמודדות עם נגיף האומיקרון | במסגרת הצעדים יוענקו הקלות תזרימיות בשווי של למעלה מ-1.3 מיליארד שקל ויינתנו הקלות בהליכים בירוקרטים לעסקים, הקלות בקבלת הלוואות בערבות המדינה וכן הקלות ליצואנים קטנים ובינוניים.
                    </p>
                    <a href="https://bizzness.net/%D7%A9%D7%95%D7%A8%D7%AA-%D7%A6%D7%A2%D7%93%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%A1%D7%99%D7%95%D7%A2-%D7%AA%D7%96%D7%A8%D7%99%D7%9E%D7%99-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-%D7%95/" style={{direction:direction=='ltr'?'ltr':"ltr"}} target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
                  </CardContent>
                </Box>
              </Card>
            </div>
            :
            <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
              <MediaControlCard image={goingForward} >
                <div style={{}}>
                  <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>שורת צעדים חדשים לסיוע תזרימי לעסקים ולעצמאיים</h5>
                  <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                    ממשיכים לחיות לצד הקורונה: משרד האוצר הודיע על צעדים תזרימיים לסיוע לעסקים ולעצמאים בהתמודדות עם נגיף האומיקרון | במסגרת הצעדים יוענקו הקלות תזרימיות בשווי של למעלה מ-1.3 מיליארד שקל ויינתנו הקלות בהליכים בירוקרטים לעסקים, הקלות בקבלת הלוואות בערבות המדינה וכן הקלות ליצואנים קטנים ובינוניים.
                  </p>
                  <a href="https://bizzness.net/%D7%A9%D7%95%D7%A8%D7%AA-%D7%A6%D7%A2%D7%93%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%A1%D7%99%D7%95%D7%A2-%D7%AA%D7%96%D7%A8%D7%99%D7%9E%D7%99-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-%D7%95/" style={{direction:direction=='ltr'?'ltr':"ltr"}} target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
                </div>
              </MediaControlCard>
            </div>
          }
          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
            <MediaControlCard image={factoring}>
              <div >
                <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>
                חמצן לבעלי עסקים: מה חשוב לדעת לפני שנכנסים לעולם הפקטורינג
                  </h5>
                <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                עסקאות פקטורינג הופכות אשראי לקוחות למזומן; כיצד הן עובדות, איך משקיעים בהן - ומה צריך לבדוק לפני שנכנסים אליהן
 </p>
                <a href="https://www.investopedia.com/terms/s/supplychain.asp" target="blank" className="btn btn-outline-primary blog-btn blog-btn" style={{ direction: "rtl" }}>{t('read_more')}</a>
              </div>
            </MediaControlCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
              <MediaControlCard image={blogV} >
                <div style={{}}>
                  <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>שורת צעדים חדשים לסיוע תזרימי לעסקים ולעצמאיים</h5>
                  <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                    ממשיכים לחיות לצד הקורונה: משרד האוצר הודיע על צעדים תזרימיים לסיוע לעסקים ולעצמאים בהתמודדות עם נגיף האומיקרון | במסגרת הצעדים יוענקו הקלות תזרימיות בשווי של למעלה מ-1.3 מיליארד שקל ויינתנו הקלות בהליכים בירוקרטים לעסקים, הקלות בקבלת הלוואות בערבות המדינה וכן הקלות ליצואנים קטנים ובינוניים.
                  </p>
                  <a href="https://bizzness.net/%D7%A9%D7%95%D7%A8%D7%AA-%D7%A6%D7%A2%D7%93%D7%99%D7%9D-%D7%97%D7%93%D7%A9%D7%99%D7%9D-%D7%9C%D7%A1%D7%99%D7%95%D7%A2-%D7%AA%D7%96%D7%A8%D7%99%D7%9E%D7%99-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-%D7%95/" style={{direction:direction=='ltr'?'ltr':"ltr"}} target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
                </div>
              </MediaControlCard>
            </div>

          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
            <MediaControlCard image={supplyChain}>
              <div >
                <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "ltr" }}>The Supply Chain: From Raw Materials to Order Fulfillment</h5>
                <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "ltr" }}>A supply chain is a network of individuals and companies who are involved in creating a product and delivering it to the consumer. Links on the chain begin with the producers of the raw materials and end when the van delivers the finished product to the end user.
                </p>
                <a href="https://www.investopedia.com/terms/s/supplychain.asp" target="blank" className="btn btn-outline-primary blog-btn"  style={{direction:direction=='ltr'?'ltr':"ltr"}} >{t('read_more')}</a>
              </div>
            </MediaControlCard>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
            <MediaControlCard image={bizChart}>
              <div >
                <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>חוק שוטף פלוס 30: 33% מהמגזר הממשלתי לא משלמים בזמן לעסקים</h5>
                <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500" , direction: "rtl"}}>17% מהעסקים דווחו בשנת 2019 שלקוחות פרטיים מעכבים להם תשלומים מעבר למועד בו הם היו אמורים לשלם לעומת 6% בשנת 2022
                </p>
                <a href="https://www.bizportal.co.il/general/news/article/809483" style={{direction:direction=='ltr'?'ltr':"ltr"}}  target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
              </div>
            </MediaControlCard  >
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
            <MediaControlCard image={rashuiot}>
              <div >
                <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800" , direction: "rtl"}}>UP CAPITAL - הפתרון הטכנולוגי לתשלום שוטף לספקים</h5>
                <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                  המוטו של חברות פינטק הוא קצב מהיר, רצב שמאפשר להאיץ יוזמות כלכליות תוך שמירה על ביטחון תזרימי ועל איכות השירות. מעתה חברת UP CAPITAL הישראלית מאפשרת לתאגידים ורשויות להיכנס לקצב של המגזר הפרטי באמצעות מתן פתרונות מימון באשראי. בלחיצת כפתור תוכל כל רשות וחברה תאגידית לדלג על הבירוקרטיה, לחסוך עלויות ולשמור על הספקים האיכותיים בשוק.
                </p>
                <a href="http://www.rashuiot.co.il/html5/ARCLookup.taf?_function=details&_ID=55766&did=1118&G=1118&SM=" style={{direction:direction=='ltr'?'ltr':"ltr"}}  target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
              </div>
            </MediaControlCard>
          </div>
        
          <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: "2rem" }}>
            <MediaControlCard image={ronChairmain}>
              <div >
                <h5 className="card-title" style={{ fontFamily: "LeonRegular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "800", direction: "rtl" }}>רון כהן מונה ליו"ר חברת הפינטק אפ קפיטל
                </h5>
                <p className="card-text" style={{ fontFamily: "LeonRegular", fontSize: "13pt", color: "rgb(47,67,155)", fontWeight: "500", direction: "rtl" }}>
                  רון כהן מונה ליו"ר חברת הפינטק אפ קפיטל פיננסים. החברה פיתחה פלטפורמה טכנולוגית ושירות הנותנים מענה לבעיית מימון ימי האשראי מול הלקוחות שלהם. בימים אלה החברה מובילה מהלך של שת"פ וחיבור עם מוסדות מימון בארץ ובחו"ל.
                </p>
                <a href="https://finance.walla.co.il/item/3477693"  style={{direction:direction=='ltr'?'ltr':"ltr"}} target="blank" className="btn btn-outline-primary blog-btn">{t('read_more')}</a>
              </div>
            </MediaControlCard>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Blog
