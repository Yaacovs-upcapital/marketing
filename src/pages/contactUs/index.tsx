import React, { useState } from 'react'
import './contactUs.css'
import { useTranslation } from 'react-i18next';

import { Envelope, Telephone, Waze } from '../../assets/icons';
import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
import useWindowSize from '../../components/windowSize';
const ContactUs = () => {
  const { t } = useTranslation()

  const [vendorInput, setVendorInput] = useState({ fname: '', lname: '', email: '', company: '', message: '' })
  const handleFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    // const inputName = event.target.name
    // const inputValue = event.target.value.trim().toLowerCase()
    // validate(inputName, inputValue)

    setVendorInput({ ...vendorInput, [event.target.name]: event.target.value });

  }

  const sendMail = async (event) => {
    event.preventDefault();
const msg=emailTemplate(vendorInput)
    const reqop = {
      method: 'POST',
      body: JSON.stringify({
        message2: msg,
        subject: 'Vendor Info',
        email: "yaacovs@upcapital.io"
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log(reqop.body);

    // await fetch("http://localhost:3500/api/mailer", reqop)
    await fetch("https://app.upcapital.io/node//mailer", reqop)
      .then(res => console.log(res))
  }


  let emailTemplate =(obj:any)=>{
   return `<div>
      <div style="display:flex; justify-content:right;"> שם מלא</div><div>${obj.fname} ${obj.lname}</div>
      <div style="display:flex;justify-content:right;">דוא"ל</div><div>${obj.email}</div>
      <div style="display:flex; justify-content:right;">חברה</div><div>${obj.company}</div>
      <div style="display:flex; justify-content:right;">הודעה</div><div>${obj.message}</div>
    </div>`
}
// emailTemplate(vendorInput)
  return (
    <div>
      <div className='contact-page-bg '>
        <div className={`${useWindowSize() > 1550 ? 'container-contact' : 'container'}`}>
          <div><p className="contact-page-title" >{t("contact")}<span style={{ color: 'red' }}>.</span></p></div>

          <div style={{}} className="contact-page">
            <div ><div>
              <p className="contact-title">{t("contact_form")}:</p>
            </div>
              <div>
                <form onSubmit={sendMail} style={{}}>
                  <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} value={vendorInput.fname} onChange={handleFormChange} required /><div className="input-line"></div></div>
                  <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t('phone')} value={vendorInput.lname} onChange={handleFormChange} required /><div className="input-line"></div></div>

                  <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} value={vendorInput.email} onChange={handleFormChange} required /><div className="input-line"></div></div>
                  <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} value={vendorInput.company} onChange={handleFormChange} /><div className="input-line"></div></div>

                  <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} value={vendorInput.message} onChange={handleFormChange} /><div className="input-line"></div></div>
                  <div><input type="submit" value={"שליחה"} /></div>
                </form>
              </div></div>
            <div className="info" >
              <div className='info-details'>
                <h2 className="contact-title" >{t("contact_info")}</h2>
                <div style={{ textAlign: "right" }}><Envelope style={{ height: "30px", width: "30px" }} />info@upcapital.io </div>
                <div style={{ textAlign: "right" }}><Telephone style={{ height: "30px", width: "30px" }} /> 073-7801153</div>
                <div style={{ textAlign: "right" }}><Waze style={{ height: "30px", width: "30px" }} /> {t("address_text")}</div>
              </div>
              <div>
                <div className="contact-title" style={{ paddingRight: "0" }}>{t("additional_info")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("terms")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("policy")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("accessibility")}</div>
                <div>
                  <div >

                    <img style={{ width: "110px", height: "auto" }} src={dunBradstreet} />
                    <img style={{ width: "112px", height: "auto" }} src={iso} />



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="row contact-footer">
        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div>{t("rights")}</div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div><img src={egg} width="20%" height="20%" /></div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs