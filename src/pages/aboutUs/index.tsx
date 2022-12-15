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
import './aboutUs.css';
import useWindowSize from "../../components/windowSize";
import Slider from 'infinite-react-carousel';
import { t } from "i18next";
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Button from '@mui/material/Button';
import Description from "../../components/description";


const About = () => {


	const partners =
	{

		mariano: `${t('mariano_description')}`,
		ron: `${t('ron_description')}`,
		yaron: `${t('yaron_description')}`,
		avi: `${t('avi_description')}`,
		yoni: `${t('yoni_description')}`,
		tzahi: `${t('tzahi_description')}`,
		ore: `${t('ore_description')}`
	}
	// console.log("partners", partners);
	const theme = createTheme({
		components: {
			// Name of the component
			MuiTooltip: {
				defaultProps: {
					disableHoverListener: true
				},
			},
		},
	})


	return (
		<>
			<div >
				<div className="about-up">
					<div className="container mt-5 mb-5 p-3 " style={{ width: useWindowSize() > 500 ? "74rem" : "" }}>
						<div className="row" >

							<div className="col-lg-7 col-md-12 col-sm-12 p-3" style={{ paddingLeft: "60px !important", fontWeight: "600" }}>
								<div className="up-title" style={{ display: "flex", justifyContent: "right", color: "rgb(47,67,155)", marginBottom: "2rem" }}>
									<h3 style={{ lineHeight: "1", color: "#2f439", fontFamily: "Leon", fontSize: "50pt" }}>UPcapital</h3><h3 style={{ lineHeight: "1", color: "red", fontFamily: "Leon", fontSize: "50pt" }}>.</h3></div>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									חברת פינ-טק אשר פיתחה טכנולוגיה ייחודית ושירות דיגיטלי חדשני להנגשת אשראי ומימון לעסקים קטנים ובינוניים (MSME) בצורה פשוטה, מהירה והוגנת. הפיתוח הייחודי של החברה שם קץ לכשל שוק ידוע ולראשונה מאפשר לעסקים נגישות להון החוזר הלא מנוצל שלהם אשר עד כה היה "תקוע" ב"שוטף פלוס".
								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "bold" }}>
									מדובר בהון חוזר, לא נגיש, לא נזיל ולא מנוצל.
								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									חברה, שהוקמה על-ידי יזמים מנוסים וצוות מומחים בתחומי הטכנולוגיה, האשראי ושוק ההון, שמה לה למטרה לייצר מציאות כלכלית חדשה לעסקים ולחזק את כלכלת ישראל וזאת מתוך הבנה כי של העסקים הקטנים והבינוניים מהווים מנוע צמיחה משמעותי בכלכלה הישראלית ויכולתם לגדול ולהתפתח תשליך על המשק כולו.
								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									תהליך הפיכת ההון הלא מנוצל לזמין מתבצע בלחיצת כפתור אחת, ללא ערבויות וביטחונות אישיים כפי שמקובל בשוק הפיננסי המסורתי ויוצר מצב של WIN-WIN בעבור כל הצדדים.
								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									בנוסף, השילוב של הטכנולוגיה הייחודית לצד הידע וההבנה העמוקה של צוות המומחים בתחום, מאפשר לתפור לכל לקוח "חליפה אישית" המותאמת למידותיו וצרכיו.
								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans 1.0", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									Up Capital פועלת יחד עם הפירמות המובילות ובשיתוף פעולה עם מוסדות הפיננסים המרכזיים בישראל ובעולם בתחום ראיית החשבון, המשפט והדיגיטל.
								</p>

							</div>
							<div className="col-lg-5 col-md-12 col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
								<img className="img-fluid" src={aboutLeft} alt="..." />
							</div>
							<div className="mt-3"><h1 style={{ color: "red", fontSize: useWindowSize() > 500 ? "24pt" : "18pt", textAlign: "center", fontWeight: "bold" }}>ביחד, ניצור מציאות כלכלית חדשה לעסקים ולכלכלת ישראל.</h1></div>
						</div>
					</div>
				</div>

				<ThemeProvider theme={theme}>
					<div style={{ marginTop: "3rem" }}>



						<div className=" container mt-3" style={{ width: useWindowSize() > 500 ? "74rem" : "", margin: "auto" }}>
							<h1 style={{ color: "#2f439a", fontSize: "40pt", textAlign: "right" }}>הצוות<span style={{ color: "red" }}>.</span></h1>
						</div>

						<div className="team-container container mt-5">

							<div className="team-member" >
								<div className="img-wrap">
									<img src={mariano} alt="mariano" className='member-image' />
									<Description data={partners.mariano} />
								</div>
								<div className="mt-2 mb-2">
									{/* <h4 className='member-title'>{t("mariano")}</h4> */}
									<h4 className='member-title'>מריאנו פטסינסקי</h4>
									{/* <p className='member-title'>{t("mariano_title")}</p> */}
									<h4 className='member-title'>מייסד ומנכ״ל</h4>
								</div>

							</div>

							<div className="team-member" >
								<div className="img-wrap">
									<img src={ron} alt="ron" className='member-image'></img>
									<Description data={partners.ron} />

								</div>
								{/* <div>
	<h4 className='member-title'>{t("ron")}</h4>
	<p className='member-title'>{t("ron_title")}</p>
</div> */}
								<div className="mt-2 mb-2">
									{/* <h4 className='member-title'>{t("mariano")}</h4> */}
									<h4 className='member-title'>{t("ron")}</h4>
									{/* <p className='member-title'>{t("mariano_title")}</p> */}
									<h4 className='member-title'>{t("ron_title")}</h4>
								</div>

							</div>
							<div className="team-member" >
								<div className="img-wrap">
									<img src={yaron} alt="yaron" className='member-image' />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.yaron} />

									</div>

								</div>
								{/* <div>
	<h4 className='member-title'>{t("yaron")}</h4>
	<p className='member-title'>{t("yaron_title")}</p>
</div> */}
								<div className="mt-2 mb-2">
									<h4 className='member-title'>ירון כהן</h4>
									<h4 className='member-title'>מנכ״ל כספים</h4>
								</div>

							</div>
							<div className="team-member">
								<div className="img-wrap">
									<img src={avi} alt="avi" className='member-image' />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.avi} />

									</div>

								</div>
								{/* <div>
	<h4 className='member-title'>{t("avi")}</h4>
	<p className='member-title'>{t("avi_title")}</p>
</div> */}
								<div className="mt-2 mb-2">
									<h4 className='member-title'>אבי סונק</h4>
									<h4 className='member-title'>משנה למנכ"ל</h4>
								</div>

							</div>




						</div>

						<div className="team-container  container">
							<div className="team-member last3">
								<div className="img-wrap">
									<img src={yoni} alt="yoni" className='member-image' />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.yoni} />

									</div>

								</div>
								<div className="mt-2 mb-2 img-down" >
									<h4 className='member-title'>יוני שמלה</h4>
									<h4 className='member-title'>סמנכ״ל טכנולוגיות</h4>
								</div>

							</div>
							<div className="team-member last2">
								<div className="img-wrap">
									<img src={tzahi} alt="tzahi" className='member-image' />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.tzahi} />

									</div>

								</div>
								<div className="mt-2 mb-2 img-down">
									<h4 className='member-title'>צחי קופרלי</h4>
									<h4 className='member-title'>בעלים, דירקטור וסמנכ"ל קשרי מסחר</h4>
								</div>

							</div>
							<div className="team-member last1">
								<div className="img-wrap">
									<img src={ore} alt="ore" className='member-image' />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.ore} />

									</div>

								</div>
								<div className="mt-2 mb-2 img-down">
									<h4 className='member-title'>אור גולן</h4>
									<h4 className='member-title'>סמנכ"ל שיווק ופיתוח עסקי</h4>
								</div>

							</div>

							<div className="team-member last1" style={{ visibility: "hidden", display: useWindowSize() > 500 ? '' : "none" }}>
								<div className="img-wrap">
									<div >
										<img className='member-image' />
									</div>

								</div>

							</div>




						</div>

					</div>
				</ThemeProvider>
			</div>
		</>
	)
}

export default About

