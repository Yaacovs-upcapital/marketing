import "./jobOffer.css"
import { jobOffers } from "../../data/jobOffer"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowSize from "../../components/windowSize";
import { useTranslation } from "react-i18next";

const JobOffer = () => {
    const { t } = useTranslation();
    const [directionValue, setDirectionValue] = useState('')
    setTimeout(() => {
        const obj: any = document.getElementById('page')
        const valueAfterTimeout = getComputedStyle(obj, null).direction
        setDirectionValue(valueAfterTimeout)
    }, 100);
    const jobParams = useParams();
    console.log(">>>>>", jobParams.id);
    const jobIndex = jobOffers.findIndex(
        ({ jobId }) => jobParams.id === `:${jobId}`
    )

    const [candidateInput, setCandidateInput] = useState({ fname: '', phone: '', email: '', textarea: '' })
    const handleFormChange = (event) => {
        event.preventDefault()
        console.log("value changed: ", event.target.value)
        const inputName = event.target.name
        const inputValue = event.target.value.trim().toLowerCase()
        validate(inputName, inputValue)

        setCandidateInput({ ...candidateInput, [event.target.name]: event.target.value });

    }

    const [errors, setErrors] = useState({ fname: '', phone: '', email: '' })

    const validate = (inputName, inputValue) => {
        if (inputName == 'email') {
            if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(inputValue)) {
                setErrors({ ...errors, email: t("error_email") })
            } else {
                setErrors({ ...errors, email: '' })
            }
        } else if (inputName == 'phone') {
            if (!/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|([71,72,73,74,75,76,77]{2}\d{7})|[5]{1}\d{8})$/.test(inputValue)) {
                setErrors({ ...errors, phone: t("error_phone") })

            } else {
                setErrors({ ...errors, phone: '' })
            }
        } else if (inputName == 'fname') {
            if (inputValue.length == 0) {
                setErrors({ ...errors, fname: t("error_name") })
            } else {
                setErrors({ ...errors, fname: '' })
            }
        }
    }
    let emailTemplate = (obj: any) => {
        return `<div>
        <div> name- ${obj.fname}<div>
        <div>email- ${obj.phone}<div>
        <div>email- ${obj.email}<div>
        <div>message - ${obj.textarea}<div>
        </div>`
    }
    //
    const sendMail = async (event) => {
        event.preventDefault();
        console.log("file", setFileContent)
        const msg = emailTemplate(candidateInput)
        const reqop = {
            method: 'POST',
            body: JSON.stringify({
                message2: msg,
                subject: 'Vendor Info',
                email: "yaacovs@upcapital.io",
                // email: "mariano@upcapital.io",
                fileName: fileName,
                content: fileContent
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(reqop.body);


        // await fetch("http://localhost:3500/api/mailer", reqop)
        await fetch("https://app.upcapital.io/node//mailer", reqop)
            .then(res => {
                console.log(res) ;
                const submitBtn=document.getElementById('submit');
                res.status==200?submitBtn?.setAttribute('disabled',"true"):console.log('not clicked')
            })
    }
    const [fileContent, setFileContent]: any = useState('')
    const [fileName, setFileName]: any = useState('')
    const handleFiles = (e) => {
        e.preventDefault();

        const uploadedFile = e.target.files[0];
        setFileName(uploadedFile.name)
        const reader = new FileReader()
        reader.readAsDataURL(uploadedFile)
        reader.onload = () => {
            const result = reader.result?.toString().split(',')[1]
            setFileContent(result)
        }

    }
    console.log(fileContent);

    document.getElementById('myFile')?.addEventListener('change', handleFiles, false)

    return (
        <div id="page">
            <div className="">
                <h2 className="single-aricle-title" style={{ fontSize: useWindowSize() <= 768 ? "1.3em" : "" }}>
                    {directionValue == 'ltr' ? jobOffers[jobIndex].jobTitle_en : jobOffers[jobIndex].jobTitle}
                </h2>
            </div>
            <div className='job-container'>
                <div className='details-wrap'>
                    <div className='details'>{t('position_no')}: {jobOffers[jobIndex].jobId}</div>
                    <div className='details'>{t('location')}: {t('telaviv')}</div>
                    <div className='details'>{t('position_type')}: {t('fulltime')}</div>
                    <div className='details'>{t('deadline')}: 01/03/2023</div>
                </div>
                <div className='job-desc-wrap'>
                    <h3 className='desc-title'>{t('job_description')}</h3>
                    {(jobOffers[jobIndex].jobDesc).length &&
                        (directionValue == 'ltr' ? jobOffers[jobIndex].jobDesc_en : jobOffers[jobIndex].jobDesc).map((item, i) => (
                            <div key={i}>{item}</div>))}
                </div>
                <div className='job-qualification'>
                    <h3 className='desc-title'>{t('job_requirement')}</h3>
                    <ul>
                        {
                            jobOffers[jobIndex].jobQf.length &&
                            (directionValue == 'ltr' ? jobOffers[jobIndex].jobQf_en : jobOffers[jobIndex].jobQf).map((item, i) => (
                                <li style={{ fontFamily: "RAG-Sans1.0-Regular" }} key={i} >
                                    {item}
                                </li>
                            ))}

                    </ul>
                </div>
            </div>
            <div className='job-app'>
                <h3 className='job-app-title'>{t('application_form')}</h3>
                <div className='job-form'>
                    <form onSubmit={sendMail} style={{ color: "blue" }}>
                        <div className="detail-input"><input type="text" id="fname" name="fname" value={candidateInput.fname} onChange={handleFormChange} placeholder={t('full_name')} required /></div>
                        <div style={{ color: 'red', fontSize: "0.7rem" }}>{!candidateInput.fname ? '' : errors.fname}</div>
                        <div className="detail-input"><input type="text" id="phone" name="phone" value={candidateInput.phone} onChange={handleFormChange} placeholder={t('phone')} required /></div>

                        <div style={{ color: 'red', fontSize: "0.7rem" }}>{!candidateInput.phone ? '' : errors.phone}</div>
                        <div className="detail-input"><input type="email" id="email" name="email" value={candidateInput.email} onChange={handleFormChange} placeholder={t('email')} required /></div>
                        <div style={{ color: 'red', fontSize: "0.7rem" }}>{!candidateInput.email ? '' : errors.email}</div>

                        <div className="detail-input"><div className='upload' ><div className='upload-title'>{t('upload_resume')}</div><input type="file" id="myFile" name="filename" accept=".doc, .docx,.pdf" required /></div></div>
                        {/* <div style={{ color: 'red', fontSize:"0.7rem" }}>{!candidateInput.fname?'':errors.fname}</div> */}

                        <div className="detail-input"><textarea name="textarea" id="textarea" value={candidateInput.textarea} onChange={handleFormChange} placeholder={t('comments')}></textarea></div>
                        <input  type="submit" id="submit" value={t('send')} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobOffer


