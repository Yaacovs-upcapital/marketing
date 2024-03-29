import "./home.css"
import { Plus, Up } from "../../assets/icons";
import Deloitte from "../../assets/images/deloitte-digital.png";
import Kvish from "../../assets/images/Kevish.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import Big from "../../assets/images/big.png";
import PWC from "../../assets/images/pwc.png";
import Brosh from "../../assets/images/brosh.jpeg";
import Barnea from "../../assets/images/barnea.png";
import Sec4U from "../../assets/images/sec4u.png";
import SPS from "../../assets/images/SPS.png";
import home from "../../assets/images/home-bg.png";
import invoice from "../../assets/images/invoice.png";
import approved from "../../assets/images/approved.png";
import phone from "../../assets/images/phone-icon.png";
import secure from "../../assets/images/secure.png";
import payment from "../../assets/images/payment.png";
import efficient from "../../assets/images/efficient.png";
import connect from "../../assets/images/connect.png";
import mariano from "../../assets/images/mariano.png";
import ron from "../../assets/images/ron.png";
import yaron from "../../assets/images/yaron-home.jpeg";
import interview from "../../assets/images/interview.webp"
import smiling from "../../assets/images/smiling.webp"
import techbgb from "../../assets/images/tech-bgb.png"
import useWindowSize from "../../components/windowSize";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import pointerImage from "../../assets/images/pointer-left.png";
import arrowDown from "../../assets/images/arrow-down.png";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import Description from "../../components/description";
import { useState } from "react";

const partners = [
    { name: Obelisk, link: "https://www.bdo.co.il/he-il/home-he" },
    { name: Oracle, link: "https://www.oracle.com" },
    { name: Brosh, link: "" },
    { name: Big, link: "https://bigcenters.co.il/" },
    { name: BDO, link: "https://www.bdo.co.il/he-il/home-he" },
    { name: Deloitte, link: "https://www2.deloitte.com/il/en.html" },
    { name: Barnea, link: "https://www.barlaw.co.il/" },
    { name: PWC, link: "https://www.pwc.com/il/he.html" },
    { name: Kvish, link: "https://www.kvish6.co.il/" },
    { name: Sec4U, link: "https://www.sec4u.co.il/" },
    { name: SPS, link: "https://sps.co.il/en/doccycle-en/" }
]
const careerPath = "../career"

const Home = (props) => {
    const { t } = useTranslation();


    const handleDragStart = (e) => e.preventDefault();

    const items = partners.map(item => (<div style={{ display: "flex", justifyContent: "center" }}><div className="image-border"><a href={item.link} target="blank"><div className="partners-image" onDragStart={handleDragStart} role="presentation" style={{ backgroundImage: `url(${item.name})` }}></div></a></div></div>))

    // [
    //     <div style={{ textAlign: "center" }}><img style={{ height: 51, width: 'auto' }} src={Obelisk} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center", display:"flex", alignItems:"center" }}><img style={{ height: 30, width: 'auto', margin: "auto" }} src={Oracle} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 60, width: 'auto' }} src={Brosh} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}> <img style={{ height: 70, width: 'auto' }} src={Big} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 50, width: 'auto' }} src={BDO} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 50, width: 'auto' }} src={Deloitte} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 50, width: 'auto' }} src={Barnea} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 50, width: 'auto' }} src={PWC} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 70, width: 'auto' }} src={Kvish} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 90, width: 'auto' }} src={Sec4U} onDragStart={handleDragStart} role="presentation" /></div>,
    //     <div style={{ textAlign: "center" }}><img style={{ height: 80, width: 'auto' }} src={SPS} onDragStart={handleDragStart} role="presentation" /></div>,

    // ];

    const responsive = {
        992: { items: 3 },
        1024: { items: 4 },
        1250: { items: 5 },
        1550: { items: 6 },
    };
    const [directionValue, setDirectionValue] = useState('')
    setTimeout(() => {
        const obj: any = document.getElementById('page')
        const valueAfterTimeout = getComputedStyle(obj, null).direction
        setDirectionValue(valueAfterTimeout)
    }, 100);
    console.log('direction', directionValue);
localStorage.setItem('direction',directionValue)
    return (

        <div className={`${directionValue == 'ltr' ? 'page-container-en' : "page-container"}`} id="page">
            <div className={`${directionValue == 'ltr' ? 'home-jumbotron-en' : "home-jumbotron "}`} >
                <div className={`row ${useWindowSize() > 1550 ? '' : 'container'}`} style={directionValue == 'ltr' ? { paddingLeft: window.innerWidth > 1550 ? "2rem" : "", paddingRight: 0 } : { paddingRight: window.innerWidth > 1550 ? "2rem" : "", paddingLeft: 0 }} >

                    <div className="col-lg-4 col-md-12 col-sm-12 mt-3 mb-5" style={{ zIndex: "1", position: 'relative' }} >
                        <div className="home-title">
                            <h1 className="home-title-1">{t("convert")}</h1>
                            <h1 className="home-title-2" >{t("shotef")}</h1>
                            <h1 className="home-title-3">{t("plus")}</h1>
                        </div>
                        <div style={{}} className="mt-3 home-btns">
                            <button className="prepayment-btn" style={directionValue=='ltr'?{marginRight:"1rem"}:{}}><NavLink className="homeBtn" to={"/prepayment/"} >{t("sign_up_free")}</NavLink></button>
                            <button className="consult-btn"><NavLink className="homeBtn" to={"/consult/"} >{t("to_consult")}</NavLink></button>

                        </div>
                    </div>


                    <div style={directionValue == 'ltr' ? { display: 'flex', justifyContent: 'right', marginTop: "40px", padding: "0" } : { display: 'flex', justifyContent: 'left', marginTop: "40px", padding: "0" }} className="col-lg-8 col-md-12 col-sm-12 mt-3 jumborton-image">
                        <img src={home} className="img-fluid" />
                    </div>



                </div>
                <div className="arrow-img" style={directionValue == 'ltr' ? { marginLeft: window.innerWidth > 500 ? "-100px" : '' } : { marginRight: window.innerWidth > 500 ? "-100px" : '' }}>
                    <img src={arrowDown} style={{}} className="img2-fluid" onClick={() => {
                        let offsetTop = (document.getElementById("product") as HTMLElement).offsetTop;
                        window.scrollTo({
                            top: window.innerWidth > 1000 ? offsetTop + 280 : offsetTop + 200,
                            behavior: "smooth"
                        });
                    }} />
                </div>
            </div>
            <div className={directionValue=='ltr'?"product-en":"product"} id="product" style={{ display: "flex", justifyContent: "center", flexShrink: 1 }} >
                <div className={`product-content ${useWindowSize() > 1750 ? 'container-big' : 'container'}`} >
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div ><p className="product-title">{directionValue=='ltr'?t('our'):t('product')}</p></div>
                            <div style={{ display: "flex" }}>
                                <p className="product-title" >{directionValue=='ltr'?t('product'):t('our')}</p>
                                <p className="product-title" style={{ color: "red" }}>.</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <h3 className="product-header" >{t("product_title")}</h3>
                            <div className="product-text">
                                {t("product_text")}
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <div className="parent-wrap2">
                <div className={directionValue=='ltr'?"flow-chart-en":"flow-chart"} >

                    <div className={directionValue=='ltr'?"bg-pointer-en":"bg-pointer "}>
                        <img className={`${directionValue=='ltr'?'bg-pointer2-en':"bg-pointer2"}`} src={pointerImage} alt="..." />
                        <div className="flow-circle ">

                            <div className="circle-wrap">

                                <div style={useWindowSize() > 1550 ? (directionValue == 'ltr' ? { marginTop: "-6rem", marginLeft: "-14.5rem" } : { marginTop: "-6.5rem", marginRight: "-14.5rem" }) : (directionValue == 'ltr' ? { marginTop: "-5.2rem", marginLeft: "-11.5rem" } : { marginTop: "-4.2rem", marginRight: "-11.5rem" })}>
                                    <Plus height={useWindowSize() > 1550 ? "12rem" : "9rem"} width={useWindowSize() > 1550 ? "12rem" : "9rem"} /></div>

                                <h3 className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginBottom: 0, marginTop:directionValue=='ltr'?"-5rem" :"-3rem", fontWeight: "bold" }}>
                                    {t("product_circle1_header")}</h3>
                                <p className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginTop: 0 }}>{t("product_circle1")}</p>

                            </div>
                        </div>
                    </div>

                    <div className={directionValue=='ltr'?"bg-pointer-en":"bg-pointer "}>
                        <img className={`${directionValue=='ltr'?'bg-pointer2-en':"bg-pointer2"}`} src={pointerImage} alt="..." />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={useWindowSize() > 1550 ? (directionValue == 'ltr' ? { marginTop: "-7rem", marginLeft: "-15rem" } : { marginTop: "-10rem", marginRight: "-15rem" }) : (directionValue == 'ltr' ? { marginTop: "-5.2rem", marginLeft: "-11.5rem" } : { marginTop: "-7.2rem", marginRight: "-11.5rem" })}>
                                    <Plus height={useWindowSize() > 1550 ? "12rem" : "9rem"} width={useWindowSize() > 1550 ? "12rem" : "9rem"} /></div>

                                <h3 className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginBottom: 0, marginTop:directionValue=='ltr'? "-3.9rem":'-2.7rem', fontWeight: "bold" }}>{t("product_circle2_header")}</h3>
                                <p className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginTop: 0 }}>{t("product_circle2")}</p>
                            </div>
                        </div>

                    </div >


                    <div className={directionValue=='ltr'?"bg-pointer-en":"bg-pointer "}>
                        <img className={`${directionValue=='ltr'?'bg-pointer2-en':"bg-pointer2"}`} src={pointerImage} alt="..." />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={useWindowSize() > 1550 ? (directionValue == 'ltr' ? { marginTop: "-6rem", marginLeft: "-14.5rem" } : { marginTop: "-8rem", marginRight: "-14.5rem" }) : (directionValue == 'ltr' ? { marginTop: "-5.2rem", marginLeft: "-11.5rem" } : { marginTop: "-5.2rem", marginRight: "-11.5rem" })}>
                                    <Plus height={useWindowSize() > 1550 ? "12rem" : "9rem"} width={useWindowSize() > 1550 ? "12rem" : "9rem"} />

                                </div>

                                <h3 className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`}
                                    style={{ marginBottom: 0, marginTop: directionValue=='ltr'?"-3.7rem":"-2.7rem", fontWeight: "bold" }}>{t("product_circle3_header")}
                                </h3>
                                <p className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginTop: 0 }}>
                                    {t("product_circle3")}</p>
                            </div>
                        </div>
                    </div>

                    <div className={directionValue=='ltr'?"bg-pointer-en":"bg-pointer "}>
                        <img className={`${directionValue=='ltr'?'bg-pointer2-en':"bg-pointer2"}`} src={pointerImage} alt="..." style={{ opacity: "0" }} />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={useWindowSize() > 1550 ? (directionValue == 'ltr' ? { marginTop: "-10rem", marginLeft: "-14rem" } : { marginTop: "-10rem", marginRight: "-14rem" }) : (directionValue=='ltr'?{ marginTop: "-6.2rem", marginLeft: "-11.5rem" }:{ marginTop: "-6.2rem", marginRight: "-11.5rem" })}>
                                    <Up height={useWindowSize() > 1550 ? "12rem" : "9rem"} width={useWindowSize() > 1550 ? "12rem" : "9rem"} />

                                </div>

                                <h3 className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`}
                                    style={{ marginBottom: 0, marginTop: "-2.7rem", fontWeight: "bold" }}>
                                </h3>
                                <p className={`${directionValue == 'ltr' ? "product-circle-text-en" : "product-circle-text"}`} style={{ marginTop: 0, fontWeight: "bold" }}>
                                    {t("product_circle4")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`}>
                <h1 className="process-title" style={{}}> {t('process')} <span style={{ color: "red", fontFamily: "LeonRegular" }}>?</span></h1>
            </div>

            <div className="process" style={{ textAlign: "center" }}>


                <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`} style={{ textAlign: "center" }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">1<div className="num-overlay" style={{ position: "absolute", top: "44%", right:"32% "}}></div><div className="process-img"><img  src={invoice} height="25%" width="25%" /></div></div>
                                <h3 className="process-header">{t("process_circle1_header")}</h3>
                                <p className="process-step">{t("process_circle1")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">2<div className="num-overlay" style={{ position: "absolute", top: "55%", right: "23%" }}></div><div className="process-img"><img src={approved} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle2_header")}</h3>
                                <p className="process-step">{t("process_circle2")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">3<div className="num-overlay" style={{ position: "absolute", top: "53%", right: "15%"  }}></div><div className="process-img" ><img src={phone} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle3_header")}</h3>
                                <p className="process-step"> {t("process_circle3")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                            <div className="process-item">
                                <div className="num">4<div className="num-overlay" style={{ position: "absolute", top: "45%", right: "40%" }}></div><div className="process-img"><img src={invoice} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle4_header")}</h3>
                                <p className="process-step"> {t("process_circle4")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={`${window.innerWidth>992?(directionValue=='ltr'?'tech-bg-en':'tech-bg'):'tech-bg'} mt-5 mb-5 ${useWindowSize() > 1550 ? 'container-big' : 'container'}`} style={{ marginRight: useWindowSize() > 500 ? "" : "16%" }} >

                <div style={{ display: "flex", marginBottom: "2rem", marginRight: useWindowSize() > 500 ? "" : "-31px" }}>
                    <h1 className="tech">{t('tech')}</h1><h1 className="tech" style={{ color: "red" }}>.</h1>
                </div>
                <div>
                    <img src={techbgb} style={{ display: useWindowSize() > 700 ? 'block' : "none" }} className="techBlue" />
                </div>

                <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`}>

                    <div className="row" style={window.innerWidth>991?{ margin: "auto" }:(directionValue=='ltr'?{marginRight:'7rem'}:{margin:"auto"})} >

                        <div className="col-lg-3 col-md-12 col-sm-12 " style={{ display: "flex", justifyContent: "center" }}>

                            <div className="tech-circle tech-bg1" >
                                <div style={{ position: "absolute", top: "5px", right:directionValue=='ltr'?'': ( window.innerWidth>1550?'-40px':"-80px"), left:directionValue=='ltr'?(window.innerWidth>1550?'111px':'77px'): "" }}>
                                    <svg overflow="visible" style={{ position: "absolute" }}>
                                        <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                        <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                            fontFamily="RagBold" textAnchor="middle">1</text>
                                    </svg>
                                </div>
                                <div className="flow-circle ">

                                    <div className={`${directionValue=='ltr'?'circle-tech-en':"circle-tech"}`}>

                                        <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle1")}</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 mb-5" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="tech-circle" style={{ marginTop: "3rem" }}>
                                <div style={{ position: "absolute", top: "5px", right:directionValue=='ltr'?'': ( window.innerWidth>1550?'-40px':"-80px"), left:directionValue=='ltr'?(window.innerWidth>1550?'111px':'77px'): "" }}>
                                    <svg overflow="visible" style={{ position: "absolute" }}>
                                        <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                        <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                            fontFamily="RagBold" textAnchor="middle">2</text>
                                    </svg>
                                </div>
                                <div className="flow-circle">
                                    <div className={`${directionValue=='ltr'?'circle-tech-en':"circle-tech"}`}>
                                        <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle2")}</p>
                                    </div>
                                </div>
                            </div >
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 " style={{ display: "flex", justifyContent: "center" }}>
                            <div className="tech-circle tech-bg1" >
                                <div style={{ position: "absolute", top: "5px", right:directionValue=='ltr'?'': ( window.innerWidth>1550?'-40px':"-80px"), left:directionValue=='ltr'?(window.innerWidth>1550?'111px':'77px'): ""}}>
                                    <svg overflow="visible" style={{ position: "absolute" }}>
                                        <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                        <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                            fontFamily="RagBold" textAnchor="middle">3</text>
                                    </svg>
                                </div>
                                <div className="flow-circle">
                                    <div className={`${directionValue=='ltr'?'circle-tech-en':"circle-tech"}`}>
                                        <p style={{ marginBottom: "auto", marginTop: "auto" }}> {t("tech_circle3")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12" style={{ display: "flex", justifyContent: "center" }}>

                            <div className="tech-circle" style={{ marginTop: "3rem" }}>
                                <div style={{ position: "absolute", top: "5px", right:directionValue=='ltr'?'': ( window.innerWidth>1550?'-40px':"-80px"), left:directionValue=='ltr'?(window.innerWidth>1550?'111px':'77px'): "" }}>
                                    <svg overflow="visible" style={{ position: "absolute" }}>
                                        <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                        <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                            fontFamily="RagBold" textAnchor="middle">4</text>
                                    </svg>
                                </div>
                                <div className="flow-circle" style={{ padding: "1rem 1.2rem 1rem 1.2rem" }}>
                                    <div className={`${directionValue=='ltr'?'circle-tech-en':"circle-tech"}`}>

                                        <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle4")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="advantages-bg " >
                <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`}>
                    <div className="">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div style={{ display: "flex" }} className="mb-2">
                                    <p className="advantages">{t('advantages')}</p>
                                    <p className="advantages" style={{ color: "red" }}>.</p>
                                </div>
                                <h2 className="advantages_header mb-2">{t("advantages_header")}</h2>

                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">

                                <p className="advantages_text">{t("advantages_text")}</p>
                            </div>
                        </div>



                        <div className="mb-5 mt-5">
                            <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3 col-md-12 col-sm-12" >
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item" style={{ height: "100px" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <img src={secure} className="advantages-image" />
                                            </div>
                                            <div className={`${directionValue?"advantages-rectangle-en":"advantages-rectangle"}`} >{t("secure")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item" style={{ height: "100px" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <img src={efficient} className="advantages-image" />
                                            </div>
                                            <div className={`${directionValue?"advantages-rectangle-en":"advantages-rectangle"}`}>{t("efficient")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item" style={{ height: "100px" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <img src={connect} className="advantages-image" />
                                            </div>
                                            <div className={`${directionValue?"advantages-rectangle-en":"advantages-rectangle"}`}>{t("connect")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item " style={{ height: "100px" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <img src={payment} className="advantages-image" />
                                            </div><div className={`${directionValue?"advantages-rectangle-en":"advantages-rectangle"}`}>{t("payment")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="about-bg mt-5">
                <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`}>
                    <div style={{ display: "flex" }}> <h1 className="about">{t('about')}</h1>
                        <h1 className="about" style={{ color: "red" }}>?</h1></div>

                    <div className="about-content">

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="about-text mb-3">
                                    <p style={{ margin: 0, fontSize: useWindowSize() > 1550 ? "25px" : "21px" }}>{t("about_text")}</p>
                                    <button className="about-btn" ><NavLink to={"/about-us/"} >{t('read_more')}</NavLink></button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="about-images">

                                    <div className="image-flex">
                                        <div className="">
                                            <div style={{ textAlign: "center" }}>
                                                <img src={mariano} className="personnel-image"  style={{width:'auto', height:165, borderRadius:80,}} />
                                                <div className="about-desc"><Description data={`${t('mariano_description')}`} direction={directionValue} />

                                                </div>
                                                <div className="about-name">
                                                    {t('mariano')}</div>
                                                <div className="about-title">{t('mariano_title')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div style={{ textAlign: "center" }}><img src={yaron} style={{width:'auto', height:165, borderRadius:80,}} className="personnel-image" />
                                                <div className="about-desc"><Description data={`${t('yaron_description')}`}  direction={directionValue}/></div>
                                                <div className="about-name">
                                                    {t('yaron')}</div><div className="about-title">{t('yaron_title')}</div></div>
                                        </div>
                                        {/* border-radius: 70px;
    max-width: 100%;
    max-height: 100%;
    width: 174px;
    height: 210px; */}
                                        <div className="">
                                            <div style={{ textAlign: "center" }}><img src={ron} className="personnel-image"  style={{width:'auto', height:165, borderRadius:80,}}/>
                                                <div className="about-desc"><Description data={`${t('ron_description')}`}  direction={directionValue}/></div>
                                                <div className="about-name">
                                                    {t('ron')}</div><div className="about-title">{t('ron_title')}</div></div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div style={{ marginBottom: "6rem", marginTop: "10rem" }}>

                    <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`} >
                        <div style={{ display: "flex", marginBottom: "2.5rem" }}><h2 className="partners-title">{t("partners")}</h2><h2 className="partners-title" style={{ color: "red" }}>.</h2></div>

                        {useWindowSize() <= 767 ?
                            <div >
                                <AliceCarousel
                                    autoPlay={true}
                                    mouseTracking
                                    autoPlayInterval={1500}
                                    items={items}
                                    autoPlayDirection={'ltr'}
                                    animationDuration={1500}
                                    infinite={true}
                                    disableButtonsControls={true}
                                />


                            </div>
                            :
                            <div >
                                <AliceCarousel
                                    autoPlay={true}
                                    mouseTracking
                                    autoPlayInterval={1500}
                                    items={items}
                                    autoPlayDirection={'ltr'}
                                    animationDuration={1800}
                                    infinite={true}
                                    disableButtonsControls={true}
                                    responsive={responsive}

                                />


                            </div>}
                    </div>
                </div>

                <div className="career-bg" >
                    <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`} >

                        <div className="career-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="text-container" style={{ width: "100%" }}>
                                        <div style={{ display: "flex", lineHeight: 0, marginBottom: "1rem" }} >
                                            <h2 className="career-title">{t("career")}</h2><h2 className="career-title"
                                                style={{ color: 'red' }}>.</h2></div>

                                        <div className="text-wrapper" >
                                            <div className="career-text"><p >{t("career_text1")}</p></div>
                                            <div className="career-text"><p >{t("career_text2")}</p></div>
                                            <div className="career-text"><p >{t("career_text3")}</p></div>

                                            <div className="career-slogan"><p>{t("career_text4")}</p></div>

                                            <button className="career-btn"><NavLink to={'/career/'}>{t("all_positions")}</NavLink></button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12">

                                    <div className="career-photos">
                                        <img className="large-photo" src={interview} />
                                        <img className="small-photo" src={smiling} />
                                    </div >
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
};

export default Home;
