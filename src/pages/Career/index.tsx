import React from 'react'
import interview from "../../assets/images/interview.webp"
import smiling from "../../assets/images/smiling.webp"
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import './career.css'
import MediaControlCard from '../../components/card';

const Career = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="career-page-bg" >

                <div className="career-content container" style={{ marginTop: "3rem" }}>
                    <div className="text-container" style={{ width: "100%" }}>
                        <div style={{ display: "flex", lineHeight: 0, marginBottom: "1rem" }} >
                            <h1 className="career-big-title">{t("career")}
                                <span
                                    style={{ color: 'red' }}>.</span></h1>
                        </div>

                        <div className="text-wrapper" >
                            <div className="career-text"><p style={{ marginBottom: "1rem" }}>{t("career_text1")}</p></div>
                            <div className="career-text"><p style={{ marginBottom: "1rem" }}>{t("career_text2")}</p></div>
                            <div className="career-text"><p style={{ marginBottom: "1rem" }}>{t("career_text3")}</p></div>

                            <div className="career-slogan"><p>{t("career_text4")}</p></div>


                        </div>
                    </div>

                    <div className="career-photos">
                        <img className="large-photo" src={interview} />
                        <img className="small-photo" src={smiling} />
                    </div >
                </div>

                <div className="offers container" >
                    <div className="job-title-wrap">
                        <h3 className="job-title">{t('latest_jobs')}<span style={{ color: "red" }}>.</span></h3>
                    </div>
                    <div className="job-offers">
                        <MediaControlCard path="/job-offer/:102/">
                            <div className="job-card-title">{t('customer_service')}</div>
                            <div className="job-card-text">{t('cs_description')}</div>
                            <div className="job-details-wrap">
                                <div className="job-details">{t('position_no')}: 102</div>
                                <div className="job-details">{t('location')}: {t('telaviv')}</div>
                                <div className="job-details">{t('position_type')}: {t('fulltime')}</div>
                                <div className="job-details">{t('deadline')}: 01/03/2023</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard path="/job-offer/:201/">
                            <div className="job-card-title">{t('clerk')}</div>
                            <div className="job-card-text">{t("clerk_description")}</div>
                            <div className="job-details-wrap">
                                <div className="job-details">{t('position_no')}: 201</div>
                                <div className="job-details">{t('location')}: {t('telaviv')}</div>
                                <div className="job-details">{t('position_type')}: {t('fulltime')}</div>
                                <div className="job-details">{t('deadline')}: 01/03/2023</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard path="/job-offer/:301/">
                            <div className="job-card-title">{t('digital_manager')}</div>
                            <div className="job-card-text">{t('digital_description')}</div>
                            <div className="job-details-wrap">
                                <div className="job-details">{t('position_no')}: 301</div>
                                <div className="job-details">{t('location')}: {t('telaviv')}</div>
                                <div className="job-details">{t('position_type')}: {t('fulltime')}</div>
                                <div className="job-details">{t('deadline')}: 01/03/2023</div>
                            </div>
                        </MediaControlCard>


                    </div>

                </div>
            </div >
        </div>
    )
}

export default Career