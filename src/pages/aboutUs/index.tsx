import ron from "../../assets/images/ron.png";
import mariano from '../../assets/images/mariano.png';
import yaron from '../../assets/images/yaron.jpg';
import yoni from '../../assets/images/yoni.png'
import avi from '../../assets/images/avi.jpeg'
import tzahi from '../../assets/images/tzahi.png'
import ore from '../../assets/images/ore.png'
import plus from '../../assets/images/plus.png'
import aboutLeft from '../../assets/images/about-left.png'
import './aboutUs.css';
import useWindowSize from "../../components/windowSize";
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
		ore: `${t('orr_description')}`
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
	const [directionValue, setDirectionValue] = useState('')
    setTimeout(() => {
        const obj: any = document.getElementById('page')
        const valueAfterTimeout = getComputedStyle(obj, null).direction
        setDirectionValue(valueAfterTimeout)
    }, 100);
    console.log('direction', directionValue);

	return (
		<>
			<div >
				<div className={directionValue=='ltr'?"about-up-en":"about-up" } id="page">
					<div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} mt-5 mb-5 p-3`}  >
						<div className="row" >

							<div className="col-lg-7 col-md-12 col-sm-12 p-3" style={{ paddingLeft: "60px !important", fontWeight: "600" }}>
								<div className="up-title" style={{ display: "flex",color: "rgb(47,67,155)", marginBottom: "2rem" }}>
									<h3 style={{ lineHeight: "1", color: "#2f439", fontFamily: "LeonRegular", fontSize: "50pt" }}>{t('up_capital')}</h3><h3 style={{ lineHeight: "1", color: "red", fontFamily: "LeonRegular", fontSize: "50pt" }}>.</h3></div>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
									{t('about_p1')}								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "bold" }}>
{t('solution_p2')}								</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
								{t('about_p2')}										</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
								{t('about_p3')}										</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
								{t('about_p4')}										</p>
								<p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
								{t('about_p5')}										</p>

							</div>
							<div className="col-lg-5 col-md-12 col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
								<img className="img-fluid" src={aboutLeft} alt="..." />
							</div>
							<div className="mt-3"><h1 style={{ color: "red", fontSize: useWindowSize() > 500 ? "24pt" : "18pt", textAlign: "center", fontWeight: "bold" }}>
							{t('about_p6')}</h1></div>
						</div>
					</div>
				</div>

				<ThemeProvider theme={theme}>
					<div style={{ marginTop: "3rem", marginBottom: "6rem" }}>



						<div className=" container mt-3" style={{ width: useWindowSize() > 500 ? "74rem" : "", margin: "auto" }}>
							<h1 style={{ color: "#2f439a", fontSize: "40pt" }}>{t('team')}<span style={{ color: "red" }}>.</span></h1>
						</div>

						<div className="team-container container mt-5">

							<div className="team-member" >
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={mariano} alt="mariano" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<Description data={partners.mariano} direction={directionValue}/>
								</div>
								<div className="mt-2 mb-2">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('mariano')} </h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('mariano_title')}</h4>
								</div>

							</div>

							<div className="team-member" >
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={ron} alt="ron" className={directionValue=='ltr'?'member-image-en':'member-image' }></img>
									<Description data={partners.ron} direction={directionValue} />

								</div>

								<div className="mt-2 mb-2">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("ron")}</h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("ron_title")}</h4>
								</div>

							</div>
							<div className="team-member" >
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={yaron} alt="yaron" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.yaron} direction={directionValue} />
									</div>
								</div>
								<div className="mt-2 mb-2">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("yaron")}</h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("yaron_title")}</h4>
								</div>

							</div>
							<div className="team-member">
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={avi} alt="avi" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.avi} direction={directionValue} />

									</div>

								</div>
								<div className="mt-2 mb-2">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("avi")}</h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t("avi_title")}</h4>
								</div>


							</div>




						</div>

						<div className="team-container  container">
							<div className="team-member last3">
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={yoni} alt="yoni" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.yoni} direction={directionValue} yoni={true}/>

									</div>

								</div>
								<div className="mt-2 mb-2 img-down" >
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('yoni')}</h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('yoni_title')}</h4>
								</div>

							</div>
							<div className="team-member last2">
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={tzahi} alt="tzahi" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.tzahi} direction={directionValue} />

									</div>

								</div>
								<div className="mt-2 mb-2 img-down">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('tzahi')} </h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('tzahi_title')}</h4>
								</div>

							</div>
							<div className="team-member last1">
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<img src={ore} alt="ore" className={directionValue=='ltr'?'member-image-en':'member-image' } />
									<div style={{ cursor: "pointer" }}>
										<Description data={partners.ore} direction={directionValue} />

									</div>

								</div>
								<div className="mt-2 mb-2 img-down">
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('orr')}</h4>
									<h4 className={directionValue=='ltr'?'member-title-en':'member-title' }>{t('orr_title')}</h4>
								</div>

							</div>

							<div className="team-member last1" style={{ visibility: "hidden", display: useWindowSize() > 500 ? '' : "none" }}>
								<div className={directionValue=='ltr'?"img-wrap-en":"img-wrap"}>
									<div >
										<img className={directionValue=='ltr'?'member-image-en':'member-image' } />
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

