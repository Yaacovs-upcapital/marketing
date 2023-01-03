import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
import tele from "../../assets/images/TelePhone.png";
import env from "../../assets/images/env.png";
import addr from "../../assets/images/addr.png";
import { useTranslation } from "react-i18next";
import { i18n } from "../../translations/i18n";
import useWindowSize from "../windowSize";
import "./footer.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation()

  const [vendorInput, setVendorInput] = useState({ fname: '', phone: '', email: '', company: '', message: '' })
  const handleFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    const inputName = event.target.name
    const inputValue = event.target.value.trim().toLowerCase()
    validate(inputName, inputValue)

    setVendorInput({ ...vendorInput, [event.target.name]: event.target.value });

  }

  const sendMail = async (event) => {
    event.preventDefault();
    const msg = emailTemplate(vendorInput)
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
  const [errors, setErrors] = useState({ fname: '', phone: '', email: '', company: '' })

  const validate = (inputName, inputValue) => {
    if (inputName == 'email') {
      if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(inputValue)) {
        setErrors({ ...errors, email: t("error_email") })
      } else {
        setErrors({ ...errors, email: '' })
      }
    } else if (inputName == 'phone') {
      if (inputValue.length != 10 || !/^[0-9]+$/.test(inputValue)) {

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
    } else if (inputName == 'company') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, company: t("error_company") })

      } else {
        setErrors({ ...errors, company: '' })
      }
    }
  }
  let emailTemplate = (obj: any) => {
    return `<div>
    <div style="display:flex;justify-content:right;"> שם מלא - ${obj.fname} ${obj.lname}div>
    < div style="display:flex;justify-content:right;">דוא"ל - ${obj.email}div>
    < div style="display:flex;justify-content:right;">דוא"ל - ${obj.phone}div>
    < div style="display:flex; justify-content:right;">חברה - ${obj.company}div>
    < div style="display:flex; justify-content:right;">הודעה - ${obj.message}div>
    </div>`
  }
  return (
    <div >
      <div className="contact" id="contact">

        <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`} style={{ display: "flex", justifyContent: "right" }}>
          <p className="form-title" style={{ fontSize: "35pt", paddingRight: "12px" }}>{t("contact")}</p>
          <p className="form-title" style={{ color: "red", fontSize: "35pt" }}>.</p>
        </div>
        <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'} row`} style={{ margin: "auto" }}>
          <div className="col-lg-4 col-md-12 col-sm-12  mt-3 mb-3" style={{ display: useWindowSize() > 700 ? "" : "8rem" }}>
            <div >

              <p className="second-title">{t("contact_form")}:</p>
            </div>

            <div style={{ width: "100%", marginLeft: "1rem" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "2rem 2rem 6rem 2rem" }}>

              <form onSubmit={sendMail} style={{}}>
                  <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} value={vendorInput.fname} onChange={handleFormChange} required /></div>
                  <div style={{ color: 'red', fontSize:"0.7rem" }}>{errors.fname}</div>

                  <div className="text-input"><input type="text" id="phone" name="phone" placeholder={t('phone')} value={vendorInput.phone} onChange={handleFormChange} required /></div>
                  <div  style={{ color: 'red', fontSize:"0.7rem" }}>{errors.phone}</div>

                  <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} value={vendorInput.email} onChange={handleFormChange} required /></div>
                  <div style={{ color: 'red', fontSize:"0.7rem" }}>{errors.email}</div>

                  <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} value={vendorInput.company} onChange={handleFormChange} /></div>
                  <div style={{ color: 'red', fontSize:"0.7rem" }}>{errors.company}</div>

                  <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} value={vendorInput.message} onChange={handleFormChange} /></div>
                  <div><input type="submit" value={"שליחה"} /></div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12  mt-3 mb-3">
            <div className="vl" >

              <div style={{ textAlign: "right" }}>
                <h2 className="form-title mb-4" >{t("contact_info")}</h2>
                <div className="detail-wrap" >
                  {/* <div className="detail-name">{t("email")}</div> */}
                  <div className="contact-detail"><img src={env} style={{ height: "30px", width: "30px" }} />info@upcapital.io </div>
                </div>
                <div className="detail-wrap">
                  {/* <div className="detail-name">{t("phone")}</div> */}
                  <div className="contact-detail"><img src={tele} style={{ height: "30px", width: "30px" }} /> 073-7801153</div>
                </div>
                <div className="detail-wrap">
                  {/* <div className="detail-name">{t("address")}</div> */}
                  <div className="contact-detail"><img src={addr} style={{ height: "30px", width: "30px" }} />< a style={{ textDecoration: "none", color: "#fff" }} href="https://www.google.com/maps/place/Ha-Rakun+St+2,+Hod+HaSharon/@32.1333401,34.8992777,17z/data=!3m1!4b1!4m5!3m4!1s0x151d37a203e81299:0x7719e5e2c71c2b78!8m2!3d32.1333401!4d34.9014664" target="blank">{t("address_text")}</a> </div>
                </div>




              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 mt-3 mb-3">
            <div style={{ color: "white" }}>
              <div className="form-title" style={{ paddingRight: "0" }}>{t("additional_info")}</div>
              <div className="contact-detail" style={{ paddingRight: "0" }}><NavLink style={{ textDecoration: "none", color: "#fff" }} to={"/terms-of-use/"} >{t("terms")}</NavLink></div>
              <div className="contact-detail" style={{ paddingRight: "0" }}><NavLink style={{ textDecoration: "none", color: "#fff" }} to={"/privacy-policy/"} >{t("policy")}</NavLink></div>
              <div className="contact-detail" style={{ paddingRight: "0" }}>{t("accessibility")}</div>
              <div>
                <div className="mt-4" style={{ display: "flex", alignItems: "center" }}>

                  <a href="https://www.dnb.com/" target="blank"> <img style={{ width: "110px", height: "auto", margin: "10px" }} src={dunBradstreet} /></a>
                  <a href="https://www.iso.org/isoiec-27001-information-security.html" target="blank"><img style={{ width: "116px", height: "auto", margin: "10px" }} src={iso} /></a>



                </div>

              </div>
            </div>
          </div>


        </div>



        <div className="contact-parent" >




        </div>

      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div>{t("rights")}</div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div><img src={egg} width="20%" height="20%" /></div>
        </div>



      </div>
    </div>
  );
};

export default Footer;