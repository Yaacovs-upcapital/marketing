import './solution.css'
import solutionleft from '../../assets/images/solution.png'
import solutionRight from '../../assets/images/SolutionRight.png'
import { useTranslation } from 'react-i18next'
import useWindowSize from '../../components/windowSize'
// import useWindowSize from '../../components/windowSize'

const Solution = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className='sol-up'>
                <div className="container mt-5 mb-5" style={{ width: useWindowSize() > 500 ? "74rem" : "" }}>
                    <div className=" container mt-3" style={{ padding: 0, marginBottom: "1rem" }}>
                        <h1 style={{ color: "#2f439a", fontSize: "40pt", textAlign: "right" }}>{t('challenges')}<span style={{ color: "red" }}>.</span></h1>
                    </div>
                    <div className="row">

                        <div className="col-lg-8 col-md-12 col-sm-12 solution-text" style={{ paddingLeft: "10px", fontWeight: "600" }}>

                            <div>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                                    בכל רגע נתון ברחבי העולם, קיימים כ-54 טריליון דולרים ב"שוטף פלוס" כלומר, כסף שנמצא במצב ביניים בין ספקים ללקוחות. רק בישראל הסכום המוערך עומד על למעלה מ-50 מיליארד דולרים.
                                </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "bold" }}>
                                    מדובר בהון חוזר, לא נגיש, לא נזיל ולא מנוצל.
                                </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                                    נגישות להון הזה תאפשר לייצר מציאות כלכלית חדשה לעסקים, בעיקר קטנים ובינוניים, ותאפשר להם לגדול ולהתפתח, והרי צמיחה של העסקים הקטנים והבינונים אשר נחשבים ל"קטר" של הכלכלה, בכוחה לייצר מציאות כלכלית חדשה למדינה כולה.
                                </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                                    כיום הסיבה המרכזית לחוסר הנגישות נעוצה בכך ששוק האשראי לעסקים עדיין פועל באופן מיושן, עם מעט טכנולוגיה והרבה בירוקרטיה.                    </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <img className="img3-fluid" src={solutionleft} alt="..." />
                        </div>
                        <div className="mt-3"><h1 style={{ color: "red", fontWeight: "bold", fontSize: useWindowSize() > 500 ? "24pt" : "18pt", textAlign: "center", width: useWindowSize() > 500 ? "55vw" : '', margin: "4rem auto auto auto" }}>החברה פיתחה פיתרון מהפכני המאפשר לכל הצדדים ליהנות מעסקת מזומן תוך מקסום התועלות של כל צד וצד.</h1></div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 mb-5'>
                <div className='row how'>
                    <div className='col-lg-8 col-md-12 col-sm-12' style={{ paddingLeft: "10px", fontWeight: "600", marginBottom:"1rem" }}>
                    <div className="mt-3 mb-2" style={{marginBottom: "1rem !important"}}><h1 style={{ color: "#2f439a", fontSize: "40pt", textAlign: "right" }}>{t('solution_second_title')}<span style={{ color: "red" }}>?</span></h1></div>

                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                            הטכנולוגיה הייחודית שפיתחנו מאפשרת לכל חשבוני מאושרת להפוך למזומן בלחיצת כפתור, ללא חיכוך, בתהליך קל, פשוט ומהיר.
                            כך אנו מקצרים את זמן ההמתנה של הכסף השוכב ב"שוטף פלוס" ומייצרים דרכי מימון חדשות המאפשרות מימון הון חוזר.
                        </p>
                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                            אנו פועלים אל מול הגופים הגדולים במשק ומאפשרים לספקים של אותם גופים להתחבר לאפליקציה של Up Capital, לצפות בתשלומים העתידים שלהם ובלחיצת כפתור להפוך אותם להון זמין לשימוש.
                        </p>
                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                            העסקים יכולים לבחור אילו מהתשלומים ברצונם להפוך לנזילים, הספקים מציעים את הנחת המזומן, הכל באופן שקוף, נגיש ופשוט בעבור שני הצדדים.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12' >
                        <img src={solutionRight} className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution