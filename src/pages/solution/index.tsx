import './solution.css'
import handshake from '../../assets/images/handshake.jpg'
import calc from "../../assets/images/calc.jpg"
import phone from "../../assets/images/phone.png"
import aboutLeft from '../../assets/images/about-left.png'
import solutionleft from '../../assets/images/solution.png'
import solutionRight from '../../assets/images/SolutionRight.png'
import { useTranslation } from 'react-i18next'
import ContactForm from '../../components/footer'

const Solution = () => {
    const { t } = useTranslation();

    return (
        <div><div className='sol-up'>
           			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12"  style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                   <img  className="img-fluid" src={solutionleft} alt="..."/>
					</div>
					<div className="col-lg-8 col-md-12 col-sm-12"  style={{paddingLeft:"10px", fontWeight:"600"}}>
                    <div className=" container mt-3">
					<h1 style={{color:"#2f439a", fontSize:"40pt",textAlign:"right"}}><span style={{color:"red"}}>.</span>האתגרים</h1>
					</div>
                    <div>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    בכל רגע נתון ברחבי העולם, קיימים כ-54 טריליון דולרים ב"שוטף פלוס" כלומר, כסף שנמצא במצב ביניים בין ספקים ללקוחות. רק בישראל הסכום המוערך עומד על למעלה מ-50 מיליארד דולרים.
                    </p>
                    <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    מדובר בהון חוזר, לא נגיש, לא נזיל ולא מנוצל.
                    </p>
                    <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    נגישות להון הזה תאפשר לייצר מציאות כלכלית חדשה לעסקים, בעיקר קטנים ובינוניים, ותאפשר להם לגדול ולהתפתח, והרי צמיחה של העסקים הקטנים והבינונים אשר נחשבים ל"קטר" של הכלכלה, בכוחה לייצר מציאות כלכלית חדשה למדינה כולה.
                    </p>
                    <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    כיום הסיבה המרכזית לחוסר הנגישות נעוצה בכך ששוק האשראי לעסקים עדיין פועל באופן מיושן, עם מעט טכנולוגיה והרבה בירוקרטיה.                    </p>
                    </div>
                    </div>
					<div className="mt-3"><h1 style={{color:"red", fontSize:"24pt",textAlign:"center"}}>החברה פיתחה פיתרון מהפכני המאפשר לכל הצדדים ליהנות מעסקת מזומן תוך מקסום התועלות של כל צד וצד.</h1></div>
				</div>
			</div>
            </div>

            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12' style={{paddingLeft:"10px", fontWeight:"600"}}>
                    <div className="mt-3 mb-2"><h1 style={{color:"#2f439a", fontSize:"40pt",textAlign:"right"}}><span style={{color:"red"}}>?</span>איך אנחנו עושים זאת</h1></div>
                    
                    <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    הטכנולוגיה הייחודית שפיתחנו מאפשרת לכל חשבוני מאושרת להפוך למזומן בלחיצת כפתור, ללא חיכוך, בתהליך קל, פשוט ומהיר.
                    כך אנו מקצרים את זמן ההמתנה של הכסף השוכב ב"שוטף פלוס" ומייצרים דרכי מימון חדשות המאפשרות מימון הון חוזר.
                     </p>
                    <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                    אנו פועלים אל מול הגופים הגדולים במשק ומאפשרים לספקים של אותם גופים להתחבר לאפליקציה של Up Capital, לצפות בתשלומים העתידים שלהם ובלחיצת כפתור להפוך אותם להון זמין לשימוש.
                   </p>
                   <p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
                   העסקים יכולים לבחור אילו מהתשלומים ברצונם להפוך לנזילים, הספקים מציעים את הנחת המזומן, הכל באופן שקוף, נגיש ופשוט בעבור שני הצדדים.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12' >
                    <img src={solutionRight} className="img-fluid" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution