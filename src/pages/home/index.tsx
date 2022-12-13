import "./home.css"
import { Plus, Up, Phone, Invoice, Approve, Secure, Efficient, Connect, Payment } from "../../assets/icons";
import Deloitte from "../../assets/images/deloitte-digital.png";
import Erech from "../../assets/images/erechlogo.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import PrimeSec from "../../assets/images/prime-sec.png";
import PWC from "../../assets/images/pwc.png";
import Tadmor from "../../assets/images/tadmor.png";
import People from "../../assets/images/people.png";
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
import yaron from "../../assets/images/yaron.png";
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
const partners = [Obelisk, Oracle, PrimeSec, Erech, BDO, Deloitte, Tadmor, PWC]
const careerPath = "../career"



const Home = (props) => {
    const { t } = useTranslation();


    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={Obelisk} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={Oracle} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={PrimeSec} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}> <img height={"50rem"} width={"110rem"} src={Erech} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={BDO} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={Deloitte} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"110rem"} src={Tadmor} onDragStart={handleDragStart} role="presentation" /></div>,
        <div style={{ textAlign: "center" }}><img height={"50rem"} width={"100rem"} src={PWC} onDragStart={handleDragStart} role="presentation" /></div>,

    ];


    return (


        <div className="page-container">
            <div className="home-jumbotron" >
                <div className="container mb-5" >
                    <div className="row">

                        <div className="col-lg-2 col-md-12 col-sm-12 mt-3 mb-5" style={{ zIndex: "1" }} >
                            <div className="home-title">
                                <h1 style={{ fontFamily: 'LeonRegular', fontSize: '4em', color: '#2f439a', width: "90vw" }}>{t("convert")}</h1>
                                <h1 style={{ fontFamily: 'LeonRegular', fontSize: '4em', color: '#2f439a', width: "90vw" }}>{t("shotef")}</h1>
                                <h1 style={{ color: 'red', fontFamily: 'LeonRegular', fontSize: '4em', fontWeight: 'bold', width: "90vw" }}>{t("plus")}</h1>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'right', padding: "0", width: "300px" }} className="mt-3">
                                <button style={{ borderRadius: "0.5em", borderStyle: "none", background: "#2f439a", fontFamily: "RAG-Sans 1.0", fontWeight: "bold", fontSize: "0.9em", letterSpacing: "0.75px", color: "#FFFFFF", padding: "0.6rem 1.5rem 0.6rem 1.5rem" }}>{t("sign_up_free")}</button>
                                <button style={{ marginRight: "1rem", borderRadius: "0.5rem", border: "0.5px solid #2f439a", background: "#fff", fontFamily: "RAG-Sans 1.0", fontWeight: "bold", fontSize: "0.9em", letterSpacing: "0.75px", color: "#2f439a", padding: "0.6rem 1.5rem 0.6rem 1.5rem" }}>{t("consult")}</button>
                            </div>
                        </div>


                        <div style={{ display: 'flex', justifyContent: 'left', marginTop: "40px", padding: "0" }} className="col-lg-10 col-md-12 col-sm-12 mt-3 jumborton-image">
                            <img src={home} className="img-fluid" style={{ marginTop: "35px", marginLeft: "-47px" }} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "baseline", marginTop:useWindowSize()>500?"-90px":"-50px",marginRight:useWindowSize()>500?"-76px":'' }}>
                            <img src={arrowDown} style={{ width: '22px', height: '40px' }} className="img2-fluid" onClick={() => {
                                let offsetTop = (document.getElementById("product") as HTMLElement).offsetTop;
                                window.scrollTo({
                                    top:window.innerWidth>500?offsetTop+100: offsetTop+300,
                                    behavior: "smooth"
                                });
                            }} />
                        </div>

                    </div>
                </div>

            </div>

            <div className="product" id="product" style={{ display: "flex", justifyContent: "center" }} >
                <div className="product-content container" style={{ width: "65rem", margin: "auto" }}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div>
                                <div ><p className="product-title">{t('product')}</p></div>
                                <div style={{ display: "flex" }}> <p className="product-title" >{t('our')}</p>
                                    <p className="product-title" style={{ color: "red" }}>.</p></div>
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
                    <div >

                    </div>

                    <div style={{}}>

                    </div>
                </div>
            </div>



            <div className="parent-wrap2">
                <div className="row" style={{ marginRight: useWindowSize() > 500 ? '' : '-38px' }}>

                    <div className="bg-pointer col-lg-3 col-md-12 col-sm-12 p-3 ">
                        <img className="bg-pointer2" src={pointerImage} alt="..." />
                        <div className="flow-circle p-1">

                            <div className="circle-wrap">

                                <div style={{ marginTop: "-4.2rem", marginRight: "-11.5rem", boxShadow: "" }}>
                                    <Plus height={"9rem"} width={"9rem"} /></div>

                                <h3 className="product-circle-text" style={{ marginBottom: 0, marginTop: "-3rem", fontWeight: "bold" }}>
                                    {t("product_circle1_header")}</h3>
                                <p className="product-circle-text" style={{ marginTop: 0 }}>{t("product_circle1")}</p>

                            </div>
                        </div>
                    </div>

                    <div className="bg-pointer col-lg-3 col-md-12 col-sm-12 p-3">
                        <img className="bg-pointer2" src={pointerImage} alt="..." />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={{ marginTop: "-7.2rem", marginRight: "-11.5rem" }}>
                                    <Plus height={"9rem"} width={"9rem"} /></div>

                                <h3 className="product-circle-text" style={{ marginBottom: 0, marginTop: "-2.7rem", fontWeight: "bold" }}>{t("product_circle2_header")}</h3>
                                <p className="product-circle-text" style={{ marginTop: 0 }}>{t("product_circle2")}</p>
                            </div>
                        </div>

                    </div >


                    <div className="bg-pointer col-lg-3 col-md-12 col-sm-12 p-3">
                        <img className="bg-pointer2" src={pointerImage} alt="..." />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={{ marginTop: "-5.2rem", marginRight: "-11.5rem" }}>
                                    <Plus height={"9rem"} width={"9rem"} />

                                </div>

                                <h3 className="product-circle-text"
                                    style={{ marginBottom: 0, marginTop: "-2.7rem", fontWeight: "bold" }}>{t("product_circle3_header")}
                                </h3>
                                <p className="product-circle-text" style={{ marginTop: 0 }}>
                                    {t("product_circle3")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-pointer col-lg-3 col-md-12 col-sm-12 p-3">
                        <img className="bg-pointer2" src={pointerImage} alt="..." style={{ opacity: "0" }} />
                        <div className="flow-circle">
                            <div className="circle-wrap">
                                <div style={{ marginTop: "-6.2rem", marginRight: "-11.5rem" }}>
                                    <Up height={"9rem"} width={"9rem"} />

                                </div>

                                <h3 className="product-circle-text"
                                    style={{ marginBottom: 0, marginTop: "-2.7rem", fontWeight: "bold" }}>
                                </h3>
                                <p className="product-circle-text" style={{ marginTop: 0, fontWeight: "bold" }}>
                                    {t("product_circle4")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <h1 className="process-title" style={{ paddingRight: "30px" }}> {t('process')} <span style={{ color: "red", fontFamily: "LeonRegular" }}>?</span></h1>
            </div>

            <div className="process" style={{ textAlign: "center" }}>


                <div className="container" style={{ textAlign: "center" }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">1<div className="num-overlay" style={{ position: "absolute", top: "40%", right: 0 }}></div><div style={{ position: "absolute", top: 0, right: "0" }}><img className="process-img" src={invoice} height="25%" width="25%" /></div></div>
                                <h3 className="process-header">{t("process_circle1_header")}</h3>
                                <p className="process-step">{t("process_circle1")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">2<div className="num-overlay" style={{ position: "absolute", top: "58%", right: "5%" }}></div><div style={{ position: "absolute", top: 0, right: "0" }}><img src={approved} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle2_header")}</h3>
                                <p className="process-step">{t("process_circle2")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <div className="process-item">
                                <div className="num">3<div className="num-overlay" style={{ position: "absolute", top: "55%", right: 0 }}></div><div style={{ position: "absolute", top: 0, right: "0" }} ><img src={phone} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle3_header")}</h3>
                                <p className="process-step"> {t("process_circle3")}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                            <div className="process-item">
                                <div className="num">4<div className="num-overlay" style={{ position: "absolute", top: "40%", right: "15%" }}></div><div style={{ position: "absolute", top: 0, right: "0" }}><img src={invoice} height="25%" width="25%" /></div></div>

                                <h3 className="process-header">{t("process_circle4_header")}</h3>
                                <p className="process-step"> {t("process_circle4")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="tech-bg container mt-5 mb-5 tech-circular" style={{ marginRight: "10%" }} >

                <div style={{ display: "flex", justifyContent: "right", marginBottom: "2rem" }}>
                    <h1 className="tech">{t('tech')}</h1><h1 className="tech" style={{ color: "red" }}>.</h1>
                </div>
                <div>
                    <img src={techbgb} style={{ display: useWindowSize() > 700 ? 'block' : "none" }} className="techBlue" />
                </div>

                <div className="container">
                    <div className="">

                        <div className="row" >

                            <div className="col-lg-3 col-md-12 col-sm-12 " style={{ display: "flex", justifyContent: "center" }}>

                                <div className="tech-circle tech-bg1" >
                                    <div style={{ position: "absolute", top: "5px", right: "-95px" }}>
                                        <svg overflow="visible" style={{ position: "absolute" }}>
                                            <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                            <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                                fontFamily="RagBold" textAnchor="middle">1</text>
                                        </svg>
                                    </div>
                                    <div className="flow-circle ">

                                        <div className="circle-tech">

                                            <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle1")}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12 mb-5" style={{ display: "flex", justifyContent: "center" }}>
                                <div className="tech-circle" style={{ marginTop: "3rem" }}>
                                    <div style={{ position: "absolute", top: "5px", right: "-95px" }}>
                                        <svg overflow="visible" style={{ position: "absolute" }}>
                                            <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                            <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                                fontFamily="RagBold" textAnchor="middle">2</text>
                                        </svg>
                                    </div>
                                    <div className="flow-circle">
                                        <div className="circle-tech">
                                            <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle2")}</p>
                                        </div>
                                    </div>
                                </div >
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12 " style={{ display: "flex", justifyContent: "center" }}>
                                <div className="tech-circle tech-bg1" >
                                    <div style={{ position: "absolute", top: "5px", right: "-95px" }}>
                                        <svg overflow="visible" style={{ position: "absolute" }}>
                                            <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                            <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                                fontFamily="RagBold" textAnchor="middle">3</text>
                                        </svg>
                                    </div>
                                    <div className="flow-circle">
                                        <div className="circle-tech">
                                            <p style={{ marginBottom: "auto", marginTop: "auto" }}> {t("tech_circle3")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12" style={{ display: "flex", justifyContent: "center" }}>

                                <div className="tech-circle" style={{ marginTop: "3rem" }}>
                                    <div style={{ position: "absolute", top: "5px", right: "-95px" }}>
                                        <svg overflow="visible" style={{ position: "absolute" }}>
                                            <circle cx="100" cy="0" r="30" fill="#EAECF5"></circle>
                                            <text x="100" y="0" dominantBaseline="middle" fill="#2f439a" fontSize="2rem"
                                                fontFamily="RagBold" textAnchor="middle">4</text>
                                        </svg>
                                    </div>
                                    <div className="flow-circle" style={{ padding: "1rem 1.2rem 1rem 1.2rem" }}>
                                        <div className="circle-tech">

                                            <p style={{ marginBottom: "auto", marginTop: "auto" }}>{t("tech_circle4")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="advantages-bg " >
                <div className="container">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div style={{ display: "flex", justifyContent: "right" }} className="mb-2">
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
                                        <div className="advantages-item" style={{ height: "100px" }}><div ><img src={secure} style={{ height: "40px", width: "auto", marginRight: "10px" }} /></div><div style={{ width: "70%", fontSize: "20px", marginRight: "20px" }} >{t("secure")}</div></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item" style={{ height: "100px" }}><div ><img src={efficient} style={{ height: "40px", width: "auto", marginRight: "10px" }} /></div><div style={{ width: "70%", fontSize: "20px", marginRight: "20px" }}>{t("efficient")}</div></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item" style={{ height: "100px" }}><div ><img src={connect} style={{ height: "40px", width: "auto", marginRight: "10px" }} /></div><div style={{ width: "70%", fontSize: "20px", marginRight: "20px" }}>{t("connect")}</div></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <div className="p-3 border bg-light" style={{ borderRadius: "20px" }}>
                                        <div className="advantages-item " style={{ height: "100px" }}><div ><img src={payment} style={{ height: "40px", width: "auto", marginRight: "10px" }} /></div><div style={{ width: "70%", fontSize: "20px", marginRight: "20px" }}>{t("payment")}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="about-bg mt-5">
                <div className="container">
                    <div style={{ display: "flex", justifyContent: "right" }}> <h1 className="about">{t('about')}</h1>
                        <h1 className="about" style={{ color: "red" }}>?</h1></div>

                    <div className="about-content">

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="about-text mb-3">
                                    <p style={{ margin: 0, fontSize: "21px" }}>{t("about_text")}</p>
                                    <button style={{
                                        borderRadius: "0.5em", borderStyle: "none", background: "#2F439B",
                                        fontFamily: "RAG-Sans 1.0", fontWeight: "bold", fontSize: "24px", letterSpacing: "0.75px",
                                        color: "#FFFFFF", padding: "5px 10px", marginTop: "1rem"
                                    }}>{t('read_more')}</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="about-images">




                                    <div className="row mt-2">
                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div style={{ textAlign: "center" }}> <img src={mariano} /><div className="about-name">
                                                {t('mariano')}</div><div className="about-title">{t('mariano_title')}</div></div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div style={{ textAlign: "center" }}><img src={yaron} /><div className="about-name">
                                                {t('yaron')}</div><div className="about-title">{t('yaron_title')}</div></div>
                                        </div>

                                        <div className="col-lg-4 col-md-12 col-sm-12">
                                            <div style={{ textAlign: "center" }}><img src={ron} className="rounded-circle" /><div className="about-name">
                                                {t('ron')}</div><div className="about-title">{t('ron_title')}</div></div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div style={{ marginBottom: "6rem", marginTop: "10rem" }}>

                    <div className="container" >
                        <div style={{ display: "flex", justifyContent: "right", marginBottom: "1rem" }}><h2 className="partners-title">{t("partners")}</h2><h2 className="partners-title" style={{ color: "red" }}>.</h2></div>

                        {useWindowSize() <= 767 ?
                            <div >
                                <AliceCarousel
                                    autoPlay={true}
                                    mouseTracking
                                    autoPlayInterval={1000}
                                    items={items}
                                    autoPlayDirection={'ltr'}
                                    animationDuration={1000}
                                    infinite={true}
                                />


                            </div>
                            :
                            <div className="images-row">
                                {partners.map(item => (<div className="image-border"><div className="partners-image" style={{ backgroundImage: `url(${item})` }}></div></div>))}
                            </div>}
                    </div>
                </div>

                <div className="career-bg" >
                    <div className="container" >

                        <div className="career-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className="text-container" style={{ width: "100%" }}>
                                        <div style={{ display: "flex", justifyContent: "right", lineHeight: 0, marginBottom: "1rem" }} >
                                            <h2 className="career-title">{t("career")}</h2><h2 className="career-title"
                                                style={{ color: 'red' }}>.</h2></div>

                                        <div className="text-wrapper" >
                                            <div className="career-text"><p style={{ margin: 0 }}>{t("career_text1")}</p></div>
                                            <div className="career-text"><p style={{ margin: 0 }}>{t("career_text2")}</p></div>
                                            <div className="career-text"><p style={{ margin: 0 }}>{t("career_text3")}</p></div>

                                            <div className="career-slogan"><p>{t("career_text4")}</p></div>

                                            <button style={{
                                                borderRadius: "0.5em", borderStyle: "none",
                                                background: "#2F439B", fontFamily: "RAG-Sans1.0-Regular", fontWeight: "bold",
                                                fontSize: "0.9em", letterSpacing: "0.75px", color: "#FFFFFF",
                                                padding: "0.8rem 2.5rem 0.8rem 2.5rem", marginTop: "1rem"
                                            }}>{t("all_positions")}</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">

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
