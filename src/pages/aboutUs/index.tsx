import ron from "../../assets/images/ron.png";
import Deloitte from "../../assets/images/deloitte-digital.png";
import Erech from "../../assets/images/erechlogo.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import PrimeSec from "../../assets/images/prime-sec.png";
import PWC from "../../assets/images/pwc.png";
import Tadmor from "../../assets/images/tadmor.png";
import mariano from '../../assets/images/mariano.png';
import yaron from '../../assets/images/yaron.jpg';
import yoni from '../../assets/images/yoni.png'
import avi from '../../assets/images/avi.png'
import tzahi from '../../assets/images/tzahi.png'
import ore from '../../assets/images/ore.png'
import plus from '../../assets/images/plus.png'
import aboutLeft from '../../assets/images/about-left.png'
import aboutBg from '../../assets/images/aboutBg.png'
import './aboutUs.css';
import useWindowSize from "../../components/windowSize";
import Slider from 'infinite-react-carousel';
import { t } from "i18next";
import ContactForm from "../../components/footer";
import { useState } from "react";
import Description from "../../components/description";
import Navbar from "../../components/navbar";
import NavbarItems from "../../components/NavbarItems";



const About = () => {

	const toolTip =`מומחה בעל שם בתחום מימון שרשראות האספקה והון חוזר.מייסד חברת Peninsula, העוסקת במתן פתרונות אשראי לחברות קטנות ובינוניות בישראל ומייסד eLoan, חברת ההלוואות החברתיות הראשונה בישראל אשר נמכרה לקבוצת מיטב-דש. 
	בעבר מילא שורת תפקידים בכירים בחברות גדולות ביניהם: ראש מחלקת אשראי צרכני בלאומי קארד (כיום מקס), סמנכ"ל אשראי וניהול סיכונים בכולמוביל, מנהל אשראי ומימון לקוחות בתעש מערכות, ראש חטיבת הפקטורינג ב-UBank ועוד.
	מריאנו מביא עימו ניסיון של למעלה מ-20 שנים בתחום מימון שרשרת אספקה, אשראי ופקטורינג. למריאנו תואר ראשון בכלכלה מטעם אוניברסיטת תל-אביב ותואר שני במנהל עסקים מטעם הטכניון.`;

	const partners = [
		{
			image:mariano,
			name:`${t('mariano')}`,
			title:`${t('mariano_title')}`,
			desc: `${t('mariano_description')}`
		},
		{
			image:ron,
			name:`${t('ron')}`,
			title:`${t('ron_title')}`,
			desc: `${t('ron_description')}`
		},
		{
			image:yaron,
			name:`${t('yaron')}`,
			title:`${t('yaron_title')}`,
			desc: `${t('yaron_description')}`
		},
		{
			image:avi,
			name:`${t('avi')}`,
			title:`${t('avi_title')}`,
			desc: `${t('avi_description')}`
		},
		{
			image:yoni,
			name:`${t('yoni')}`,
			title:`${t('yoni_title')}`,
			desc: `${t('yoni_description')}`
		},
		
		{
			image:tzahi,
			name:`${t('tzahi')}`,
			title:`${t('tzahi_title')}`,
			desc: `${t('tzahi_description')}`
		},
		{
			image:ore,
			name:`${t('ore')}`,
			title:`${t('ore_title')}`,
			desc: `${t('ore_description')}`
		},
	]
// console.log("partners", partners);

	return (
		<>
		<div >
			<div className="about-up">
			<div className="container mt-5 mb-5 p-3 ">
				<div className="row">
					<div className="col-lg-5 col-md-12 col-sm-12" style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                   <img  className="img-fluid" src={aboutLeft} alt="..."/>
					</div>
					<div className="col-lg-7 col-md-12 col-sm-12 p-3" style={{paddingLeft:"10px", fontWeight:"600"}}>
					<div className="career-second-title" style={{ display: "flex", justifyContent:"flex-end", color:"rgb(47,67,155)" }}>
						<h3 style={{lineHeight: "1", color:"red", fontFamily:"Leon",fontSize:"60pt"  }}>.</h3><h3 style={{ lineHeight: "1", color:"#2f439", fontFamily:"Leon",fontSize:"50pt" }}>UPcapital</h3></div>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					חברת פינ-טק אשר פיתחה טכנולוגיה ייחודית ושירות דיגיטלי חדשני להנגשת אשראי ומימון לעסקים קטנים ובינוניים (MSME) בצורה פשוטה, מהירה והוגנת. הפיתוח הייחודי של החברה שם קץ לכשל שוק ידוע ולראשונה מאפשר לעסקים נגישות להון החוזר הלא מנוצל שלהם אשר עד כה היה "תקוע" ב"שוטף פלוס".
					</p>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					מדובר בהון חוזר, לא נגיש, לא נזיל ולא מנוצל.
					</p>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					חברה, שהוקמה על-ידי יזמים מנוסים וצוות מומחים בתחומי הטכנולוגיה, האשראי ושוק ההון, שמה לה למטרה לייצר מציאות כלכלית חדשה לעסקים ולחזק את כלכלת ישראל וזאת מתוך הבנה כי של העסקים הקטנים והבינוניים מהווים מנוע צמיחה משמעותי בכלכלה הישראלית ויכולתם לגדול ולהתפתח תשליך על המשק כולו.
					</p>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					תהליך הפיכת ההון הלא מנוצל לזמין מתבצע בלחיצת כפתור אחת, ללא ערבויות וביטחונות אישיים כפי שמקובל בשוק הפיננסי המסורתי ויוצר מצב של WIN-WIN בעבור כל הצדדים.
					</p>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					בנוסף, השילוב של הטכנולוגיה הייחודית לצד הידע וההבנה העמוקה של צוות המומחים בתחום, מאפשר לתפור לכל לקוח "חליפה אישית" המותאמת למידותיו וצרכיו.
					</p>
					<p style={{ textAlign:"right", fontFamily:"RAG-Sans 1.0", fontSize:"16pt",color:"rgb(47,67,155)"}}>
					Up Capital פועלת יחד עם הפירמות המובילות ובשיתוף פעולה עם מוסדות הפיננסים המרכזיים בישראל ובעולם בתחום ראיית החשבון, המשפט והדיגיטל.
					</p>
					
					</div>
					<div className="mt-3"><h1 style={{color:"red", fontSize:"24pt",textAlign:"center"}}>ביחד, ניצור מציאות כלכלית חדשה לעסקים ולכלכלת ישראל.ביחד, ניצור מציאות כלכלית חדשה לעסקים ולכלכלת ישראל.</h1></div>
				</div>
			</div>
			</div>

			{/* <div className="career-content container">
				<div className="text-container" >
					<div className="text-wrapper">
						
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("about_p1")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("solution_p2")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("about_p2")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("about_p3")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("about_p4")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>{t("about_p5")}</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}><strong>{t("about_p6")}</strong></p></div>
					</div>

				</div>
				<div className="career-photos">

				</div >

			</div> */}
			<div>
				<div ><h4 className="team-title">{t("team")}</h4></div>
				{/* <div >
					{partners.map(item => (
						<Description member={item} />
					))}
				</div> */}
				
				
				<div className=" container mt-3">
					<h1 style={{color:"#2f439a", fontSize:"40pt",textAlign:"right"}}><span style={{color:"red"}}>.</span>הצוות</h1>
					</div>
				
				 <div className="team-container container mt-5">

					<div className="team-member" >
						<div className="img-wrap">
							<img src={mariano} alt="mariano" className='member-image' />
							<img   src={plus} className='plus-img'/>

						</div>
						<div className="mt-2 mb-2">
							{/* <h4 className='member-title'>{t("mariano")}</h4> */}
							<h4 className='member-title'>מריאנו פטסינסקי</h4>
							{/* <p className='member-title'>{t("mariano_title")}</p> */}
							<h4 className='member-title'>מייסד ומנכ״ל</h4>
						</div>
						<p className='member-description container'>
							{t("mariano_description")}
						</p>
					</div>
					
				 <div className="team-member" >
						<div className="img-wrap">
							<img src={ron} alt="ron" className='member-image'></img>
							<img src={plus} className='plus-img'
							  />
						</div>
						{/* <div>
							<h4 className='member-title'>{t("ron")}</h4>
							<p className='member-title'>{t("ron_title")}</p>
						</div> */}
						<div className="mt-2 mb-2">
							{/* <h4 className='member-title'>{t("mariano")}</h4> */}
							<h4 className='member-title'>רון כהן</h4>
							{/* <p className='member-title'>{t("mariano_title")}</p> */}
							<h4 className='member-title'>יו״ר אפ קפיטל</h4>
						</div>
						<p className='member-description container'>
							{t("ron_description")}
						</p>
					</div>
					<div className="team-member" >
						<div className="img-wrap">
							<img src={yaron} alt="yaron" className='member-image' />
							<div style={{cursor:"pointer"}}><img   src={plus} className='plus-img'
							  /></div>

						</div>
						{/* <div>
							<h4 className='member-title'>{t("yaron")}</h4>
							<p className='member-title'>{t("yaron_title")}</p>
						</div> */}
						<div className="mt-2 mb-2">
							<h4 className='member-title'>ירון כהן</h4>
							<h4 className='member-title'>מנכ״ל כספים</h4>
						</div>
						<p className='member-description container'>
							{t("yaron_description")}
						</p>
					</div>
					<div className="team-member">
						<div className="img-wrap">
							<img src={avi} alt="avi" className='member-image' />
							<div style={{cursor:"pointer"}}><img   src={plus} className='plus-img'
							  /></div>

						</div>
						{/* <div>
							<h4 className='member-title'>{t("avi")}</h4>
							<p className='member-title'>{t("avi_title")}</p>
						</div> */}
						<div className="mt-2 mb-2">
							<h4 className='member-title'>אבי סונק</h4>
							<h4 className='member-title'>סמנכ״ל פיתוח עסקי וניהול מוצר</h4>
						</div>
						<p className='member-description container'>
							{t("avi_description")}
						</p>
					</div>



					
			</div>

			<div className="team-container container">
			<div className="team-member">
						<div className="img-wrap">
							<img src={yoni} alt="yoni" className='member-image' />
							<div style={{cursor:"pointer"}}><img  style={{position:"absolute"}} src={plus} className='plus-img'
							  /></div>

						</div>
						<div className="mt-2 mb-2 img-down" >
							<h4 className='member-title'>יוני שמלה</h4>
							<h4 className='member-title'>סמנכ״ל טכנולוגיות</h4>
						</div>
						<p className='member-description container'>
							{t("yoni_description")}
						</p>
					</div>
					<div className="team-member">
						<div className="img-wrap">
							<img src={tzahi} alt="tzahi" className='member-image' />
							<div style={{cursor:"pointer"}}><img  style={{position:"absolute"}} src={plus} className='plus-img'
							  /></div>

						</div>
						<div className="mt-2 mb-2 img-down">
							<h4 className='member-title'>צחי קופרלי</h4>
							<h4 className='member-title'>בעלים, דירקטור וסמנכ"ל קשרי מסחר</h4>
						</div>
						<p className='member-description container'>
							{t("tzahi_description")}
						</p>
					</div>
					<div className="team-member">
						<div className="img-wrap">
							<img src={ore} alt="ore" className='member-image' />
							<div style={{cursor:"pointer"}}><img src={plus} className='plus-img'
							  /></div>

						</div>
						<div className="mt-2 mb-2 img-down">
							<h4 className='member-title'>אור גולן</h4>
							<h4 className='member-title'>סמנכ״ל שיווק</h4>
						</div>
						<p className='member-description container'>
							{t("ore_description")}
						</p>
					</div> 
			</div>

		</div>
		</div>
		</>
	)
}

export default About

