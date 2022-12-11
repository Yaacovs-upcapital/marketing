import "./jobOffer.css"
import { jobOffers } from "../../data/jobOffer"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useWindowSize from "../../components/windowSize";

const JobOffer = () => {

    const jobParams = useParams();
    console.log(">>>>>", jobParams.id);
    const jobIndex = jobOffers.findIndex(
        ({ jobId }) => jobParams.id === `:${jobId}`
    )
    return (
        <div style={{ direction: "rtl" }}>
            <div className="bg-img">
                <h2 className="single-aricle-title" style={{fontSize:useWindowSize()<=768?"1.3em":""}}>
                    {jobOffers[jobIndex].jobTitle}
                </h2>
            </div>
            <div className='job-container'>
                <div className='details-wrap'>
                    <div className='details'> מספר משרה: {jobOffers[jobIndex].jobId}</div>
                    <div className='details'>מיקום: {jobOffers[jobIndex].location}</div>
                    <div className='details'>סוג משרה: {jobOffers[jobIndex].jobType}</div>
                    <div className='details'>תאריך אחרון להגשה: {jobOffers[jobIndex].deadline}</div>
                </div>
                <div className='job-desc-wrap'>
                    <h3 className='desc-title'>תיאור תפקיד</h3>
                    {jobOffers[jobIndex].jobDesc.length &&
                        jobOffers[jobIndex].jobDesc.map((item, i) => (
                            <div key={i}>{item}</div>))}
                </div>
                <div className='job-qualification'>
                    <h3 className='desc-title'>דרישות התפקיד</h3>
                    <ul>
                        {
                            jobOffers[jobIndex].jobQf.length &&
                            jobOffers[jobIndex].jobQf.map((item, i) => (
                                <li key={i} >
                                    {item}
                                </li>
                            ))}

                    </ul>
                </div>
            </div>
            <div className='job-app'>
                <h3 className='job-app-title'>טופס הגשת מועמדות</h3>
                <div className='job-form'>
                    <form style={{ direction: "rtl", color: "blue" }}>
                        <div className="detail-input"><input type="text" id="fname" name="fname" placeholder="שם מלא" required /></div>
                        <div className="detail-input"><input type="text" id="phone" name="phone" placeholder="טלפון" required /></div>
                        <div className="detail-input"><input type="email" id="email" name="email" placeholder='דוא"ל' required /></div>
                        <div className="detail-input"><div className='upload' ><div className='upload-title'>העלאת קורות חיים</div><input  type="file" id="myFile" name="filename" required /></div></div>
                        <div className="detail-input"><textarea name="textarea" id="" placeholder="הערות נוספות"></textarea></div>
                        <input type="submit" value={"שליחה"} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobOffer


