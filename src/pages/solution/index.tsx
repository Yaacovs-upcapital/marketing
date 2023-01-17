import './solution.css'
import solutionleft from '../../assets/images/solution.png'
import solutionRight from '../../assets/images/SolutionRight.png'
import { useTranslation } from 'react-i18next'
import useWindowSize from '../../components/windowSize'
// import useWindowSize from '../../components/windowSize'
import cashflow from '../../assets/images/cash-flow.png'
import interest from '../../assets/images/interest.png'
import bureaucracy from '../../assets/images/bureaucracy.png'
import noFunds from '../../assets/images/no-funds.png'
import payment from '../../assets/images/payment.png'
import noBc from '../../assets/images/no-bc.png'
import certain from '../../assets/images/certain.png'
import lowCost from '../../assets/images/low-cost.png'

const Solution = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className='sol-up'>
                <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} mt-5 mb-5`} >
                    <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} mt-3`}style={{ padding: 0, marginBottom: "1rem" }}>
                        <h1 style={{ color: "#2f439a", fontSize: "40pt"}}>{t('challenges')}<span style={{ color: "red" }}>.</span></h1>
                    </div>
                    <div className="row">

                        <div className="col-lg-8 col-md-12 col-sm-12 solution-text" style={{ paddingLeft: "10px", fontWeight: "600" }}>

                            <div>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
{t('solution_p1')}                                </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)", fontWeight: "bold" }}>
                                {t('solution_p2')}                                 </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                                {t('solution_p3')}                                 </p>
                                <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                                {t('solution_p4')}         </p>                    </div>
                            <div style={{ display: useWindowSize() > 767 ? "flex" : 'none', justifyContent: "space-between", marginTop: "2rem" }}>
                                <div style={{ textAlign: "center" }}><img src={cashflow} width="47px" height="60px" /><p style={{ marginTop: "1rem", color: "#2f439a", fontWeight: "bold" }}>{t('flow_diff')}</p></div>
                                <div style={{ textAlign: "center" }}><img src={interest} width="59px" height="60px" /><p style={{ marginTop: "1rem", color: "#2f439a", fontWeight: "bold" }}>{t('high_interest')}</p></div>
                                <div style={{ textAlign: "center" }}><img src={bureaucracy} width="58px" height="59px" /><p style={{ marginTop: "1rem", color: "#2f439a", fontWeight: "bold" }}>{t('complex')}</p></div>
                                <div style={{ textAlign: "center" }}><img src={noFunds} width="49px" height="60px" /><p style={{ marginTop: "1rem", color: "#2f439a", fontWeight: "bold" }}>{t('difficult')}</p></div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <img className="img3-fluid" src={solutionleft} alt="..." />
                        </div>
                        <div className="mt-3"><h1 style={{ color: "red", fontWeight: "bold", fontSize: useWindowSize() > 500 ? "24pt" : "18pt", textAlign: "center", width: useWindowSize() > 500 ? "55vw" : '', margin: "4rem auto auto auto" }}>{t('solustion_red_text')}</h1></div>
                    </div>
                </div>
            </div>

            <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} mt-5 mb-5`}>
                <div className='row how'>
                    <div className='col-lg-8 col-md-12 col-sm-12' style={{ paddingLeft: "10px", fontWeight: "600", marginBottom: "1rem" }}>
                        <div className="mt-3 mb-2" style={{ marginBottom: "1rem !important" }}><h1 style={{ color: "#2f439a", fontSize: "40pt" }}>{t('solution_second_title')}<span style={{ color: "red" }}>?</span></h1></div>

                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                        {t('solution_p5')}            
                        </p>
                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                        {t('solution_p6')}            
                        </p>
                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                        {t('solution_p7')}            
                        </p>
                        <p style={{ textAlign: "justify", fontFamily: "RAG-Sans1.0-Regular", fontSize: "16pt", color: "rgb(47,67,155)" }}>
                        {t('solution_p8')}            
                            </p>
                        <div className='sol-grid'>
                            <div className='how-grid' ><div><img src={payment} width="60px" height="58px" /></div><div style={{ color: "#2f439a" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{t('recieve')}</p><p style={{ color: "#2f439a" }}>{t('recieve_text')}</p></div></div>
                            <div className='how-grid' ><div><img src={noBc} width="60px" height="57px" /></div><div style={{ color: "#2f439a" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{t('no_bc')}</p><p style={{ color: "#2f439a", }}>{t('no_bc_text')}</p></div></div>

                            <div className='how-grid'><div><img src={certain} width="53px" height="58px" /></div><div style={{ color: "#2f439a" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{t('flow_certain')}</p><p style={{ color: "#2f439a" }}>{t('flow_certain_text')}</p></div></div>
                            <div className='how-grid' ><div><img src={lowCost} width="59px" height="55px" /></div><div style={{ color: "#2f439a" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{t('low_cost')}</p><p style={{ color: "#2f439a" }}>{t('low_cost_text')}</p></div></div>

                        </div>
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