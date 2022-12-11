import "./clientLogin.css"
import { LogoWhite } from "../../assets/icons"
import { useEffect } from "react"
import { Card } from "@mui/material"

const ClientLogin = () => {
    useEffect(() => {
        document?.getElementsByClassName('navbar')[0]?.setAttribute('style', 'display: none')
        document?.getElementsByClassName('footer')[0]?.setAttribute('style', 'display: none')
        return () => {
            document?.getElementsByClassName('navbar')[0]?.removeAttribute('style')
            document?.getElementsByClassName('footer')[0]?.removeAttribute('style')
        }
    }, [])
    return (
        <div className='login-container'>
            <div className='login'>
                <Card className="login-card" style={{ borderRadius: 20, color: "#2f439a", padding:10 }}>
                    <h2 style={{paddingTop:30}}>התחבר</h2>
                    <form className="login-form">

                        <input type="text" name="טלפון" placeholder="טלפון" />
                        <input type="text" name="ח.פ." placeholder="ח.פ."/>
                        <input type="submit" value="התחבר" />

                    </form>
                </Card>
            </div>
            <div className='welcome'>
                <div className='welcome-content'>
                    <h1>ברוכים הבאים</h1>
                    <div><LogoWhite /></div>
                    <div>
                        <p>באמצעות טכנולוגיה ייחודית שפיתחנו כל חשבונית מאושרת הופכת למזומן בקליק אחד, ללא חיכוך, בתהליך קל ליישום והפעלה. כך אנו מקצרים את זמן ההמתנה של הכסף השוכב ב"שוטף פלוס" ומייצרים דרכי מימון חדשות המאפשרות מימון הון חוזר.</p>
                        <p>הפעילות שלנו מתבצעת אל מול הגופים הגדולים במשק ומאפשרים לספקים של אותם גופים להתחבר לאפליקציה של Up Capital, לצפות בתשלומים העתידים שלהם ובלחיצת כפתור להפוך אותם להון זמין לשימוש.</p>
                        <p>בעלי העסקים יכולים לבחור אילו מהתשלומים ברצונם להפוך לנזילים, הספקים מציעים את הנחת המזומן, הכל באופן שקוף, נגיש ופשוט בעבור שני הצדדים.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientLogin